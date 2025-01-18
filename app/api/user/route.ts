import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connect from '@/lib/connect';
import User from '@/app/models/user';

const SECRET_KEY = process.env.JWT_SECRET;

interface JwtPayloadWithUserId extends jwt.JwtPayload {
    userId: string;
}

// Handle GET requests
export async function GET(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value;

    try {
        if (!SECRET_KEY) {
            return NextResponse.json({ message: 'Internal Server Error: Missing JWT secret' }, { status: 500 });
        }

        if (!token) {
            return NextResponse.json({ message: 'Unauthorized: No token provided' }, { status: 401 });
        }

        const decoded = jwt.verify(token, SECRET_KEY) as unknown as JwtPayloadWithUserId;
        await connect();

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error('Error verifying token or fetching user:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}