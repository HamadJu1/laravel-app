```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Profile') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="mb-3">
                        <label for="name" class="form-label"><strong>{{ __('Name') }}</strong></label>
                        <p id="name">{{ $user->name }}</p>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label"><strong>{{ __('Email') }}</strong></label>
                        <p id="email">{{ $user->email }}</p>
                    </div>

                    <div class="mb-3">
                        <label for="created_at" class="form-label"><strong>{{ __('Member Since') }}</strong></label>
                        <p id="created_at">{{ $user->created_at->format('F d, Y') }}</p>
                    </div>

                    <a href="{{ route('profile.edit') }}" class="btn btn-primary">{{ __('Edit Profile') }}</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```