<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\RoomsModel;
class MeetingModel extends Model
{
    protected $table = 'meetings';
    protected $fillable = ['room_id', 'user_id', 'start_at', 'end_at', 'title', 'participants'];

    public function room() : BelongsTo
    {
        return $this->belongsTo(RoomsModel::class, 'room_id', 'id');
    }
}
