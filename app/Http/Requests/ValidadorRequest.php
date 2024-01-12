<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidadorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [ 
            //AQUI VAN IR LOS ARTIBUTOS O CAMPOS QUE SE DECLARARON ANTES EN CADA MODELO...
            // PARA VALIDAR EL FORMULARIO AL MOMENTO QUE SE ENVIE AL CAPTURAR O GUARDAR...

          //CLASE PRESIDENTE
            'pnm' => 'required|string',
            'pcg' => 'required|string',
            'pga' => 'required|string',
            'pd' => 'required|string',
            'pt' => 'required|string',
            //'emailp' => 'required|UNICO:SER UNICO EN LA CLASE DE PRESIDENTE',            
            //'pce' => 'required|unique:presidentes,emailp',
            //'pce' => 'required|email',
            //CLASE SECRETARIO
            'snm' => 'required|string',
            'scg' => 'required|string',
            'sga' => 'required|string',
            'sd' => 'required|string',
            'st' => 'required|string',
            //'sce' => 'required|unique:secretarios,emails',            
            //'sce' => 'required|email',
            //CLASE TESORERO
            'tnm' => 'required|string',
            'tcg' => 'required|string',
            'tga' => 'required|string',
            'td' => 'required|string',
            'tt' => 'required|string',
            //'tce' => 'required|unique:tesoreros,emailt',
            //'tce' => 'required|email',
            //CLASE CATASTRO
            'cnm' => 'required|string',
            'ccg' => 'required|string',
            'cga' => 'required|string',
            'cd' => 'required|string',
            'ct' => 'required|string',
            //'cce' => 'required|unique:catastros,emailc',
           // 'cce' => 'required|email',
            //CLASE UIPPE
            'uinm' => 'required|string',
            'uicg' => 'required|string',
            'uiga' => 'required|string',
            'uid' => 'required|string',
            'uit' => 'required|string',
            //'uice' => 'required|unique:uippes,emailu',
            //'uice' => 'required|email',
        ];
    }
}
