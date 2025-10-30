export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Selam. Tüm hakları saklıdır.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Gizlilik</a>
          <span className="text-gray-300">•</span>
          <a href="#" className="hover:text-gray-900">Şartlar</a>
          <span className="text-gray-300">•</span>
          <a href="#" className="hover:text-gray-900">İletişim</a>
        </div>
      </div>
    </footer>
  )
}
