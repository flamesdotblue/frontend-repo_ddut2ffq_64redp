import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
            <Sparkles className="h-4 w-4" />
            Hoş geldin
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Selam! Güzel şeyler yapalım
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Şık, hızlı ve modern bir başlangıç. Tasarım odaklı bir deneyimle projene hemen başla.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
            >
              Hemen Başla
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium border border-black/10 hover:bg-gray-50 transition-colors"
            >
              Daha Fazlasını Gör
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {["Hızlı", "Zarif", "Duyarlı", "Modern"].map((tag) => (
            <div key={tag} className="rounded-lg border border-black/5 bg-white/60 backdrop-blur px-4 py-3 text-center text-gray-700">
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
