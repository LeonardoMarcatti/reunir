<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PagesController;

Route::controller(AuthController::class)->group(function(){
    Route::post('/login', 'login')->name('login');
    Route::post('/logup', 'logup')->name('logup');
    Route::middleware(['auth:sanctum'])->group(function(){
        Route::get('/checkUser', 'checkUser');
        Route::get('/logout', 'logout');
    });
});

Route::controller(PagesController::class)->group(function(){
    Route::middleware(['auth:sanctum'])->group(function(){
        Route::get('/getMeetings', 'getMeetings');
        Route::get('/getMyReserves', 'getMyReserves');
        Route::get('/getMeetingRooms', 'getMeetingRooms')->name('getMeetingRooms');
        Route::post('/newMeeting', 'newMeeting');
        Route::put('/updateMeeting', 'updateMeeting');
        Route::put('/updateRoom', 'updateRoom');
        Route::delete('/deleteRoom', 'deleteRoom');
        Route::post('/createRoom', 'createRoom');
    });
    Route::post('/getMeetingDetails', 'getMeetingDetails');
    Route::post('/getNotAvailableDates', 'getNotAvailableDates');
    Route::delete('/deleteMeeting', 'deleteMeeting')->name('delete');
});

