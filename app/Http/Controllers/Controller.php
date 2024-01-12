<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests\ValidadorRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Municipio;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use Illuminate\Http\Request;
use App\presidente;
use App\Secretario;
use App\Tesorero;
use App\Catastro;
use App\Uippe;
//use Mpdf\Mpdf;
use App\Views;
use PDF;

use Maatwebsite\Excel\Facades\Excel;





class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(){
        //USO DE MIDDLEWARE EL DEFAULT Y EL CREADO...
        $this->middleware('auth',['only' => 'inicio_rendermuns']);
        $this->middleware('auth',['only' => 'inicio_rendermuns']);
    }

    public function inicio_rendermuns(){

        //autentificamos al usuario que entra en sesion y extraemos su información de la base de datos
        //$id_usu =  Auth::user()->id;
        //$id_usuall =  Auth::user();
        //printf($id_usuall);

        //invocamos el filtro de municipios... pero ahora solo para un solo usuario. 30/08/22
        //$listamun = DB::table('municipios')->where('iddelegacion' ,$id_usu)->orderBy('nommun', 'desc')->get();
        $listamun = DB::table('municipios')->orderBy('nommun', 'asc')->get();
        //print_r($listamun);
      //  die();
        //$pd= Presidente::find($id_usu);
        //$sect=Secretario::find($id_usu);
        //$tesor = Tesorero::find($id_usu);
        //$catt = Catastro::find($id_usu);
        //$uip= Uippe::find($id_usu);
      //  die();
        //return view('inicio',['pd' => $pd, 'sect' => $sect, 'tesor' =>$tesor, 'catt' => $catt, 'uip' => $uip,'listamun' => $listamun]);
        return view('dashboard',['listamun' => $listamun]);

    }

    public function render(Request $request){
      //echo "hola";die();
        $id_usu =  Auth::user()->id;
        //recuperacion de clavemunicipal
        $cl=$request['xx'];
        //$cl=23;
        //die();
        $pd= DB::table('presidentes')->where('idelegmun' ,$cl)->get();
        //print_r($pd);die();

        return $pd;
    }
    public function render2(Request $request) {
        $id_usu =  Auth::user()->id;
        //recuperacion de clavemunicipal
        $cl=$request['xx'];
        $sect=DB::table('secretarios')->where('idelegmun' ,$cl)->get();
        return $sect;
    }
    public function render3(Request $request) {
        $id_usu =  Auth::user()->id;
        $cl=$request['xx'];
        $tesor = DB::table('tesoreros')->where('idelegmun' ,$cl)->get();
        return $tesor;

    }
    public function render4(Request $request) {
        $id_usu =  Auth::user()->id;
        $cl=$request['xx'];
        $catt = DB::table('catastros')->where('idelegmun' ,$cl)->get();
        return $catt;
    }
    public function render5(Request $request) {
        $id_usu =  Auth::user()->id;
        $cl=$request['xx'];
        $uip= DB::table('uippes')->where('idelegmun' ,$cl)->get();
        return $uip;
    }

    /*public function capturaformulario2(Request $request){
      echo "holacargardatos";die();
    }*/
    public function capturaformulario(ValidadorRequest $request){
        /* CREADO UN USUARIO NUEVO Y OBSERVANDO EL USO DEL MODELO EN UN INSERTO PARA LA BASE DE DATOS...*/
        //echo "holacargardatos";die();


        $id_usu =  Auth::user()->id;
        $clvmun= $request->input('hiddenigcmavg');
        $presidenteupdate= DB::table('presidentes')->where('idelegmun' ,$clvmun)->get();
        $sectario=DB::table('secretarios')->where('idelegmun' ,$clvmun)->get();
        $tesorero = DB::table('tesoreros')->where('idelegmun' ,$clvmun)->get();
        $catatro = DB::table('catastros')->where('idelegmun' ,$clvmun)->get();
        $uipe= DB::table('uippes')->where('idelegmun' ,$clvmun)->get();
        //print_r($presidenteupdate);die();
        //echo count($presidenteupdate);
        if(count($presidenteupdate) !=0){
            //echo "actualiza".$clvmun;
            $fecha = date("Y-m-d H:i:s");
            //validar que exista un cambio de verdad entonces se edita la fecha si no sigue intacta la fecha
            foreach ($presidenteupdate as $p1) {
             if( $p1->nombrep == $request->input('pnm') ){
                //echo " no se actualiza la hora";

             }else{
                //echo " se actualiza la hora";
                DB::table('presidentes')
            ->where('idelegmun', $clvmun)
            ->update(['nombrep' => $request->input('pnm'),'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'updated_at' => $fecha  ]);

             }

             if( $p1->cargop == $request->input('pcg') ){

             }else{
                DB::table('presidentes')
            ->where('idelegmun', $clvmun)
            ->update(['nombrep' => $request->input('pnm'),'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'updated_at' => $fecha  ]);


             }
                if( $p1->gradoacdp == $request->input('pga') ){

                }else{
                        DB::table('presidentes')
            ->where('idelegmun', $clvmun)
            ->update(['nombrep' => $request->input('pnm'),'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'updated_at' => $fecha  ]);


                }
                    if( $p1->domiciliop == $request->input('pd') ){

                    }else{
                            DB::table('presidentes')
            ->where('idelegmun', $clvmun)
            ->update(['nombrep' => $request->input('pnm'),'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'updated_at' => $fecha  ]);


                    }
                        if( $p1->telefonop == $request->input('pt') ){

                        }else{
                                DB::table('presidentes')
            ->where('idelegmun', $clvmun)
            ->update(['nombrep' => $request->input('pnm'),'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'updated_at' => $fecha  ]);


                        }
                            if( $p1->emailp == $request->input('pce') ){

                            }else{
                                    DB::table('presidentes')
            ->where('idelegmun', $clvmun)
            ->update(['nombrep' => $request->input('pnm'),'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'updated_at' => $fecha  ]);


                            }




            }
            // si es 1 != 0 solo se actualiza

        }else{
            //echo "nuevo";
            //si es 0 = 0 nuevo registro
            presidente::create(['nombrep' => $request->input('pnm'), 'cargop' => $request->input('pcg'), 'gradoacdp' => $request->input('pga') ,'domiciliop' => $request->input('pd') ,'telefonop' => $request->input('pt'),'emailp' => $request->input('pce'),'idepmun' => $id_usu,'idelegmun' => $request->input('hiddenigcmavg')]);
        }
        if(count($sectario) !=0){
            $fecha = date("Y-m-d H:i:s");
            //si es 1 != 0 solo se actualiza
            foreach ($sectario as $p2) {
                if( $p2->nombres == $request->input('snm') ){

                }else{
                    DB::table('secretarios')
            ->where('idelegmun', $clvmun)
            ->update(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'updated_at' => $fecha]);

                }
                    if( $p2->cargos == $request->input('scg') ){

                    }else{
                        DB::table('secretarios')
            ->where('idelegmun', $clvmun)
            ->update(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'updated_at' => $fecha]);

                    }
                        if( $p2->gradoacds == $request->input('sga') ){

                        }else{
                            DB::table('secretarios')
            ->where('idelegmun', $clvmun)
            ->update(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'updated_at' => $fecha]);

                        }
                            if( $p2->domicilios == $request->input('sd') ){

                            }else{
                                DB::table('secretarios')
            ->where('idelegmun', $clvmun)
            ->update(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'updated_at' => $fecha]);

                            }
                                if( $p2->telefonos == $request->input('st') ){

                                }else{
                                  DB::table('secretarios')
            ->where('idelegmun', $clvmun)
            ->update(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'updated_at' => $fecha]);
                                }
                                    if( $p2->emails == $request->input('sce') ){

                                    }else{
                                        DB::table('secretarios')
            ->where('idelegmun', $clvmun)
            ->update(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'updated_at' => $fecha]);

                                    }

            }

        }else{
            //si es 0 = 0 nuevo registro
            Secretario::create(['nombres' => $request->input('snm'), 'cargos' => $request->input('scg'), 'gradoacds' => $request->input('sga'),'domicilios' => $request->input('sd'),'telefonos' => $request->input('st'),'emails' => $request->input('sce'),'idepmun' => $id_usu,'idelegmun' => $request->input('hiddenigcmavg')]);
        }
        if(count($tesorero) !=0){
            $fecha = date("Y-m-d H:i:s");
             foreach ($tesorero as $p3) {

                if( $p3->nombret == $request->input('tnm') ){

                }else{
                     //si es 1 != 0 solo se actualiza
            DB::table('tesoreros')
            ->where('idelegmun', $clvmun)
            ->update(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'updated_at' => $fecha]);

                }
                    if( $p3->cargot == $request->input('tcg') ){

                    }else{
                         //si es 1 != 0 solo se actualiza
            DB::table('tesoreros')
            ->where('idelegmun', $clvmun)
            ->update(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'updated_at' => $fecha]);

                    }
                        if( $p3->gradoacdt == $request->input('tga') ){

                        }else{
                             //si es 1 != 0 solo se actualiza
            DB::table('tesoreros')
            ->where('idelegmun', $clvmun)
            ->update(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'updated_at' => $fecha]);

                        }
                            if( $p3->domiciliot == $request->input('td') ){

                            }else{
                                 //si es 1 != 0 solo se actualiza
            DB::table('tesoreros')
            ->where('idelegmun', $clvmun)
            ->update(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'updated_at' => $fecha]);

                            }
                                if( $p3->telefonot == $request->input('tt') ){

                                }else{
                                     //si es 1 != 0 solo se actualiza
            DB::table('tesoreros')
            ->where('idelegmun', $clvmun)
            ->update(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'updated_at' => $fecha]);

                                }
                                    if( $p3->emailt == $request->input('tce') ){

                                    }else{
                                         //si es 1 != 0 solo se actualiza
            DB::table('tesoreros')
            ->where('idelegmun', $clvmun)
            ->update(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'updated_at' => $fecha]);

                                    }

             }

        }else {
            //si es 0 = 0 nuevo registro
            Tesorero::create(['nombret' => $request->input('tnm') , 'cargot' => $request->input('tcg'), 'gradoacdt' => $request->input('tga'),'domiciliot' => $request->input('td'),'telefonot' => $request->input('tt'),'emailt' => $request->input('tce'),'idepmun' => $id_usu,'idelegmun'=>$request->input('hiddenigcmavg')]);
        }
        if(count($catatro) !=0){
            $fecha = date("Y-m-d H:i:s");

            foreach ($catatro as $p4) {
            //si es 1 != 0 solo se actualiza
            if(  $p4->nombrec == $request->input('cnm') ){}else{
                 DB::table('catastros')
            ->where('idelegmun', $clvmun)
            ->update(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'updated_at' => $fecha]);
            }
                if( $p4->cargoc == $request->input('ccg') ){}else{
                     DB::table('catastros')
            ->where('idelegmun', $clvmun)
            ->update(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'updated_at' => $fecha]);
                }
                    if( $p4->gradoacdc == $request->input('cga') ){}else{
                         DB::table('catastros')
            ->where('idelegmun', $clvmun)
            ->update(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'updated_at' => $fecha]);
                    }
                        if( $p4->domicilioc == $request->input('cd') ){}else{
                             DB::table('catastros')
            ->where('idelegmun', $clvmun)
            ->update(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'updated_at' => $fecha]);
                        }
                            if( $p4->telefonoc == $request->input('ct') ){}else{
                                 DB::table('catastros')
            ->where('idelegmun', $clvmun)
            ->update(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'updated_at' => $fecha]);
                            }
                                if( $p4->emailc == $request->input('cce') ){}else{
                                     DB::table('catastros')
            ->where('idelegmun', $clvmun)
            ->update(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'updated_at' => $fecha]);
                                }


                                      }


        }else{
            //si es 0 = 0 nuevo registro

            Catastro::create(['nombrec' => $request->input('cnm'), 'cargoc' => $request->input('ccg'), 'gradoacdc' => $request->input('cga'),'domicilioc' => $request->input('cd'),'telefonoc' => $request->input('ct'),'emailc' => $request->input('cce'),'idepmun' => $id_usu,'idelegmun' => $request->input('hiddenigcmavg')]);
        }
        if(count($uipe) !=0){//si es 1 != 0 solo se actualiza
            $fecha = date("Y-m-d H:i:s");
            foreach ($uipe as $p5) {

            if( $p5->nombreu == $request->input('uinm') ){

            }else{
                DB::table('uippes')
            ->where('idelegmun', $clvmun)
            ->update(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'updated_at' => $fecha]);
            }
                if( $p5->cargou == $request->input('uicg') ){}else{
                    DB::table('uippes')
            ->where('idelegmun', $clvmun)
            ->update(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'updated_at' => $fecha]);
                }
                    if( $p5->gradoacdu == $request->input('uiga') ){}else{
                        DB::table('uippes')
            ->where('idelegmun', $clvmun)
            ->update(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'updated_at' => $fecha]);
                    }
                        if( $p5->domiciliou == $request->input('uid') ){}else{
                            DB::table('uippes')
            ->where('idelegmun', $clvmun)
            ->update(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'updated_at' => $fecha]);
                        }
                            if( $p5->telefonou == $request->input('uit') ){}else{
                                DB::table('uippes')
            ->where('idelegmun', $clvmun)
            ->update(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'updated_at' => $fecha]);
                            }
                                if( $p5->emailu == $request->input('uice') ){}else{
                                    DB::table('uippes')
            ->where('idelegmun', $clvmun)
            ->update(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'updated_at' => $fecha]);
                                }
            }

        }else{
            //si es 0 = 0 nuevo registro
            Uippe::create(['nombreu' => $request->input('uinm'), 'cargou' => $request->input('uicg'), 'gradoacdu' => $request->input('uiga'),'domiciliou' => $request->input('uid'),'telefonou' => $request->input('uit'),'emailu' => $request->input('uice'),'idepmun' => $id_usu,'idelegmun' => $request->input('hiddenigcmavg')]);
        }
        //regresamos la vista en FORMULARIO normal de post, si enbargo para el caso de hoy x motivos de uso de no refrescar la vista usamos ajax
       //return Redirect('dashboard');
       ///ajax y retornamos un solo dato
       return "10";
    }

    public function ListarMuncpos(){
      /*
      select * from
      (SELECT id, name FROM public.users limit 8 ) as a
      join
      (SELECT clv, nommun, iddelegacion FROM public.municipios) as b
      on
      a.id= b.iddelegacion
      order by id

      $users = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'contacts.phone', 'orders.price')
            ->get();

      */

      /*$list2 =DB::table('users')
      ->join('municipios','users.id','=','municipios.iddelegacion')
      ->select('users.id','users.name', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
      ->whereBetween('users.id', [1, 9])
      ->orderBy('users.name', 'asc')// desc
      ->get();*/
      /*
        $list2 =DB::table('users')
        ->join('municipios','users.id','=','municipios.iddelegacion')
        ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
        ->whereBetween('users.id', [1, 9])
        ->orderBy('users.email', 'asc')// desc
        ->get();

        //print_r($list2);die();

       return view('lista',['list2' => $list2 ]);*/
       $list2 =DB::table('users')

       ->whereBetween('id', [1, 8])
       ->orderBy('email', 'asc')// desc
       ->get();

       //return view('lista',['list2' => $list2 ]);
       $list_delegacion1 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,1)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();

       $list_delegacion2 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,2)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();


       $list_delegacion3 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,3)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();

       $list_delegacion4 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,4)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();


       $list_delegacion5 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,5)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();

       $list_delegacion6 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,6)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();

       $list_delegacion7 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,7)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();


       $list_delegacion8 =DB::table('users')
       ->join('municipios','users.id','=','municipios.iddelegacion')
       ->select('users.id','users.email', 'municipios.clv', 'municipios.nommun', 'municipios.iddelegacion')
       //->whereBetween('users.id', [1, 9])
       ->where('users.id' ,8)
       ->orderBy('municipios.nommun', 'asc')// desc
       ->get();


       return view('lista',['list2' => $list2, 'list_delegacion1' =>  $list_delegacion1,
       'list_delegacion2' =>  $list_delegacion2, 'list_delegacion3' =>  $list_delegacion3, 'list_delegacion4' =>  $list_delegacion4,
       'list_delegacion5' =>  $list_delegacion5, 'list_delegacion6' =>  $list_delegacion6, 'list_delegacion7' =>  $list_delegacion7, 'list_delegacion8' =>  $list_delegacion8 ]);


    }

    public function filtermethod(Request $request){

        $list1 =DB::table('municipios')
        ->where('iddelegacion',$request['credencialclv'])
        ->orderBy('nommun', 'asc')// desc
        ->get();

        return $list1;
    }

    public function methoddetails(Request $request){
        //credencialclvm
        $nombredelmun = DB::table('municipios')
        ->where('clv' ,$request['xxx'])
        ->get();
        return $nombredelmun;
    }


    public function renderfree(Request $request){
        //$id_usu =  Auth::user()->id;
        //recuperacion de clavemunicipal
        $cl=$request['xx'];

        $pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp')->where('idelegmun' ,$cl)->get();

        return $pd;
    }
    public function render2free(Request $request) {
        //$id_usu =  Auth::user()->id;
        //recuperacion de clavemunicipal
        $cl=$request['xx'];
        $sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails')->where('idelegmun' ,$cl)->get();
        return $sect;
    }
    public function render3free(Request $request) {
        //$id_usu =  Auth::user()->id;
        $cl=$request['xx'];
        $tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt')->where('idelegmun' ,$cl)->get();
        return $tesor;

    }
    public function render4free(Request $request) {
        //$id_usu =  Auth::user()->id;
        $cl=$request['xx'];
        $catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc')->where('idelegmun' ,$cl)->get();
        return $catt;
    }
    public function render5free(Request $request) {
        //$id_usu =  Auth::user()->id;
        $cl=$request['xx'];
        $uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu')->where('idelegmun' ,$cl)->get();
        return $uip;
    }

    public function pdf_download($getid){


    $exue= DB::table('users')->select('email')->where('id' ,$getid)->get();
    $list1= DB::table('municipios')->select('clv', 'nommun')->where('iddelegacion' ,$getid)->orderBy('nommun', 'asc')->get();
foreach ($list1 as $key) {
    $mom=$key->clv;
$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
//print_r($pd);


}
foreach ($exue as $xkey) {
    $varn=$xkey->email;
}
//$html = view('listapdfn',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip,'exue' => $exue ])->render();
 $html = view('listapdfn',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip,'exue' => $exue ])->render();

