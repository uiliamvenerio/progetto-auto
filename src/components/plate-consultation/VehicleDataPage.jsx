import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export function VehicleDataPage({ data, infractions, gravame, sinistros, onBack }) {
  const renderDataRow = (label, value) => {
    if (value === null || value === undefined || value === '') return null;
    
    return (
      <div className="grid grid-cols-2 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
        <dd className="text-sm text-gray-900 dark:text-white">{value}</dd>
      </div>
    );
  };

  const renderSinistroSection = (title, data, sectionKey) => {
    if (!data || !data.produto) return null;
    
    return (
      <div key={sectionKey} className="mt-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data.msg}</p>
        {data.resposta && data.resposta.length > 0 && (
          <div className="mt-2 space-y-2">
            {data.resposta.map((item, index) => (
              <div key={`${sectionKey}-item-${index}`} className="p-3 bg-gray-50 dark:bg-dark-hover rounded-lg">
                {Object.entries(item).map(([key, value]) => (
                  <p key={`${sectionKey}-${key}`} className="text-sm">
                    <span className="font-medium">{key}:</span> {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
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

        <div className="p-4 space-y-4">
          {/* Basic Vehicle Data */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Informações Básicas
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
                {renderDataRow("Ano Fabricação", data.dados.ano_fabricacao || data.dados.anofabricacao)}
                {renderDataRow("Ano Modelo", data.dados.ano_modelo || data.dados.anomodelo)}
                {renderDataRow("Combustível", data.dados.combustivel)}
                {renderDataRow("Tipo", data.dados.tipo_veiculo)}
                {renderDataRow("Espécie", data.dados.especie)}
                {renderDataRow("Cor", data.dados.cor)}
                {renderDataRow("Tipo Carroceria", data.dados.tipo_carroceria)}
                {renderDataRow("Nacionalidade", data.dados.nacionalidade)}
                {renderDataRow("Número Motor", data.dados.numero_motor)}
                {renderDataRow("Potência", data.dados.potencia ? `${data.dados.potencia} cv` : null)}
                {renderDataRow("Cilindradas", data.dados.cilindradas ? `${data.dados.cilindradas} cc` : null)}
                {renderDataRow("Quantidade de Eixos", data.dados.quantidade_eixo)}
                {renderDataRow("Capacidade Máx. Tração", data.dados.capacidade_max_tracao ? `${data.dados.capacidade_max_tracao} kg` : null)}
                {renderDataRow("Peso Bruto Total", data.dados.peso_bruto_total ? `${data.dados.peso_bruto_total} kg` : null)}
                {renderDataRow("Quantidade Lugares", data.dados.quantidade_lugares)}
                {renderDataRow("UF", data.dados.uf_jurisdicao)}
                {renderDataRow("Cidade", data.dados.cidade)}
              </div>
            </CardContent>
          </Card>

          {/* Gravame Information */}
          {gravame && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Informações de Gravame
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {renderDataRow("Renavam", gravame.dados.renavam)}
                  {renderDataRow("Financeira", gravame.dados.financeiranome)}
                  {renderDataRow("Status", gravame.dados.descricaostatus)}
                  {renderDataRow("Data do Gravame", gravame.dados.datagravame)}
                  {renderDataRow("UF do Gravame", gravame.dados.ufgravame)}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sinistros Information */}
          {sinistros && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Histórico de Sinistros e Restrições
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(sinistros.dados).map(([key, value]) => {
                    if (key === 'msg' || key === 'consta_indicio_sinistro') return null;
                    return renderSinistroSection(value.produto, value, key);
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Infractions Summary */}
          {infractions && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Infrações
                  </h2>
                  <div className="px-4 py-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <p className="text-lg font-semibold text-red-800 dark:text-red-400">
                      Total de Ocorrências: {infractions.dados.quantidade_ocorrencias_total}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {infractions.dados.registros.map((infraction, index) => (
                    <div 
                      key={`infraction-${index}`}
                      className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {infraction.detalhe_cod_infracao}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {infraction.detalhe_local_infracao}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Data: {infraction.datadainfracao} às {infraction.detalhe_hr_infracao}
                          </p>
                          <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                            Valor: R$ {infraction.detalhe_valor_infracao}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}