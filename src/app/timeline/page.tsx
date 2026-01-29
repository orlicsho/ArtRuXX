"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Timeline() {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const timeline = [
    { year: 1890, event: "Демон сидящий", artist: "Михаил Врубель", movement: "Символизм", img: "https://avatars.mds.yandex.net/i?id=8ce829eb4cd842e261de05d8079803dd9f1a5a42-5342217-images-thumbs&n=13" },
    { year: 1912, event: "Купание красного коня", artist: "Кузьма Петров-Водкин", movement: "Символизм", img: "https://avatars.mds.yandex.net/i?id=1e394b03231a06b777460e337946deb3aedf84e0-4803223-images-thumbs&n=13" },
    { year: 1912, event: "Импровизация 28", artist: "Василий Кандинский", movement: "Абстракционизм", img: "https://avatars.mds.yandex.net/i?id=105a7a765beef1c56a452ec5556a328d6f6ac617-12248382-images-thumbs&n=13" },
    { year: 1913, event: "Композиция VII", artist: "Василий Кандинский", movement: "Абстракционизм", img: "https://avatars.mds.yandex.net/i?id=3b948a8334801dd1294360279c3a9c3b402da298-7999331-images-thumbs&n=13" },
    { year: 1913, event: "Велосипедист", artist: "Наталия Гончарова", movement: "Лучизм", img: "https://artchive.ru/res/media/img/ox800/work/53a/322234.jpeg" },
    { year: 1915, event: "Черный квадрат", artist: "Казимир Малевич", movement: "Супрематизм", img: "https://avatars.mds.yandex.net/i?id=c67bc18212ab85564a48485b4ec047a97535fb2a-3526614-images-thumbs&n=13" },
    { year: 1916, event: "Живописная электроника", artist: "Любовь Попова", movement: "Кубофутуризм", img: "https://avatars.mds.yandex.net/i?id=1bd3b35f16f7a890ea1301a9b8ca6d6dddb375b5-5544440-images-thumbs&n=13" },
    { year: 1918, event: "Над городом", artist: "Марк Шагал", movement: "Модернизм", img: "https://s09.stc.yc.kpcdn.net/share/i/12/13455926/wr-960.webp" },
    { year: 1919, event: "Башня Татлина", artist: "Владимир Татлин", movement: "Конструктивизм", img: "https://artlemon.ru/imagesbase/2/big/tatlin-vladimir-evgrafovich-1885-1953/model-pamyatnika-iii-internacionala.-1919-20.-rekonstrukciya-1979.-artfond.jpg" },
    { year: 1920, event: "Красный клин", artist: "Эль Лисицкий", movement: "Супрематизм", img: "https://artchive.ru/res/media/img/ox800/work/abb/595538.jpg" },
    { year: 1937, event: "Рабочий и колхозница", artist: "Вера Мухина", movement: "Соцреализм", img: "https://avatars.mds.yandex.net/i?id=497dae751d868a77f421cb7146c71caacc7b2855-5734356-images-thumbs&n=13" },
    { year: 1942, event: "Оборона Севастополя", artist: "Александр Дейнека", movement: "Соцреализм", img: "http://avatars.mds.yandex.net/get-vthumb/937183/8ff2963876bad12928f95115c63f096e/800x450" },
  ];

  const hoveredItem = timeline.find((_, idx) => idx === hoveredYear);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image on Hover */}
      {hoveredItem && (
        <div
          className="fixed inset-0 z-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url('${hoveredItem.img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
      )}

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
              <Link href="/timeline" className="text-sm font-medium tracking-wide text-gray-900 opacity-70">
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

      <main className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Вернуться на главную
          </Link>

          <div className="mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Лента времени
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Хронология развития русского искусства XX века
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setHoveredYear(idx)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-orange-300">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {item.year}
                      </h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.event}</h4>
                      <p className="text-gray-600 mb-1">{item.artist}</p>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm">
                        {item.movement}
                      </span>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative z-20 flex-shrink-0">
                    <div className={`w-6 h-6 rounded-full border-4 border-white transition-all ${
                      hoveredYear === idx
                        ? 'bg-orange-500 scale-150 shadow-lg'
                        : 'bg-gray-300'
                    }`} />
                  </div>

                  <div className="flex-1">
                    {hoveredYear === idx && (
                      <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={item.img}
                          alt={item.event}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
