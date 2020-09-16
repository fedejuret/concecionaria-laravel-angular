import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  	public url: string;

	constructor(

		private _http: HttpClient
	){

		this.url = 'http://45.233.140.208/desarrollo_ceo/back/public';
	}

	getCategories(): Observable<any>{
		return this._http.get(this.url + '/categories');
	}

	getCategory(id){
		return this._http.get(this.url + '/category/'+id);
	}
}
