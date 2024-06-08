<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Members extends Model
{
    use HasFactory;
    protected $table = 'ledenlijst';
    protected $fillable = [];

    public static function findByNiss($niss){
        //get slug collection or return fail
        return Post::where('rijksregisternummer', 'like', $niss)->firstOrFail();
    }
}
