```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warehouse;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the warehouses.
     */
    public function index()
    {
        $warehouses = Warehouse::all();
        return response()->json($warehouses, 200);
    }

    /**
     * Store a newly created warehouse in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
        ]);

        $warehouse = Warehouse::create($request->all());
        return response()->json($warehouse, 201);
    }

    /**
     * Display the specified warehouse.
     */
    public function show($id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        return response()->json($warehouse, 200);
    }

    /**
     * Update the specified warehouse in storage.
     */
    public function update(Request $request, $id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $request->validate([
            'name' => 'string|max:255',
            'location' => 'string|max:255',
            'capacity' => 'integer|min:1',
        ]);

        $warehouse->update($request->all());
        return response()->json($warehouse, 200);
    }

    /**
     * Remove the specified warehouse from storage.
     */
    public function destroy($id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $warehouse->delete();
        return response()->json(['message' => 'Warehouse deleted successfully'], 200);
    }
}
```