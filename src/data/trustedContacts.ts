export interface TrustedContact {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'offline';
}

export const trustedContacts: TrustedContact[] = [
  { id: 'daughter', name: 'Maria', role: 'Filha', status: 'online' },
  { id: 'son', name: 'Pedro', role: 'Filho', status: 'online' },
  { id: 'grandson', name: 'João', role: 'Neto', status: 'offline' },
  { id: 'caregiver', name: 'Ana', role: 'Cuidadora', status: 'online' },
];

export function getContactById(id: string): TrustedContact | undefined {
  return trustedContacts.find((contact) => contact.id === id);
}

export function getContactLabel(contact: TrustedContact): string {
  return `${contact.role} - ${contact.name}`;
}
