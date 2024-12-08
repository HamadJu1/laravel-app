```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;

class InventoryController extends Controller
{
    // Display a listing of the inventory items
    public function index()
    {
        $items = Inventory::all();
        return response()->json($items);
    }

    // Show the form for creating a new inventory item
    public function create()
    {
        return response()->json(['message' => 'Form for creating an inventory item']);
    }

    // Store a newly created inventory item in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
        ]);

        $item = Inventory::create($request->all());
        return response()->json($item, 201);
    }

    // Display the specified inventory item
    public function show($id)
    {
        $item = Inventory::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        return response()->json($item);
    }

    // Show the form for editing the specified inventory item
    public function edit($id)
    {
        $item = Inventory::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        return response()->json(['message' => 'Form for editing the inventory item', 'item' => $item]);
    }

    // Update the specified inventory item in the database
    public function update(Request $request, $id)
    {
        $item = Inventory::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $request->validate([
            'name' => 'string|max:255',
            'quantity' => 'integer',
            'price' => 'numeric',
        ]);

        $item->update($request->all());
        return response()->json($item);
    }

    // Remove the specified inventory item from the database
    public function destroy($id)
    {
        $item = Inventory::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();
        return response()->json(['message' => 'Item deleted successfully']);
    }
}
```