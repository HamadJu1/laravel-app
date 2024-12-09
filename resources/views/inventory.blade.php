```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Inventory Management</h1>

    <!-- Display success or error messages -->
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @elseif (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif

    <!-- Add Item Form -->
    <div class="card mb-4">
        <div class="card-header">Add New Item</div>
        <div class="card-body">
            <form action="{{ route('inventory.store') }}" method="POST">
                @csrf
                <div class="form-group">
                    <label for="name">Item Name</label>
                    <input type="text" name="name" id="name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" name="quantity" id="quantity" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="price">Price (per unit)</label>
                    <input type="number" name="price" id="price" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Add Item</button>
            </form>
        </div>
    </div>

    <!-- Inventory List -->
    <div class="card">
        <div class="card-header">Inventory List</div>
        <div class="card-body">
            @if ($items->isEmpty())
                <p>No items in inventory.</p>
            @else
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price (per unit)</th>
                            <th>Total Value</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($items as $item)
                            <tr>
                                <td>{{ $item->id }}</td>
                                <td>{{ $item->name }}</td>
                                <td>{{ $item->quantity }}</td>
                                <td>${{ number_format($item->price, 2) }}</td>
                                <td>${{ number_format($item->quantity * $item->price, 2) }}</td>
                                <td>
                                    <form action="{{ route('inventory.destroy', $item->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <a href="{{ route('inventory.edit', $item->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif
        </div>
    </div>
</div>
@endsection
```