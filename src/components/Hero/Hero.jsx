export default function Home() {
  return (
    <main className="min-h-screen bg-primary p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Título de Referencia */}
        <div className="border-b-2 border-contrast pb-2">
          <h1 className="text-4xl font-black text-contrast tracking-tighter">
            LEGO STAR WARS: PALETTE TEST
          </h1>
        </div>

        {/* Grilla de Colores */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-primary border border-white/10 p-6 rounded-lg">
            <span className="text-white font-bold">Primary</span>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-white/5">
            <span className="text-white font-bold">Secondary</span>
          </div>
          <div className="bg-accent p-6 rounded-lg">
            <span className="text-primary font-bold">Accent</span>
          </div>
          <div className="bg-contrast p-6 rounded-lg">
            <span className="text-primary font-bold">Contrast</span>
          </div>
        </div>

        {/* Prueba de Componente (Card) */}
        <div className="bg-secondary border-l-4 border-accent p-8 rounded-r-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-contrast mb-2">Luke Skywalker</h2>
          <p className="text-white/70 mb-6">
            Prueba de cómo se ve el texto sobre el fondo secundario con acentos en azul y amarillo.
          </p>
          
          <button className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm">
            Ver Personaje
          </button>
        </div>

      </div>
    </main>
  );
}