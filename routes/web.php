<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;

// Route:middleware
// Route::get('members/{niss}', [MemberController::class, 'getMember']);

Route::get('/', function () {
    return view('welcome');
});
