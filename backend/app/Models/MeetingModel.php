<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MeetingModel extends Model
{
protected $table = 'meetings';
    protected $fillable = ['room_id', 'user_id', 'start_at', 'end_at', 'title'];
}
