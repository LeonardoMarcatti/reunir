<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PagesController;

Route::controller(AuthController::class)->group(function(){
    Route::post('/login', 'login')->name('login');
    Route::get('/logup', 'logup')->name('logup');
});


Route::controller(PagesController::class)->group(function(){
    Route::get('/app', 'home')->name('home')->middleware('auth:sanctum');
});

