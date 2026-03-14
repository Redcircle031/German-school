import Link from 'next/link'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher'

export const metadata = {
  title: 'WBS School - Wielojęzyczna Szkoła',
  description: 'Wielojęzyczna szkoła oferująca wysokiej jakości edukację z naciskiem na rozwój językowy i kulturowy.',
}

export default function HomePl() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">WBS School</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/pl" className="text-blue-900 font-medium">
                Strona główna
              </Link>
              <Link href="/pl/aktualnosci" className="text-gray-700 hover:text-blue-900 font-medium">
                Aktualności
              </Link>
              <Link href="/pl/o-szkole" className="text-gray-700 hover:text-blue-900 font-medium">
                O szkole
              </Link>
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">
                Panel admin
              </Link>
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Witamy w WBS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Wielojęzyczna szkoła oferująca wysokiej jakości edukację z naciskiem na rozwój językowy i kulturowy.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/pl/aktualnosci"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Aktualności
            </Link>
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Panel administracyjny
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Edukacja wielojęzyczna</h3>
              <p className="text-gray-600">Nauczanie w języku polskim, niemieckim i angielskim.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Osiągnięcia uczniów</h3>
              <p className="text-gray-600">Sukcesy w konkursach i olimpiadach przedmiotowych.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wymiana międzynarodowa</h3>
              <p className="text-gray-600">Współpraca ze szkołami partnerskimi zagranicą.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">WBS School</h4>
              <p className="text-gray-400 text-sm">
                Wielojęzyczna szkoła z tradycjami i nowoczesnym podejściem do edukacji.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/pl/aktualnosci" className="hover:text-white">Aktualności</Link></li>
                <li><Link href="/pl/o-szkole" className="hover:text-white">O szkole</Link></li>
                <li><Link href="/pl/rekrutacja" className="hover:text-white">Rekrutacja</Link></li>
                <li><Link href="/pl/kontakt" className="hover:text-white">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <address className="text-sm text-gray-400 not-italic">
                ul. Szkolna 123<br />
                00-000 Warszawa<br />
                tel: +48 123 456 789<br />
                email: info@wbs.pl
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Język</h4>
              <LanguageSwitcher />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2026 WBS School. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  )
}
