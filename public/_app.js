  $(document).ready(function(){
   /*http://jquery-manual.blogspot.mx/2012/05/expresiones-regulares-con-jquery-match.html*/
   //https://css-loaders.com/shapes/
   //https://www.miguelmanchego.com/2010/como-hacer-un-boton-web-flotante/
   //https://es.khanacademy.org/computer-programming/jquery-example-submit/4745335285612544


	  $('#name').blur(function(){
		  if ($('#name').val().match(/^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/)) {
			   //alert("Bien");
			   }else {
				   //alert("Esto no son números");
				   $('#rorre').html('');
				   $('#rorre').html('caracter invalido');
				   $('#rorre').css('display','block').fadeOut(5000);
				   }
			   return false;
	   });
	  $('#name').on('input', function (e) {
		  if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]*$/i.test(this.value)) {
		    this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+/ig,"");
		  }
		  });

	  $('#password').blur(function(){
		  if ($('#password').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/)) {
			   //alert("Bien");
			   }else {
				   //alert("Esto no son números");
				   $('#rorre2').html('');
				   $('#rorre2').html('caracter invalido');
				   $('#rorre2').css('display','block').fadeOut(5000);
				   }
			   return false;
	   });
	  $('#password').on('input', function (e) {
		  if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]*$/i.test(this.value)) {
		    this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+/ig,"");
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
   $('li.classsd').click(function (){
     $("#body").css("cursor", "wait");
       var clavemunic =$(this).data('dato');
       /*ACTUALIZACION CON AJAX*/
       var tok = $('#token').val();
         $.ajax({
            url:"dashboard/avgrenderigecem",
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
                   var time_haba=  time_studio_re_structure(valuee.updated_at);
                   $('#ultim').html(time_haba);
                   /*set code for Ing abraham date 14-02-2020*/
                   /*created_at*/

                });
                $('#actionviewlist').fadeOut(3000,function(){
                $('#actionviewmun').fadeIn(5000,function(){
                  $("#body").css("cursor", "default");
                  $('#flyavgstudio').fadeIn(2000);
                });

                });


            }
         });
         $.ajax({
            url:"dashboard/avgrenderigecem2",
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

                   var time_haba=  time_studio_re_structure(valuee.updated_at);
                   $('#ultim2').html(time_haba);
                   /*set code for Ing abraham date 14-02-2020*/
                   /*created_at*/

                });
            }
         });
         $.ajax({
            url:"dashboard/avgrenderigecem3",
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

                   var time_haba=  time_studio_re_structure(valuee.updated_at);
                   $('#ultim3').html(time_haba);
                   /*set code for Ing abraham date 14-02-2020*/
                   /*created_at*/
                });
            }
         });
         $.ajax({
            url:"dashboard/avgrenderigecem4",
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
                   var time_haba=  time_studio_re_structure(valuee.updated_at);
                   $('#ultim4').html(time_haba);
                   /*set code for Ing abraham date 14-02-2020*/
                   /*created_at*/
                });
            }
         });
         $.ajax({
            url:"dashboard/avgrenderigecem5",
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

                   var time_haba=  time_studio_re_structure(valuee.updated_at);
                   $('#ultim5').html(time_haba);
                   /*set code for Ing abraham date 14-02-2020*/
                   /*created_at*/
                });
            }
         });


   });



   /*VALIDACIONES PARA EL FORMULARIO*/

   $('#pnm').blur(function(){
		  if ($('#pnm').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
			   //alert("Bien");
			   }else {
				   //alert("Esto no son números");
				   $('#errorformulario').html('');
				   $('#errorformulario').html('caracter invalido');
				   $('#errorformulario').css('display','block').fadeOut(5000);

				   }
			   return false;
	   });
   $('#pnm').on('input', function (e) {
	    if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
	        this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
	    }
	});

   $('#pcg').blur(function(){
		  if ($('#pcg').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
			   //alert("Bien");
			   }else {
				   //alert("Esto no son números");
				   $('#errorformulario2').html('');
				   $('#errorformulario2').html('caracter invalido');
				   $('#errorformulario2').css('display','block').fadeOut(5000);

				   }
			   return false;
	   });
$('#pcg').on('input', function (e) {
	    if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
	        this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
	    }
	});

$('#pga').blur(function(){
	  if ($('#pga').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario3').html('');
			   $('#errorformulario3').html('caracter invalido');
			   $('#errorformulario3').css('display','block').fadeOut(5000);

			   }
		   return false;
 });
