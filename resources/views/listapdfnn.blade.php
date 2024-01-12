<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Municipios Correspondientes</title>
        <script type="text/javascript">

window.print();

        </script>
    </head>
    <body style="font-family: Arial;font-size: 12px;">
<center>
  <img src="../../images/edomex.png?rand=d38c" style="width: 518px;">
 </center>

@if(isset($exue))
                 @foreach($exue as $lis)

   <center><h1><strong>Delegación {{$lis->email}}       </strong>   </h1> </center>




<?php
$rr=$lis->id;
    $list1= DB::table('municipios')->select('clv', 'nommun')->where('iddelegacion' ,$rr)->orderBy('nommun', 'asc')->get();
    foreach ($list1 as $key) {
    $mom=$key->clv;



$pd= DB::table('presidentes')->select('nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idelegmun','updated_at')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$sect=DB::table('secretarios')->select('nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idelegmun','updated_at')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$tesor = DB::table('tesoreros')->select('nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idelegmun','updated_at')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$catt = DB::table('catastros')->select('nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idelegmun','updated_at')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();
$uip= DB::table('uippes')->select('nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idelegmun','updated_at')->where('idelegmun' ,$mom)->orderBy('idelegmun', 'asc')->get();

foreach($pd as $presdts){

//echo$presdts->nombrep;
echo '<p style="text-align: right;"> Última actualización: '.$presdts->updated_at.'</p>';


echo '
<center><h2>         <strong>        No. '.$key->clv.' '.$key->nommun.'       </strong>   </h2> </center>
<h2 class="text-center text-primary">Presidente</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>'.$presdts->nombrep.'</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>'.$presdts->cargop.'</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>'.$presdts->gradoacdp.'</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>'.$presdts->domiciliop.'</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>'.$presdts->telefonop.'</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>'.$presdts->emailp.'</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        ';
                    }


                    foreach($sect as $secrtio)
                        {
                            echo '<p style="text-align: right;"> Última actualización: '.$secrtio->updated_at.'</p>';
                            echo'
<h2 class="text-center text-primary">Secretario</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>'.$secrtio->nombres.'</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>'.$secrtio->cargos.'</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>'.$secrtio->gradoacds.'</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>'.$secrtio->domicilios.'</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>'.$secrtio->telefonos.'</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>'.$secrtio->emails.'</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        ';
                       }


foreach($tesor as $tesorro){
echo '<p style="text-align: right;"> Última actualización: '.$tesorro->updated_at.'</p>';
    echo '
<h2 class="text-center text-primary">Tesorero</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>'.$tesorro->nombret.'</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>'.$tesorro->cargot.'</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>'.$tesorro->gradoacdt.'</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>'.$tesorro->domiciliot.'</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>'.$tesorro->telefonot.'</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>'.$tesorro->emailt.'</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        ';
}



foreach($catt as $catastr){
    echo '<p style="text-align: right;"> Última actualización: '.$catastr->updated_at.'</p>';
    echo '
<h2 class="text-center text-primary">Catastro</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>'.$catastr->nombrec.'</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>'.$catastr->cargoc.'</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>'.$catastr->gradoacdc.'</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>'.$catastr->domicilioc.'</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>'.$catastr->telefonoc.'</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>'.$catastr->emailc.'</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
';
}



foreach($uip as $uuiipp)
                       {
                        echo '<p style="text-align: right;"> Última actualización: '.$uuiipp->updated_at.'</p>';
                        echo '
<h2 class="text-center text-primary">Titular de la Unidad de Información, Planeación, Programación y Evaluación (UIPPE) o Equivalente.</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>'.$uuiipp->nombreu.'</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>'.$uuiipp->cargou.'</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>'.$uuiipp->gradoacdu.'</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>'.$uuiipp->domiciliou.'</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>'.$uuiipp->telefonou.'</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>'.$uuiipp->emailu.'</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        ';
                        }



                        }
?>




        @endforeach
@else
 @endif



    </body>
</html>
