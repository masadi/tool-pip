<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use App\Models\Sekolah;
use App\Models\Peserta_didik;
use App\Models\Semester;
use Storage;

class DapodikController extends Controller
{
    public function index(){
        $data = Sekolah::get();
        return response()->json($data);
    }
    public function pd(){
        $data = Peserta_didik::where($this->kondisi())->orderBy('nama')
        ->when(request()->q, function($query) {
            $query->where($this->kondisi());
            $query->where('nama', 'ilike', '%'.request()->q.'%');
        })
        ->paginate(request()->per_page);
        return response()->json(['status' => 'success', 'data' => $data]);
    }
    private function kondisi(){
        return function($query){
            $query->whereHas('anggota_rombel', function($query){
                $query->whereHas('rombongan_belajar', function($query){
                    $query->where('semester_id', $this->semester_id());
                    $query->where('sekolah_id', request()->sekolah_id);
                });
            });
        };
    }
    private function semester_id(){
        $data = Semester::where('periode_aktif', 1)->first();
        return $data->semester_id;
    }
}
