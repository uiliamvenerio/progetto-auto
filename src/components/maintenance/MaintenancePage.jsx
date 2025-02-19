import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { format } from 'date-fns';
import { MaintenanceModal } from './MaintenanceModal';

const initialMaintenanceHistory = [
  {
    id: 1,
    date: '2023-12-15',
    type: 'Preventiva',
    description: 'Troca de óleo e filtros',
    mileage: 50000,
    workshop: 'Oficina do João',
    cost: 350.00
  },
  {
    id: 2,
    date: '2023-11-20',
    type: 'Corretiva',
    description: 'Substituição de pastilhas de freio',
    mileage: 48000,
    workshop: 'Auto Center Silva',
    cost: 280.00
  },
  {
    id: 3,
    date: '2023-10-05',
    type: 'Preventiva',
    description: 'Alinhamento e balanceamento',
    mileage: 45000,
    workshop: 'Oficina do João',
    cost: 150.00
  }
];

export function MaintenancePage() {
  const [maintenanceHistory, setMaintenanceHistory] = useState(initialMaintenanceHistory);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMaintenance = (newMaintenance) => {
    setMaintenanceHistory([newMaintenance, ...maintenanceHistory]);
  };

  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
            Histórico de Manutenções
          </h1>
          <Button onClick={() => setIsModalOpen(true)}>
            Nova Manutenção
          </Button>
        </div>

        <div className="p-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
                  Manutenções Realizadas
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Data</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Tipo</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Descrição</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Quilometragem</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Oficina</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Custo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceHistory.map((maintenance) => (
                      <tr 
                        key={maintenance.id}
                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors"
                      >
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-900 dark:text-white">
                            {format(new Date(maintenance.date), 'dd/MM/yyyy')}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            maintenance.type === 'Preventiva'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {maintenance.type}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-900 dark:text-white">
                            {maintenance.description}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-900 dark:text-white">
                            {maintenance.mileage.toLocaleString()} km
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-900 dark:text-white">
                            {maintenance.workshop}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-sm text-gray-900 dark:text-white">
                            R$ {maintenance.cost.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MaintenanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddMaintenance}
      />
    </main>
  );
}