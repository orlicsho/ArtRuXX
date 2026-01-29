import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">ArtRuXX</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/timeline" className="text-sm font-medium tracking-wide text-gray-900 opacity-90 hover:opacity-70 transition-all">
                ЛЕНТА ВРЕМЕНИ
              </Link>
              <Link href="/artists" className="text-sm font-medium tracking-wide text-gray-900 opacity-90 hover:opacity-70 transition-all">
                ХУДОЖНИКИ
              </Link>
              <Link href="/movements" className="text-sm font-medium tracking-wide text-gray-900 opacity-90 hover:opacity-70 transition-all">
                НАПРАВЛЕНИЯ
              </Link>
              <Link href="/gallery" className="text-sm font-medium tracking-wide text-gray-900 opacity-90 hover:opacity-70 transition-all">
                ГАЛЕРЕЯ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - без фонового изображения */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="text-gray-900 max-w-3xl">
            <h1 className="text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Навигатор по искусству XX века
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Интерактивная образовательная платформа для изучения русского искусства. Исследуйте направления, художников и их взаимосвязи на интерактивной ленте времени.
            </p>
            <Link
              href="/timeline"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-xl transition-all group shadow-lg"
            >
              НАЧАТЬ ИССЛЕДОВАНИЕ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - однотонные кнопки */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Исследуйте искусство</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Три способа погрузиться в мир русского искусства XX века
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/timeline">
              <div className="relative h-40 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-6 flex items-center overflow-hidden group cursor-pointer transition-all hover:shadow-2xl hover:scale-105 shadow-lg">
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Интерактивная временная лента</h3>
                </div>
              </div>
            </Link>
            <Link href="/artists">
              <div className="relative h-40 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 flex items-center overflow-hidden group cursor-pointer transition-all hover:shadow-2xl hover:scale-105 shadow-lg">
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Биографии художников</h3>
                </div>
              </div>
            </Link>
            <Link href="/movements">
              <div className="relative h-40 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 flex items-center overflow-hidden group cursor-pointer transition-all hover:shadow-2xl hover:scale-105 shadow-lg">
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Художественные движения</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Masterpieces Gallery - обновленные картинки */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Шедевры русского искусства XX века</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Коллекция знаковых произведений, определивших развитие мирового искусства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Черный квадрат", artist: "Казимир Малевич", year: "1915", movement: "Супрематизм", img: "https://avatars.mds.yandex.net/i?id=c67bc18212ab85564a48485b4ec047a97535fb2a-3526614-images-thumbs&n=13" },
              { title: "Композиция VII", artist: "Василий Кандинский", year: "1913", movement: "Абстракционизм", img: "https://avatars.mds.yandex.net/i?id=3b948a8334801dd1294360279c3a9c3b402da298-7999331-images-thumbs&n=13" },
              { title: "Купание красного коня", artist: "Кузьма Петров-Водкин", year: "1912", movement: "Символизм", img: "https://avatars.mds.yandex.net/i?id=1e394b03231a06b777460e337946deb3aedf84e0-4803223-images-thumbs&n=13" },
              { title: "Над городом", artist: "Марк Шагал", year: "1918", movement: "Модернизм", img: "https://s09.stc.yc.kpcdn.net/share/i/12/13455926/wr-960.webp" },
            ].map((artwork, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={artwork.img}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{artwork.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{artwork.year}</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{artwork.movement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
            >
              СМОТРЕТЬ ВСЮ КОЛЛЕКЦИЮ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Suprematism Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://avatars.mds.yandex.net/i?id=e10d00c32ca61f3c687cd4038a10a57487cd6d2f-8274378-images-thumbs&n=13"
                  alt="Супрематизм"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow">Авангард</span>
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow">1910-1930</span>
              </div>
            </div>
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Супрематизм</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 border-2 border-gray-900 rounded-full text-sm font-medium">Геометрия</span>
                <span className="px-4 py-2 text-sm font-medium text-gray-600">Абстракция</span>
                <span className="px-4 py-2 text-sm font-medium text-gray-600">Малевич</span>
                <span className="px-4 py-2 text-sm font-medium text-gray-600">Цвет</span>
              </div>
              <div className="bg-gray-900 rounded-3xl p-8 shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white mb-4">Ключевые идеи</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Превосходство чистого чувства</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Супрематизм — направление в авангардном искусстве, основанное Казимиром Малевичем в 1915 году. Характеризуется использованием простых геометрических форм и ограниченной цветовой палитры для выражения чистого художественного чувства.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/movements"
                  className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all"
                >
                  Узнать больше о направлениях
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masters Section - обновленные портреты */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Мастера, изменившие русское искусство</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с художниками, чьи работы определили развитие искусства XX века
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Казимир Малевич", description: "Основатель супрематизма", img: "https://avatars.mds.yandex.net/i?id=581c6284b117d0b26d265705ad9d920a51f946c2-4728221-images-thumbs&n=13" },
              { name: "Василий Кандинский", description: "Пионер абстракционизма", img: "https://avatars.mds.yandex.net/i?id=f991454e4939505cf7c2579056f1b88351036515-5665685-images-thumbs&n=13" },
              { name: "Марк Шагал", description: "Мастер поэтической живописи", img: "https://avatars.mds.yandex.net/i?id=c7234f744438d0dd761577ded7cb2607f3eb80e2-5518637-images-thumbs&n=13" },
              { name: "Наталья Гончарова", description: "Пионер неопримитивизма", img: "https://avatars.mds.yandex.net/i?id=a2e63d809d476f91ce147a06c6c0fffe1c1e21a1-5480663-images-thumbs&n=13" },
            ].map((artist, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="aspect-square mb-4 rounded-full overflow-hidden mx-auto w-48 h-48 shadow-xl">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
                <p className="text-sm text-gray-600">{artist.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/artists"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
            >
              ВСЕ ХУДОЖНИКИ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - новая картинка */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://avatars.mds.yandex.net/i?id=7f65430679451e34db69f8edfd3bc1b4c83ab642-12512933-images-thumbs&n=13')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-7xl font-bold text-white mb-6 tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
            ОТКРОЙТЕ МИР ИСКУССТВА
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Интерактивное путешествие через столетие русского художественного авангарда
          </p>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-4 px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all group shadow-2xl"
          >
            <span className="text-lg tracking-wide">НАЧАТЬ ОБУЧЕНИЕ</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
