import {  NextResponse } from "next/server";
import Tournament from '@/app/models/tournament'
import connect from '@/lib/connect';

export async function GET(){
    await connect()
    const tournaments = await Tournament.find();
    return NextResponse.json(tournaments,{status:201});
}