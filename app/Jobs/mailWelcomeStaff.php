<?php

namespace App\Jobs;

use App\Mail\staffWelcome;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class mailWelcomeStaff implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
     protected $staff;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($staff)
    {
       $this->staff=$staff;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $staff=$this->staff;
        $email = new staffWelcome($staff);
        Mail::to($staff->email)->send($email);
    }
}
