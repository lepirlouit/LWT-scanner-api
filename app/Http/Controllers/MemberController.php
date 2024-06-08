<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Members;

class MemberController extends Controller
{
    public function getMember($niss)
    {
        $member = Members::findByNiss($niss);
        if(!empty($member))
        {
            return response()-> json($member);
        }
        else
        {
            return response()->json([
                "message" => "Member not found"
            ], 404);
        }
    }
}
