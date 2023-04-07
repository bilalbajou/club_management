<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class updateEntrainement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'entrainementTerminé';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Marquer entrainement terminé';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $entrainements = \App\Models\Entrainement::where('date', '<', now())->get();
        foreach ($entrainements as $entrainement) {
            $entrainement->update(['etat' => 'terminé']);
        }
    }
}
