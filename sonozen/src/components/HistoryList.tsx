// src/components/HistoryList.tsx
interface HistoricoItem {
  id: string;
  pergunta: string;
  resposta: string;
  created_at: string;
}

interface HistoryListProps {
  historico: HistoricoItem[];
}

export default function HistoryList({ historico }: HistoryListProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-400 flex items-center gap-2">
        Seu Histórico Recente
      </h2>
      {historico.length === 0 && (
        <p className="text-gray-600 italic">Nenhuma pergunta feita ainda. Comece sua jornada acima!</p>
      )}
      <div className="space-y-4">
        {historico.map((item) => (
          <div key={item.id} className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <p className="text-sm text-blue-400 font-medium mb-2 border-b border-gray-800 pb-2">
              <span className="text-gray-500 mr-2">Q:</span>{item.pergunta}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {item.resposta}
            </p>
            <span className="text-[10px] text-gray-500 mt-4 block uppercase tracking-wider">
              {new Date(item.created_at).toLocaleString("pt-BR")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}