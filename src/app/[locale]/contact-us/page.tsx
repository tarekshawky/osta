'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.phone.startsWith('+971')) {
            setMessage('Phone number must start with +971 (Dubai)');
            return;
        }

        const res = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setMessage('Form sent successfully!');
        } else {
            setMessage('Failed to send.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold">Contact Us</h2>

            <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                required
                onChange={handleChange}
            />

            <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                required
                onChange={handleChange}
            />

            <input
                name="phone"
                type="text"
                placeholder="Dubai Phone (+971...)"
                className="w-full p-2 border rounded"
                required
                onChange={handleChange}
            />

            <select name="service" required className="w-full p-2 border rounded" onChange={handleChange}>
                <option value="">Select a Service</option>
                <option value="Web Design">Web Design</option>
                <option value="Landing Page">Landing Page</option>
                <option value="WordPress">WordPress</option>
            </select>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send
            </button>

            {message && <p className="text-sm">{message}</p>}
        </form>
    );
}
