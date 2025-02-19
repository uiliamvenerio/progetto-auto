import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { format } from 'date-fns';

const consultationHistory = [
  {
    id: 1,
    date: '2023-12-22',
    type: 'Básica',
    plate: 'ABC1D23',
    value: 15.00
  },
  {
    id: 2,
    date: '2023-12-21',
    type: 'Completa',
    plate: 'XYZ9W87',
    value: 25.00
  },
  {
    id: 3,
    date: '2023-12-20',
    type: 'Básica',
    plate: 'DEF4G56',
    value: 15.00
  }
];

export function ConsultationHistoryPage() {
  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
            Histórico de Consultas
          </h1>
        </div>

        <div className="p-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
                  Consultas Realizadas
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Data</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Tipo de Consulta</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Placa</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Valor da Consulta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultationHistory.map((consultation) => (
                      <tr 
                        key={consultation.id}
                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors"
                      >
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-900 dark:text-white">
                            {format(new Date(consultation.date), 'dd/MM/yyyy')}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            consultation.type === 'Básica'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          }`}>
                            {consultation.type}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-900 dark:text-white">
                            {consultation.plate}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-sm text-gray-900 dark:text-white">
                            R$ {consultation.value.toFixed(2)}
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
    </main>
  );
}