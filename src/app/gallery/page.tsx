import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Gallery() {
  const artworks = [
    { title: "Черный квадрат", artist: "Казимир Малевич", year: "1915", movement: "Супрематизм", img: "https://avatars.mds.yandex.net/i?id=c67bc18212ab85564a48485b4ec047a97535fb2a-3526614-images-thumbs&n=13" },
    { title: "Композиция VII", artist: "Василий Кандинский", year: "1913", movement: "Абстракционизм", img: "https://avatars.mds.yandex.net/i?id=3b948a8334801dd1294360279c3a9c3b402da298-7999331-images-thumbs&n=13" },
    { title: "Купание красного коня", artist: "Кузьма Петров-Водкин", year: "1912", movement: "Символизм", img: "https://avatars.mds.yandex.net/i?id=1e394b03231a06b777460e337946deb3aedf84e0-4803223-images-thumbs&n=13" },
    { title: "Над городом", artist: "Марк Шагал", year: "1918", movement: "Модернизм", img: "https://s09.stc.yc.kpcdn.net/share/i/12/13455926/wr-960.webp" },
    { title: "Велосипедист", artist: "Наталия Гончарова", year: "1913", movement: "Лучизм", img: "https://artchive.ru/res/media/img/ox800/work/53a/322234.jpeg" },
    { title: "Башня Татлина", artist: "Владимир Татлин", year: "1919", movement: "Конструктивизм", img: "https://artlemon.ru/imagesbase/2/big/tatlin-vladimir-evgrafovich-1885-1953/model-pamyatnika-iii-internacionala.-1919-20.-rekonstrukciya-1979.-artfond.jpg" },
    { title: "Демон сидящий", artist: "Михаил Врубель", year: "1890", movement: "Символизм", img: "https://avatars.mds.yandex.net/i?id=8ce829eb4cd842e261de05d8079803dd9f1a5a42-5342217-images-thumbs&n=13" },
    { title: "Красный клин", artist: "Эль Лисицкий", year: "1920", movement: "Супрематизм", img: "https://artchive.ru/res/media/img/ox800/work/abb/595538.jpg" },
    { title: "Живописная электроника", artist: "Любовь Попова", year: "1916", movement: "Кубофутуризм", img: "https://avatars.mds.yandex.net/i?id=1bd3b35f16f7a890ea1301a9b8ca6d6dddb375b5-5544440-images-thumbs&n=13" },
    { title: "Импровизация 28", artist: "Василий Кандинский", year: "1912", movement: "Абстракционизм", img: "https://avatars.mds.yandex.net/i?id=105a7a765beef1c56a452ec5556a328d6f6ac617-12248382-images-thumbs&n=13" },
    { title: "Оборона Севастополя", artist: "Александр Дейнека", year: "1942", movement: "Соцреализм", img: "http://avatars.mds.yandex.net/get-vthumb/937183/8ff2963876bad12928f95115c63f096e/800x450" },
    { title: "Рабочий и колхозница", artist: "Вера Мухина", year: "1937", movement: "Соцреализм", img: "https://avatars.mds.yandex.net/i?id=497dae751d868a77f421cb7146c71caacc7b2855-5734356-images-thumbs&n=13" },
  ];

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
              <Link href="/gallery" className="text-sm font-medium tracking-wide text-gray-900 opacity-70">
                ГАЛЕРЕЯ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Вернуться на главную
          </Link>

          <div className="mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Галерея
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Полная коллекция произведений русского искусства XX века
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {artworks.map((artwork, idx) => (
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
        </div>
      </main>
    </div>
  );
}
