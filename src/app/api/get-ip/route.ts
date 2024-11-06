import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const forwarded = req.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0] : 'IP not found';
    
    return new Response(JSON.stringify({ clientIp }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
