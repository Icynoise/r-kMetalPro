import { LocalizedText } from '../models/project.model';

export interface ContactPhone {
  number: string;
  country: LocalizedText;
}

export const CONTACT_INFO = {
  phones: [
    { number: '+436677765301', country: { de: 'Österreich', en: 'Austria', sr: 'Austrija' } },
    { number: '+38766006624', country: { de: 'Bosnien und Herzegowina', en: 'Bosnia and Herzegovina', sr: 'Bosna i Hercegovina' } }
  ] as ContactPhone[],
  email: 'info@rk-metalpro.com',
  logo: 'assets/images/logo/logo-light.svg'
};
