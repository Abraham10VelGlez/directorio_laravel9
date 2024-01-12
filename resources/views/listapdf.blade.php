<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title>Municipios Correspondientes</title>
    </head>
    <body style="font-family: Arial;font-size: 12px;">


@if(isset($exue))
                 @foreach($exue as $lis)

   <center><h1><strong>Delegación {{$lis->email}}       </strong>   </h1> </center>

@endforeach
@else @endif

				@if(isset($list1))
                 @foreach($list1 as $listamu)

   <center><h1>         <strong>        No. {{$listamu->clv}} {{$listamu->nommun}}       </strong>   </h1> </center>

                    @foreach($pd as $presdts)
                    <p style="text-align: right;"> Última actualización: {{$presdts->updated_at}}</p>
@if($listamu->clv==$presdts->idelegmun)
<h2 class="text-center text-primary">Presidente</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>{{$presdts->nombrep}}</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>{{$presdts->cargop}}</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>{{$presdts->gradoacdp}}</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>{{$presdts->domiciliop}}</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>{{$presdts->telefonop}}</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>{{$presdts->emailp}}</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        @else <br> @endif
@endforeach

@foreach($sect as $secrtio)
                        @if($listamu->clv==$secrtio->idelegmun)
                        <p style="text-align: right;"> Última actualización: {{$secrtio->updated_at}}</p>
<h2 class="text-center text-primary">Secretario</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>{{$secrtio->nombres}}</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>{{$secrtio->cargos}}</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>{{$secrtio->gradoacds}}</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>{{$secrtio->domicilios}}</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>{{$secrtio->telefonos}}</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>{{$secrtio->emails}}</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        @else <br> @endif
@endforeach




@foreach($tesor as $tesorro)
                        @if($listamu->clv==$tesorro->idelegmun)
                        <p style="text-align: right;"> Última actualización: {{$tesorro->updated_at}}</p>
<h2 class="text-center text-primary">Tesorero</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>{{$tesorro->nombret}}</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>{{$tesorro->cargot}}</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>{{$tesorro->gradoacdt}}</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>{{$tesorro->domiciliot}}</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>{{$tesorro->telefonot}}</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>{{$tesorro->emailt}}</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        @else <br> @endif
@endforeach




@foreach($catt as $catastr)
                        @if($listamu->clv==$catastr->idelegmun)
                        <p style="text-align: right;"> Última actualización: {{$catastr->updated_at}}</p>
<h2 class="text-center text-primary">Catastro</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>{{$catastr->nombrec}}</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>{{$catastr->cargoc}}</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>{{$catastr->gradoacdc}}</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>{{$catastr->domicilioc}}</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>{{$catastr->telefonoc}}</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>{{$catastr->emailc}}</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        @else <br> @endif
@endforeach





@foreach($uip as $uuiipp)
                        @if($listamu->clv==$uuiipp->idelegmun)
                        <p style="text-align: right;"> Última actualización: {{$uuiipp->updated_at}}</p>
<h2 class="text-center text-primary">Titular de la Unidad de Información, Planeación, Programación y Evaluación (UIPPE) o Equivalente.</h2>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class=" col-md-12">
                        <div class="col-md-4 text-left">Nombre: <strong>{{$uuiipp->nombreu}}</strong></div>
                        <div id="nomp" class="col-md-8 text-left">
                         </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Cargo: <strong>{{$uuiipp->cargou}}</strong>                     </div>
                        <div id="carp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Grado académico: <strong>{{$uuiipp->gradoacdu}}</strong>                     </div>
                        <div id="gadp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Domicilio: <strong>{{$uuiipp->domiciliou}}</strong>                     </div>
                        <div id="domp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                       <div class="col-md-4 text-left">Teléfono: <strong>{{$uuiipp->telefonou}}</strong>                     </div>
                        <div id="telp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        <div  class="col-md-12">
                        <div class="col-md-4 text-left">Correo electrónico: <strong>{{$uuiipp->emailu}}</strong> </div>
                        <div id="eamp" class="col-md-8 text-left">

                        </div>
                        </div>
                        <div class=" col-md-12">&nbsp;</div>
                        @else <br> @endif
@endforeach


                  </strong>

                    @endforeach @else <br> @endif










    </body>
</html>
