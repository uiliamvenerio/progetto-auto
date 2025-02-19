import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export function VehicleDataPage({ data, onBack }) {
  const renderDataRow = (label, value) => {
    if (value === null || value === undefined) return null;
    
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
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {data.dados.fabricante} {data.dados.modelo}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Placa: {data.dados.placa}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {data.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {renderDataRow("Chassi", data.dados.chassi)}
                {renderDataRow("Ano Fabricação", data.dados.ano_fabricacao)}
                {renderDataRow("Ano Modelo", data.dados.ano_modelo)}
                {renderDataRow("Combustível", data.dados.combustivel)}
                {renderDataRow("Tipo", data.dados.tipo_veiculo)}
                {renderDataRow("Espécie", data.dados.especie)}
                {renderDataRow("Cor", data.dados.cor)}
                {renderDataRow("Tipo Carroceria", data.dados.tipo_carroceria)}
                {renderDataRow("Nacionalidade", data.dados.nacionalidade)}
                {renderDataRow("Número Motor", data.dados.numero_motor)}
                {renderDataRow("Potência", `${data.dados.potencia} cv`)}
                {renderDataRow("Cilindradas", `${data.dados.cilindradas} cc`)}
                {renderDataRow("Quantidade de Eixos", data.dados.quantidade_eixo)}
                {renderDataRow("Capacidade Máx. Tração", `${data.dados.capacidade_max_tracao} kg`)}
                {renderDataRow("Peso Bruto Total", `${data.dados.peso_bruto_total} kg`)}
                {renderDataRow("Quantidade Lugares", data.dados.quantidade_lugares)}
                {renderDataRow("UF", data.dados.uf_jurisdicao)}
                {renderDataRow("Cidade", data.dados.cidade)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}