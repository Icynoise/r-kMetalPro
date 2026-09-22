import { LocalizedText } from '../models/project.model';

export interface ServiceOffer {
  icon: 'glass' | 'balcony' | 'cnc' | 'spider' | 'fence' | 'stairs';
  name: LocalizedText;
  description: LocalizedText;
}

export const SERVICES: ServiceOffer[] = [
  {
    icon: 'balcony',
    name: {
      de: 'Balkongeländer mit Alucobond-Paneelen',
      en: 'Balcony Railings with Alucobond Panels',
      sr: 'Balkonske ograde sa Alucobond panelima'
    },
    description: {
      de: 'Moderne Balkone mit Alucobond-Verbundplatten, die der Fassade ein klares Erscheinungsbild, hohe Haltbarkeit und minimalen Wartungsaufwand bieten.',
      en: 'Modern balcony railings made with Alucobond panels, offering a sleek facade appearance, high durability, and minimal maintenance.',
      sr: 'Moderni balkoni sa Alucobond panelima koji daju čist izgled fasade, visoku izdržljivost i minimalno održavanje.'
    }
  },
  {
    icon: 'cnc',
    name: {
      de: 'CNC-Metallschneiden und Gravur',
      en: 'CNC Metal Cutting and Engraving',
      sr: 'CNC rezanje i graviranje metala'
    },
    description: {
      de: 'Präzises CNC-Schneiden und Gravieren von Metall für dekorative Paneele, Geländer und Sonderteile – perfekt für moderne Fassaden und Innenräume.',
      en: 'High-precision CNC metal cutting and engraving for decorative panels, railings and custom elements, ideal for modern facades and interiors.',
      sr: 'Precizno CNC rezanje i graviranje metala za dekorativne panele, ograde i nestandardne elemente, idealno za moderne fasade i enterijere.'
    }
  },
  {
    icon: 'glass',
    name: {
      de: 'Glas-Balkongeländer',
      en: 'Glass Balcony Railings',
      sr: 'Staklene balkonske ograde'
    },
    description: {
      de: 'Elegante Glasbalkongeländer mit Sicherheitsglas und diskreten Halterungen, die dem Raum Leichtigkeit, modernes Design und langfristige Stabilität verleihen.',
      en: 'Elegant glass balcony railings with tempered safety glass and discreet supports, providing transparency, modern aesthetics, and long-lasting stability.',
      sr: 'Elegantne staklene balkonske ograde sa sigurnosnim staklom i diskretnim nosačima koje prostoru daju prozračnost, moderni izgled i dugotrajnu stabilnost.'
    }
  },
  {
    icon: 'spider',
    name: {
      de: 'Glasgeländer mit Spider-Befestigungssystem',
      en: 'Glass Railing with Spider Mount System',
      sr: 'Staklene ograde sa spider sistemom'
    },
    description: {
      de: 'Glasgeländer mit Spider-Befestigungssystem, das maximale Transparenz und freie Sicht bietet. Sicherheitsglas und dezente Halterungen sorgen für einen luxuriösen Look.',
      en: 'A glass railing with a spider mounting system that maximizes transparency and offers an unobstructed, elegant view with a premium finish.',
      sr: 'Staklena ograda sa spider sistemom pričvršćivanja koja nudi maksimalnu prozirnost i nesmetan pogled.'
    }
  },
  {
    icon: 'fence',
    name: {
      de: 'Hofzaun',
      en: 'Yard Fence',
      sr: 'Dvorišne ograde'
    },
    description: {
      de: 'Feuerverzinkter und pulverbeschichteter Hofzaun, der Stabilität, Sicherheit und langfristigen Schutz des privaten Bereichs gewährleistet.',
      en: 'A galvanized and powder-coated yard fence providing stability, safety, and long-term protection for private residential areas.',
      sr: 'Pocinčana i plastificirana dvorišna ograda koja obezbjeđuje stabilnost, sigurnost i dugotrajnu zaštitu privatnog prostora.'
    }
  },
  {
    icon: 'stairs',
    name: {
      de: 'Metall-Treppengeländer',
      en: 'Metal Stair Railings',
      sr: 'Stepenišne metalne ograde'
    },
    description: {
      de: 'Metalltreppengeländer mit Schutzbeschichtungen, angepasst an Küstenbedingungen und entworfen für Sicherheit und lange Lebensdauer.',
      en: 'Durable metal stair railings designed with protective coatings, ensuring long-term stability and safety in interior and exterior environments.',
      sr: 'Metalne stepenišne ograde sa zaštitnim premazima, prilagođene obalnim uslovima i dizajnirane za sigurnost i dug vijek trajanja.'
    }
  }
];
