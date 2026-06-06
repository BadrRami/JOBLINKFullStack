<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Offre;
use Illuminate\Support\Facades\Mail;
use App\Mail\TopOffresMail;

class SendTopOffresEmails extends Command
{
    protected $signature = 'emails:offres-proches';

    protected $description = 'Envoi des 3 meilleures offres proches tous les 3 jours';

    public function handle()
    {
        $users = User::whereHas('employee')->get();

        foreach ($users as $user) {

            $employee = $user->employee;

            if (!$employee || !$employee->latitude || !$employee->longitude) {
                continue;
            }

            $offres = Offre::selectRaw("
                offres.*,
                (
                    6371 * acos(
                        cos(radians(?))
                        * cos(radians(latitude))
                        * cos(radians(longitude) - radians(?))
                        + sin(radians(?))
                        * sin(radians(latitude))
                    )
                ) AS distance
            ", [
                $employee->latitude,
                $employee->longitude,
                $employee->latitude
            ])
            ->whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->orderBy('distance')
            ->limit(3)
            ->get();

            Mail::to($user->email)
                ->send(new TopOffresMail($offres));
        }

        $this->info('Emails envoyés avec succès');
    }
}