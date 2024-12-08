```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warehouse;

class WarehouseController extends Controller
{
    // Display a listing of warehouses
    public function index()
    {
        $warehouses = Warehouse::all();
        return response()->json($warehouses);
    }

    // Show the form for creating a new warehouse
    public function create()
    {
        // Implementation handled by frontend
    }

    // Store a newly created warehouse in storage
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:0',
        ]);

        $warehouse = new Warehouse();
        $warehouse->name = $request->name;
        $warehouse->location = $request->location;
        $warehouse->capacity = $request->capacity;
        $warehouse->save();

        return response()->json(['message' => 'Warehouse successfully created', 'warehouse' => $warehouse], 201);
    }

    // Display the specified warehouse
    public function show($id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        return response()->json($warehouse);
    }

    // Show the form for editing the specified warehouse
    public function edit($id)
    {
        // Implementation handled by frontend
    }

    // Update the specified warehouse in storage
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'string|max:255',
            'location' => 'string|max:255',
            'capacity' => 'integer|min:0',
        ]);

        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $warehouse->update($request->only(['name', 'location', 'capacity']));

        return response()->json(['message' => 'Warehouse successfully updated', 'warehouse' => $warehouse]);
    }

    // Remove the specified warehouse from storage
    public function destroy($id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $warehouse->delete();

        return response()->json(['message' => 'Warehouse successfully deleted']);
    }
}
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'capacity',
    ];
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWarehousesTable extends Migration
{
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('location');
            $table->integer('capacity');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('warehouses');
    }
}
```