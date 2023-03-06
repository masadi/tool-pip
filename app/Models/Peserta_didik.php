<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta_didik extends Model
{
    use HasFactory;
    public $incrementing = false;
	protected $table = 'peserta_didik';
	protected $primaryKey = 'peserta_didik_id';
	protected $guarded = [];
	const UPDATED_AT = 'last_update';
	public function anggota_rombel(){
		return $this->hasOne(Anggota_rombel::class, 'peserta_didik_id', 'peserta_didik_id');
    }
	public function kelayakan(){
		return $this->hasOne(Layak::class, 'id_layak_pip', 'id_layak_pip');
    }
}
