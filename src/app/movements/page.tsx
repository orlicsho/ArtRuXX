import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MovementsPage() {
  const movements = [
    {
      title: "Супрематизм",
      period: "1915-1925",
      description: "Направление в авангардном искусстве, основанное Казимиром Малевичем. Характеризуется использованием простых геометрических форм.",
      color: "from-orange-500 to-red-500",
      keywords: ["Геометрия", "Абстракция", "Цвет"]
    },
    {
      title: "Конструктивизм",
      period: "1920-1930",
      description: "Искусство на службе революции. Функциональность, рациональность и геометрия в архитектуре и дизайне.",
      color: "from-blue-500 to-cyan-500",
      keywords: ["Функциональность", "Промышленность", "Геометрия"]
    },
    {
      title: "Абстракционизм",
      period: "1910-1920",
      description: "Направление, отказавшееся от изображения реальных предметов. Кандинский - один из основателей.",
      color: "from-purple-500 to-pink-500",
      keywords: ["Цвет", "Форма", "Эмоция"]
    },
    {
      title: "Символизм",
      period: "1890-1910",
      description: "Поиск духовного и мистического в искусстве. Художники стремились выразить невыразимое.",
      color: "from-amber-500 to-orange-600",
      keywords: ["Мистика", "Символ", "Духовность"]
    },
    {
      title: "Неопримитивизм",
      period: "1907-1912",
      description: "Обращение к народному искусству и примитивным формам. Гончарова и Ларионов - ключевые фигуры.",
      color: "from-green-500 to-emerald-600",
      keywords: ["Фольклор", "Примитив", "Народное искусство"]
    },
    {
      title: "Соцреализм",
      period: "1930-1950",
      description: "Официальное искусство СССР. Героизация труда, создание образа нового человека.",
      color: "from-red-500 to-rose-600",
      keywords: ["Реализм", "Идеология", "Героизм"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
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
              <Link href="/timeline" className="text-sm font-medium tracking-wide text-gray-600 hover:text-gray-900 transition-all">
                ЛЕНТА ВРЕМЕНИ
              </Link>
              <Link href="/artists" className="text-sm font-medium tracking-wide text-gray-600 hover:text-gray-900 transition-all">
                ХУДОЖНИКИ
              </Link>
              <Link href="/movements" className="text-sm font-medium tracking-wide text-gray-900 border-b-2 border-gray-900">
                НАПРАВЛЕНИЯ
              </Link>
              <Link href="/gallery" className="text-sm font-medium tracking-wide text-gray-600 hover:text-gray-900 transition-all">
                ГАЛЕРЕЯ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-all">
            <ArrowLeft className="w-5 h-5" />
            Вернуться на главную
          </Link>
          <h1 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Художественные направления
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Основные течения и школы русского искусства XX века
          </p>
        </div>
      </section>

      {/* Movements Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {movements.map((movement, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`relative rounded-2xl bg-gradient-to-br ${movement.color} p-8 min-h-[320px] flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all`}>
                  <div>
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4">
                      {movement.period}
                    </span>
                    <h3 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {movement.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-6">
                      {movement.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {movement.keywords.map((keyword, kIdx) => (
                      <span key={kIdx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
