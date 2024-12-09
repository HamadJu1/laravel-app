```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;

class InventoryController extends Controller
{
    /**
     * Display a listing of the inventory items.
     */
    public function index()
    {
        $items = Inventory::all();
        return response()->json($items);
    }

    /**
     * Store a newly created inventory item in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
        ]);

        $item = Inventory::create([
            'name' => $request->name,
            'quantity' => $request->quantity,
            'price' => $request->price,
        ]);

        return response()->json($item, 201);
    }

    /**
     * Display the specified inventory item.
     */
    public function show($id)
    {
        $item = Inventory::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        return response()->json($item);
    }

    /**
     * Update the specified inventory item in storage.
     */
    public function update(Request $request, $id)
    {
        $item = Inventory::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'quantity' => 'sometimes|integer|min:0',
            'price' => 'sometimes|numeric|min:0',
        ]);

        $item->update($request->all());

        return response()->json($item);
    }

    /**
     * Remove the specified inventory item from storage.
     */
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