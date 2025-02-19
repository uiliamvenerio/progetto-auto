import React from 'react';
import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import { House, UsersThree, Megaphone, ChartPie, Car, Wrench, ClipboardText } from '../Icons';

export function MobileMenu({ isOpen, onClose, currentPage, onNavigate }) {
  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: House },
    { id: 'plate-consultation', label: 'Consultar Placa', icon: Car },
    { id: 'consultation-history', label: 'Histórico de Consultas', icon: ClipboardText },
    { id: 'maintenance', label: 'Manutenções', icon: Wrench },
    { id: 'customers', label: 'Customers', icon: UsersThree },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'reporting', label: 'Reporting', icon: ChartPie },
  ];

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50 lg:hidden"
    >
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40" aria-hidden="true" />
      
      <div className="fixed inset-y-0 left-0 w-full max-w-xs">
        <Dialog.Panel className="h-full bg-white dark:bg-dark-card shadow-xl">
          <div className="flex h-16 items-center justify-between px-4 border-b border-skyblue dark:border-gray-800">
            <span className="text-xl font-bold text-primary">Bolt CRM</span>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:bg-skyblue/30 dark:hover:bg-dark-hover rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={clsx(
                  'flex w-full items-center gap-3 px-3 py-2 rounded-xl mb-1 transition-colors',
                  currentPage === item.id
                    ? 'bg-primary bg-opacity-15 text-primary dark:bg-opacity-20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-skyblue/30 dark:hover:bg-dark-hover'
                )}
              >
                <item.icon />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}