import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/connect'
import Tournament from '@/app/models/tournament'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, game, description, format, teamSize, maxTeam, entryFees, prizePool, startTime, stream, spectators, userId } = body;

        if (!name || !game || !description || !format || !teamSize || !maxTeam || !entryFees || !prizePool || !stream || !spectators || !startTime || !userId) {
            return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        await connect();
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
            stream,
            spectators,
            user: userId
        });

        await tournament.save();

        return NextResponse.json({ message: "Tournament created successfully" }, { status: 201 });
    } catch (error) {
        console.error('Error creating tournament:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}