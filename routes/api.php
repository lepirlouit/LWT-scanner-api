<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ScanningController;

// Route:middleware
Route::get('members/{niss}', [MemberController::class, 'getMember']);
Route::post('scannings', [ScanningController::class, 'store']);
Route::get('scannings/{id}', [ScanningController::class, 'getScanning']);
