import React, { useState } from 'react';
import { ChevronDown, Briefcase, PiggyBank, TrendingUp } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  type: 'credit' | 'investment';
  details: {
    label: string;
    value: string;
  }[];
}

const items: AccordionItem[] = [
  {
    id: '1',
    title: 'MUTUO IMMOBILIARE',
    type: 'credit',
    details: [
      { label: 'Importo iniziale', value: '350.000 €' },
      { label: 'Capitale residuo', value: '285.420 €' },
      { label: 'Tasso', value: '2,15%' },
      { label: 'Scadenza', value: 'Marzo 2045' },
      { label: 'Rata mensile', value: '1.450 €' },
    ],
  },
  {
    id: '2',
    title: 'BUONO FRUTTIFERO',
    type: 'investment',
    details: [
      { label: 'Importo investito', value: '50.000 €' },
      { label: 'Tasso garantito', value: '3,25%' },
      { label: 'Durata', value: '24 mesi' },
      { label: 'Scadenza', value: 'Giugno 2026' },
      { label: 'Interessi maturati', value: '1.625 €' },
    ],
  },
  {
    id: '3',
    title: 'DEPOSITO VINCOLATO',
    type: 'investment',
    details: [
      { label: 'Importo investito', value: '100.000 €' },
      { label: 'Tasso', value: '2,85%' },
      { label: 'Durata', value: '36 mesi' },
      { label: 'Scadenza', value: 'Dicembre 2027' },
      { label: 'Interessi stimati', value: '8.550 €' },
    ],
  },
];

export const CreditsAndInvestments: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getIcon = (type: 'credit' | 'investment') => {
    return type === 'credit' ? Briefcase : PiggyBank;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          I miei finanziamenti
        </h3>
        <div className="space-y-3">
          {items
            .filter((item) => item.type === 'credit')
            .map((item) => {
              const Icon = getIcon(item.type);
              const isOpen = openItems.includes(item.id);

              return (
                <div key={item.id} className="bg-card rounded-xl card-shadow overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 pt-0 space-y-2">
                      {item.details.map((detail, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-2 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground">{detail.label}</span>
                          <span className="font-medium text-foreground">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-success" />
          I miei investimenti
        </h3>
        <div className="space-y-3">
          {items
            .filter((item) => item.type === 'investment')
            .map((item) => {
              const Icon = getIcon(item.type);
              const isOpen = openItems.includes(item.id);

              return (
                <div key={item.id} className="bg-card rounded-xl card-shadow overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-success" />
                      </div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 pt-0 space-y-2">
                      {item.details.map((detail, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-2 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground">{detail.label}</span>
                          <span className="font-medium text-foreground">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
