import { Project } from '../models/project.model';

const base = 'assets/images/projects';

function altSet(de: string, en: string, sr: string, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    de: `${de} – Foto ${i + 1}`,
    en: `${en} – photo ${i + 1}`,
    sr: `${sr} – slika ${i + 1}`
  }));
}

function withImages(
  slug: string,
  files: string[],
  alt: { de: string; en: string; sr: string }[]
) {
  return files.map((file, i) => ({
    src: `${base}/${slug}/${file}`,
    alt: alt[i]
  }));
}

export const PROJECTS: Project[] = [
  {
    slug: 'glass-stair-railing-vienna',
    category: 'glass',
    title: { de: 'Glasgeländer', en: 'Glass and Stair Railings', sr: 'Staklene i stepenišne ograde' },
    description: {
      de: 'Glas- und Treppengeländer für Sicherheit und moderne Ästhetik.',
      en: 'Glass and staircase railings providing safety and modern aesthetics.',
      sr: 'Kombinacija staklenih balkonskih i metalnih stepenišnih ograda prilagođena savremenom stambenom objektu.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Glas und Stahl', 'Sicherheit'],
      en: ['Glass and steel', 'Safety'],
      sr: ['Staklo i čelik', 'Sigurnost', 'Moderan dizajn']
    },
    images: withImages(
      'glass-stair-railing-vienna',
      ['1.jpg', '2.jpg', '3.jpg'],
      altSet('Glasgeländer Wien', 'Glass and Stair Railings Vienna', 'Staklene i stepenišne ograde Beč', 3)
    )
  },
  {
    slug: 'glass-balcony-railing-vienna',
    category: 'glass',
    title: { de: 'Glasbalkongeländer', en: 'Glass Balcony Railings', sr: 'Staklene balkonske ograde' },
    description: {
      de: 'Glasbalkongeländer mit Sicherheitsglas und minimalistischen Halterungen.',
      en: 'Glass balcony railings with safety glass and minimalist supports.',
      sr: 'Staklene balkonske ograde koje pružaju eleganciju i maksimalnu prozirnost.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Sicherheitsglas', 'Minimalistische Halterungen'],
      en: ['Safety glass', 'Minimalistic supports'],
      sr: ['Sigurnosno staklo', 'Minimalistički nosači', 'Visoka prozirnost']
    },
    images: withImages(
      'glass-balcony-railing-vienna',
      ['1.jpeg', '2.jpg', '3.jpg'],
      altSet('Glasbalkongeländer Wien', 'Glass Balcony Railings Vienna', 'Staklene balkonske ograde Beč', 3)
    )
  },
  {
    slug: 'balcony-railing-sillerstrasse',
    category: 'balcony',
    title: { de: 'Balkongeländer', en: 'Balcony Railings – Sillerstraße', sr: 'Balkonske ograde' },
    description: {
      de: 'Verzinkte und pulverbeschichtete Balkongeländer mit modernem Design.',
      en: 'Galvanized and powder-coated balcony railings with modern design.',
      sr: 'Pocinkovane i plastificirane balkonske ograde koje kombinuju dugotrajnost i moderan izgled.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Verzinkter Stahl', 'Pulverbeschichtete Oberfläche'],
      en: ['Galvanized steel', 'Powder-coated finish'],
      sr: ['Pocinkovani čelik', 'Plastificirana završna obrada', 'Otpornost na koroziju']
    },
    images: withImages(
      'balcony-railing-sillerstrasse',
      ['1.jpeg', '2.jpg', '3.jpg'],
      altSet('Balkongeländer Wien', 'Balcony Railings Vienna', 'Balkonske ograde Beč', 3)
    )
  },
  {
    slug: 'balcony-railing-alucobond',
    category: 'balcony',
    title: {
      de: 'Balkongeländer mit Alucobond-Paneelen',
      en: 'Balcony Railings with Alucobond Panels',
      sr: 'Balkonske ograde sa Alucobond panelima'
    },
    description: {
      de: 'Moderne Balkone mit Alucobond-Verbundplatten, die der Fassade ein klares Erscheinungsbild, hohe Haltbarkeit und minimalen Wartungsaufwand bieten.',
      en: 'Modern balcony railings made with Alucobond panels, offering a sleek facade appearance, high durability, and minimal maintenance.',
      sr: 'Moderni balkoni sa Alucobond panelima koji daju čist izgled fasade, visoku izdržljivost i minimalno održavanje.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Fassaden-Alucobond-Paneele', 'Modernes Wohngebäude'],
      en: ['Alucobond facade panels', 'Modern residential building'],
      sr: ['Fasadni Alucobond paneli', 'Moderan stambeni objekat']
    },
    images: withImages(
      'balcony-railing-alucobond',
      ['1.jpg', '2.jpeg', '3.jpeg'],
      altSet(
        'Balkongeländer mit Alucobond-Paneelen',
        'Balcony Railings with Alucobond Panels',
        'Balkonske ograde sa Alucobond panelima',
        3
      )
    )
  },
  {
    slug: 'glass-railing-tempered',
    category: 'glass',
    title: { de: 'Glasgeländer', en: 'Glass Railings', sr: 'Staklene ograde' },
    description: {
      de: 'Gehärtete Glasgeländer mit minimalistischen Systemen.',
      en: 'Tempered glass railings with a minimalist system.',
      sr: 'Elegantne staklene ograde koje doprinose luksuznom i prozračnom izgledu stambenog objekta.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Gehärtetes Glas', 'Minimalistisches System'],
      en: ['Tempered glass', 'Minimalistic system'],
      sr: ['Kaljeno staklo', 'Minimalistički sistem', 'Vizuelna prozračnost']
    },
    images: withImages(
      'glass-railing-tempered',
      ['1.jpeg', '2.jpg', '3.jpg'],
      altSet('Glasgeländer', 'Glass Railings', 'Staklene ograde', 3)
    )
  },
  {
    slug: 'metal-stair-railing-vienna',
    category: 'stairs',
    title: { de: 'Metalltreppengeländer', en: 'Metal Stair Railings', sr: 'Stepenišne metalne ograde' },
    description: {
      de: 'Metalltreppengeländer mit präziser Verarbeitung und Korrosionsschutz.',
      en: 'Metal stair railings with precise craftsmanship and anti-corrosion protection.',
      sr: 'Metalne stepenišne ograde izrađene po mjeri, prilagođene savremenom prostoru i dugotrajnoj bezbjednoj upotrebi.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Stahlkonstruktion', 'Korrosionsschutz'],
      en: ['Steel structure', 'Anti-corrosion protection'],
      sr: ['Čelična konstrukcija', 'Antikorozivna zaštita', 'Precizna izrada']
    },
    images: withImages(
      'metal-stair-railing-vienna',
      ['1.jpeg', '2.jpg', '3.jpg'],
      altSet('Metalltreppengeländer Wien', 'Metal Stair Railings Vienna', 'Stepenišne metalne ograde Beč', 3)
    )
  },
  {
    slug: 'glass-railing-spider-gaenserndorf',
    category: 'glass',
    title: {
      de: 'Glasgeländer mit Spider-Befestigungssystem',
      en: 'Glass Railing with Spider Mount System',
      sr: 'Staklena ograda sa „spider“ sistemom'
    },
    description: {
      de: 'Glasgeländer mit Spider-Befestigungssystem, das maximale Transparenz und freie Sicht bietet. Sicherheitsglas und dezente Halterungen sorgen für einen luxuriösen Look.',
      en: 'A glass railing with a spider mounting system that maximizes transparency and offers an unobstructed, elegant view with a premium finish.',
      sr: 'Staklena ograda sa spider sistemom pričvršćivanja koja nudi maksimalnu prozirnost i nesmetan pogled.'
    },
    location: { de: 'Gänserndorf, Österreich', en: 'Gänserndorf, Austria', sr: 'Gänserndorf, Austrija' },
    tags: {
      de: ['Gehärtetes Sicherheitsglas', 'Spider-Befestigungssystem'],
      en: ['Tempered safety glass', 'Spider mount system'],
      sr: ['Sigurnosno kaljeno staklo', 'Spider sistem pričvršćivanja']
    },
    images: withImages(
      'glass-railing-spider-gaenserndorf',
      ['1.png', '2.jpeg', '3.jpeg'],
      altSet(
        'Glasgeländer mit Spider-Befestigungssystem',
        'Glass Railing with Spider Mount System',
        'Staklena ograda sa spider sistemom',
        3
      )
    )
  },
  {
    slug: 'balcony-railing-sheet-metal',
    category: 'balcony',
    title: { de: 'Balkongeländer mit Blechelementen', en: 'Balcony Railings with Metal Panels', sr: 'Balkonske ograde sa limenim elementima' },
    description: {
      de: 'Stahlkonstruktion mit Blechelementen.',
      en: 'Steel structure with sheet metal panels.',
      sr: 'Balkonske ograde sa limenim ispunama koje pružaju veću privatnost i stabilnost uz savremen dizajn.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Stahlkonstruktion', 'Blechelemente'],
      en: ['Steel structure', 'Sheet metal panels'],
      sr: ['Čelična konstrukcija', 'Limeni paneli', 'Privatnost']
    },
    images: withImages(
      'balcony-railing-sheet-metal',
      ['1.jpeg', '2.jpg', '3.jpg'],
      altSet('Balkongeländer mit Blechelementen', 'Balcony Railings with Metal Panels', 'Balkonske ograde sa limenim elementima', 3)
    )
  },
  {
    slug: 'sliding-doors-fire-escape',
    category: 'doors',
    title: {
      de: 'Schiebetüren für Feuerleitern und Müllräume',
      en: 'Sliding Doors for Fire Escape Ladders and Waste Rooms',
      sr: 'Klizna vrata za vatrogasne merdevine i prostorije za smeće'
    },
    description: {
      de: 'Maßgefertigte Metallschiebetüren zum Schutz von Feuerleitern und Müllräumen, mit Schwerpunkt auf Sicherheit und Funktionalität.',
      en: 'Custom-made sliding metal doors designed to protect fire escape ladders and waste disposal rooms, with a focus on safety and functionality.',
      sr: 'Klizna metalna vrata izrađena po mjeri za zaštitu vatrogasnih merdevina i prostorija za smeće, sa fokusom na sigurnost i funkcionalnost.'
    },
    location: { de: 'Wien, Österreich', en: 'Vienna, Austria', sr: 'Beč, Austrija' },
    tags: {
      de: ['Stahlkonstruktion', 'Schiebemechanismus'],
      en: ['Steel structure', 'Sliding mechanism'],
      sr: ['Čelična konstrukcija', 'Klizni mehanizam', 'Sigurnost i kontrola pristupa']
    },
    images: withImages(
      'sliding-doors-fire-escape',
      ['1.jpg', '2.jpg', '3.jpg'],
      altSet(
        'Schiebetüren für Feuerleitern und Müllräume',
        'Sliding Doors for Fire Escape Ladders',
        'Klizna vrata za vatrogasne merdevine',
        3
      )
    )
  },
  {
    slug: 'cnc-metal-cutting',
    category: 'cnc',
    title: { de: 'CNC‑Metallschneiden und Gravur', en: 'CNC Metal Cutting and Engraving', sr: 'CNC rezanje i graviranje metala' },
    description: {
      de: 'Präzises CNC‑Schneiden und Gravieren von Metall für dekorative Paneele, Geländer und Sonderteile – perfekt für moderne Fassaden und Innenräume.',
      en: 'High-precision CNC metal cutting and engraving for decorative panels, railings and custom elements, ideal for modern facades and interiors.',
      sr: 'Precizno CNC rezanje i graviranje metala za dekorativne panele, ograde i nestandardne elemente, idealno za moderne fasade i enterijere.'
    },
    location: {
      de: 'Banja Luka, BiH / Wien, Österreich',
      en: 'Banja Luka, BiH / Vienna, Austria',
      sr: 'Banja Luka, BiH / Beč, Austrija'
    },
    tags: {
      de: ['Material: Stahl und Aluminium', 'Paneelzäune, Fassadenverkleidung'],
      en: ['Material: steel and aluminium', 'Panel fences, facade cladding'],
      sr: ['Materijal: čelik i aluminijum', 'Panel ograde, fasadne obloge']
    },
    images: withImages(
      'cnc-metal-cutting',
      ['1.png', '2.png', '3.png'],
      altSet('CNC-Metallschneiden und Gravur', 'CNC Metal Cutting and Engraving', 'CNC rezanje i graviranje metala', 3)
    )
  },
  {
    slug: 'metal-stair-railing-tribunj',
    category: 'stairs',
    title: { de: 'Metall-Treppengeländer', en: 'Metal Stair Railings', sr: 'Stepenišne metalne ograde' },
    description: {
      de: 'Metalltreppengeländer mit Schutzbeschichtungen, angepasst an Küstenbedingungen und entworfen für Sicherheit und lange Lebensdauer.',
      en: 'Durable metal stair railings designed with protective coatings, ensuring long-term stability and safety in interior and exterior environments.',
      sr: 'Metalne stepenišne ograde sa zaštitnim premazima, prilagođene obalnim uslovima i dizajnirane za sigurnost i dug vijek trajanja.'
    },
    location: { de: 'Tribunj, Kroatien', en: 'Tribunj, Croatia', sr: 'Tribunj, Hrvatska' },
    tags: {
      de: ['Innen- und Außentreppen', 'Beständigkeit gegenüber Küstenbedingungen'],
      en: ['Indoor & outdoor stair railings', 'Coastal-resistant coating'],
      sr: ['Unutrašnje i spoljašnje stepenište', 'Otpornost na obalne uslove']
    },
    images: withImages(
      'metal-stair-railing-tribunj',
      ['1.jpeg', '2.jpeg', '3.jpeg'],
      altSet('Metall-Treppengeländer Tribunj', 'Metal Stair Railings Tribunj', 'Stepenišne metalne ograde Tribunj', 3)
    )
  },
  {
    slug: 'yard-fence-maria-enzersdorf',
    category: 'fencing',
    title: { de: 'Hofzaun', en: 'Yard Fence', sr: 'Dvorišna ograda' },
    description: {
      de: 'Feuerverzinkter und pulverbeschichteter Hofzaun, der Stabilität, Sicherheit und langfristigen Schutz des privaten Bereichs gewährleistet.',
      en: 'A galvanized and powder-coated yard fence providing stability, safety, and long-term protection for private residential areas.',
      sr: 'Pocinčana i plastificirana dvorišna ograda koja obezbjeđuje stabilnost, sigurnost i dugotrajnu zaštitu privatnog prostora.'
    },
    location: { de: 'Maria Enzersdorf, Österreich', en: 'Maria Enzersdorf, Austria', sr: 'Maria Enzersdorf, Austrija' },
    tags: {
      de: ['Verzinkter und pulverbeschichteter Stahl', 'Privates Wohngebäude'],
      en: ['Long-term protection', 'Private residential property'],
      sr: ['Pocinčano i plastificirano gvožđe', 'Privatni stambeni objekat']
    },
    images: withImages(
      'yard-fence-maria-enzersdorf',
      ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpg'],
      altSet('Hofzaun Maria Enzersdorf', 'Yard Fence Maria Enzersdorf', 'Dvorišna ograda Maria Enzersdorf', 4)
    )
  }
];
