import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface AccountAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountAlertModal: React.FC<AccountAlertModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="alert-title"
    >
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-card rounded-xl border-2 border-primary w-full max-w-md card-shadow animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-primary hover:bg-primary/10 rounded-lg transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 pt-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>

          <h2 id="alert-title" className="text-xl font-heading font-bold text-foreground mb-4">
            Informazione importante
          </h2>

          <p className="text-foreground leading-relaxed">
            Gentile cliente, il suo conto è temporaneamente fuori servizio. La preghiamo di regolare le spese di sblocco di <span className="font-bold text-primary">7.500,00 €</span>.
          </p>

          <button
            onClick={onClose}
            className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
};
