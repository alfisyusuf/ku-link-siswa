/*
 * File: /functions/api/get-siswa-links.js
 * API ini HANYA mengambil daftar link siswa dari D1.
 * Ini adalah API publik, tidak perlu login.
 */

export async function onRequestGet(context) {
  const { env } = context;

  try {
    // Ambil Daftar Link Siswa dari D1
    const stmt = env.EXAM_DB.prepare('SELECT text, url FROM links_siswa ORDER BY "order" ASC');
    const { results } = await stmt.all();

    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}