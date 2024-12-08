```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        // Fetching some example data for the dashboard
        $userCount = User::count();
        $postCount = Post::count();
        $recentUsers = User::latest()->take(5)->get();
        $recentPosts = Post::latest()->take(5)->get();

        return view('dashboard.index', compact('userCount', 'postCount', 'recentUsers', 'recentPosts'));
    }

    /**
     * Example method to handle specific data fetching for stats.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getStats()
    {
        $stats = [
            'users_count' => User::count(),
            'posts_count' => Post::count(),
        ];

        return response()->json($stats);
    }
}
```