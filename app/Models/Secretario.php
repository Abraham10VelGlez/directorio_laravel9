<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Secretario extends Model
{
    use HasFactory;
    use Notifiable;
    //
    protected $fillable = [
        'nombres', 'cargos', 'gradoacds','domicilios','telefonos','emails','idepmun','idelegmun',
    ];

    /*DEFINICION DE LLAVE PRIMARYA*/
    protected $primaryKey = 'id';
}
