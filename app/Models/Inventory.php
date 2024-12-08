```php
// Route File: routes/web.php
use App\Http\Controllers\InventoryController;

Route::resource('inventory', InventoryController::class);

// Migration File: database/migrations/2023_10_01_000000_create_inventories_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('item_name');
            $table->string('sku')->unique();
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}

// Model File: app/Models/Inventory.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_name',
        'sku',
        'quantity',
        'price',
        'description',
    ];
}

// Controller File: app/Http/Controllers/InventoryController.php
namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

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
            'item_name' => 'required|string|max:255',
            'sku' => 'required|string|max:255|unique:inventories',
            'quantity' => 'required|integer',
            'price' => 'required|numeric|min:0',
        ]);

        Inventory::create($request->all());
        return redirect()->route('inventory.index')->with('success', 'Item added successfully.');
    }

    public function show(Inventory $inventory)
    {
        return view('inventory.show', compact('inventory'));
    }

    public function edit(Inventory $inventory)
    {
        return view('inventory.edit', compact('inventory'));
    }

    public function update(Request $request, Inventory $inventory)
    {
        $request->validate([
            'item_name' => 'required|string|max:255',
            'sku' => 'required|string|max:255|unique:inventories,sku,' . $inventory->id,
            'quantity' => 'required|integer',
            'price' => 'required|numeric|min:0',
        ]);

        $inventory->update($request->all());
        return redirect()->route('inventory.index')->with('success', 'Item updated successfully.');
    }

    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return redirect()->route('inventory.index')->with('success', 'Item deleted successfully.');
    }
}

// View File: resources/views/inventory/index.blade.php
@extends('layouts.app')

@section('content')
    <h1>Inventory</h1>
    <a href="{{ route('inventory.create') }}" class="btn btn-primary">Add Item</a>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>Item Name</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($items as $item)
                <tr>
                    <td>{{ $item->item_name }}</td>
                    <td>{{ $item->sku }}</td>
                    <td>{{ $item->quantity }}</td>
                    <td>${{ $item->price }}</td>
                    <td>
                        <a href="{{ route('inventory.show', $item->id) }}" class="btn btn-info btn-sm">View</a>
                        <a href="{{ route('inventory.edit', $item->id) }}" class="btn btn-warning btn-sm">Edit</a>
                        <form action="{{ route('inventory.destroy', $item->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection

// Note: Use similar patterns to create the 'create', 'edit', 'show' blade files as required.
```