import { motion } from 'framer-motion'
import { Rocket, Star, Shield } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Hızlı Başlangıç',
    desc: 'Dakikalar içinde yayında. Modern teknolojilerle güçlendirildi.',
  },
  {
    icon: Star,
    title: 'Estetik Tasarım',
    desc: 'Temiz tipografi, dengeli renkler ve rafine detaylar.',
  },
  {
    icon: Shield,
    title: 'Güvenilir Altyapı',
    desc: 'Sağlam yapı ve iyi pratiklerle uzun ömürlü projeler.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Özellikler</h2>
          <p className="mt-3 text-gray-600">İhtiyacın olan her şey, sade ve güçlü bir deneyimle bir arada.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-black/5 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
