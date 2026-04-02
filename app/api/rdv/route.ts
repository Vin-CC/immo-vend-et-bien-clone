import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des champs requis
    const { nom, email, telephone, rdv_date, rdv_heure } = body;
    if (!nom || !email || !telephone || !rdv_date || !rdv_heure) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 },
      );
    }

    const hookUrl = process.env.HOOK_URL;
    if (!hookUrl) {
      console.error('HOOK_URL non configuré');
      return NextResponse.json(
        { error: 'Une erreur est survenue. Veuillez réessayer.' },
        { status: 500 },
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const content = {
      nom: body.nom,
      email: body.email,
      telephone: body.telephone,
      rdv_date: body.rdv_date,
      rdv_heure: body.rdv_heure,
      source: 'site-web-rdv',
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(hookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      console.error('Webhook Make erreur:', response.status);
      return NextResponse.json(
        { error: 'Une erreur est survenue. Veuillez réessayer.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      console.error('Webhook Make timeout');
      return NextResponse.json(
        { error: 'Le serveur met trop de temps à répondre. Veuillez réessayer.' },
        { status: 504 },
      );
    }
    console.error('Erreur API rdv:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 },
    );
  }
}
