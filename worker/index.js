const TO_EMAIL = 'info@rk-metalpro.com';
const FROM_EMAIL = 'R & K Metal Pro Website <onboarding@resend.dev>';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function handleContact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const inquiryType = String(body.inquiryType ?? '').trim();
  const message = String(body.message ?? '').trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
    return Response.json({ ok: false, error: 'validation_failed' }, { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: 'server_not_configured' }, { status: 500 });
  }

  const subject = `${inquiryType || 'Kontaktanfrage'} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || '-'}`,
    `Anfrageart: ${inquiryType || '-'}`,
    '',
    message
  ].join('\n');

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>Anfrageart:</strong> ${escapeHtml(inquiryType || '-')}</p>
    <p><strong>Nachricht:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html
    })
  });

  if (!resendResponse.ok) {
    const errorDetail = await resendResponse.text();
    return Response.json({ ok: false, error: 'send_failed', detail: errorDetail }, { status: 502 });
  }

  return Response.json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};
