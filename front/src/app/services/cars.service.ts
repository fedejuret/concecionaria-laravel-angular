import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CarsService {

  	public url: string;

	constructor(

		private _http: HttpClient
	){

		this.url = 'http://45.233.140.208/desarrollo_ceo/back/public';
	}

	getCars(): Observable<any>{
		return this._http.get(this.url + '/cars');
	}

	getCar(id): Observable<any>{
		return this._http.get(this.url + '/car/'+id);
	}

	getCarsByCategory(categoryId): Observable<any>{
		return this._http.get(this.url + '/cars/'+categoryId);
	} 

	getSortedCars(categoryId, sortId): Observable<any>{
		return this._http.get(this.url + '/cars-sorted/'+categoryId+'/'+sortId);
	}
}
