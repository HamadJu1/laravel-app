```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1 class="my-4">Dashboard</h1>
        </div>
    </div>

    <div class="row">
        <!-- Statistics Cards -->
        <div class="col-md-4 mb-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text h2">{{ $totalUsers }}</p>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card text-white bg-success">
                <div class="card-body">
                    <h5 class="card-title">Active Subscriptions</h5>
                    <p class="card-text h2">{{ $activeSubscriptions }}</p>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card text-white bg-warning">
                <div class="card-body">
                    <h5 class="card-title">Pending Requests</h5>
                    <p class="card-text h2">{{ $pendingRequests }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Recent Activity Table -->
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    Recent Activity
                </div>
                <div class="card-body">
                    @if($recentActivities->isEmpty())
                        <p>No recent activity found.</p>
                    @else
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Action</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($recentActivities as $activity)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $activity->user->name }}</td>
                                        <td>{{ $activity->description }}</td>
                                        <td>{{ $activity->created_at->format('d M Y, h:i A') }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```