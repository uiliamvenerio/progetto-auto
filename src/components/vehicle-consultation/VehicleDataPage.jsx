import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function VehicleDataPage({ data, onBack }) {
  const goldFeatures = [
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
  ];

  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4">
            <Button variant="secondary" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/>
              </svg>
              <span className="ml-2">Voltar</span>
            </Button>
            <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
              Dados do Veículo
            </h1>
          </div>
        </div>

        <div className="p-4 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Placa */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Placa</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.placa}</p>
            </Card>

            {/* Marca */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Marca</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.MARCA}</p>
            </Card>

            {/* Modelo */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Modelo</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.MODELO}</p>
            </Card>

            {/* Chassi */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Chassi</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white font-mono">
                {data.chassi}
              </p>
            </Card>

            {/* Ano de Fabricação */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Ano de Fabricação</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.ano}</p>
            </Card>

            {/* Ano Modelo */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Ano Modelo</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.anoModelo}</p>
            </Card>
          </div>

          {/* Gold Consultation Information */}
          <Card className="max-w-5xl mx-auto">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-yellow-600 dark:text-yellow-400">
                      <path d="M243.84,76.19a12.08,12.08,0,0,0-13.34-1.7l-50.21,25L138.37,4.87a12,12,0,0,0-20.74,0L75.71,99.52l-50.21-25a12,12,0,0,0-17.37,13l27.23,157A12,12,0,0,0,47.19,252H208.81a12,12,0,0,0,11.83-7.51l27.23-157A12,12,0,0,0,243.84,76.19ZM208.81,228H47.19L22.86,89l46.85,23.37L100,57.51l35.09,87.72a12,12,0,0,0,22.13-9.06L128,48.39l38.29,87.78L233.14,89Z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Consulta Gold</h2>
                    <p className="text-primary font-medium">+25 Informações sobre o seu veículo</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-through">De R$59,90</p>
                  <p className="text-2xl font-bold text-primary">por R$49,90</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                Um dossiê completo com informações exclusivas para você saber tudo sobre o veículo pesquisado
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {goldFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button className="w-full">
                  Realizar Consulta Gold
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}