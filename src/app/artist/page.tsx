
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);

  const artists = [
    {
      name: "Казимир Малевич",
      description: "Основатель супрематизма",
      years: "1879-1935",
      movement: "Супрематизм",
      portrait: "https://avatars.mds.yandex.net/i?id=581c6284b117d0b26d265705ad9d920a51f946c2-4728221-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=e10d00c32ca61f3c687cd4038a10a57487cd6d2f-8274378-images-thumbs&n=13",
      bio: "Казимир Малевич — русский художник-авангардист, основоположник супрематизма. Создатель знаменитого «Чёрного квадрата»."
    },
    {
      name: "Василий Кандинский",
      description: "Пионер абстракционизма",
      years: "1866-1944",
      movement: "Абстракционизм",
      portrait: "https://avatars.mds.yandex.net/i?id=f991454e4939505cf7c2579056f1b88351036515-5665685-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=2258117b36417edff6538c9ce845502fbc4afc78-12544827-images-thumbs&n=13",
      bio: "Василий Кандинский — русский живописец, один из основоположников абстракционизма. Теоретик искусства и поэт."
    },
    {
      name: "Марк Шагал",
      description: "Мастер поэтической живописи",
      years: "1887-1985",
      movement: "Модернизм",
      portrait: "https://avatars.mds.yandex.net/i?id=c7234f744438d0dd761577ded7cb2607f3eb80e2-5518637-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=ee0fc3635e5b768c193724436cca6acfd0002700-5302039-images-thumbs&n=13",
      bio: "Марк Шагал — российский и французский художник, один из самых известных представителей художественного авангарда XX века."
    },
    {
      name: "Наталья Гончарова",
      description: "Пионер неопримитивизма",
      years: "1881-1962",
      movement: "Неопримитивизм",
      portrait: "https://avatars.mds.yandex.net/i?id=a2e63d809d476f91ce147a06c6c0fffe1c1e21a1-5480663-images-thumbs&n=13",
      artwork: "https://i.pinimg.com/originals/8b/42/eb/8b42eb19ddbced231a19eb47c1be58f1.jpg",
      bio: "Наталья Гончарова — русская художница-авангардистка, одна из основоположниц русского авангарда и неопримитивизма."
    },
    {
      name: "Владимир Татлин",
      description: "Основатель конструктивизма",
      years: "1885-1953",
      movement: "Конструктивизм",
      portrait: "https://avatars.mds.yandex.net/i?id=d9adf3d4c37a80f28d7c0a064a3c248d4d513f83-5537533-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=3bead850f8fc4799ea1a1a05a6a0fc7d5afa0a39-10130831-images-thumbs&n=13",
      bio: "Владимир Татлин — русский и советский живописец, график, дизайнер и архитектор, основоположник конструктивизма."
    },
    {
      name: "Любовь Попова",
      description: "Мастер кубофутуризма",
      years: "1889-1924",
      movement: "Кубофутуризм",
      portrait: "https://avatars.mds.yandex.net/i?id=1605c731f38885c9b43e010c560d57d15e0b5b751c5e6259-11924570-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=023238b8a301db230688b7114f66d3075bb72b9e-4858813-images-thumbs&n=13",
      bio: "Любовь Попова — русская художница-авангардистка, представительница кубофутуризма и конструктивизма."
    },
    {
      name: "Кузьма Петров-Водкин",
      description: "Символист и реформатор",
      years: "1878-1939",
      movement: "Символизм",
      portrait: "https://avatars.mds.yandex.net/i?id=4d51e70aaaabf6981dec77609a775021903d52c5-4907614-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=a6afa299e7f968dff8c03897c8cc7fcb16c43b47-5220466-images-thumbs&n=13",
      bio: "Кузьма Петров-Водкин — русский и советский живописец, график и теоретик искусства, создатель «планетарной перспективы»."
    },
    {
      name: "Александр Дейнека",
      description: "Классик соцреализма",
      years: "1899-1969",
      movement: "Соцреализм",
      portrait: "https://avatars.mds.yandex.net/i?id=1f5600997d6c3d1fabdf4bf8de2a1e9e3b464786-8895061-images-thumbs&n=13",
      artwork: "http://avatars.mds.yandex.net/get-vthumb/937183/8ff2963876bad12928f95115c63f096e/800x450",
      bio: "Александр Дейнека — советский живописец, график и скульптор, один из ведущих мастеров соцреализма."
    },
    {
      name: "Вера Мухина",
      description: "Выдающийся скульптор",
      years: "1889-1953",
      movement: "Соцреализм",
      portrait: "https://avatars.mds.yandex.net/i?id=1d5960db990ad696a8d427bdbf83fb852c95eca7-16498523-images-thumbs&n=13",
      artwork: "https://avatars.mds.yandex.net/i?id=92903ddd76999c21f150f4edd8a28b30_l-5208773-images-thumbs&n=13",
      bio: "Вера Мухина — советский скульптор-монументалист, создательница знаменитой скульптуры «Рабочий и колхозница»."
    },
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
              <Link href="/artists" className="text-sm font-medium tracking-wide text-gray-900 opacity-70">
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

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Вернуться на главную
          </Link>

          <div className="mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Художники
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Великие мастера русского искусства XX века
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {artists.map((artist, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setSelectedArtist(selectedArtist === idx ? null : idx)}
              >
                <div className="mb-6">
                  <div className="aspect-square mb-4 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={artist.portrait}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{artist.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{artist.years}</p>
                  <p className="text-sm text-gray-500 mb-3">{artist.description}</p>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {artist.movement}
                  </span>
                </div>

                {selectedArtist === idx && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
                    <div className="aspect-[4/3] mb-4 rounded-xl overflow-hidden">
                      <img
                        src={artist.artwork}
                        alt={`Работа ${artist.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{artist.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
