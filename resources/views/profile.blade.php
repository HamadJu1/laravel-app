```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="mb-4">Profile</h1>
    <div class="card">
        <div class="card-body">
            <div class="row mb-3">
                <div class="col-md-4">
                    <img src="{{ auth()->user()->avatar }}" alt="Profile Picture" class="rounded-circle img-fluid">
                </div>
                <div class="col-md-8">
                    <h2>{{ auth()->user()->name }}</h2>
                    <p>Email: {{ auth()->user()->email }}</p>
                    <p>Joined: {{ auth()->user()->created_at->format('M d, Y') }}</p>
                </div>
            </div>
            <div class="text-end">
                <a href="{{ route('profile.edit') }}" class="btn btn-primary">Edit Profile</a>
            </div>
        </div>
    </div>
</div>
@endsection
```