<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
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
            //CLASE USUARIO
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:presidentes,email',
            'password' => 'required|min:5|max:9',
            //CLASE PRESIDENTE
            'pnm' => 'required|string',
            'pcg' => 'required|string',
            'pga' => 'required|string',
            'pd' => 'required|string',
            'pt' => 'required|string',
            //'emailp' => 'required|UNICO:SER UNICO EN LA CLASE DE PRESIDENTE',            
            //'pce' => 'required|email|unique:presidentes,email', 
            //CLASE SECRETARIO
            'snm' => 'required|string',
            'scg' => 'required|string',
            'sga' => 'required|string',
            'sd' => 'required|string',
            'st' => 'required|string',
            //'sce' => 'required|email|unique:presidentes,email',            
            //CLASE TESORERO
            'tnm' => 'required|string',
            'tcg' => 'required|string',
            'tga' => 'required|string',
            'td' => 'required|string',
            'tt' => 'required|string',
            //'tce' => 'required|email|unique:presidentes,email',
            //CLASE CATASTRO
            'cnm' => 'required|string',
            'ccg' => 'required|string',
            'cga' => 'required|string',
            'cd' => 'required|string',
            'ct' => 'required|string',
            //'cce' => 'required|email|unique:presidentes,email',
            //CLASE UIPPE
            'uinm' => 'required|string',
            'uicg' => 'required|string',
            'uiga' => 'required|string',
            'uid' => 'required|string',
            'uit' => 'required|string',
            //'uice' => 'required|email|unique:presidentes,email',
            
            
        ];
    }
}
