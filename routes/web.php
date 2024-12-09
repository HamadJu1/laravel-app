```php
<?php

use Illuminate\Support\Facades\Route;

// Homepage Route
Route::get('/', function () {
    return view('welcome');
});

// Authentication Routes
Auth::routes();

// Dashboard Route
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// User Profile Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [App\Http\Controllers\ProfileController::class, 'show'])->name('profile.show');
    Route::put('/profile', [App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
});

// Admin Routes
Route::prefix('admin')->middleware(['auth', 'admin'])->group(function () {
    Route::get('/', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.dashboard');
    Route::resource('users', App\Http\Controllers\Admin\UserController::class);
});

// API Routes
Route::prefix('api')->middleware('auth:api')->group(function () {
    Route::get('/data', [App\Http\Controllers\Api\DataController::class, 'index'])->name('api.data.index');
});

// Fallback Route
Route::fallback(function () {
    return response()->view('errors.404', [], 404);
});
```