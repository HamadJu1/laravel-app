```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display the dashboard view.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('dashboard.index');
    }

    /**
     * Fetch data for the dashboard.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchData()
    {
        $data = [
            'userCount' => \App\Models\User::count(),
            'postCount' => \App\Models\Post::count(),
            'commentsCount' => \App\Models\Comment::count(),
            // Add more data as needed
        ];

        return response()->json($data);
    }

    /**
     * Handle any additional functionality for the dashboard.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        // Logic to handle updates, if needed
        $message = 'Dashboard updated successfully';
        return response()->json(['message' => $message]);
    }
}
```