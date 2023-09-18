import { NextResponse } from "../../../../node_modules/next/server";

// We can do this statically by removing the request 
export async function GET(request: Request) {
    //return new Response('Hello world');
    //Send JSON Response
    return NextResponse.json({greeting: 'Hello'});
}