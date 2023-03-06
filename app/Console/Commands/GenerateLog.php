<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use App\Models\Sync_log;
use App\Models\Sekolah;

class GenerateLog extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:log';

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
        $date = Carbon::now()->subDays(30);
        $period = CarbonPeriod::create($date->format('Y-m-d'), now()->format('Y-m-d'));
        $jml_sinkron = [];
        $tanggal = [];
        foreach ($period as $date) {
            $tanggal[] = $date->format('Y-m-d');
        }
        foreach ($tanggal as $last_sync) {
            $jml_sinkron[] = [
                'tanggal' => $last_sync,
                'jml' => Sekolah::where('sinkron', 1)->whereDate('last_sync', $last_sync)->count(),
            ];
        }
        foreach($jml_sinkron as $jml){
            Sync_log::updateOrCreate(
                [
                    'tanggal' => $jml['tanggal'],
                ],
                [
                    'jml' => $jml['jml'],
                ]
            );
        }
    }
}
