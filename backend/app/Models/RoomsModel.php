<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\MeetingModel;

class RoomsModel extends Model
{
    protected $table = 'rooms';
    protected $fillable = ['name', 'maxPeople'];

    public function meetings() : HasMany
    {
        return $this->hasMany(MeetingModel::class, 'room_id');
    }
}
