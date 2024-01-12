$(document).ready(function(){


 /*http://jquery-manual.blogspot.mx/2012/05/expresiones-regulares-con-jquery-match.html*/

 $("#xbox").css("display","none");
 $('#kt_multiselectsplitter_example_1').on('change', function() {
   $("#xbox").css("display","block");
var cadenanum = "";
var selValueavg100 = this.value;
$(this).find("option:selected").each(function(){
var title1 =  $(this).parent().attr("label");
var title2 =  $(this).text();
cadenanum = title1.split(" ");
$("#title1").html('');
var title1finish = $.trim(title1);
var title2finish = $.trim(title2);

$("#title1").html(title2finish + ' es Municipio Correspondiente de la DelegaciÃ³n ' + cadenanum[1]);
$("#html1").html('');
$("#html2").html('');
$("#html1").html(cadenanum[1] + ' / ' +title2finish);
$("#html2").html(title2finish);
});

//console.log(v);
//detalles(selValueavg100);
//var hiddentoken = $("#maharba").val();
var hiddentoken = cadenanum[0];
    $("#actiavg").html('');
    $("#actiavg").html('<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_2" onclick="detalles('+selValueavg100+')">'+
    'Detalles'+
    '</button>');
    $("#deledownload").html('');
    $("#mundownload").html('');
    $("#deledownload2").html('');
    $("#mundownload2").html('');



    $("#deledownload").html('<a href="Municipios/pdf/' + hiddentoken +'"><img src="img/pdf_bnt.png" style="width:63px;"></a>');
    $("#deledownload2").html('<a href="Municipios/excel/' + hiddentoken +'" ><img src="img/XLS.png" style="width:50px;"></a>');
    $("#mundownload").html('<a href="Municipios/pdfspecific/'+selValueavg100+'"><img src="img/pdf_bnt.png" style="width:63px;"></a>');
    $("#mundownload2").html('<a href="Municipios/xcelspecific/'+selValueavg100+'"><img src="img/XLS.png" style="width:50px;"></a>');







   });

  $('#name').blur(function(){
    if ($('#name').val().match(/^[a-zA-ZÃ¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ_\s]+$/)) {
       //alert("Bien");
       }else {
         //alert("Esto no son nÃºmeros");
         $('#rorre').html('');
         $('#rorre').html('caracter invalido');
         $('#rorre').css('display','block').fadeOut(5000);
         }
       return false;
   });
  $('#name').on('input', function (e) {
    if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ_\s]*$/i.test(this.value)) {
      this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ_\s]+/ig,"");
    }
    });

  $('#password').blur(function(){
    if ($('#password').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ_\s]+$/)) {
       //alert("Bien");
       }else {
         //alert("Esto no son nÃºmeros");
         $('#rorre2').html('');
         $('#rorre2').html('caracter invalido');
         $('#rorre2').css('display','block').fadeOut(5000);
         }
       return false;
   });
  $('#password').on('input', function (e) {
    if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ_\s]*$/i.test(this.value)) {
      this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ_\s]+/ig,"");
    }
    });


  /*metodo para dividir delegaciones x municipios y filtreo*/
  $('li.classsd').click(function(){
    $('#pnm').val('');
    $('#pcg').val('');
    $('#pga').val('');
    $('#pd').val('');
    $('#pt').val('');
    $('#pce').val('');

    $('#snm').val('');
    $('#scg').val('');
    $('#sga').val('');
    $('#sd').val('');
    $('#st').val('');
    $('#sce').val('');

    $('#tnm').val('');
    $('#tcg').val('');
    $('#tga').val('');
    $('#td').val('');
    $('#tt').val('');
    $('#tce').val('');

    $('#cnm').val('');
    $('#ccg').val('');
    $('#cga').val('');
    $('#cd').val('');
    $('#ct').val('');
    $('#cce').val('');

    $('#uinm').val('');
    $('#uicg').val('');
    $('#uiga').val('');
    $('#uid').val('');
    $('#uit').val('');
    $('#uice').val('');

    $('#ultim').html('');
    $('#ultim2').html('');
    $('#ultim3').html('');
    $('#ultim4').html('');
    $('#ultim5').html('');

    var rich =$(this).data('dato');
    var oil = $(this).data('datos');
    $('#munm').html(oil);
    $('#hiddenigcm').html('<input id="hiddenigcmavg" name="hiddenigcmavg" type="hidden" value="'+rich+'" />');
  });

 /* MOSTRAR DATOS.... DE CAPTURADOS*/
 $('li.classsd').click(function (event){
     var clavemunic =$(this).data('dato');
     /*ACTUALIZACION CON AJAX*/
     event.preventDefault();
     var tok = $('#token').val();
       $.ajax({//Directorio/public/renderigcm
          url:"Directorio/public/renderigcm",
          headers: {'X-CSRF-TOKEN': tok},
          type: 'POST',
          dataType: 'json',
          data: {xx:clavemunic},
          success:function(w){
              $(w).each(function(key,valuee){

                 $('#pnm').val(valuee.nombrep);
                 $('#pcg').val(valuee.cargop);
                 $('#pga').val(valuee.gradoacdp);
                 $('#pd').val(valuee.domiciliop);
                 $('#pt').val(valuee.telefonop);
                 $('#pce').val(valuee.emailp);
                 /*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
                 $('#ultim').html(valuee.updated_at);
                 /*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/

              });
          }
       });
       $.ajax({
          url:"Directorio/public/renderigcm2",
          headers: {'X-CSRF-TOKEN': tok},
          type: 'POST',
          dataType: 'json',
          data: {xx:clavemunic},
          success:function(w){
              $(w).each(function(key,valuee){

$('#snm').val(valuee.nombres);
$('#scg').val(valuee.cargos);
$('#sga').val(valuee.gradoacds);
$('#sd').val(valuee.domicilios);
$('#st').val(valuee.telefonos);
$('#sce').val(valuee.emails);
/*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
                 $('#ultim2').html(valuee.updated_at);
                 /*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/

              });
          }
       });
       $.ajax({
          url:"Directorio/public/renderigcm3",
          headers: {'X-CSRF-TOKEN': tok},
          type: 'POST',
          dataType: 'json',
          data: {xx:clavemunic},
          success:function(w){
              $(w).each(function(key,valuee){

$('#tnm').val(valuee.nombret);
$('#tcg').val(valuee.cargot);
$('#tga').val(valuee.gradoacdt);
$('#td').val(valuee.domiciliot);
$('#tt').val(valuee.telefonot);
$('#tce').val(valuee.emailt);
/*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
                 $('#ultim3').html(valuee.updated_at);
                 /*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
              });
          }
       });
       $.ajax({
          url:"Directorio/public/renderigcm4",
          headers: {'X-CSRF-TOKEN': tok},
          type: 'POST',
          dataType: 'json',
          data: {xx:clavemunic},
          success:function(w){
              $(w).each(function(key,valuee){

$('#cnm').val(valuee.nombrec);
$('#ccg').val(valuee.cargoc);
$('#cga').val(valuee.gradoacdc);
$('#cd').val(valuee.domicilioc);
$('#ct').val(valuee.telefonoc);
$('#cce').val(valuee.emailc);
/*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
                 $('#ultim4').html(valuee.updated_at);
                 /*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
              });
          }
       });
       $.ajax({
          url:"Directorio/public/renderigcm5",
          headers: {'X-CSRF-TOKEN': tok},
          type: 'POST',
          dataType: 'json',
          data: {xx:clavemunic},
          success:function(w){
              $(w).each(function(key,valuee){

$('#uinm').val(valuee.nombreu);
$('#uicg').val(valuee.cargou);
$('#uiga').val(valuee.gradoacdu);
$('#uid').val(valuee.domiciliou);
$('#uit').val(valuee.telefonou);
$('#uice').val(valuee.emailu);
/*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
                 $('#ultim5').html(valuee.updated_at);
                 /*set code for Ing abraham date 14-02-2020*/
                 /*created_at*/
              });
          }
       });

 });



 /*VALIDACIONES PARA EL FORMULARIO*/

 $('#pnm').blur(function(){
    if ($('#pnm').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
       //alert("Bien");
       }else {
         //alert("Esto no son nÃºmeros");
         $('#errorformulario').html('');
         $('#errorformulario').html('caracter invalido');
         $('#errorformulario').css('display','block').fadeOut(5000);

         }
       return false;
   });
 $('#pnm').on('input', function (e) {
    if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
        this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
    }
});

 $('#pcg').blur(function(){
    if ($('#pcg').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
       //alert("Bien");
       }else {
         //alert("Esto no son nÃºmeros");
         $('#errorformulario2').html('');
         $('#errorformulario2').html('caracter invalido');
         $('#errorformulario2').css('display','block').fadeOut(5000);

         }
       return false;
   });
