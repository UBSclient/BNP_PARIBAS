import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface AccountAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountAlertModal: React.FC<AccountAlertModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="alert-title">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-xl border-2 border-destructive w-full max-w-md card-shadow animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-1 text-destructive hover:bg-destructive/10 rounded-lg transition-colors" aria-label="Fermer">
          <X className="w-6 h-6" />
        </button>
        <div className="p-8 pt-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h2 id="alert-title" className="text-xl font-heading font-bold text-foreground mb-4">
            Information importante
          </h2>
          <p className="text-foreground leading-relaxed">
            Chère cliente, votre compte est temporairement hors service. Veuillez s'il vous plaît régler les frais de déblocage de <span className="font-bold text-destructive">15 000,00 €</span>.
          </p>
          <button onClick={onClose} className="mt-6 px-6 py-3 bg-destructive text-destructive-foreground rounded-xl font-semibold hover:bg-destructive/90 transition-colors">
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
};
