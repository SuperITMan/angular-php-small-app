<?php

namespace App\Http\Controllers;

class ScriptController extends Controller
{
    public function testScript()
    {
        $message = shell_exec("../scripts/testscript.sh 2>&1");
        return response()->json(
            [
                'message' => $message
            ],
            200,
            ['Access-Control-Allow-Origin' => '*']
        );
    }
}
