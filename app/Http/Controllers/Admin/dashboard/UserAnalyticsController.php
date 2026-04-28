<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Carbon\Carbon;
class UserAnalyticsController extends Controller
{
    public function index()
    {
        return Insertia::render('Admin/Dashboard/Users/part1',[
            'users_per_day' => $this->usersPerDay(),
            'gender_stats' => $this->genderStats(),
            'age_stats' => $this->ageStats(),
        ]);
    }

    private function usersPerDay()
    {
        return User::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->get();
    }

    private function genderStats()
    {
        return User::selectRaw('gender, COUNT(*) as total')
            ->groupBy('gender')
            ->get();
    }

    private function ageStats()
    {
        return User::all()
            ->map(fn($u) => \Carbon\Carbon::parse($u->birth_date)->age)
            ->groupBy(fn($age) => $age)
            ->map(fn($group) => count($group));
    }
}

