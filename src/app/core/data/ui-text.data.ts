import { Lang, ProjectCategory } from '../models/project.model';

export type ProjectFilterKey = ProjectCategory | 'all';

export interface UiText {
  nav: {
    about: string;
    projects: string;
    services: string;
    contact: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    ctaProjects: string;
    ctaServices: string;
    ctaContact: string;
    ctaProjectsSub: string;
    ctaServicesSub: string;
    ctaContactSub: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    subheading: string;
    location: string;
    viewGallery: string;
    moreImages: string;
    filters: { key: ProjectFilterKey; label: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    inquiryLabel: string;
    inquiryOptions: string[];
    messageLabel: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
    requiredError: string;
    emailError: string;
  };
  footer: {
    tagline: string;
    menuHeading: string;
    contactHeading: string;
    copyright: string;
  };
}

export const UI_TEXT: Record<Lang, UiText> = {
  de: {
    nav: {
      about: 'Über uns',
      projects: 'Projekte',
      services: 'Leistungen',
      contact: 'Kontakt',
      menu: 'Menü'
    },
    hero: {
      eyebrow: 'R & K Metal Pro',
      heading: 'Ingenieurpräzision in jeder Konstruktion',
      subheading:
        'Wir fertigen zuverlässige Zäune, Tore und Konstruktionen mit Fokus auf Funktionalität, Sicherheit und modernes Design.',
      ctaProjects: 'Unsere Projekte',
      ctaProjectsSub: 'Entdecken Sie unsere realisierten Projekte und sehen Sie, wie unsere Metalllösungen jeden Raum verbessern.',
      ctaServices: 'Unsere Dienstleistungen',
      ctaServicesSub: 'Erkunden Sie unser Leistungsspektrum und steigern Sie die Qualität Ihres Projekts mit fachkundigen und zuverlässigen Lösungen.',
      ctaContact: 'Kontaktieren Sie uns',
      ctaContactSub: 'Kontaktieren Sie uns, damit wir Ihre Idee gemeinsam entwickeln und in eine funktionale und moderne Lösung verwandeln können.',
      stats: [
        { value: 'Seit 2020', label: 'am österreichischen Markt tätig' },
        { value: '12+', label: 'realisierte Projekte' },
        { value: '3', label: 'Länder: Österreich, Bosnien & Herzegowina, Kroatien' }
      ]
    },
    about: {
      eyebrow: 'Über uns',
      heading: 'Junge Erfahrung, präzise Handwerkskunst',
      paragraphs: [
        'Unser Unternehmen ist seit Mitte 2020 auf dem österreichischen Markt tätig. Eine Kombination aus Jugend, Erfahrung und Begeisterung macht uns zu einem der führenden Unternehmen im Metallverarbeitungssektor der Märkte, in denen wir arbeiten.',
        'Wir haben eine große Anzahl von Projekten im Raum Wien erfolgreich abgeschlossen, was uns zusätzliche Motivation für weiteres Wachstum und Entwicklung gibt — stets geleitet von den Wünschen und Erwartungen unserer zufriedenen Kunden.'
      ]
    },
    projects: {
      eyebrow: 'Unsere Projekte',
      heading: 'Unsere neuesten Projekte',
      subheading: 'Entdecken Sie unsere realisierten Projekte und sehen Sie, wie unsere Metalllösungen jeden Raum verbessern.',
      location: 'Standort',
      viewGallery: 'Galerie ansehen',
      moreImages: 'Weitere',
      filters: [
        { key: 'all', label: 'Alle' },
        { key: 'glass', label: 'Glasgeländer' },
        { key: 'balcony', label: 'Balkongeländer' },
        { key: 'stairs', label: 'Treppengeländer' },
        { key: 'fencing', label: 'Zäune' },
        { key: 'doors', label: 'Türen' },
        { key: 'cnc', label: 'CNC-Bearbeitung' }
      ]
    },
    services: {
      eyebrow: 'Unsere Dienstleistungen',
      heading: 'Unser Leistungsspektrum',
      subheading: 'Erkunden Sie unser Leistungsspektrum und steigern Sie die Qualität Ihres Projekts mit fachkundigen und zuverlässigen Lösungen.'
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Kontaktieren Sie Uns',
      subheading: 'Kontaktieren Sie uns, damit wir Ihre Idee gemeinsam entwickeln und in eine funktionale und moderne Lösung verwandeln können.',
      nameLabel: 'Name und Nachname',
      emailLabel: 'Email',
      phoneLabel: 'Telefonnummer',
      inquiryLabel: 'Anfrageart',
      inquiryOptions: ['Allgemeine Anfrage', 'Projektvorschlag', 'Angebotsanfrage', 'Planung, Montage, Service', 'Sonstiges'],
      messageLabel: 'Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      successTitle: 'Ihre Nachricht wurde gesendet',
      successBody: 'Unser Team meldet sich bei Ihnen, nachdem wir Ihre Anfrage bearbeitet haben.',
      errorBody: 'Ups, etwas ist schiefgelaufen! Versuche es noch einmal.',
      requiredError: 'Dieses Feld ist erforderlich.',
      emailError: 'Bitte geben Sie eine gültige Email-Adresse ein.'
    },
    footer: {
      tagline: 'Hochwertige Metallkonstruktionen für moderne Gebäude.',
      menuHeading: 'Menü',
      contactHeading: 'Kontaktieren Sie Uns',
      copyright: '© 2025, R & K Metal Pro'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      menu: 'Menu'
    },
    hero: {
      eyebrow: 'R & K Metal Pro',
      heading: 'Engineering precision in every construction',
      subheading:
        'We create reliable fences, gates, and custom-built structures with a focus on functionality, safety, and contemporary design.',
      ctaProjects: 'Our Projects',
      ctaProjectsSub: 'Explore our completed projects and see how our metal solutions enhance every space.',
      ctaServices: 'Our Services',
      ctaServicesSub: 'Discover our range of services and elevate the quality of your project with expert and reliable solutions.',
      ctaContact: 'Contact Us',
      ctaContactSub: 'Get in touch so we can shape your idea together and turn it into a functional and modern solution.',
      stats: [
        { value: 'Since 2020', label: 'on the Austrian market' },
        { value: '12+', label: 'completed projects' },
        { value: '3', label: 'countries: Austria, Bosnia & Herzegovina, Croatia' }
      ]
    },
    about: {
      eyebrow: 'About Us',
      heading: 'Young experience, precise craftsmanship',
      paragraphs: [
        'Our company has been present on the Austrian market since mid-2020. A blend of youth, experience, and enthusiasm among our employees makes us one of the leading companies in the metal industry within the markets where we operate.',
        'We have successfully completed a significant number of projects in Vienna, which gives us additional motivation for further progress and growth — always guided by the needs and expectations of our satisfied clients.'
      ]
    },
    projects: {
      eyebrow: 'Our Projects',
      heading: 'See Our Latest Projects in Action',
      subheading: 'Explore our completed projects and see how our metal solutions enhance every space.',
      location: 'Location',
      viewGallery: 'View gallery',
      moreImages: 'More photos',
      filters: [
        { key: 'all', label: 'All' },
        { key: 'glass', label: 'Glass railings' },
        { key: 'balcony', label: 'Balcony railings' },
        { key: 'stairs', label: 'Stair railings' },
        { key: 'fencing', label: 'Fences' },
        { key: 'doors', label: 'Doors' },
        { key: 'cnc', label: 'CNC machining' }
      ]
    },
    services: {
      eyebrow: 'Our Services',
      heading: 'What we do',
      subheading: 'Discover our range of services and elevate the quality of your project with expert and reliable solutions.'
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Contact Us',
      subheading: 'Get in touch so we can shape your idea together and turn it into a functional and modern solution.',
      nameLabel: 'Name and Surname',
      emailLabel: 'Email',
      phoneLabel: 'Phone number',
      inquiryLabel: 'Inquiry type',
      inquiryOptions: ['General Inquiry', 'Project proposal', 'Request for Quotation', 'Design, Assembly, Service', 'Other'],
      messageLabel: 'Message',
      submit: 'Send message',
      sending: 'Sending…',
      successTitle: 'Your Message Has Been Sent',
      successBody: 'Our team will get back to you after reviewing your inquiry.',
      errorBody: 'Oops, something went wrong! Try again.',
      requiredError: 'This field is required.',
      emailError: 'Please enter a valid email address.'
    },
    footer: {
      tagline: 'Quality metal structures for modern buildings.',
      menuHeading: 'Menu',
      contactHeading: 'Contact Us',
      copyright: '© 2025, R & K Metal Pro'
    }
  },
  sr: {
    nav: {
      about: 'O nama',
      projects: 'Projekti',
      services: 'Usluge',
      contact: 'Kontakt',
      menu: 'Meni'
    },
    hero: {
      eyebrow: 'R & K Metal Pro',
      heading: 'Inženjerska preciznost u svakoj konstrukciji',
      subheading:
        'Izrađujemo pouzdane ograde, kapije i konstrukcije po mjeri, sa fokusom na funkcionalnost, sigurnost i moderan dizajn.',
      ctaProjects: 'Naši projekti',
      ctaProjectsSub: 'Pogledajte naše realizovane projekte i kako naša metalna rješenja unapređuju svaki prostor.',
      ctaServices: 'Naše usluge',
      ctaServicesSub: 'Istražite naše usluge i podignite kvalitet svog projekta uz stručna i pouzdana rješenja.',
      ctaContact: 'Kontaktirajte nas',
      ctaContactSub: 'Stupite u kontakt s nama kako bismo zajedno oblikovali vašu ideju i pretvorili je u funkcionalno i moderno rješenje.',
      stats: [
        { value: 'Od 2020.', label: 'prisutni na austrijskom tržištu' },
        { value: '12+', label: 'realizovanih projekata' },
        { value: '3', label: 'zemlje: Austrija, Bosna i Hercegovina, Hrvatska' }
      ]
    },
    about: {
      eyebrow: 'O nama',
      heading: 'Mladost, iskustvo i precizan zanat',
      paragraphs: [
        'Naša kompanija je prisutna na tržištu Austrije od sredine 2020. godine. Spoj mladosti, iskustva i entuzijazma naših zaposlenih nas čini jednom od vodećih kompanija u sektoru metalske industrije na tržištima u okviru kojih obavljamo naše poslovanje.',
        'Do sada smo uspješno završili znatan broj projekata na području grada Beča, što nam daje dodatnu motivaciju za daljim napretkom i razvojem, vodeći se prvobitno željama i zahtjevima naših zadovoljnih kupaca.'
      ]
    },
    projects: {
      eyebrow: 'Naši projekti',
      heading: 'Pogledajte naše najnovije projekte',
      subheading: 'Pogledajte naše realizovane projekte i kako naša metalna rješenja unapređuju svaki prostor.',
      location: 'Lokacija',
      viewGallery: 'Pogledaj galeriju',
      moreImages: 'Vidi još',
      filters: [
        { key: 'all', label: 'Sve' },
        { key: 'glass', label: 'Staklene ograde' },
        { key: 'balcony', label: 'Balkonske ograde' },
        { key: 'stairs', label: 'Stepenišne ograde' },
        { key: 'fencing', label: 'Dvorišne ograde' },
        { key: 'doors', label: 'Vrata' },
        { key: 'cnc', label: 'CNC obrada' }
      ]
    },
    services: {
      eyebrow: 'Naše usluge',
      heading: 'Čime se bavimo',
      subheading: 'Istražite naše usluge i podignite kvalitet svog projekta uz stručna i pouzdana rješenja.'
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Kontaktirajte nas',
      subheading: 'Stupite u kontakt s nama kako bismo zajedno oblikovali vašu ideju i pretvorili je u funkcionalno i moderno rješenje.',
      nameLabel: 'Ime i prezime',
      emailLabel: 'Email',
      phoneLabel: 'Broj telefona',
      inquiryLabel: 'Vrsta upita',
      inquiryOptions: ['Opšti upit', 'Ponuda za projekat', 'Zahtjev za ponudu', 'Projektovanje, Montaža, Servis', 'Ostalo'],
      messageLabel: 'Poruka',
      submit: 'Pošalji poruku',
      sending: 'Šalje se…',
      successTitle: 'Vaša poruka je poslata',
      successBody: 'Naš tim će vam se javiti nakon obrade vašeg upita.',
      errorBody: 'Ups, nešto je pošlo naopako! Pokušajte ponovo.',
      requiredError: 'Ovo polje je obavezno.',
      emailError: 'Unesite ispravnu email adresu.'
    },
    footer: {
      tagline: 'Kvalitetne metalne konstrukcije za moderne objekte.',
      menuHeading: 'Meni',
      contactHeading: 'Kontaktirajte nas',
      copyright: '© 2025, R & K Metal Pro'
    }
  }
};
