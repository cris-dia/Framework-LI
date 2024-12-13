<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    public function index()
    {
        // Listare documente
        return response()->json(Document::all());
    }

    public function store(Request $request)
    {
        // Admin: Încărcare document nou
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file',
        ]);

        $path = $request->file('file')->store('documents');

        $document = Document::create([
            'title' => $validated['title'],
            'file_path' => $path,
        ]);

        return response()->json($document, 201);
    }

    public function destroy($id)
    {
        // Admin: Ștergere document
        $document = Document::findOrFail($id);
        Storage::delete($document->file_path);
        $document->delete();

        return response()->json(['message' => 'Document deleted']);
    }
}
