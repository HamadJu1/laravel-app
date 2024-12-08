```php
<!-- resources/views/warehouse.blade.php -->

@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="my-4">Warehouse Management</h1>

    {{-- Success and Error Messages --}}
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

    {{-- Warehouse Table --}}
    <div class="card mb-4">
        <div class="card-header">
            <h3>Warehouse Items</h3>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($items as $item)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->quantity }}</td>
                            <td>{{ $item->location }}</td>
                            <td>
                                <a href="{{ route('warehouse.edit', $item->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                <form action="{{ route('warehouse.destroy', $item->id) }}" method="POST" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="text-center">No items found</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

    {{-- Add New Item Form --}}
    <div class="card">
        <div class="card-header">
            <h3>Add New Item</h3>
        </div>
        <div class="card-body">
            <form action="{{ route('warehouse.store') }}" method="POST">
                @csrf
                <div class="form-group mb-3">
                    <label for="name">Item Name</label>
                    <input type="text" name="name" class="form-control" id="name" placeholder="Enter item name" required>
                </div>

                <div class="form-group mb-3">
                    <label for="quantity">Quantity</label>
                    <input type="number" name="quantity" class="form-control" id="quantity" placeholder="Enter quantity" required>
                </div>

                <div class="form-group mb-3">
                    <label for="location">Location</label>
                    <input type="text" name="location" class="form-control" id="location" placeholder="Enter location" required>
                </div>

                <button type="submit" class="btn btn-primary">Add Item</button>
            </form>
        </div>
    </div>
</div>
@endsection
```