//die();


    //$html = view('listapdf',$list1)->render();
   // return view('listapdf',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip])->render();


     $pdf = PDF::loadHTML($html);
     return $pdf->download($varn.'.pdf');
     die();


        $mpdf = new Mpdf([

            'default_font' => 'arial',
            // "format" => "A4",
        ]);
        // $mpdf->SetTopMargin(5);
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->WriteHTML($html);
        $namefile=$varn.".pdf";
//$mpdf->Output($namefile,"I");
$mpdf->Output($namefile,"D");





    }


    public function pdf_downloadspecific($d){
    $list1= DB::table('municipios')->select('clv', 'nommun')->where('clv' ,$d)->orderBy('nommun', 'asc')->get();
foreach ($list1 as $key) {
    $mom=$key->clv;
    $varn=$key->nommun;
$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();

}


if(count($pd)==0 && count($sect)==0 && count($tesor)==0 && count($catt)==0 && count($uip)==0){
return Redirect('/Municipios')->with('statuserror', 'Este Municipio no cuenta con información por el momento.');
}else{
    //$html = view('listapdf',$list1)->render();
    //return view('listapdf',$list1)->render();
  $html = view('listapdf',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip])->render();

  $pdf = PDF::loadHTML($html);
  return $pdf->download($varn.'.pdf');
  die();
        $mpdf = new Mpdf([

            'default_font' => 'arial',
            // "format" => "A4",
        ]);
        // $mpdf->SetTopMargin(5);
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->WriteHTML($html);
        $namefile=$varn.".pdf";
//$mpdf->Output($namefile,"I");
$mpdf->Output($namefile,"D");

}


    }

    public function pdf_downloadgeneral(){
            $exue= DB::table('users')->select('id','email')->orderBy('id', 'asc')->get();


    $list1= DB::table('municipios')->select('clv', 'nommun')->where('iddelegacion' ,1)->orderBy('nommun', 'asc')->get();
    //print_r($list1);die();
foreach ($list1 as $key) {
    $mom=$key->clv;
$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();

}
foreach ($exue as $xkey) {
    $varn=$xkey->email;
}


    //$html = view('listapdf',$list1)->render();
         return view('listapdfnn',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip, 'exue' => $exue])->render();



        $mpdf = new Mpdf([

            'default_font' => 'arial',
            // "format" => "A4",
        ]);
        // $mpdf->SetTopMargin(5);
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->WriteHTML($html);
        $namefile="DirectorioCompleto.pdf";