$('#pga').on('input', function (e) {
  if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
      this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
  }
});


$('#pd').blur(function(){
	  if ($('#pd').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario4').html('');
			   $('#errorformulario4').html('caracter invalido');
			   $('#errorformulario4').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#pd').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});


$('#pt').blur(function(){
	  if ($('#pt').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario5').html('');
			   $('#errorformulario5').html('caracter invalido');
			   $('#errorformulario5').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#pt').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+/ig,"");
}
});

$('#pce').blur(function(){
	  if ($('#pce').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_@_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
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
	  if ($('#snm').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario11').html('');
			   $('#errorformulario11').html('caracter invalido');
			   $('#errorformulario11').css('display','block').fadeOut(5000);

			   }
		   return false;
 });
$('#snm').on('input', function (e) {
  if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
      this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
  }
});

$('#scg').blur(function(){
	  if ($('#scg').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario12').html('');
			   $('#errorformulario12').html('caracter invalido');
			   $('#errorformulario12').css('display','block').fadeOut(5000);

			   }
		   return false;
 });
$('#scg').on('input', function (e) {
  if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
      this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
  }
});

$('#sga').blur(function(){
	  if ($('#sga').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario13').html('');
			   $('#errorformulario13').html('caracter invalido');
			   $('#errorformulario13').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#sga').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#sd').blur(function(){
	  if ($('#sd').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario14').html('');
			   $('#errorformulario14').html('caracter invalido');
			   $('#errorformulario14').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#sd').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#st').blur(function(){
	  if ($('#st').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario15').html('');
			   $('#errorformulario15').html('caracter invalido');
			   $('#errorformulario15').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#st').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+/ig,"");
}
});

$('#sce').blur(function(){
	  if ($('#sce').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_@_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
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
	  if ($('#tnm').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario21').html('');
			   $('#errorformulario21').html('caracter invalido');
			   $('#errorformulario21').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#tnm').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#tcg').blur(function(){
	  if ($('#tcg').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario22').html('');
			   $('#errorformulario22').html('caracter invalido');
			   $('#errorformulario22').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#tcg').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
    this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#tga').blur(function(){
	  if ($('#tga').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario23').html('');
			   $('#errorformulario23').html('caracter invalido');
			   $('#errorformulario23').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#tga').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#td').blur(function(){
	  if ($('#td').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario24').html('');
			   $('#errorformulario24').html('caracter invalido');
			   $('#errorformulario24').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#td').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#tt').blur(function(){
	  if ($('#tt').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario25').html('');
			   $('#errorformulario25').html('caracter invalido');
			   $('#errorformulario25').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#tt').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+/ig,"");
}
});

$('#tce').blur(function(){
	  if ($('#tce').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_@_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
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
	  if ($('#cnm').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario31').html('');
			   $('#errorformulario31').html('caracter invalido');
			   $('#errorformulario31').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#cnm').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#ccg').blur(function(){
	  if ($('#ccg').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario32').html('');
			   $('#errorformulario32').html('caracter invalido');
			   $('#errorformulario32').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#ccg').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
  this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#cga').blur(function(){
	  if ($('#cga').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario33').html('');
			   $('#errorformulario33').html('caracter invalido');
			   $('#errorformulario33').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#cga').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#cd').blur(function(){
	  if ($('#cd').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario34').html('');
			   $('#errorformulario34').html('caracter invalido');
			   $('#errorformulario34').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#cd').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#ct').blur(function(){
	  if ($('#ct').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario35').html('');
			   $('#errorformulario35').html('caracter invalido');
			   $('#errorformulario35').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#ct').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+/ig,"");
}
});

$('#cce').blur(function(){
	  if ($('#cce').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_@_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
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
	  if ($('#uinm').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario41').html('');
			   $('#errorformulario41').html('caracter invalido');
			   $('#errorformulario41').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#uinm').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#uicg').blur(function(){
	  if ($('#uicg').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario42').html('');
			   $('#errorformulario42').html('caracter invalido');
			   $('#errorformulario42').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#uicg').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#uiga').blur(function(){
	  if ($('#uiga').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario43').html('');
			   $('#errorformulario43').html('caracter invalido');
			   $('#errorformulario43').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#uiga').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#uid').blur(function(){
	  if ($('#uid').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario44').html('');
			   $('#errorformulario44').html('caracter invalido');
			   $('#errorformulario44').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#uid').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s]+/ig,"");
}
});

$('#uit').blur(function(){
	  if ($('#uit').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
			   $('#errorformulario45').html('');
			   $('#errorformulario45').html('caracter invalido');
			   $('#errorformulario45').css('display','block').fadeOut(5000);

			   }
		   return false;
});
$('#uit').on('input', function (e) {
if (!/^[ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]*$/i.test(this.value)) {
this.value = this.value.replace(/[^ a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_-]+/ig,"");
}
});

$('#uice').blur(function(){
	  if ($('#uice').val().match(/^[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ.,/_\s_@_-]+$/)) {
		   //alert("Bien");
		   }else {
			   //alert("Esto no son números");
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


// Attach an event for when the user submits the form
       $('form').on('submit', function(event) {

           // Prevent the page from reloading
           event.preventDefault();

           // Set the text-output span to the value of the first input
           var $input = $(this).find('input');
           var input = $input.val();
           //console.log(input);

           var datos = $("#formx").serialize();
           //console.log(datos);

           $.ajax({
             url : '../dashboard/captr',
             data : datos,
             type : 'POST',
             dataType : 'HTML',
             beforeSend: function() {
               //alerta de datos
               $("#formid_").css("display","none");
                 $("#efectload").fadeIn(3500);
             },
             success: function(resulx) {
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

               if( resulx == '10' ){
                 console.log(resulx);
                 $("#efectload").fadeOut(1500,function(){
                   $("#formid_").fadeIn(2500,function(){
                     render_dataupdate();
                   });
                 });

               }else{
                 //swtealert

               }

             },
             error : function(xhr, status) {
              console.log(status);
              //swtealert
             },
             complete : function(xhr, status) {
              console.log(status);

             }
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
            	  $('#cabecera').html(valuee.nommun);
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









  }



function returnavgStudio(){

  $('#actionviewmun').fadeOut(3000,function(){
  $('#actionviewlist').fadeIn(5000,function(){
    $("#body").css("cursor", "default");

    $('#flyavgstudio').fadeOut(200);
  });
});

}


function  time_studio_re_structure(xxxxx){
  var date = new Date(xxxxx); const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
  const formatDate = (date) => {
     let formatted_date = date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
   return formatted_date; }
  //console.log(formatDate(date));

  var date = new Date(xxxxx);
  result = date.toLocaleTimeString();
  //console.log(result);
  var resultadofinalfechavgstudio = formatDate(date) + ", "+ result;
  //console.log(resultadofinalfechavgstudio);
  return resultadofinalfechavgstudio;
}

function render_dataupdate(){
  var clavemunic = $('#hiddenigcmavg').val();
  //console.log(pin);
  /*ACTUALIZACION CON AJAX*/
  var tok = $('#token').val();
    $.ajax({
       url:"dashboard/avgrenderigecem",
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
              var time_haba=  time_studio_re_structure(valuee.updated_at);
              $('#ultim').html(time_haba);
              /*set code for Ing abraham date 14-02-2020*/
              /*created_at*/

           });
           $('#actionviewlist').fadeOut(3000,function(){
           $('#actionviewmun').fadeIn(5000,function(){
             $("#body").css("cursor", "default");
             $('#flyavgstudio').fadeIn(2000);
           });

           });


       }
    });
    $.ajax({
       url:"dashboard/avgrenderigecem2",
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

              var time_haba=  time_studio_re_structure(valuee.updated_at);
              $('#ultim2').html(time_haba);
              /*set code for Ing abraham date 14-02-2020*/
              /*created_at*/

           });
       }
    });
    $.ajax({
       url:"dashboard/avgrenderigecem3",
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

              var time_haba=  time_studio_re_structure(valuee.updated_at);
              $('#ultim3').html(time_haba);
              /*set code for Ing abraham date 14-02-2020*/
              /*created_at*/
           });
       }
    });
    $.ajax({
       url:"dashboard/avgrenderigecem4",
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
              var time_haba=  time_studio_re_structure(valuee.updated_at);
              $('#ultim4').html(time_haba);
              /*set code for Ing abraham date 14-02-2020*/
              /*created_at*/
           });
       }
    });
    $.ajax({
       url:"dashboard/avgrenderigecem5",
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

              var time_haba=  time_studio_re_structure(valuee.updated_at);
              $('#ultim5').html(time_haba);
              /*set code for Ing abraham date 14-02-2020*/
              /*created_at*/
           });
       }
    });


}
