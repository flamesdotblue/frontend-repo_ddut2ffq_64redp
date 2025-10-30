import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-md" />
          <span className="font-semibold text-gray-900">Selam</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#hero" className="hover:text-gray-900 transition-colors">Ana Sayfa</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Özellikler</a>
          <a href="#cta" className="hover:text-gray-900 transition-colors">Başla</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-gray-700">
            <a href="#hero" onClick={() => setOpen(false)} className="py-2">Ana Sayfa</a>
            <a href="#features" onClick={() => setOpen(false)} className="py-2">Özellikler</a>
            <a href="#cta" onClick={() => setOpen(false)} className="py-2">Başla</a>
          </div>
        </div>
      )}
    </header>
  )
}
