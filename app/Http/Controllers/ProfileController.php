<?php

namespace App\Http\Controllers;

class ProfileController extends Controller
{
    public function show() {
        return view('profile.show', [
            'username' => 'HMD',
            'password' => '12345'
        ]);
    }
}