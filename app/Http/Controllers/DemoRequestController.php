<?php

namespace App\Http\Controllers;

use App\Models\DemoRequest;
use Illuminate\Http\Request;

class DemoRequestController extends Controller
{
    public function index()
    {
        $requests = DemoRequest::all(); // Sau adaugă o filtrare dacă este necesar
        return response()->json($requests);
    }


    public function store(Request $request)
    {
        try {
            \Log::info('Received demo request: ', $request->all());
            // User: Creare cerere demo
            $validated = $request->validate([
                'company_name' => 'required|string|max:255',
                'contact_number' => 'required|string|max:15',
            ]);

            $demoRequest = DemoRequest::create([
                'user_id' => auth()->id(),
                'company_name' => $validated['company_name'],
                'contact_number' => $validated['contact_number'],
            ]);

            return response()->json($demoRequest, 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Validation error: ' . json_encode($e->errors()));
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:approved,rejected',
        ]);

        $demoRequest = DemoRequest::findOrFail($id);
        $demoRequest->status = $validated['status'];
        $demoRequest->save();

        return response()->json(['message' => 'Demo request updated successfully']);
    }

}
