<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Sekolah;

class GenerateJenjang extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:jenjang';

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
        Sekolah::orderBy('sekolah_id')->whereNull('bentuk_pendidikan_id')->chunk(200, function ($sekolah) {
            foreach ($sekolah as $s) {
                $response = Http::get('http://103.40.55.242/erapor_server/sync/get_sekolah/'.$s->npsn);
                if($response->successful()){
                    $data = $response->object();
                    foreach($data->data as $d){
                        if($d->password){
                            $s->bentuk_pendidikan_id = $d->bentuk_pendidikan_id;
                            $s->save();
                            $this->info($s->nama.' berhasil diperbaharui');
                            break;
                        }
                    }
                } else {
                    $this->call('generate:jenjang');
                    //dump($s->npsn);
                    //dump($response);
                }
            }
        });
    }
}
