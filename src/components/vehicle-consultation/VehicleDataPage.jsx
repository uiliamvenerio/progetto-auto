import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function VehicleDataPage({ data, onBack }) {
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

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Placa */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Placa</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.placa}</p>
            </Card>

            {/* Marca */}
            <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Marca</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.MARCA}</p>
            </Card>

            {/* Modelo */}
            <Card className="p-6 bg-gradient-to-br from-emerald-50/50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/20">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Modelo</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.MODELO}</p>
            </Card>

            {/* Chassi */}
            <Card className="p-6 bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Chassi</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white font-mono">
                {data.chassi}
              </p>
            </Card>

            {/* Ano de Fabricação */}
            <Card className="p-6 bg-gradient-to-br from-amber-50/50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/20">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Ano de Fabricação</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.ano}</p>
            </Card>

            {/* Ano Modelo */}
            <Card className="p-6 bg-gradient-to-br from-rose-50/50 to-rose-100/50 dark:from-rose-900/20 dark:to-rose-800/20">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Ano Modelo</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{data.anoModelo}</p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}