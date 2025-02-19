import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';
import clsx from 'clsx';

const consultationTypes = [
  {
    id: 'gold',
    name: 'Consulta Gold',
    price: 49.90,
    features: [
      'Informações Cadastrais (Ano, Fabricante, Modelo, Cor e mais)',
      'Número do Renavam e Chassi/Motor',
      'Débitos (Multas, Dívidas, Licenciamento e mais)',
      'Passagem por Leilão',
      'Proprietário (Nome, Documento Parcial)',
      'Roubo e Furto',
      'Gravame',
      'Restrições e Alienações',
      'Indício de Sinistros (Colisão, Enchente, Danos e mais)',
      'Recall Pendentes',
      'Carro de Locadora/Frota'
    ]
  },
  {
    id: 'silver',
    name: 'Consulta Silver',
    price: 29.90,
    features: [
      'Informações Cadastrais (Ano, Fabricante, Modelo, Cor e mais)',
      'Número do Renavam e Chassi/Motor',
      'Débitos (Multas, Dívidas, Licenciamento e mais)'
    ]
  },
  {
    id: 'bronze',
    name: 'Consulta Bronze',
    price: 19.90,
    features: [
      'Informações Cadastrais (Ano, Fabricante, Modelo, Cor e mais)',
      'Número do Renavam e Chassi/Motor'
    ]
  }
];

export function PlateConsultationPage() {
  const [plate, setPlate] = useState('');
  const [selectedType, setSelectedType] = useState('gold');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!plate.match(/^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/)) {
      toast.error('Placa inválida. Use o formato AAA0A00 ou AAA0000');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success('Consulta realizada com sucesso!');
      setLoading(false);
    }, 1500);
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
            Consultar Placa
          </h1>
        </div>

        <div className="p-4">
          <Card className="max-w-4xl mx-auto">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {consultationTypes.map((type) => (
                    <div
                      key={type.id}
                      className={clsx(
                        'p-4 rounded-lg border-2 cursor-pointer transition-all duration-200',
                        selectedType === type.id
                          ? 'border-primary bg-primary/5 dark:bg-primary/10'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                      )}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          type="radio"
                          name="consultationType"
                          checked={selectedType === type.id}
                          onChange={() => setSelectedType(type.id)}
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {type.name}
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        R$ {type.price.toFixed(2)}
                      </p>
                      <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={loading || plate.length < 7}>
                    {loading ? 'Consultando...' : 'Realizar Consulta'}
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