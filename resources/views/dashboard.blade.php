```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Dashboard</h1>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h5>Total Users</h5>
                </div>
                <div class="card-body">
                    <h3>{{ $totalUsers }}</h3>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h5>Total Orders</h5>
                </div>
                <div class="card-body">
                    <h3>{{ $totalOrders }}</h3>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h5>Total Revenue</h5>
                </div>
                <div class="card-body">
                    <h3>${{ $totalRevenue }}</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h5>Recent Users</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        @foreach($recentUsers as $user)
                            <li class="list-group-item">{{ $user->name }} - {{ $user->email }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h5>Recent Orders</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        @foreach($recentOrders as $order)
                            <li class="list-group-item">Order #{{ $order->id }} - ${{ $order->amount }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```