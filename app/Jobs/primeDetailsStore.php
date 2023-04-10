<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Queue\SerializesModels;

class primeDetailsStore implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $personnes;
    protected $prime;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($personnes,$prime)
    {
        $this->personnes=$personnes;
        $this->prime=$prime;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->personnes as $personne) {
            DB::insert('insert into prime_personne(prime_id,personne_id) values (?,?)', [$this->prime->id,$personne->id]);
        }
    }
}
