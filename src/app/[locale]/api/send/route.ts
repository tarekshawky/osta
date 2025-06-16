export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const nodemailer = (await import('nodemailer')).default;

    const { name, email, phone, service } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // e.g., your@gmail.com
            pass: process.env.EMAIL_PASS, // ⚠️ this must be an App Password!
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'tarekshawk2016@gmail.com',
            subject: `New Service Request from ${name}`,
            html: `
        <div style="font-family:sans-serif;padding:10px;">
          <img src="https://yourdomain.com/logo.png" width="120" />
          <h2>New Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone (Dubai):</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err: unknown) {
        const error = err instanceof Error ? err.message : 'Unknown error';
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
