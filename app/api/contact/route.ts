import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATION_EMAIL = "geral@clinicacariense.pt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, telefone, localizacao, mensagem } = body;

    // Server-side validation
    if (!nome || typeof nome !== "string" || nome.trim().length < 2) {
      return NextResponse.json({ error: "Nome inválido." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }
    if (!mensagem || typeof mensagem !== "string" || mensagem.trim().length < 10) {
      return NextResponse.json({ error: "Mensagem demasiado curta." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Clínica Cariense <onboarding@resend.dev>",
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Nova mensagem de ${nome.trim()} — ${localizacao ?? "Não especificado"}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#2A3A4A">
          <div style="background:#0D1E2C;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;font-size:18px;margin:0">Nova mensagem do site</h1>
            <p style="color:#1C9FD6;margin:4px 0 0;font-size:13px">Clínica Dentária Cariense</p>
          </div>
          <div style="border:1px solid #D5E4EE;border-top:0;padding:24px 32px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#5E7387;width:120px">Nome</td>
                <td style="padding:8px 0;font-size:14px;font-weight:600">${nome.trim()}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#5E7387">Email</td>
                <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#1C9FD6">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#5E7387">Telefone</td>
                <td style="padding:8px 0;font-size:14px">${telefone?.trim() || "—"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#5E7387">Clínica</td>
                <td style="padding:8px 0;font-size:14px">${localizacao ?? "Não especificado"}</td>
              </tr>
            </table>
            <hr style="border:0;border-top:1px solid #D5E4EE;margin:16px 0"/>
            <p style="font-size:13px;color:#5E7387;margin:0 0 8px">Mensagem</p>
            <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${mensagem.trim()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Erro ao enviar mensagem." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
