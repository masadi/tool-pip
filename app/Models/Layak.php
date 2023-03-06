<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Layak extends Model
{
    use HasFactory;
    protected $table = 'ref.alasan_layak_pip';
    protected $primaryKey = 'id_layak_pip';
}
