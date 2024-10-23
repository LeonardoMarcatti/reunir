<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomsModel extends Model
{
    protected $table = 'rooms';
    protected $fillable = ['name', 'maxPeople'];
}
