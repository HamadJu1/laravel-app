```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('dashboard.index');
    }

    /**
     * Handle data fetching for the dashboard analytics or widgets.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchData(Request $request)
    {
        // Example logic for fetching data for dashboard widgets.
        $data = [
            'totalUsers' => 1500, // Example static data
            'monthlySales' => 9500.50, // Example static data
            'activeSessions' => 320, // Example static data
        ];

        return response()->json($data);
    }

    /**
     * Handle saving preferences or settings for the dashboard.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveSettings(Request $request)
    {
        $validatedData = $request->validate([
            'theme' => 'required|string|in:dark,light',
            'layout' => 'required|string|in:grid,list',
        ]);

        // Code to save settings (e.g., database, session, etc.)
        // Assume the settings are successfully saved

        return response()->json(['message' => 'Settings saved successfully.']);
    }
}
```