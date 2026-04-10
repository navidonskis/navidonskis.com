/**
 * Cloudflare Worker — api.navidonskis.com
 *
 * Routes:
 *   POST /contact  → sends email via Resend API
 *
 * Environment variables (set in Cloudflare dashboard → Workers → Settings → Variables):
 *   RESEND_API_KEY  — your Resend API key (https://resend.com)
 */

const ALLOWED_ORIGIN = 'https://www.navidonskis.com';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

async function handleContact(request, env) {
  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return json({ error: 'Missing required fields: name, email, message' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email address' }, 400);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'website@navidonskis.com',
      to: 'donatas@navidonskis.com',
      reply_to: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return json({ error: 'Failed to send message' }, 500);
  }

  return json({ success: true });
}

export default {
  async fetch(request, env) {
    const { method } = request;
    const url = new URL(request.url);

    if (method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (method === 'POST' && url.pathname === '/contact') {
      return handleContact(request, env);
    }

    return json({ error: 'Not found' }, 404);
  },
};
