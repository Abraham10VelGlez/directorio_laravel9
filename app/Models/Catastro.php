<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Catastro extends Model
{
    use HasFactory;
    use Notifiable;
    //
    protected $fillable = [
        'nombrec', 'cargoc', 'gradoacdc','domicilioc','telefonoc','emailc','idepmun','idelegmun',
    ];

    /*DEFINICION DE LLAVE PRIMARYA*/
    protected $primaryKey = 'id';
}
