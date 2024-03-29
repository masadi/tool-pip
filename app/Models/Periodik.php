<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasCompositePrimaryKey;

class Periodik extends Model
{
    use HasFactory, HasCompositePrimaryKey;
    public $incrementing = false;
	public $keyType = 'string';
	protected $table = 'peserta_didik_longitudinal';
	protected $primaryKey = ['peserta_didik_id', 'semester_id'];
	protected $guarded = [];
    const UPDATED_AT = 'last_update';
    const CREATED_AT = 'create_date';
}
