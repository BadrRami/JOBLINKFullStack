<?php
namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Carbon\Carbon;

class UserAnalyticsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard/Users/StatsPage', [
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
            ->map(fn($u) => Carbon::parse($u->birth_date)->age)
            ->groupBy(fn($age) => $age)
            ->map(fn($group) => count($group));
    }
}