$('#pcg').on('input', function (e) {
    if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
        this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
    }
});

$('#pga').blur(function(){
  if ($('#pga').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario3').html('');
       $('#errorformulario3').html('caracter invalido');
       $('#errorformulario3').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#pga').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});


$('#pd').blur(function(){
  if ($('#pd').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario4').html('');
       $('#errorformulario4').html('caracter invalido');
       $('#errorformulario4').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#pd').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});


$('#pt').blur(function(){
  if ($('#pt').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario5').html('');
       $('#errorformulario5').html('caracter invalido');
       $('#errorformulario5').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#pt').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+/ig,"");
}
});

$('#pce').blur(function(){
  if ($('#pce').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_@_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario6').html('');
       $('#errorformulario6').html('caracter invalido');
       $('#errorformulario6').css('display','block').fadeOut(5000);

       }

     return false;
});
$('#pce').on('input', function (e) {
if (!/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/i.test(this.value)) {
this.value = this.value.replace(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,"");
}
});










$('#snm').blur(function(){
  if ($('#snm').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario11').html('');
       $('#errorformulario11').html('caracter invalido');
       $('#errorformulario11').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#snm').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#scg').blur(function(){
  if ($('#scg').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario12').html('');
       $('#errorformulario12').html('caracter invalido');
       $('#errorformulario12').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#scg').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#sga').blur(function(){
  if ($('#sga').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario13').html('');
       $('#errorformulario13').html('caracter invalido');
       $('#errorformulario13').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#sga').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#sd').blur(function(){
  if ($('#sd').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario14').html('');
       $('#errorformulario14').html('caracter invalido');
       $('#errorformulario14').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#sd').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#st').blur(function(){
  if ($('#st').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario15').html('');
       $('#errorformulario15').html('caracter invalido');
       $('#errorformulario15').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#st').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+/ig,"");
}
});

$('#sce').blur(function(){
  if ($('#sce').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_@_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario16').html('');
       $('#errorformulario16').html('caracter invalido');
       $('#errorformulario16').css('display','block').fadeOut(5000);

       }

     return false;
});
$('#sce').on('input', function (e) {
if (!/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/i.test(this.value)) {
this.value = this.value.replace(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,"");
}
});









$('#tnm').blur(function(){
  if ($('#tnm').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario21').html('');
       $('#errorformulario21').html('caracter invalido');
       $('#errorformulario21').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#tnm').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#tcg').blur(function(){
  if ($('#tcg').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario22').html('');
       $('#errorformulario22').html('caracter invalido');
       $('#errorformulario22').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#tcg').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#tga').blur(function(){
  if ($('#tga').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario23').html('');
       $('#errorformulario23').html('caracter invalido');
       $('#errorformulario23').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#tga').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#td').blur(function(){
  if ($('#td').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario24').html('');
       $('#errorformulario24').html('caracter invalido');
       $('#errorformulario24').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#td').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#tt').blur(function(){
  if ($('#tt').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario25').html('');
       $('#errorformulario25').html('caracter invalido');
       $('#errorformulario25').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#tt').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+/ig,"");
}
});

$('#tce').blur(function(){
  if ($('#tce').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_@_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario26').html('');
       $('#errorformulario26').html('caracter invalido');
       $('#errorformulario26').css('display','block').fadeOut(5000);

       }

     return false;
});
$('#tce').on('input', function (e) {
if (!/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/i.test(this.value)) {
this.value = this.value.replace(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,"");
}
});









$('#cnm').blur(function(){
  if ($('#cnm').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario31').html('');
       $('#errorformulario31').html('caracter invalido');
       $('#errorformulario31').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#cnm').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#ccg').blur(function(){
  if ($('#ccg').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario32').html('');
       $('#errorformulario32').html('caracter invalido');
       $('#errorformulario32').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#ccg').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#cga').blur(function(){
  if ($('#cga').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario33').html('');
       $('#errorformulario33').html('caracter invalido');
       $('#errorformulario33').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#cga').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#cd').blur(function(){
  if ($('#cd').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario34').html('');
       $('#errorformulario34').html('caracter invalido');
       $('#errorformulario34').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#cd').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#ct').blur(function(){
  if ($('#ct').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario35').html('');
       $('#errorformulario35').html('caracter invalido');
       $('#errorformulario35').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#ct').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+/ig,"");
}
});

$('#cce').blur(function(){
  if ($('#cce').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_@_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario36').html('');
       $('#errorformulario36').html('caracter invalido');
       $('#errorformulario36').css('display','block').fadeOut(5000);

       }

     return false;
});
$('#cce').on('input', function (e) {
if (!/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/i.test(this.value)) {
this.value = this.value.replace(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,"");
}
});









$('#uinm').blur(function(){
  if ($('#uinm').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario41').html('');
       $('#errorformulario41').html('caracter invalido');
       $('#errorformulario41').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#uinm').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#uicg').blur(function(){
  if ($('#uicg').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario42').html('');
       $('#errorformulario42').html('caracter invalido');
       $('#errorformulario42').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#uicg').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#uiga').blur(function(){
  if ($('#uiga').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario43').html('');
       $('#errorformulario43').html('caracter invalido');
       $('#errorformulario43').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#uiga').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#uid').blur(function(){
  if ($('#uid').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario44').html('');
       $('#errorformulario44').html('caracter invalido');
       $('#errorformulario44').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#uid').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s]+/ig,"");
}
});

$('#uit').blur(function(){
  if ($('#uit').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario45').html('');
       $('#errorformulario45').html('caracter invalido');
       $('#errorformulario45').css('display','block').fadeOut(5000);

       }
     return false;
});
$('#uit').on('input', function (e) {
if (!/^[ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_-]+/ig,"");
}
});

$('#uice').blur(function(){
  if ($('#uice').val().match(/^[a-zA-Z0-9Ã¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™ÃÃ‰ÃÃ“ÃšÃ±Ã‘Ã¼Ãœ.,/_\s_@_-]+$/)) {
     //alert("Bien");
     }else {
       //alert("Esto no son nÃºmeros");
       $('#errorformulario46').html('');
       $('#errorformulario46').html('caracter invalido');
       $('#errorformulario46').css('display','block').fadeOut(5000);

       }

     return false;
});
$('#uice').on('input', function (e) {
if (!/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/i.test(this.value)) {
this.value = this.value.replace(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,"");
}
});

/*metodo para dividir delegaciones x municipios y filtreo PARA MOSTRAR TODOS LOS MUNICIPIOS*/
$('li.listtaclasssd').click(function(){

  var identytinum =$(this).data('dato');
  var namenum = $(this).data('datos');
  var tok = $('#token').val();
  $('#jz').html("<h4><strong>" +"de"+" "+namenum + "</strong></h4>");
  ///Directorio/public/redfilter
   $.ajax({
         url:"/redfilter",
         headers: {'X-CSRF-TOKEN': tok},
         type: 'POST',
         dataType: 'json',
         data: {credencialclv:identytinum},

         success:function(e){
             //alert(e);

           $('#jz').append("<ul>");
             $(e).each(function(key,valuee){
                //alert(valuee.nommun);
               /*FORMA SIMPLE DE AGREGAR CEROS DE LADO DERECHO*/
              var length=3;
              var  n = valuee.clv.toString();
              while(n.length < length)
              n = "0" + n;
              /*FORMA SIMPLE DE AGREGAR CEROS DE LADO DERECHO*/

                $('#jz').append('<li class="listdetttav" data-datom="'+ valuee.nommun +'" data-datonm="'+valuee.clv+'" ><a data-toggle="modal" data-target="#mg" onclick="detalles('+valuee.clv+')" href="#mg">'+n+ " " + valuee.nommun+'</a></li>'+'<a href="Municipios/pdfspecific/'+valuee.clv+'"><img src="img/pdf_bnt.png" style="width:30px;"></a>'+'<a href="Municipios/xcelspecific/'+valuee.clv+'"><img src="img/XLS.png" style="width:30px;"></a>');
             });
             $('#jz').append("</ul> ");

         }

      });
});

/*
$(function(){
  $(document).bind("contextmenu",function(e){
      return false;
  });
});*/



$('#kt_multiselectsplitter_example_10').on('change', function() {
  $("#outpdf").css('display','none');
  $("#outexcel").css('display','none');
  $("#outdetails").css('display','none');
  $("#delegsellec").html('');
  $("#xbox").css("display","block");
var cadenanum = "";
var selValueavg100 = this.value;
$(this).find("option:selected").each(function(){
//var title1 =  $(this).parent().attr("label");
var title2 =  $(this).text();

$("#munsellec").html('');
$("#delegsellec").html(title2);
//cadenanum = title1.split(" ");
//$("#title1").html('');
//var title1finish = $.trim(title1);
var title2finish = $.trim(title2);


});




  });


  $('#kt_multiselectsplitter_example_2').on('change', function() {
    $("#outpdf").css('display','none');
    $("#outexcel").css('display','none');
    $("#outdetails").css('display','none');

    $("#munsellec").html('');
    $(this).find("option:selected").each(function(){
    //var title1 =  $(this).parent().attr("label");
    var title2 =  $(this).text();
    //$("#delegsellec").html(title2);
    cadenanum = title2.split(" ");
    console.log(title2);
    console.log(cadenanum[0]);
    console.log($("#kt_multiselectsplitter_example_2").val());
    //$("#munsellec").html(' / ' +cadenanum[1]);
    $("#munsellec").html(' / ' + title2 );

    $("#outpdfall").fadeOut(1000);
    $("#outexcelall").fadeOut(2000,function(){
      $("#outpdf").attr('href','Municipios/pdfspecific/'+cadenanum[0]);
      $("#outexcel").attr('href','Municipios/xcelspecific/'+cadenanum[0]);
      $("#infomun").attr('onclick','detalles('+cadenanum[0]+');');

      $("#outpdf").fadeIn(1000);
      $("#outexcel").fadeIn(2000);
      $("#outdetails").fadeIn(2500);

    });




    });
  });


});

function deslplgaiGcem(){
  $('#capdetalle').css('display','block');
}

function detalles(rbk) {

  var tok = $('#token').val();

  $('#nomp').html('');
  $('#carp').html('');
  $('#gadp').html('');
  $('#domp').html('');
  $('#telp').html('');
  $('#eamp').html('');

  $('#noms').html('');
  $('#cars').html('');
  $('#gads').html('');
  $('#doms').html('');
  $('#tels').html('');
  $('#eams').html('');

  $('#nomt').html('');
  $('#cart').html('');
  $('#gadt').html('');
  $('#domt').html('');
  $('#telt').html('');
  $('#eamt').html('');

  $('#nomc').html('');
  $('#carc').html('');
  $('#gadc').html('');
  $('#domc').html('');
  $('#telc').html('');
  $('#eamc').html('');

  $('#nomu').html('');
  $('#caru').html('');
  $('#gadu').html('');
  $('#domu').html('');
  $('#telu').html('');
  $('#eamu').html('');

  $.ajax({
        url:"/textfinish",
        headers: {'X-CSRF-TOKEN': tok},
        type: 'POST',
        dataType: 'json',
        data: {xxx:rbk},
        success:function(w){
            $(w).each(function(key,valuee){
               //alert("clave municipio: "+valuee.nombrep);
              $('#cabecera').html( "Información del Municipio de " + valuee.nommun);
            });
        }
     });

  $.ajax({
        url:"/renderigcmfree",
        headers: {'X-CSRF-TOKEN': tok},
        type: 'POST',
        dataType: 'json',
        data: {xx:rbk},
        success:function(w){

          /*validador de json de objetos*/
          //alert(jQuery.isEmptyObject(w));
          if(jQuery.isEmptyObject(w)==true){
          //alert('verdadero esta vacio');
            $('#nomp').html('AUN NO HAY REGISTRO');
            $('#carp').html('AUN NO HAY REGISTRO');
            $('#gadp').html('AUN NO HAY REGISTRO');
            $('#domp').html('AUN NO HAY REGISTRO');
            $('#telp').html('AUN NO HAY REGISTRO');
            $('#eamp').html('AUN NO HAY REGISTRO');
          }else{
            //alert('falsoesta lleno');
            $(w).each(function(key,v){
                    //alert("clave municipio: "+valuee.nombrep);

                  $('#nomp').html(v.nombrep);
                  $('#carp').html(v.cargop);
                  $('#gadp').html(v.gradoacdp);
                  $('#domp').html(v.domiciliop);
                  $('#telp').html(v.telefonop);
                  $('#eamp').html(v.emailp);

                 });
          }


        }
     });
     $.ajax({
        url:"/renderigcm2free",
        headers: {'X-CSRF-TOKEN': tok},
        type: 'POST',
        dataType: 'json',
        data: {xx:rbk},
        success:function(w){

               //alert("clave municipio: "+valuee.nombres);


              if(jQuery.isEmptyObject(w)==true){
                $('#noms').html('AUN NO HAY REGISTRO');
                $('#cars').html('AUN NO HAY REGISTRO');
                $('#gads').html('AUN NO HAY REGISTRO');
                $('#doms').html('AUN NO HAY REGISTRO');
                $('#tels').html('AUN NO HAY REGISTRO');
                $('#eams').html('AUN NO HAY REGISTRO');
              }else{
                $(w).each(function(key,v){
                $('#noms').html(v.nombres);
                  $('#cars').html(v.cargos);
                  $('#gads').html(v.gradoacds);
                  $('#doms').html(v.domicilios);
                  $('#tels').html(v.telefonos);
                  $('#eams').html(v.emails);
              });
              }


        }
     });
     $.ajax({
        url:"/renderigcm3free",
        headers: {'X-CSRF-TOKEN': tok},
        type: 'POST',
        dataType: 'json',
        data: {xx:rbk},
        success:function(w){

//                 alert("clave municipio: "+valuee.nombret);
              if(jQuery.isEmptyObject(w)==true){
                $('#nomt').html('AUN NO HAY REGISTRO');
                $('#cart').html('AUN NO HAY REGISTRO');
                $('#gadt').html('AUN NO HAY REGISTRO');
                $('#domt').html('AUN NO HAY REGISTRO');
                $('#telt').html('AUN NO HAY REGISTRO');
                $('#eamt').html('AUN NO HAY REGISTRO');
              }else{
                $(w).each(function(key,v){
              $('#nomt').html(v.nombret);
              $('#cart').html(v.cargot);
              $('#gadt').html(v.gradoacdt);
              $('#domt').html(v.domiciliot);
              $('#telt').html(v.telefonot);
              $('#eamt').html(v.emailt);
              });
              }

        }
     });
     $.ajax({
        url:"/renderigcm4free",
        headers: {'X-CSRF-TOKEN': tok},
        type: 'POST',
        dataType: 'json',
        data: {xx:rbk},
        success:function(w){

               //alert("clave municipio: "+valuee.nombrec);
              if(jQuery.isEmptyObject(w)==true){
                $('#nomc').html('AUN NO HAY REGISTRO');
                $('#carc').html('AUN NO HAY REGISTRO');
                $('#gadc').html('AUN NO HAY REGISTRO');
                $('#domc').html('AUN NO HAY REGISTRO');
                $('#telc').html('AUN NO HAY REGISTRO');
                $('#eamc').html('AUN NO HAY REGISTRO');
              }else{
                $(w).each(function(key,v){
              $('#nomc').html(v.nombrec);
              $('#carc').html(v.cargoc);
              $('#gadc').html(v.gradoacdc);
              $('#domc').html(v.domicilioc);
              $('#telc').html(v.telefonoc);
              $('#eamc').html(v.emailc);
              });
              }

        }
     });
     $.ajax({
        url:"/renderigcm5free",
        headers: {'X-CSRF-TOKEN': tok},
        type: 'POST',
        dataType: 'json',
        data: {xx:rbk},
        success:function(w){

               //alert("clave municipio: "+valuee.nombreu);

              if(jQuery.isEmptyObject(w)==true){
                $('#nomu').html('AUN NO HAY REGISTRO');
                $('#caru').html('AUN NO HAY REGISTRO');
                $('#gadu').html('AUN NO HAY REGISTRO');
                $('#domu').html('AUN NO HAY REGISTRO');
                $('#telu').html('AUN NO HAY REGISTRO');
                $('#eamu').html('AUN NO HAY REGISTRO');
              }else{
                $(w).each(function(key,v){
              $('#nomu').html(v.nombreu);
              $('#caru').html(v.cargou);
              $('#gadu').html(v.gradoacdu);
              $('#domu').html(v.domiciliou);
              $('#telu').html(v.telefonou);
              $('#eamu').html(v.emailu);
              });
              }

        }
     });
     //detallesx();


}



function executemun(xa){
  //console.log(xa);
  var hiddentoken = 23;
//  $("#sectionx1").fadeOut(2000,function(){
//$("#sectionx2").fadeIn(3000,function(){

    $("#kt_multiselectsplitter_example_1 > option[value="+xa+"]").attr("selected",true);


      $("#actiavg").html('');
      $("#actiavg").html('<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_2" onclick="detalles('+xa+')">'+
      'Detalles'+
      '</button>');
      $("#deledownload").html('');
      $("#mundownload").html('');
      $("#deledownload2").html('');
      $("#mundownload2").html('');


      $("#deledownload").html('<a href="Municipios/pdf/' + hiddentoken +'"><img src="img/pdf_bnt.png" style="width:63px;"></a>');
      $("#deledownload2").html('<a href="Municipios/excel/' + hiddentoken +'" ><img src="img/XLS.png" style="width:50px;"></a>');
      $("#mundownload").html('<a href="Municipios/pdfspecific/'+xa+'"><img src="img/pdf_bnt.png" style="width:63px;"></a>');
      $("#mundownload2").html('<a href="Municipios/xcelspecific/'+xa+'"><img src="img/XLS.png" style="width:50px;"></a>');
    //});
//  });

}


function filter_data(j){


  switch (j) {
    case 1:
    inverser();
    //$("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
    $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');


      break;
      case 2:
      inverser();
      $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
      //$("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
      $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
      $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
      $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
      $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
      $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
      $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');


        break;
        case 3:
        inverser();
        $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
        $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
        //$("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
        $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
        $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
        $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
        $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
        $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');

          break;
          case 4:
          inverser();
          $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
          $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
          $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
          //$("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
          $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
          $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
          $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
          $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');

            break;
            case 5:
            inverser();
            $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
            $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
            $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
            $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
            //$("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
            $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
            $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
            $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');

              break;
              case 6:
              inverser();
              $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
              $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
              $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
              $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
              $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
              //$("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
              $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
              $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');

                break;
                case 7:
                inverser();
                $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
                $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
                $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
                $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
                $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
                $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
                //$("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
                $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');

                  break;
                  case 8:
                  inverser();
                  $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','none');
                  $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','none');
                  $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','none');
                  $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','none');
                  $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','none');
                  $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','none');
                  $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','none');
                  //$("#kt_multiselectsplitter_example_2 option[value=8]").css('display','none');

                    break;
    default:

  }

  $("#delegsellechidden").html('');
  $("#delegsellechidden").html("<input type='hidden' id='deleg' name='deleg' value='"+j+"'/>");

  $("#kt_multiselectsplitter_example_2").css("display","none");
  $("#outpdfall").css("display","none");
  $("#outexcelall").css("display","none");


  $("#flyavgstudio").fadeIn(2000);

  $("#kt_multiselectsplitter_example_2").fadeIn(1000,function(){

    $("#outpdfall").attr('href','Municipios/pdf/'+j);
    $("#outexcelall").attr('href','Municipios/excel/'+j);


    $("#kt_multiselectsplitter_example_2").val(j);
    $("#outpdfall").fadeIn(1000);
    $("#outexcelall").fadeIn(2000);


  });




}


function inverser(){
  $("#kt_multiselectsplitter_example_2 option[value=1]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=2]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=3]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=4]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=5]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=6]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=7]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=8]").attr('disabled',false);
  $("#kt_multiselectsplitter_example_2 option[value=1]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=2]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=3]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=4]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=5]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=6]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=7]").css('display','block');
  $("#kt_multiselectsplitter_example_2 option[value=8]").css('display','block');
}


function detallesx(){


  Swal.fire({
       html: $('#kt_modal_2').html()
    });

}


/*
for (var i = 1; i <= 8; i++) {

  console.log(i);
}

*/
//https://css-loaders.com/shapes/
//https://www.miguelmanchego.com/2010/como-hacer-un-boton-web-flotante/
//https://es.khanacademy.org/computer-programming/jquery-example-submit/4745335285612544
