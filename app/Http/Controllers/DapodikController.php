<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use App\Models\Sekolah;
use App\Models\Peserta_didik;
use App\Models\Semester;
use App\Models\Layak;
use Storage;

class DapodikController extends Controller
{
    public function index(){
        $data = Sekolah::get();
        return response()->json($data);
    }
    public function pd(){
        $data = Peserta_didik::with(['kelayakan'])->where($this->kondisi())->orderBy('nama')
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
    public function kelayakan(){
        $data = Layak::whereNull('expired_date')->orderBy('id_layak_pip')->get();
        return response()->json($data);
    }
    public function layak(){
        $data = Peserta_didik::find(request()->peserta_didik_id);
        $data->layak_pip = request()->layak_pip;
        $data->id_layak_pip = request()->id_layak_pip;
        if($data->save()){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil!',
                'text' => 'Status Kelayakan PIP berhasil disimpan!',
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Status Kelayakan PIP gagal disimpan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
}
