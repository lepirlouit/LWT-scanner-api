<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Members;
use App\Http\Resources\MemberResource;

class MemberController extends Controller
{
    public function getMember($niss)
    {
        $member = Members::findByNiss($niss);
        if(!empty($member))
        {
            return response()-> json(new MemberResource($member));
        }
        else
        {
            return response()->json([
                "message" => "Member not found"
            ], 404);
        }
    }
}
