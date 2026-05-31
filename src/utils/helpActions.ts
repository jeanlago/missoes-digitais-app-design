import { getContactById, getContactLabel, TrustedContact } from '../data/trustedContacts';

export type HelpActionResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

function getContactOrError(contactId: string): HelpActionResult | TrustedContact {
  const contact = getContactById(contactId);
  if (!contact) {
    return { ok: false, message: 'Escolha uma pessoa de confiança antes de continuar.' };
  }
  return contact;
}

function isErrorResult(result: HelpActionResult | TrustedContact): result is HelpActionResult {
  return 'ok' in result;
}

export function callContact(contactId: string): HelpActionResult {
  const contact = getContactOrError(contactId);
  if (isErrorResult(contact)) return contact;

  return {
    ok: true,
    message: `Pedido de ligação registrado para ${getContactLabel(contact)}. Em breve os contatos reais estarão disponíveis neste app.`,
  };
}

export function messageContact(contactId: string): HelpActionResult {
  const contact = getContactOrError(contactId);
  if (isErrorResult(contact)) return contact;

  return {
    ok: true,
    message: `Mensagem preparada para ${getContactLabel(contact)}. Em breve você poderá enviar pelo app.`,
  };
}

export async function shareDoubt(contactId: string): Promise<HelpActionResult> {
  const contact = getContactOrError(contactId);
  if (isErrorResult(contact)) return contact;

  const text = `Preciso de ajuda com o app Missões Digitais. Pode me orientar?`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Missões Digitais - Pedido de ajuda',
        text,
      });
      return { ok: true, message: 'Dúvida compartilhada com sucesso!' };
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return { ok: false, message: 'Compartilhamento cancelado.' };
      }
    }
  }

  return {
    ok: true,
    message: `Dúvida registrada para ${getContactLabel(contact)}. Em breve você poderá compartilhar pelo app.`,
  };
}
