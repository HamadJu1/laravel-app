<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function loginPage() {
        return view('auth.login');
    }

    public function login(Request $request) {
        $credentials = $request->only('username', 'password');

        if ($credentials['username'] === 'HMD' && $credentials['password'] === '12345') {
            session(['auth' => true]);
            return redirect()->route('dashboard');
        }

        return back()->withErrors(['error' => 'Invalid Credentials']);
    }
}
