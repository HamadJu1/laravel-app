```blade
{{-- dashboard.blade.php --}}
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3>Dashboard</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <!-- Example Widget -->
                        <div class="col-md-4">
                            <div class="card text-white bg-primary mb-3">
                                <div class="card-header">Users</div>
                                <div class="card-body">
                                    <h5 class="card-title">Total Users</h5>
                                    <p class="card-text">{{ $usersCount }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Example Widget -->
                        <div class="col-md-4">
                            <div class="card text-white bg-success mb-3">
                                <div class="card-header">Posts</div>
                                <div class="card-body">
                                    <h5 class="card-title">Total Posts</h5>
                                    <p class="card-text">{{ $postsCount }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Example Widget -->
                        <div class="col-md-4">
                            <div class="card text-white bg-warning mb-3">
                                <div class="card-header">Comments</div>
                                <div class="card-body">
                                    <h5 class="card-title">Total Comments</h5>
                                    <p class="card-text">{{ $commentsCount }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Entries -->
                    <div class="row mt-4">
                        <div class="col-md-12">
                            <h4>Recent Activities</h4>
                            <ul class="list-group">
                                @foreach ($recentActivities as $activity)
                                    <li class="list-group-item">
                                        {{ $activity }}
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```