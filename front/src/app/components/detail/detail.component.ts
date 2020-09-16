import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CarsService } from '../../services/cars.service';
import { Cars } from '../../models/cars';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [CarsService]
})
export class DetailComponent implements OnInit {
  
	public car: Cars[];
  constructor(
  	private _router: Router,
  	private _route: ActivatedRoute,
  	private _carsService: CarsService
  ) {}

  ngOnInit(): void {
  	this.loadCar();
  }

  loadCar(){
  	this._route.params.subscribe(params =>{
  		let carId = params['id'];
  		this._carsService.getCar(carId).subscribe(
  			response =>{
  				if(response.status == 'success'){
  					this.car = response.car;
  					console.log(this.car);
  				}
  			},
  			error => {
  				console.log(error);
  			}
  		);
  	});
  }

}
