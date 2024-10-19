<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MeetingModel extends Model
{
protected $table = 'rooms';
    protected $fillable = ['name', 'maxPeople'];
}
