<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::user()->role_id == 2){
            Auth::logout();
            // ponytail: was yoeunes/toastr, session flash works with react-toastify if wired
            return to_route('login')->with('error', 'You dont have permission');
        }
        return $next($request);
    }
}
