{{-- resources/views/warehouse.blade.php --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Warehouse</title>
</head>
<body>
    <h1>Warehouse Stock</h1>

    <h2>Current Stock:</h2>
    <ul>
        @foreach ($stocks as $stock)
            <li>{{ $stock->item_name }} - {{ $stock->quantity }}</li>
        @endforeach
    </ul>

    <a href="{{ route('dashboard') }}">Back to Dashboard</a>
</body>
</html>
