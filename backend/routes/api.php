<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/posts', function () {
    return response()->json([
        ['id' => 1, 'user' => 'NoobMaster69', 'message' => 'Platinado o Marvel Spider-Man! 🎮'],
        ['id' => 2, 'user' => 'StreamerPro', 'message' => 'Live começando em 5 minutos! 🔴']
    ]);
});
