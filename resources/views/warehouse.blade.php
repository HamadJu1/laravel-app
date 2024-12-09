```php
<!-- resources/views/warehouse.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h1 class="text-center mb-4">Warehouse Management</h1>
    
    <!-- Alerts Section -->
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif

    <!-- Add New Warehouse Form -->
    <div class="card mb-4">
        <div class="card-header">
            <h5>Add New Warehouse</h5>
        </div>
        <div class="card-body">
            <form action="{{ route('warehouse.store') }}" method="POST">
                @csrf
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="name">Warehouse Name</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Enter warehouse name" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="location">Location</label>
                        <input type="text" name="location" class="form-control" id="location" placeholder="Enter location" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Add Warehouse</button>
            </form>
        </div>
    </div>

    <!-- Warehouse List -->
    <div class="card">
        <div class="card-header">
            <h5>Warehouse List</h5>
        </div>
        <div class="card-body table-responsive">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($warehouses as $warehouse)
                        <tr>
                            <td>{{ $warehouse->id }}</td>
                            <td>{{ $warehouse->name }}</td>
                            <td>{{ $warehouse->location }}</td>
                            <td>
                                <a href="{{ route('warehouse.edit', $warehouse->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                <form action="{{ route('warehouse.destroy', $warehouse->id) }}" method="POST" class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this warehouse?')">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
```