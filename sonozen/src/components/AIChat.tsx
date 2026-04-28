// src/components/AIChat.tsx
interface AIChatProps {
  input: string;
  setInput: (value: string) => void;
  enviarPergunta: () => void;
  carregandoIA: boolean;
  respostaAtual: string;
}

export default function AIChat({ input, setInput, enviarPergunta, carregandoIA, respostaAtual }: AIChatProps) {
  return (
    <>
      <section className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Como posso ajudar sua rotina hoje?</label>
        <textarea
          className="w-full p-4 bg-gray-950 rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600 resize-none relative z-10"
          rows={3}
          placeholder="Ex: Tive insônia ontem após estudar até tarde, o que devo fazer hoje?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={enviarPergunta}
          disabled={carregandoIA}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-white shadow-lg shadow-blue-900/20 transition-all disabled:bg-gray-800 disabled:text-gray-500 relative z-10 flex items-center justify-center gap-2"
        >
          {carregandoIA ? "A IA está pensando..." : "Enviar Pergunta"}
        </button>
      </section>

      {respostaAtual && (
        <section className="bg-blue-900/10 border border-blue-500/30 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-blue-400 font-bold">Resposta da IA:</h2>
          </div>
          <p className="leading-relaxed text-gray-200 whitespace-pre-wrap">{respostaAtual}</p>
        </section>
      )}
    </>
  );
}