<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomsModel extends Model
{
    protected $table = 'rooms';
    protected $fillable = ['room_id', 'user_id', 'start_at', 'end_at'];
}
