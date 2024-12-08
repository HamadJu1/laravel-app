```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;

class DashboardController extends Controller
{
    /**
     * Display the dashboard view with required data.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $userCount = User::count();
        $orderCount = Order::count();
        $productCount = Product::count();
        $recentOrders = Order::latest()->take(5)->get();

        return view('dashboard.index', [
            'userCount' => $userCount,
            'orderCount' => $orderCount,
            'productCount' => $productCount,
            'recentOrders' => $recentOrders,
        ]);
    }

    /**
     * Handle Ajax request to fetch data dynamically.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchStats(Request $request)
    {
        $userCount = User::count();
        $orderCount = Order::count();
        $productCount = Product::count();

        return response()->json([
            'userCount' => $userCount,
            'orderCount' => $orderCount,
            'productCount' => $productCount,
        ]);
    }
}
```