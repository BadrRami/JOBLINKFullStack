<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TopOffresMail extends Mailable
{
    use Queueable, SerializesModels;

     public $offres;

    public function __construct($offres)
    {
        $this->offres = $offres;
    }

    public function build()
    {
        return $this->subject("🎯 Vos 3 meilleures offres proches")
            ->view('emails.top-offres');
    }
}
