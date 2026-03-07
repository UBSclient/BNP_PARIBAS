import React from 'react';
import { IntesaLogo } from './icons/IntesaLogo';
import { Linkedin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const columns = [
    {
      title: "Prodotti e Servizi",
      links: [
        'Conti Correnti',
        'Carte di Credito e Debito',
        'Mutui e Prestiti',
        'Investimenti e Risparmio',
        'Assicurazioni',
      ],
    },
    {
      title: 'Risorse',
      links: ['Tariffe e Condizioni', 'Assistenza Clienti', 'Filiali e ATM', 'App Mobile'],
    },
    {
      title: 'Chi Siamo',
      links: [
        'Lavora con noi',
        'Sostenibilità',
        'Investor Relations',
        'Area Stampa',
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  const legalLinks = [
    'Mappa del sito',
    'Note legali',
    'Privacy',
    'Cookie Policy',
    'Gestione Cookie',
    'Contattaci',
    'Accessibilità',
    'Trasparenza',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-xs">ISP</span>
              </div>
              <span className="text-xl font-heading font-bold">intesa sanpaolo</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              La banca dei risultati. Il vostro partner finanziario di fiducia dal 2007.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-heading font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-medium">Seguici su:</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-primary-foreground/70">© Intesa Sanpaolo 2025 - Tutti i diritti riservati</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