//$mpdf->Output($namefile,"I");
$mpdf->Output($namefile,"D");



    }


    public function excel_download($getid){
    //  $file = $request->file('file');
      //Excel::import("HOLA", $file);
      //return back()->with('success', 'Products imported successfully.');

      //die();

    $exue= DB::table('users')->select('email')->where('id' ,$getid)->get();
    $list1= DB::table('municipios')->select('clv', 'nommun')->where('iddelegacion' ,$getid)->orderBy('nommun', 'asc')->get();
foreach ($list1 as $key) {
    $mom=$key->clv;
$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
//print_r($pd);


}
foreach ($exue as $xkey) {
    $varn=$xkey->email;
}
//$html = view('listapdfn',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip,'exue' => $exue ])->render();
 $html = view('listapdfn',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip,'exue' => $exue ])->render();

//die();


    //$html = view('listapdf',$list1)->render();
   // return view('listapdf',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip])->render();


       header('Content-type: application/vnd.ms-excel');
header("Content-Disposition: attachment; filename=delegación.xls");
 header("Pragma: no-cache");
header("Expires: 0");
echo'<meta charset="utf-8"><meta http-equiv="content-type" content="text/html; utf-8"><meta charset=UTF-8><meta charset="utf-8">
        <meta http-equiv="content-type" content="text/html; utf-8">
        <meta charset=UTF-8>';
 echo $html;


    }
    public function excel_downloadspecific($d){
          $list1= DB::table('municipios')->select('clv', 'nommun')->where('clv' ,$d)->orderBy('nommun', 'asc')->get();
foreach ($list1 as $key) {
    $mom=$key->clv;
    $varn=$key->nommun;
$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun','updated_at')->where('idelegmun' ,$mom)->get();

}


if(count($pd)==0 && count($sect)==0 && count($tesor)==0 && count($catt)==0 && count($uip)==0){
return Redirect('/Municipios')->with('statuserror', 'Este Municipio no cuenta con información por el momento.');
}else{
    //$html = view('listapdf',$list1)->render();
    //return view('listapdf',$list1)->render();
  $html = view('listapdf',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip])->render();

   header('Content-type: application/vnd.ms-excel');
header("Content-Disposition: attachment; filename=municipio.xls");
 header("Pragma: no-cache");
header("Expires: 0");
echo'<meta charset="utf-8"><meta http-equiv="content-type" content="text/html; utf-8"><meta charset=UTF-8><meta charset="utf-8">
        <meta http-equiv="content-type" content="text/html; utf-8">
        <meta charset=UTF-8>';
 echo $html;


    }
}
    public function excel_downloadgeneral(){

   $exue= DB::table('users')->select('id','email')->orderBy('id', 'asc')->get();


    $list1= DB::table('municipios')->select('clv', 'nommun')->where('iddelegacion' ,1)->orderBy('nommun', 'asc')->get();
    //print_r($list1);die();
foreach ($list1 as $key) {
    $mom=$key->clv;
$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();

}
foreach ($exue as $xkey) {
    $varn=$xkey->email;
}


    //$html = view('listapdf',$list1)->render();
         $html = view('listapdfnn',['list1' => $list1, 'pd' => $pd, 'sect' => $sect,'tesor' => $tesor, 'catt' => $catt, 'uip' => $uip, 'exue' => $exue])->render();


        header('Content-type: application/vnd.ms-excel');
header("Content-Disposition: attachment; filename=DirectorioCompleto.xls");
 header("Pragma: no-cache");
header("Expires: 0");
echo'<meta charset="utf-8"><meta http-equiv="content-type" content="text/html; utf-8"><meta charset=UTF-8><meta charset="utf-8">
        <meta http-equiv="content-type" content="text/html; utf-8">
        <meta charset=UTF-8>';
 echo $html;




    }




}
