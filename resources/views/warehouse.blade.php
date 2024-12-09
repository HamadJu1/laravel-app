```blade
<!-- resources/views/warehouse/index.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Warehouse List</h1>
    <a href="{{ route('warehouse.create') }}" class="btn btn-primary mb-3">Add New Warehouse</a>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($warehouses as $warehouse)
                <tr>
                    <td>{{ $warehouse->id }}</td>
                    <td>{{ $warehouse->name }}</td>
                    <td>{{ $warehouse->location }}</td>
                    <td>{{ $warehouse->capacity }}</td>
                    <td>
                        <a href="{{ route('warehouse.show', $warehouse->id) }}" class="btn btn-info btn-sm">View</a>
                        <a href="{{ route('warehouse.edit', $warehouse->id) }}" class="btn btn-warning btn-sm">Edit</a>
                        <form action="{{ route('warehouse.destroy', $warehouse->id) }}" method="POST" class="d-inline">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
```

```blade
<!-- resources/views/warehouse/create.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Add New Warehouse</h1>
    <form action="{{ route('warehouse.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="name">Warehouse Name</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" id="location" name="location" required>
        </div>
        <div class="form-group">
            <label for="capacity">Capacity</label>
            <input type="number" class="form-control" id="capacity" name="capacity" required>
        </div>
        <button class="btn btn-success">Save</button>
        <a href="{{ route('warehouse.index') }}" class="btn btn-secondary">Cancel</a>
    </form>
</div>
@endsection
```

```blade
<!-- resources/views/warehouse/edit.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Edit Warehouse</h1>
    <form action="{{ route('warehouse.update', $warehouse->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="form-group">
            <label for="name">Warehouse Name</label>
            <input type="text" class="form-control" id="name" name="name" value="{{ $warehouse->name }}" required>
        </div>
        <div class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" id="location" name="location" value="{{ $warehouse->location }}" required>
        </div>
        <div class="form-group">
            <label for="capacity">Capacity</label>
            <input type="number" class="form-control" id="capacity" name="capacity" value="{{ $warehouse->capacity }}" required>
        </div>
        <button class="btn btn-success">Update</button>
        <a href="{{ route('warehouse.index') }}" class="btn btn-secondary">Cancel</a>
    </form>
</div>
@endsection
```

```blade
<!-- resources/views/warehouse/show.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Warehouse Details</h1>
    <div class="card">
        <div class="card-header">
            <strong>{{ $warehouse->name }}</strong>
        </div>
        <div class="card-body">
            <p><strong>Location: </strong>{{ $warehouse->location }}</p>
            <p><strong>Capacity: </strong>{{ $warehouse->capacity }}</p>
        </div>
    </div>
    <a href="{{ route('warehouse.index') }}" class="btn btn-primary mt-3">Back to List</a>
</div>
@endsection
```