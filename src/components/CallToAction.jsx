export default function CallToAction() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Hazır mısın?</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Yaratıcılığını ortaya çıkar. Bugün başla, yarın fark yarat.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-gray-900 font-medium shadow hover:bg-gray-50 transition-colors"
          >
            Ücretsiz Dene
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Neler Yapabilir?
          </a>
        </div>
      </div>
    </section>
  )
}
