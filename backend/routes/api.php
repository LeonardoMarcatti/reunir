<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PagesController;

Route::controller(AuthController::class)->group(function(){
    Route::post('/login', 'login')->name('login');
    Route::post('/logup', 'logup')->name('logup');
    Route::get('/checkUser', 'checkUser')->middleware('auth:sanctum');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
});

Route::controller(PagesController::class)->group(function(){
    Route::get('/getMeetings', 'getMeetings')->name('getMeetings')->middleware('auth:sanctum');
    Route::get('/getMeetingRooms', 'getMeetingRooms')->name('getMeetingRooms')->middleware('auth:sanctum');
    Route::post('/newMeeting', 'newMeeting')->name('newMeeting')->middleware('auth:sanctum');
});

