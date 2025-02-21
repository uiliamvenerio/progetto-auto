import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export function VehicleDataPage({ data, onBack }) {
  const renderDataRow = (label, value) => {
    if (!value || value === 'null') return null;
    
    return (
      <div className="grid grid-cols-2 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
        <dd className="text-sm text-gray-900 dark:text-white">{value}</dd>
      </div>
    );
  };

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
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Informações do Veículo
                </h2>
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Placa: {data.placa}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {renderDataRow("Marca", data.MARCA)}
                {renderDataRow("Modelo", data.MODELO)}
                {renderDataRow("Submodelo", data.SUBMODELO)}
                {renderDataRow("Versão", data.VERSAO)}
                {renderDataRow("Ano", data.ano)}
                {renderDataRow("Ano Modelo", data.anoModelo)}
                {renderDataRow("Chassi", data.chassi)}
                {renderDataRow("Cor", data.cor)}
                {renderDataRow("Placa Antiga", data.placa_modelo_antigo)}
                {renderDataRow("Placa Nova", data.placa_modelo_novo)}
                {renderDataRow("Combustível", data.combustivel)}
                {renderDataRow("Potência", `${data.potencia} cv`)}
                {renderDataRow("Cilindradas", `${data.extra.cilindradas} cc`)}
                {renderDataRow("Município", data.municipio)}
                {renderDataRow("UF", data.uf)}
                {renderDataRow("Nacionalidade", data.extra.nacionalidade)}
                {renderDataRow("Quantidade de Passageiros", data.quantidade_passageiro)}
                {renderDataRow("Quantidade de Eixos", data.eixos)}
                {renderDataRow("Peso Bruto Total", `${data.extra.peso_bruto_total} kg`)}
                {renderDataRow("Motor", data.extra.motor)}
                {renderDataRow("Restrição 1", data.extra.restricao1?.restricao)}
                {renderDataRow("Restrição 2", data.extra.restricao2?.restricao)}
                {renderDataRow("Restrição 3", data.extra.restricao3?.restricao)}
                {renderDataRow("Restrição 4", data.extra.restricao4?.restricao)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}