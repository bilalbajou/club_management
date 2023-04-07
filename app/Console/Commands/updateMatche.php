<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class updateMatche extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'matcheTerminé';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Marquer le matcher terminé';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $matches = \App\Models\Matche::where('date', '<', now())->get();
        foreach ($matches as $matche) {
            $matche->update(['etat' => 'terminé']);
        }
    }
}
