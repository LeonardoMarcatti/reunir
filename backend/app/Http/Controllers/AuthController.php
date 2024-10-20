<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
}
