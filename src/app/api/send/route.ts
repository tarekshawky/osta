export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    console.log('📩 API triggered');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASSWORD ? '✔️ loaded' : '❌ missing');

    try {
        const nodemailer = (await import('nodemailer')).default;
        const { name, email, phone, service } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: 'tarekshawky2016@gmail.com',
            subject: `📩 New Service Request from ${name}`,
            html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px; max-width: 600px; margin: auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://osta-steel.vercel.app/osta.jpg" alt="Logo" width="120" style="margin-bottom: 10px;" />
        <h2 style="color: #333;">Osta Service Request</h2>
      </div>
      <table style="width: 100%; font-size: 16px; color: #333;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Phone (Dubai):</td>
          <td style="padding: 8px;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Service Requested:</td>
          <td style="padding: 8px;">${service}</td>
        </tr>
      </table>
      <p style="text-align: center; margin-top: 30px; font-size: 14px; color: #888;">
         <a href="https://osta-steel.vercel.app/en" target="_blank" style="text-decoration: none; color: #1a73e8; font-size: 14px;">
            Visit Our Website
          </a>
        </p>
    </div>
  `,
        });

        console.log('✅ Email sent:', info.messageId);
        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('❌ Send failed:', err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
