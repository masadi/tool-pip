<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Mst_wilayah;
use App\Models\Rekapitulasi;

class ProsesRekap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'proses:rekap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data_wilayah = Mst_wilayah::withCount([
			'ptk_provinsi as ptk_pengguna',
			'pd_provinsi as pd_terproses',
			'sekolah_provinsi as smk_nasional', 
			'sekolah_provinsi as smk_pengguna' => function($query){
				$query->where('sinkron', 1);
			},
		])->where('id_level_wilayah', 1)->orderBy('kode_wilayah')->get();
        foreach($data_wilayah as $wilayah){
            Rekapitulasi::updateOrCreate(
                [
                    'data' => 'provinsi',
                    'field' => 'smk_nasional',
                    'value' => $wilayah->kode_wilayah,
                ],
                [
                    'jml' => $wilayah->smk_nasional,
                ]
            );
            Rekapitulasi::updateOrCreate(
                [
                    'data' => 'provinsi',
                    'field' => 'smk_pengguna',
                    'value' => $wilayah->kode_wilayah,
                ],
                [
                    'jml' => $wilayah->smk_pengguna,
                ]
            );
            Rekapitulasi::updateOrCreate(
                [
                    'data' => 'provinsi',
                    'field' => 'ptk_pengguna',
                    'value' => $wilayah->kode_wilayah,
                ],
                [
                    'jml' => $wilayah->ptk_pengguna,
                ]
            );
            Rekapitulasi::updateOrCreate(
                [
                    'data' => 'provinsi',
                    'field' => 'pd_terproses',
                    'value' => $wilayah->kode_wilayah,
                ],
                [
                    'jml' => $wilayah->pd_terproses,
                ]
            );
            $this->info($wilayah->nama. ' terproses');
        }
    }
}
