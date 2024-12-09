```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use App\Models\Comment;

class DashboardController extends Controller
{
    /**
     * Show the dashboard view.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $userCount = User::count();
        $postCount = Post::count();
        $commentCount = Comment::count();

        return view('dashboard.index', [
            'userCount' => $userCount,
            'postCount' => $postCount,
            'commentCount' => $commentCount
        ]);
    }

    /**
     * Fetch recent posts for the dashboard.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function recentPosts()
    {
        $recentPosts = Post::orderBy('created_at', 'desc')->take(5)->get();

        return response()->json($recentPosts);
    }

    /**
     * Fetch recent comments for the dashboard.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function recentComments()
    {
        $recentComments = Comment::orderBy('created_at', 'desc')->take(5)->get();

        return response()->json($recentComments);
    }

    /**
     * Fetch user statistics for the dashboard.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userStatistics()
    {
        $userStats = [
            'active' => User::where('status', 'active')->count(),
            'inactive' => User::where('status', 'inactive')->count(),
        ];

        return response()->json($userStats);
    }
}
```