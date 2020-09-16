<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Category;

class CategoryController extends Controller
{
    
    public function index(){
    	$categories = Category::all();

    	if(is_object($categories)){
    		$data = array(
	    		'code' => 200,
	    		'status' => 'success',
	    		'categories' => $categories
	    	);
    	}else{
    		$data = array(
	    		'code' => 200,
	    		'status' => 'error',
	    		'message' => 'No hay categorias para mostrar'
	    	);
    	}
    	return response()->json($data, $data['code']);
    }

    public function show($id){
    	$category = Category::find($id)->load('cars');

    	if(is_object($category)){
    		$data = array(
    			'code' => 200,
    			'status' => 'success',
    			'category' => $category
    		);
    	}else{
    		$data = array(
    			'code' => 200,
    			'status' => 'error'
    		);
    	}
    	return response()->json($data, $data['code']);

    }
}

