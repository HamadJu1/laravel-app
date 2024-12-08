```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warehouse;

class WarehouseController extends Controller
{
    // Display a listing of the warehouses
    public function index()
    {
        $warehouses = Warehouse::all();
        return response()->json($warehouses);
    }

    // Show the form for creating a new warehouse
    public function create()
    {
        // Normally handled in a view
    }

    // Store a newly created warehouse in storage
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:0',
        ]);

        $warehouse = Warehouse::create($validatedData);

        return response()->json($warehouse, 201);
    }

    // Display the specified warehouse
    public function show($id)
    {
        $warehouse = Warehouse::findOrFail($id);
        return response()->json($warehouse);
    }

    // Show the form for editing the specified warehouse
    public function edit($id)
    {
        // Normally handled in a view
    }

    // Update the specified warehouse in storage
    public function update(Request $request, $id)
    {
        $warehouse = Warehouse::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'location' => 'sometimes|string|max:255',
            'capacity' => 'sometimes|integer|min:0',
        ]);

        $warehouse->update($validatedData);

        return response()->json($warehouse);
    }

    // Remove the specified warehouse from storage
    public function destroy($id)
    {
        $warehouse = Warehouse::findOrFail($id);
        $warehouse->delete();

        return response()->json(['message' => 'Warehouse deleted successfully']);
    }
}
```