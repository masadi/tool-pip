<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Mst_wilayah;
use App\Models\Sekolah;

class GenerateWilayah extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:wilayah';

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
        Sekolah::withCount('ptk')->orderBy('sekolah_id')->chunk(200, function ($sekolah) {
            foreach ($sekolah as $s) {
                $wilayah = Mst_wilayah::with(['parrentRecursive'])->find($s->kode_wilayah);
                if ($wilayah && $wilayah->parrentRecursive) {
                    $s->kecamatan = $wilayah->parrentRecursive->nama;
                    $s->kecamatan_id = $wilayah->parrentRecursive->kode_wilayah;
                    if ($wilayah->parrentRecursive->parrentRecursive) {
                        $s->kabupaten = $wilayah->parrentRecursive->parrentRecursive->nama;
                        $s->kabupaten_id = $wilayah->parrentRecursive->parrentRecursive->kode_wilayah;
                        if ($wilayah->parrentRecursive->parrentRecursive->parrentRecursive) {
                            $s->provinsi = $wilayah->parrentRecursive->parrentRecursive->parrentRecursive->nama;
                            $s->provinsi_id = $wilayah->parrentRecursive->parrentRecursive->parrentRecursive->kode_wilayah;
                        }
                    }
                }
                if ($s->ptk_count) {
                    $s->sinkron = 1;
                }
                $s->save();
                $this->info($s->nama.' berhasil di update!');
            }
        });
    }
}
