<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeetingModel;
use App\Models\RoomsModel;
use App\Http\Requests\MeetingRequest;
class PagesController extends Controller
{
    public function getMeetings(Request $request) : object
    {
         $user = $request->user();

         return MeetingModel::where('user_id', $user->id)->get();
    }

    public function getMeetingRooms() : object
    {
        return RoomsModel::get();
    }

    public function newMeeting(Request $request)
    {
        // $valid = $request->validated();
        // return $request->all();
            MeetingModel::create($request->all());
            return \response()->json(['status' => true], 200);
        if ($valid) {
        }

        return \response()->json(['status' => false], 400);
    }
}
