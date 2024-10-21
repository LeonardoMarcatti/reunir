<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\LogupRequest;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $valid = $request->validated();

        if ($valid && Auth::attempt($request->only(['email', 'password']))) {
            $token = $request->user()->createToken('MyToken');
            return \response()->json(['status' => true, 'token' => $token->plainTextToken]);
        }

        return ['status' => false, 'token' => false];
    }

    public function logup(LogupRequest $request)
    {
      $valid = $request->validated();

      if ($valid) {
         User::create($request->all());
         return \response()->json(['status' => true], 200);
      }

      return \response()->json(['status' => false], 400);
    }
}
