import { NextResponse } from "../../../../node_modules/next/server";
//Request that gathers params and echos back
//Adding the request object makes it dynamic instead of static
//All other methods are always dynamic
// Any Cookies or Headers will be dynamic
export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    // const names = searchParams.get('name');
    // const instrument = searchParams.get('instrument');

    //This will echo any params Recieved
    const obj = Object.fromEntries(searchParams.entries());

    // return NextResponse.json({names, instrument});
    return NextResponse.json(obj);
}

type Feedback = {
    name?: string,
    email?: string,
    message?: string,
};

export async function POST(request: Request) {
    const data: Feedback = await request.json();
    console.log('data: ', data);

    const { name, email, message } = data;

    return NextResponse.json({name, email, message});
}