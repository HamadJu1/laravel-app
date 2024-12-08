<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;

class InventoryController extends Controller
{
    public function index() {
        return view('inventory.index');
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'sku' => 'required|numeric|unique:inventories',
            'category' => 'required|string'
        ]);

        Inventory::create($data);

        return back()->with('success', 'Item added successfully');
    }
}
