<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Tesorero extends Model
{
    use HasFactory;
    use Notifiable;
    //
    protected $fillable = [
        'nombret', 'cargot', 'gradoacdt','domiciliot','telefonot','emailt','idepmun','idelegmun',
    ];

    /*DEFINICION DE LLAVE PRIMARYA*/
    protected $primaryKey = 'id';
}
