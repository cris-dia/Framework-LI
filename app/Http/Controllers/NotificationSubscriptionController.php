<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NotificationSubscription;

class NotificationSubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:notification_subscriptions',
        ]);

        $subscription = NotificationSubscription::create([
            'email' => $validated['email'],
        ]);

        return response()->json(['message' => 'Subscribed successfully!'], 201);
    }
}
