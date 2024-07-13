<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scanning extends Model
{
    use HasFactory;
    protected $table = 'scannings';

    public static function findById($id){
        //get slug collection or return fail
        return Scanning::where('id', '=', $id)->firstOrFail();
    }
}
