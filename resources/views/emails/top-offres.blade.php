<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Offres proches</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">

    <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:10px;">

        <h2 style="color:#2c3e50;">
            🎯 Vos opportunités proches de vous
        </h2>

        <p>Bonjour,</p>

        <p>
            Voici les 3 meilleures offres d’emploi proches de votre localisation sélectionnées pour vous :
        </p>

        <hr>

        @foreach($offres as $offre)
            <div style="padding:10px;border-bottom:1px solid #eee;">
                <h3 style="margin:0;color:#34495e;">
                    {{ $offre->titre }}
                </h3>

                <p style="margin:5px 0;">
                    📍 Distance : <strong>{{ round($offre->distance, 2) }} km</strong>
                </p>

                <p style="margin:5px 0;color:#555;">
                    {{ $offre->localisation }}
                </p>
            </div>
        @endforeach

        <br>

        <p style="color:#888;">
            JobLink.ma - Connecter les talents aux opportunités proches
        </p>

    </div>

</body>
</html>