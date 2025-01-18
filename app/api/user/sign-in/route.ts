import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connect from '@/lib/connect';// Import your MongoDB connection function
import User from '@/app/models/user'; // Import the Mongoose User model

// Replace with your JWT secret key (use environment variables in production)

export async function POST(req: Request) {
    try {
      const JWT_SECRET = process.env.JWT_SECRET;
      if (!JWT_SECRET) {
        return NextResponse.json({ error: 'JWT secret is not defined' }, { status: 500 });
      }
    
    // Parse request body
    const body = await req.json();
    const { email, password} = body;

    if (!email || !password ) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    await connect();
    // Check if the user already exists
    const existingUser = await User.findOne({ email }); 
    if (!existingUser) {
      return NextResponse.json({ error: "User Not Found" }, { status: 400 });
    }
    
    const isMatch=await bcrypt.compare(password,existingUser.password);
    if(!isMatch){
        return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
    }
    const token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, JWT_SECRET, {
        });
        const res = NextResponse.json({ message: "Signed in Successful" }, { status: 201 });
        res.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return res;
    // Return the token
    
  } catch (error) {
    console.error('Error Logging in user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}