<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class presidente extends Model
{
    use HasFactory;
    use Notifiable;
    //
    protected $fillable = [
        'nombrep', 'cargop', 'gradoacdp','domiciliop','telefonop','emailp','idepmun','idelegmun','created_at', 'updated_at'
    ];

    /*DEFINICION DE LLAVE PRIMARYA*/
    protected $primaryKey = 'id';
}
