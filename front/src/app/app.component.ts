import { Component , OnInit, DoCheck} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'front';

  public model_active: boolean;
  public ficha_active: boolean;

  constructor(
  	private _router: Router,
  	private _route: ActivatedRoute
  ) {

  	this.model_active = false;
  	this.ficha_active = false;
  }

  openSidebar(){
  	const element = document.getElementById('sidebar');
    element.classList.toggle('active');
  }

  ngDoCheck(): void{
  	if(window.location.href.includes('car')){
  		this.ficha_active = true;
  		this.model_active = false;
  	}else{
  		this.ficha_active = false;
  		this.model_active = true;
  	}
  }
  ngOnInit(): void {
  	if(window.location.href.includes('car')){
  		this.ficha_active = true;
  		this.model_active = false;
  	}else{
  		this.ficha_active = false;
  		this.model_active = true;
  	}
  }
}
