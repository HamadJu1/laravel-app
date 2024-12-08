```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;

class DashboardController extends Controller
{
    /**
     * Display the dashboard overview.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $userCount = User::count();
        $orderCount = Order::count();
        $recentOrders = Order::latest()->take(5)->get();
        $latestUsers = User::latest()->take(5)->get();

        return view('dashboard.index', [
            'userCount' => $userCount,
            'orderCount' => $orderCount,
            'recentOrders' => $recentOrders,
            'latestUsers' => $latestUsers
        ]);
    }

    /**
     * Show the details of a specific order.
     *
     * @param int $id
     * @return \Illuminate\View\View|\Illuminate\Http\RedirectResponse
     */
    public function showOrder($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return redirect()->route('dashboard.index')->with('error', 'Order not found.');
        }

        return view('dashboard.order-details', compact('order'));
    }

    /**
     * Handle filtering orders based on status.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\View\View
     */
    public function filterOrders(Request $request)
    {
        $status = $request->input('status');
        $orders = Order::when($status, function ($query) use ($status) {
            return $query->where('status', $status);
        })->paginate(10);

        return view('dashboard.orders', compact('orders', 'status'));
    }
}
```