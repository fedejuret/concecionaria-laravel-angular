<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    protected $table = "cars";

    public function category(){
		return $this->belongsTo('App\Category', 'category_id');
	}
}
