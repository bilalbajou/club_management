<?php

namespace App\Jobs;

use App\Mail\joueurWelcome;
use Illuminate\Support\Facades\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class mailWelcomeJoueur implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $joueur;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($joueur)
    {
        $this->joueur=$joueur;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $joueur=$this->joueur;
        $email = new joueurWelcome($joueur);
        Mail::to($joueur->email)->send($email);
    }
}
