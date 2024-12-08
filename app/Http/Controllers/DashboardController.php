```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Display the dashboard view.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $user = Auth::user();

        return view('dashboard.index', ['user' => $user]);
    }

    /**
     * Handle updating user settings from the dashboard.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateSettings(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'name' => 'required|string|max:255',
        ]);

        $user = Auth::user();
        $user->update($request->only(['email', 'name']));

        return redirect()->route('dashboard.index')->with('success', 'Settings updated successfully.');
    }

    /**
     * Handle logging out the user from the dashboard.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout()
    {
        Auth::logout();

        return redirect()->route('login')->with('success', 'You have been logged out.');
    }
}
```