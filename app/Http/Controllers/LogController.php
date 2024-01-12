<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Routing\Controller as BaseController;
use Session;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\LoginRequest;
use App\Http\Middleware\Sesion;

class LogController extends Controller
{
  //constructor
  public function __construct(){
     // $this->middleware('auth',['only' => 'store']);
     // $this->middleware('inicio',['only' => 'store']);
  }

  public function store(LoginRequest $request){


      //die();
      if(Auth::attempt(['name' => $request['name'], 'password' => $request['password']])){
          return Redirect::to('inicio');

      }
      Session::flash('message-error','Datos incorrectos');
      return Redirect::to('/');




  }

  public function logout(){
      Auth::logout();
      return Redirect::to('https://directoriocat_igecem.edomex.gob.mx');
  }
}
