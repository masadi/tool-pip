<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Sekolah;
use App\Models\Peserta_didik;
use App\Models\Semester;
use App\Models\Layak;
use App\Models\Periodik;
use Storage;

class DapodikController extends Controller
{
    public function index(){
        $data = Sekolah::get();
        return response()->json($data);
    }
    public function pd(){
        $data = Peserta_didik::with([
            'kelayakan', 
            'periodik' => function($query){
                $query->where('semester_id', $this->semester_id());
            },
            'rombongan_belajar' => function($query){
                $query->where('semester_id', $this->semester_id());
            },
        ])->where($this->kondisi())->orderBy(request()->sortby, request()->sortbydesc)
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
    public function periodik(){
        $find = Periodik::where(function($query){
            $query->where('peserta_didik_id', request()->peserta_didik_id);
            $query->where('semester_id', $this->semester_id());
        })->first();
        if($find){
            $find->tinggi_badan = request()->tinggi;
            $find->berat_badan = request()->berat;
            $find->lingkar_kepala = request()->kepala;
            $find->jumlah_saudara_kandung = request()->saudara;
            $insert = $find->save();
        } else {
            $insert = Periodik::create([
                'peserta_didik_id' => request()->peserta_didik_id,
                'semester_id' => $this->semester_id(),
                'tinggi_badan' => request()->tinggi,
                'berat_badan' => request()->berat,
                'lingkar_kepala' => request()->kepala,
                'jumlah_saudara_kandung' => request()->saudara,
                'jarak_rumah_ke_sekolah' => 1,
                'waktu_tempuh_ke_sekolah' => 1,
                'updater_id' => Str::uuid(),
            ]);
        }
        if($insert){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil!',
                'text' => 'Data Periodik '.request()->nama.' berhasil disimpan!',
                'request' => request()->all(),
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Data Periodik '.request()->nama.' gagal disimpan!. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
}
