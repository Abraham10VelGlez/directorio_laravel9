<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Uippe extends Model
{
    use HasFactory;
    use Notifiable;
    //
    protected $fillable = [
        'nombreu', 'cargou', 'gradoacdu','domiciliou','telefonou','emailu','idepmun','idelegmun',
    ];

    /*DEFINICION DE LLAVE PRIMARYA*/
    protected $primaryKey = 'id';
}
