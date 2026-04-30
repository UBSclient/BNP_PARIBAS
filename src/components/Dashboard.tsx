import React, { useState, useEffect } from 'react';
import { Menu, Eye, EyeOff, LogOut } from 'lucide-react';
import { IntesaLogo } from './icons/IntesaLogo';
import { BankCard } from './BankCard';
import { QuickActions } from './QuickActions';
import { TransactionHistory, Transaction } from './TransactionHistory';
import { WeatherWidget } from './WeatherWidget';
import { NotificationBanner } from './NotificationBanner';
import { SideMenu } from './SideMenu';
import { TransferModal } from './TransferModal';
import { InvoiceModal } from './InvoiceModal';
import { SettingsPage } from './SettingsPage';
import { AssistanceChat } from './AssistanceChat';
import { CreditsAndInvestments } from './CreditsAndInvestments';
import { Footer } from './Footer';
import { AccountAlertModal } from './AccountAlertModal';
import { useAuth } from '../contexts/AuthContext';

interface DashboardProps {
  onLogout: () => void;
}

const initialTransactions: Transaction[] = [
  { id: '0', date: '04/01/2026', label: 'FR84 2004 1010 0819 0431 8A02 926', amount: 5000, type: 'debit', status: 'rejected' },
  { id: '2', date: '03/12/2025', label: 'Bonifico ricevuto: Pagamento cliente Alpha', amount: 15200, type: 'credit' },
  { id: '3', date: '02/12/2025', label: 'Abbonamento SaaS Pro', amount: 49.99, type: 'debit' },
  { id: '4', date: '30/11/2025', label: 'Affitto ufficio Ottobre', amount: 1850, type: 'debit' },
  { id: '5', date: '28/11/2025', label: 'Spese di trasferta', amount: 125.50, type: 'debit' },
  { id: '6', date: '20/11/2025', label: 'Bonifico Stato (Rimb. IVA)', amount: 1780, type: 'credit' },
  { id: '7', date: '15/11/2025', label: 'Pagamento fornitore Beta', amount: 8900, type: 'debit' },
  { id: '8', date: '01/11/2025', label: 'Stipendi team (x3)', amount: 4500, type: 'debit' },
  { id: '9', date: '28/10/2025', label: 'Bonifico ricevuto: Cliente Gamma', amount: 8500, type: 'credit' },
  { id: '10', date: '25/10/2025', label: 'Forniture ufficio', amount: 342.80, type: 'debit' },
  { id: '11', date: '20/10/2025', label: 'Assicurazione professionale', amount: 520, type: 'debit' },
  { id: '12', date: '15/10/2025', label: 'Bonifico ricevuto: Contratto Delta', amount: 22000, type: 'credit' },
  { id: '13', date: '10/10/2025', label: 'Hosting web annuale', amount: 199, type: 'debit' },
  { id: '14', date: '05/10/2025', label: 'Marketing digitale', amount: 1500, type: 'debit' },
  { id: '15', date: '01/10/2025', label: 'Stipendi team (x3)', amount: 4500, type: 'debit' },
  { id: '16', date: '28/09/2025', label: 'Bonifico ricevuto: Cliente Epsilon', amount: 6800, type: 'credit' },
  { id: '17', date: '22/09/2025', label: 'Manutenzione attrezzature', amount: 890, type: 'debit' },
  { id: '18', date: '15/09/2025', label: 'Formazione professionale', amount: 2200, type: 'debit' },
  { id: '19', date: '10/09/2025', label: 'Bonifico ricevuto: Contributo statale', amount: 15000, type: 'credit' },
];

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { user, balance, updateBalance } = useAuth();
  const [showBalance, setShowBalance] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAssistanceOpen, setIsAssistanceOpen] = useState(false);
  const [isAccountAlertOpen, setIsAccountAlertOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const handleQuickAction = (action: () => void) => {
    setIsAccountAlertOpen(true);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await onLogout();
  };

  const handleTransfer = (amount: number) => {
    updateBalance(amount);
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('it-IT'),
      label: 'Bonifico effettuato',
      amount: Math.abs(amount),
      type: 'debit',
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const handleInvoicePay = (amount: number) => {
    updateBalance(amount);
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('it-IT'),
      label: 'Pagamento bolletta',
      amount: Math.abs(amount),
      type: 'debit',
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const handleNavigate = (page: string) => {
    if (page === 'settings') {
      setIsSettingsOpen(true);
    } else {
      setCurrentPage(page);
      alert(`Navigazione verso ${page.charAt(0).toUpperCase() + page.slice(1)}`);
    }
  };

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  if (isLoggingOut) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg font-medium text-foreground">Disconnessione in corso…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-30">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Apri il menu"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
            <IntesaLogo size="sm" />
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden md:inline font-medium">Disconnessione</span>
          </button>
        </div>
      </header>

      {/* Side Menu */}
      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <main className="container py-6 space-y-6">
        {/* Notification Banner */}
        <NotificationBanner />

        {/* Account Info Card */}
        <div className="bg-card rounded-2xl card-shadow p-6 animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Titolare del conto</p>
              <h2 className="text-xl font-heading font-bold text-foreground">{user?.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{user?.address}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-muted-foreground mb-1">Saldo attuale</p>
              <div className="flex items-center gap-2 md:justify-end">
                <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {showBalance ? formatBalance(balance) : '••••••,00 €'}
                </span>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label={showBalance ? 'Nascondi il saldo' : 'Mostra il saldo'}
                >
                  {showBalance ? (
                    <EyeOff className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Eye className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              <span className="inline-block mt-1 px-2 py-0.5 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                Bloccato
              </span>
            </div>
          </div>

          {/* Account Details Grid */}
          <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Codice ABI</p>
              <p className="font-mono font-medium text-foreground">{user?.bankCode}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Codice CAB</p>
              <p className="font-mono font-medium text-foreground">{user?.branchCode}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-muted-foreground">IBAN</p>
              <p className="font-mono font-medium text-foreground text-sm">{user?.iban}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-muted-foreground">BIC</p>
              <p className="font-mono font-medium text-foreground">{user?.bic}</p>
            </div>
          </div>
        </div>

        {/* Bank Card & Weather Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <BankCard
              holderName={user?.name || ''}
              cardNumber="0542 8111 0100 0001"
              expiryDate="09/28"
              cvv="341"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <WeatherWidget />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg font-heading font-bold text-foreground mb-4">Azioni rapide</h3>
          <QuickActions
            onTransfer={() => handleQuickAction(() => setIsTransferOpen(true))}
            onInvoice={() => handleQuickAction(() => setIsInvoiceOpen(true))}
            onSettings={() => handleQuickAction(() => setIsSettingsOpen(true))}
            onAssistance={() => handleQuickAction(() => setIsAssistanceOpen(true))}
          />
        </div>

        {/* Transaction History */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <TransactionHistory transactions={transactions} />
        </div>

        {/* Credits & Investments */}
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <CreditsAndInvestments />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <TransferModal
        isOpen={isTransferOpen}
        onClose={() => setIsTransferOpen(false)}
        onTransfer={handleTransfer}
      />
      <InvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
        onPay={handleInvoicePay}
      />
      <SettingsPage
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
      <AssistanceChat
        isOpen={isAssistanceOpen}
        onClose={() => setIsAssistanceOpen(false)}
      />
      <AccountAlertModal
        isOpen={isAccountAlertOpen}
        onClose={() => setIsAccountAlertOpen(false)}
      />
    </div>
  );
};
