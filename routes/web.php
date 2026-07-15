<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FixingCustomerController;
use App\Http\Controllers\InvoicesController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/create-invoices/{id}', [InvoicesController::class, 'index'])->name('create-invoices');
    Route::resource('/customers', CustomerController::class)->only('index', 'create', 'store');
    Route::resource('/fixings', FixingCustomerController::class)->only('index', 'create', 'store');

});

Route::middleware('auth', 'admin')->group( function () {
    Route::resource('/customer', CustomerController::class);
    Route::resource('/fixing', FixingCustomerController::class);
    Route::get('/fixing/search/{query}', [FixingCustomerController::class, 'search']);
    Route::patch('/update-status/{id}', [FixingCustomerController::class, 'updateStatus'])->name('status-update');
    Route::get('/exist-customer', [CustomerController::class, 'createExist'])->name('exist-customer.create');
    Route::resource('/products', ProductController::class);
    Route::get('/laporan', [LaporanController::class, 'index'])->name('laporan.index');
    Route::get('/report-month/{month}', [LaporanController::class, 'report'])->name('report.month');
});

require __DIR__.'/auth.php';
