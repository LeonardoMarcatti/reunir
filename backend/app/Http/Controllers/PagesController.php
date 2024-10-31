<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeetingModel;
use App\Models\RoomsModel;
use App\Http\Requests\MeetingRequest;
use Illuminate\Http\JsonResponse;

class PagesController extends Controller
{
    public function getMeetings(Request $request) : object
    {
        $user = $request->user();
        return MeetingModel::where([['user_id', $user->id], ['start_at', '>=', now()]])->get();
    }

    public function getMyReserves(Request $request) : object
    {
        $user = $request->user();
        $reserves =  MeetingModel::where('user_id', $user->id)->get();
        foreach ($reserves as $key => $reserve) {
        $reserve['room'] = $reserve->room;
        }

        return $reserves;
    }

    public function getMeetingRooms(Request $request) : object
    {
        $user = $request->user();
        if ($user->id == 1) {
            return RoomsModel::get();
        }

        return \response()->json(['status' => false], 403);
    }

    private function checkRoomAvailability(int $roomID, string $start, string $end) : bool
    {

        //Verifica se a meeting exista para alterar apenas sala e/ou titulo
        $sameMeeting = MeetingModel ::where([['room_id', $roomID], ['start_at', '=', $start], ['end_at', '=', $end]])->first();

        if ($sameMeeting) {
            return true;
        }

        //As queries abaixo verificam se é possível criar reunião em determinado horário
        $start_result = MeetingModel::where([['room_id', $roomID], ['start_at', '<=', $start], ['end_at', '>=', $start]])->first();
        $end_result = MeetingModel::where([['room_id', $roomID], ['start_at', '<=', $end], ['end_at', '>=', $end]])->first();
        $wrap_result = MeetingModel::where([['room_id', $roomID], ['start_at', '>=', $start], ['end_at', '<=', $end]])->first();

        if ($start_result || $end_result || $wrap_result) {
            return false;
        }

        return true;
    }

    public function newMeeting(MeetingRequest $request): JsonResponse
    {
        $result = $this->checkRoomAvailability($request->room_id, $request->start_at, $request->end_at);

        if ($result) {
            MeetingModel::create($request->all());
            return \response()->json(['status' => true], 200);
        }

        return \response()->json(['status' => false], 400);
    }

    public function getNotAvailableDates(Request $request) : object
    {
        return \response()->json(MeetingModel::where([['room_id', $request->id], ['end_at', '>=', \date("Y-m-d H:i:s")]])->get());
    }

    public function getMeetingDetails(Request $request) : object
    {
        $meeting = MeetingModel::find($request->id);
        $meeting['room'] = $meeting->room;
        return \response()->json($meeting);
    }

    public function deleteMeeting(Request $request) : bool
    {
        return MeetingModel::where('id', $request->id)->delete();
    }

    public function updateMeeting(Request $request) : JsonResponse
    {
        $result = $this->checkRoomAvailability($request->room_id, $request->start_at, $request->end_at);
        if ($result) {
            MeetingModel::where('id', $request->id)->update($request->all());
            return \response()->json(['status' => true], 200);
        }

        return \response()->json(['status' => false], 400);
    }

    public function updateRoom(Request $request) : JsonResponse
    {
        $update = RoomsModel::where('id', $request->id)->update(['name' => $request->name, 'maxPeople' => $request->maxPeople]);

        if ($update) {
            return \response()->json(['status' => true], 200);
        }

        return \response()->json(['status' => false], 400);
    }

    public function deleteRoom(Request $request) : JsonResponse
    {
        $delete = RoomsModel::where('id', $request->id)->delete();
        return $delete;
        if ($delete) {
            return \response()->json(['status' => true], 200);
        }

        return \response()->json(['status' => false], 400);
    }

    public function createRoom(Request $request) : JsonResponse
    {
        $create = RoomsModel::create($request->all());

        if ($create) {
            return \response()->json(['status' => true], 200);
        }

        return \response()->json(['status' => false], 400);
    }

}
