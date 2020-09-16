<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/cars', 'CarsController@index');
Route::get('/car/{id}', 'CarsController@show');
Route::get('/categories', 'CategoryController@index');
Route::get('/category/{id}', 'CategoryController@show');
Route::get('/cars/{categoryId}', 'CarsController@showById');
Route::get('image/{name}', 'CarsController@getImage');
Route::get('/cars-sorted/{categoryId}/{sortId}', 'CarsController@sortBy');