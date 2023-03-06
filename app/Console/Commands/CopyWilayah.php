<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Mst_wilayah;

class CopyWilayah extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'copy:wilayah';

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
        Mst_wilayah::on('simazah')->orderBy('id_level_wilayah')->orderBy('kode_wilayah')->chunk(200, function ($wilayah) {
            foreach($wilayah as $w){
                Mst_wilayah::firstOrCreate(
                    [
                        'kode_wilayah' => $w->kode_wilayah,
                    ],
                    [
                        'nama' => $w->nama,
                        'id_level_wilayah' => $w->id_level_wilayah,
                        'mst_kode_wilayah' => $w->mst_kode_wilayah,
                        'negara_id' => $w->negara_id,
                        'asal_wilayah' => $w->asal_wilayah,
                        'kode_bps' => $w->kode_bps,
                        'kode_dagri' => $w->kode_dagri,
                        'kode_keu' => $w->kode_keu,
                        'created_at' => $w->created_at,
                        'updated_at' => $w->updated_at,
                        'deleted_at' => $w->deleted_at,
                        'last_sync' => $w->last_sync,
                    ]
                );
                //dump($w->id_level_wilayah);
            }
        });
    }
}
