/**
 * Cloudflare Worker — api.navidonskis.com
 *
 * Routes:
 *   POST /contact  → sends email via Resend API
 *
 * Environment variables (set in Cloudflare dashboard → Workers → Settings → Variables):
 *   RESEND_API_KEY  — your Resend API key (https://resend.com)
 */

const ALLOWED_ORIGINS = [
  'https://www.navidonskis.com',
  'https://navidonskis.com',
  'http://localhost:8080',
  'http://localhost:8081',
];

function getCorsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function json(data, status = 200, corsHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

async function handleContact(request, env) {
  const corsHeaders = getCorsHeaders(request);
  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400, corsHeaders);
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return json({ error: 'Missing required fields: name, email, message' }, 400, corsHeaders);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email address' }, 400, corsHeaders);
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
    return json({ error: 'Failed to send message' }, 500, corsHeaders);
  }

  return json({ success: true }, 200, corsHeaders);
}

export default {
  async fetch(request, env) {
    const { method } = request;
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(request);

    if (method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (method === 'POST' && url.pathname === '/contact') {
      return handleContact(request, env);
    }

    return json({ error: 'Not found' }, 404, corsHeaders);
  },
};
