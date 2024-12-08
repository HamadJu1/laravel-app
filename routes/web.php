<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\WarehouseController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Login Page
Route::get('/', function () {
    return view('login'); // Ensure you have a login.blade.php in resources/views
});

// Login Form Submission
Route::post('/login', [LoginController::class, 'login'])->name('login');

// Define the route with the name 'dashboard'
Route::middleware('auth')->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');


// Profile Page
// Profile Page
Route::middleware('auth')->get('/profile', function () {
    return view('profile');
})->name('profile');

// Inventory Routes
Route::middleware('auth')->get('/inventory', [InventoryController::class, 'index'])->name('inventory');
Route::middleware('auth')->post('/inventory', [InventoryController::class, 'store'])->name('inventory.store');


// Warehouse Routes
Route::middleware('auth')->get('/warehouse', [WarehouseController::class, 'index'])->name('warehouse');
Route::middleware('auth')->post('/warehouse', [WarehouseController::class, 'store'])->name('warehouse.store');

// Logout Route
Route::post('/logout', function () {
    session()->flush(); // Or Auth::logout() if using Laravel's built-in authentication
    return redirect('/');
})->name('logout');