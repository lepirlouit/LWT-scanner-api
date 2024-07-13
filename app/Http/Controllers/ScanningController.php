<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scanning;
use Response;


class ScanningController extends Controller
{
    public function getScanning($id)
    {
        $scanning = Scanning::findById($id);
        if(!empty($scanning))
        {
            return response()-> json($scanning);
        }
        else
        {
            return response()->json([
                "message" => "Member not found"
            ], 404);
        }
    }
    public function store(Request $request)
    {
        // Validate the request...
 
        $scanning = new Scanning;
 
        $scanning->latitude = $request->latitude;
        $scanning->longitude = $request->longitude;
        $scanning->niss = $request->niss;
        $scanning->moment = $request->moment;
        $scanning->ipAddress = $request->ip();
 
        $scanning->save();
        return response()->json(['message' => 'Scan inserted'], 204);
    }
}
