<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anggota_rombel extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $table = 'anggota_rombel';
    protected $primaryKey = 'anggota_rombel_id';
    protected $guarded = [];
    public function rombongan_belajar(){
		  return $this->hasOne(Rombongan_belajar::class, 'rombongan_belajar_id', 'rombongan_belajar_id');
    }
}
