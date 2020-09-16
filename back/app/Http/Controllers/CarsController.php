<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Cars;

class CarsController extends Controller{


	public function index(){
		$cars = Cars::all()->load('category');

		return response()->json([
			'code' => 200,
			'status' => 'success',
			'cars' => $cars
		], 200);
	}

	public function show($id){
		$car = Cars::find($id)->load('category');

		if(is_object($car)){

			$data = array(
				'code' => 200,
				'status' => 'success',
				'car' => $car
			);
		}else{
			$data = array(
				'code' => 404,
				'status' => 'error',
				'message' => 'No se pudo encontrar este objeto'
			);
		}

		return response()->json($data, $data['code']);

	}

	public function showById($categoryId){
		$cars = Cars::where('category_id', $categoryId)->get();
		if(is_object($cars)){

			$data = array(
				'code' => 200,
				'status' => 'success',
				'cars' => $cars
			);
		}else{
			$data = array(
				'code' => 404,
				'status' => 'error',
				'message' => 'No se pudo encontrar este objeto'
			);
		}

		return response()->json($data, $data['code']);
	}

	public function getImage($fileName){
		$isset = \Storage::disk('img')->exists($fileName);

		if($isset){
			$file = \Storage::disk('img')->get($fileName);

			return new Response($file, 200);
		}else{
			$data = array(
				'code' => 404,
				'status' => 'error',
				'message' => 'La imagen no existe'
			);
		}

		return response()->json($data, $data['code']);

		
	}

	public function sortBy($categoryId, $sortId){

		$sortValue = '';
		$sortType = '';
		$sort_settings = '';
		if($sortId == '1'){

			// PRECIO DE MAYOR A MENOR
			$sortValue = 'price';
			$sortType = 'DESC'; // ascendente 

			$sort_settings = 'price DESC';
		}else if($sortId == '2'){
			// PRECIO DE MENOR A MAYOR
			$sortValue = 'price';
			$sortType = 'ASC'; // descendente

			$sort_settings = 'price ASC';
		}else if($sortId == '3'){

			// DE MAS NUEVO A MAS VIEJO
			$sortValue = 'id';
			$sortType = 'DESC';

			$sort_settings = 'id DESC';
		}else if($sortId == '4'){

			// DE MAS VIEJO A MAS NUEVO
			$sortValue = 'id';
			$sortType = 'ASC'; 

			$sort_settings = 'id ASC';
		}

		if($categoryId == '-1'){

			// if($sort_settings == 'price DESC' || $sort_settings == 'price ASC'){
			// 	$cars = \DB::select("SELECT * FROM `cars` ORDER BY CAST(price AS DECIMAL(10,2)) $sortType");
			// }

			// show all cars sorted by $sortId
			$cars = \DB::select("SELECT * FROM `cars` ORDER BY $sort_settings");

			$data = array(
				'status' => 'success',
				'code' => 200,
				'cars' => $cars
			);
		}else{
			$cars = \DB::select("SELECT * FROM `cars` WHERE `category_id`=$categoryId ORDER BY $sort_settings");
			// $cars = Cars::where('category_id', $categoryId)->oderBy($sortValue, $sortType);
			$data = array(
				'status' => 'success',
				'code' => 200,
				'cars' => $cars
			);
		}

		return response()->json($data, $data['code']);
	}

}
