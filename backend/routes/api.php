<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PagesController;

Route::controller(AuthController::class)->group(function(){
    Route::post('/login', 'login');
    Route::post('/logup', 'logup');
    Route::get('/checkUser', 'checkUser')->middleware('auth:sanctum');
});

Route::controller(PagesController::class)->group(function(){
    Route::get('/app', 'home')->name('home')->middleware('auth:sanctum');
});

