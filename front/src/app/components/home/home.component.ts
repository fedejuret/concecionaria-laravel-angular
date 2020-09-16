import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { CategoryService } from '../../services/category.service';

import { Cars } from '../../models/cars';
import { Categories } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [CarsService, CategoryService]
})
export class HomeComponent implements OnInit {


	public cars: Cars[];
  public categories: Categories[];
  public category_id: number;
	constructor(

		private _carsService: CarsService,
    private _categoryService: CategoryService
	){}

  ngOnInit(): void {
  	this.getAllCars();
    this.getAllCategories();
  }

  getAllCategories(){
    this._categoryService.getCategories().subscribe(
      response =>{
        if(response.status == 'success'){
          this.categories = response.categories;
          console.log(this.categories);
        }
      },

      error =>{
        console.log(error);
      }
    );
  }
  getAllCars(){
  	this._carsService.getCars().subscribe(
  		response =>{
  			if(response.status == 'success'){
  				this.cars = response.cars;
          this.category_id = -1;
  			}
  		},

  		error =>{
  			console.log(error);
  		}
  	);
  }

  getAllCarsBtn(){
    this.cars = null;
    this.getAllCars();
  }

  showOrder(){
    const element = document.getElementById('dropList');
    element.classList.toggle('show');
  }

  showByCategory(categoryId){
    this.cars = null;
    if(categoryId == -1){
      this.getAllCars();
    }else{
      this._carsService.getCarsByCategory(categoryId).subscribe(
        response =>{
          if(response.status == 'success'){
            this.cars = response.cars;
            this.category_id = categoryId;
          }else{
            this.getAllCars();
          }
        }, 
        error =>{
          console.log(error);
          this.getAllCars();
        }
      );
    }
  }

  sortCars(sortId){
    this.cars = null;
    this.showOrder();
    if(sortId == -1){
      // Reset sort
      this.showByCategory(this.category_id);
    }else{
      this._carsService.getSortedCars(this.category_id, sortId).subscribe(
        response =>{
          if(response.status == 'success'){
            this.cars = response.cars;
          }
        },
        error =>{
          console.log(error);
        }
      );
    }
  }
}
