```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;
use Illuminate\Support\Facades\Validator;

class InventoryController extends Controller
{
    // Display a listing of the inventory items
    public function index()
    {
        $inventories = Inventory::all();
        return response()->json($inventories, 200);
    }

    // Store a newly created inventory item in storage
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $inventory = Inventory::create([
            'name' => $request->name,
            'quantity' => $request->quantity,
            'price' => $request->price,
        ]);

        return response()->json($inventory, 201);
    }

    // Display the specified inventory item
    public function show($id)
    {
        $inventory = Inventory::find($id);

        if (!$inventory) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        return response()->json($inventory, 200);
    }

    // Update the specified inventory item in storage
    public function update(Request $request, $id)
    {
        $inventory = Inventory::find($id);

        if (!$inventory) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'quantity' => 'integer|min:0',
            'price' => 'numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $inventory->update($request->all());

        return response()->json($inventory, 200);
    }

    // Remove the specified inventory item from storage
    public function destroy($id)
    {
        $inventory = Inventory::find($id);

        if (!$inventory) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        $inventory->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}
```