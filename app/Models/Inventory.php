```php
// routes/web.php

use App\Http\Controllers\InventoryController;

Route::get('/inventory', [InventoryController::class, 'index'])->name('inventory.index');
Route::get('/inventory/create', [InventoryController::class, 'create'])->name('inventory.create');
Route::post('/inventory', [InventoryController::class, 'store'])->name('inventory.store');
Route::get('/inventory/{id}', [InventoryController::class, 'show'])->name('inventory.show');
Route::get('/inventory/{id}/edit', [InventoryController::class, 'edit'])->name('inventory.edit');
Route::put('/inventory/{id}', [InventoryController::class, 'update'])->name('inventory.update');
Route::delete('/inventory/{id}', [InventoryController::class, 'destroy'])->name('inventory.destroy');
```

```php
// app/Http/Controllers/InventoryController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;

class InventoryController extends Controller
{
    public function index()
    {
        $items = Inventory::all();
        return view('inventory.index', compact('items'));
    }

    public function create()
    {
        return view('inventory.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
        ]);

        Inventory::create($request->all());

        return redirect()->route('inventory.index');
    }

    public function show($id)
    {
        $item = Inventory::findOrFail($id);
        return view('inventory.show', compact('item'));
    }

    public function edit($id)
    {
        $item = Inventory::findOrFail($id);
        return view('inventory.edit', compact('item'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
        ]);

        $item = Inventory::findOrFail($id);
        $item->update($request->all());

        return redirect()->route('inventory.index');
    }

    public function destroy($id)
    {
        $item = Inventory::findOrFail($id);
        $item->delete();

        return redirect()->route('inventory.index');
    }
}
```

```php
// app/Models/Inventory.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'quantity',
        'price',
    ];
}
```

```php
// database/migrations/YYYY_MM_DD_create_inventories_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}
```

```php
// resources/views/inventory/index.blade.php

@extends('layouts.app')

@section('content')
    <h1>Inventory List</h1>
    <a href="{{ route('inventory.create') }}">Add New Item</a>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($items as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->quantity }}</td>
                    <td>{{ $item->price }}</td>
                    <td>
                        <a href="{{ route('inventory.edit', $item->id) }}">Edit</a>
                        <form action="{{ route('inventory.destroy', $item->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button>
                        </form>
                        <a href="{{ route('inventory.show', $item->id) }}">View</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
```

```php
// resources/views/inventory/create.blade.php

@extends('layouts.app')

@section('content')
    <h1>Add New Inventory Item</h1>
    <form action="{{ route('inventory.store') }}" method="POST">
        @csrf
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>
        
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" required>
        
        <label for="price">Price:</label>
        <input type="number" step="0.01" name="price" id="price" required>
        
        <button type="submit">Add Item</button>
    </form>
@endsection
```

```php
// resources/views/inventory/edit.blade.php

@extends('layouts.app')

@section('content')
    <h1>Edit Inventory Item</h1>
    <form action="{{ route('inventory.update', $item->id) }}" method="POST">
        @csrf
        @method('PUT')
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" value="{{ $item->name }}" required>
        
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" value="{{ $item->quantity }}" required>
        
        <label for="price">Price:</label>
        <input type="number" step="0.01" name="price" id="price" value="{{ $item->price }}" required>
        
        <button type="submit">Update Item</button>
    </form>
@endsection
```

```php
// resources/views/inventory/show.blade.php

@extends('layouts.app')

@section('content')
    <h1>Inventory Item Details</h1>
    <p>ID: {{ $item->id }}</p>
    <p>Name: {{ $item->name }}</p>
    <p>Quantity: {{ $item->quantity }}</p>
    <p>Price: {{ $item->price }}</p>
    <a href="{{ route('inventory.index') }}">Back to Inventory List</a>
@endsection
```