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
        'current_stock',
    ];

    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function scopeAvailableCapacity($query)
    {
        return $query->whereRaw('capacity > current_stock');
    }
}
```