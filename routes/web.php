<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\LogController;

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
    //return view('welcome');
    return view('auth/login');
});
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');
require __DIR__.'/auth.php';
//metodo de routing en laravel version 9.x actual 2022 para recargar lista de municipios
Route::get('/dashboard',[Controller::class, 'inicio_rendermuns']);

//rutas para servidor
/*
Route::post('Directorio/public/renderigcm','Controller@render');
Route::post('Directorio/public/renderigcm2','Controller@render2');
Route::post('Directorio/public/renderigcm3','Controller@render3');
Route::post('Directorio/public/renderigcm4','Controller@render4');
Route::post('Directorio/public/renderigcm5','Controller@render5');
*/

// rutas locales
//Route::get('dashboard/avgrenderigecem', [Controller::class, 'render'])->name('render');
Route::post('dashboard/avgrenderigecem', [Controller::class, 'render'])->name('render');
Route::post('dashboard/avgrenderigecem2',[Controller::class, 'render2']);
Route::post('dashboard/avgrenderigecem3',[Controller::class, 'render3']);
Route::post('dashboard/avgrenderigecem4',[Controller::class, 'render4']);
Route::post('dashboard/avgrenderigecem5',[Controller::class, 'render5']);









// ruta para cargar informacion
Route::post('dashboard/captr',[Controller::class, 'capturaformulario']);









/*LISTA DE MUNICIPIOS MODO VER TODO000....*/
Route::get('/Municipios',[Controller::class, 'ListarMuncpos']);

Route::post('/redfilter',[Controller::class, 'filtermethod']);
Route::post('/textfinish',[Controller::class, 'methoddetails']);


Route::post('/renderigcmfree', [Controller::class, 'renderfree'] );
Route::post('/renderigcm2free', [Controller::class, 'render2free'] );
Route::post('/renderigcm3free', [Controller::class, 'render3free'] );
Route::post('/renderigcm4free', [Controller::class, 'render4free'] );
Route::post('/renderigcm5free', [Controller::class, 'render5free'] );


/* BTN PDF PARA DESCARGAR... CHANGE 10 JANUARY 2019 */
Route::get('Municipios/pdf/{file}',[Controller::class, 'pdf_download'] );
Route::get('Municipios/pdfspecific/{data}',[Controller::class, 'pdf_downloadspecific'] );
Route::get('Municipios/pdfgeneral/',[Controller::class, 'pdf_downloadgeneral'] );


/* BTN EXCEL TO DOWNLOAD... CHANGE 18 JANUARY 2019 */
Route::get('Municipios/excel/{file}', [Controller::class, 'excel_download'] );
Route::get('Municipios/xcelspecific/{fill}', [Controller::class, 'excel_downloadspecific'] );
Route::get('Municipios/xcelgeneral/', [Controller::class, 'excel_downloadgeneral'] );
