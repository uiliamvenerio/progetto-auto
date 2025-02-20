import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';

export function VehicleConsultationPage() {
  const [plate, setPlate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!plate.match(/^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/)) {
      toast.error('Placa inválida. Use o formato AAA0A00 ou AAA0000');
      return;
    }

    toast.success('Consultando placa ' + plate);
  };

  const formatPlate = (value) => {
    // Remove any non-alphanumeric characters
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    return cleaned.slice(0, 7);
  };

  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
            Consultar Veículos
          </h1>
        </div>

        <div className="p-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
                Consulta de Placa de Veículo
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Placa do Veículo
                  </label>
                  <input
                    type="text"
                    value={plate}
                    onChange={(e) => setPlate(formatPlate(e.target.value))}
                    placeholder="AAA0A00 ou AAA0000"
                    className="w-full px-4 py-2 rounded-lg border border-skyblue dark:border-gray-700 bg-white dark:bg-dark-hover text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    maxLength={7}
                  />
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Digite a placa no formato Mercosul (AAA0A00) ou no formato antigo (AAA0000)
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={plate.length < 7}>
                    Consultar Veículo
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}