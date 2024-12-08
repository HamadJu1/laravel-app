<h1>Inventory</h1>
<form action="{{ route('inventory.add') }}" method="POST">
    @csrf
    <input type="text" name="name" placeholder="Item Name">
    <input type="number" name="price" placeholder="Price">
    <input type="number" name="sku" placeholder="SKU Number">
    <input type="text" name="category" placeholder="Category">
    <button type="submit">Add Item</button>
</form>
