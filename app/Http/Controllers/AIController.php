<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    public function ask(Request $request)
{
    $message = $request->input('message');

    if (!$message) {
        return response()->json(['reply' => 'Message vide'], 400);
    }

    $prompt = "Tu es un assistant JobLink.ma. Réponds clairement.\n\nQuestion: $message";

    try {
        $response = Http::timeout(180)  // 3 minutes
              ->post('http://127.0.0.1:11434/api/generate', [
                'model'  => 'llama3',
                'prompt' => $prompt,
                'stream' => false,
            ]);

        if (!$response->ok()) {
            return response()->json([
                'reply' => 'Erreur Ollama: ' . $response->status()
            ], 500);
        }

        $data = $response->json();
        return response()->json(['reply' => $data['response'] ?? 'Pas de réponse']);

    } catch (\Exception $e) {
        return response()->json(['reply' => 'Exception: ' . $e->getMessage()], 500);
    }
}
}