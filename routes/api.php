<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\DemoRequestController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\NotificationSubscriptionController;

Route::post('/notifications/subscribe', [NotificationSubscriptionController::class, 'store']);

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

// Public routes
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Download errors file (admin only)
Route::get('errors/download', function () {
    $file = storage_path('logs/laravel.log');
    return response()->download($file, 'errors.txt');
})->middleware(['auth:sanctum', 'role:admin']);
Route::get('/test', function () {
    return response()->json(['message' => 'API works!']);
});

// Protected routes (authenticated users only)
Route::middleware('auth:sanctum')->group(function () {
    // Logout route
    Route::post('logout', [AuthController::class, 'logout']);

    // Profile route
    Route::get('profile', function () {
        return response()->json(auth()->user());
    });

    // Routes for Posts (CRUD)
    Route::apiResource('posts', PostController::class);

    // Routes for Categories (CRUD)
    Route::apiResource('categories', CategoryController::class);

    // Admin-only routes
    Route::middleware('role:admin')->group(function () {
        // Users management
        Route::apiResource('users', UsersController::class);
        Route::get('/admin', function () {
            return response()->json(['message' => 'Admin panel']);
        });

        // Demo requests management
        Route::get('demo-requests', [DemoRequestController::class, 'index']);
        Route::put('demo-requests/{id}', [DemoRequestController::class, 'update']);

        // Document management
        Route::post('documents', [DocumentController::class, 'store']);
        Route::delete('documents/{id}', [DocumentController::class, 'destroy']);
    });

    // User-accessible routes
    Route::post('demo-requests', [DemoRequestController::class, 'store']); // Submit a demo request
    Route::get('documents', [DocumentController::class, 'index']); // List documents
});
