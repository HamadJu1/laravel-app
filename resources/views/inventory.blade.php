```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="my-4">Inventory Management</h1>

    <!-- Add New Item Button -->
    <div class="mb-3">
        <a href="{{ route('inventory.create') }}" class="btn btn-primary">Add New Item</a>
    </div>

    <!-- Inventory Items Table -->
    <div class="card">
        <div class="card-header">
            Inventory Items
        </div>
        <div class="card-body">
            @if($items->count() > 0)
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($items as $item)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->quantity }}</td>
                        <td>${{ number_format($item->price, 2) }}</td>
                        <td>
                            <a href="{{ route('inventory.edit', $item->id) }}" class="btn btn-warning btn-sm">Edit</a>
                            <form action="{{ route('inventory.destroy', $item->id) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button type="submit" onclick="return confirm('Are you sure?')" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            @else
            <p class="text-center">No inventory items available.</p>
            @endif
        </div>
    </div>

    <!-- Pagination -->
    <div class="mt-3">
        {{ $items->links() }}
    </div>
</div>
@endsection
```