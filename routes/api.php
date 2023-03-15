<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DapodikController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('sekolah', [DapodikController::class, 'index']);
Route::get('pd', [DapodikController::class, 'pd']);
Route::get('kelayakan', [DapodikController::class, 'kelayakan']);
Route::post('kelayakan', [DapodikController::class, 'layak']);
Route::post('periodik', [DapodikController::class, 'periodik']);
