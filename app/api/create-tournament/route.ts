import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/connect'
import Tournament from '@/app/models/tournament'

export async function POST(request:NextRequest){
    const body = await request.json()
    console.log(body)
    const {name,game,description,format,teamSize,maxTeam,entryFees,prizePool,startTime,startDate,stream,spectators,userId } = body
    if(!name || !game || !description || !format || !teamSize || !maxTeam || !entryFees || !prizePool || !startTime || !userId || !startDate){
        return new NextResponse(JSON.stringify({error: 'Missing required fields'}), {status:400})
    }
    
    await connect()
    const tournament = new Tournament({
        name,
        game,
        description,
        format,
        teamSize,
        maxTeam,
        entryFees,
        prizePool,
        startTime,
        startDate,
        stream,
        spectators,
        user:userId
    });

    await tournament.save();

    return NextResponse.json({message:"Tournament created successfully"}, { status: 201 });
}