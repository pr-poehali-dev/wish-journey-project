import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_BG =
  'https://cdn.poehali.dev/projects/6cc2ebe8-a376-4757-b8bb-4c615959cef1/files/377a75c9-f55c-4c79-80b3-82dd597e10c4.jpg';

interface Petal {
  color: string;
  glow: string;
  title: string;
  wish: string;
  icon: string;
}

const PETALS: Petal[] = [
  {
    color: '#F8B4C0',
    glow: 'rgba(248,180,192,0.6)',
    title: 'Лепесток дружбы',
    wish: 'Хочу, чтобы в нашем классе все были настоящими друзьями',
    icon: 'Heart',
  },
  {
    color: '#FBD08A',
    glow: 'rgba(251,208,138,0.6)',
    title: 'Лепесток здоровья',
    wish: 'Хочу быть сильным, бодрым и никогда не болеть',
    icon: 'Sparkles',
  },
  {
    color: '#A8E6CF',
    glow: 'rgba(168,230,207,0.6)',
    title: 'Лепесток природы',
    wish: 'Хочу, чтобы леса были зелёными, а реки — чистыми',
    icon: 'Leaf',
  },
  {
    color: '#A5D8F3',
    glow: 'rgba(165,216,243,0.6)',
    title: 'Лепесток мечты',
    wish: 'Хочу научиться чему-то совершенно новому и удивительному',
    icon: 'Star',
  },
  {
    color: '#C5B0F0',
    glow: 'rgba(197,176,240,0.6)',
    title: 'Лепесток доброты',
    wish: 'Хочу совершить добрый поступок и подарить кому-то радость',
    icon: 'Gift',
  },
  {
    color: '#F7A9D9',
    glow: 'rgba(247,169,217,0.6)',
    title: 'Лепесток смелости',
    wish: 'Хочу научиться не бояться и верить в свои силы',
    icon: 'Flame',
  },
  {
    color: '#FFD3A5',
    glow: 'rgba(255,211,165,0.6)',
    title: 'Лепесток счастья',
    wish: 'Хочу, чтобы все на свете были по-настоящему счастливы',
    icon: 'Sun',
  },
];

const Index = () => {
  const [active, setActive] = useState(0);
  const petal = PETALS[active];

  const go = (dir: number) =>
    setActive((p) => (p + dir + PETALS.length) % PETALS.length);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden relative"
      style={{
        background:
          'linear-gradient(180deg, #FDF6EE 0%, #FBEFE4 40%, #F6E6D8 100%)',
      }}
    >
      {/* Парящие лепестки на фоне */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute petal-shape animate-float-up"
            style={{
              left: `${(i * 7.3) % 100}%`,
              bottom: '-60px',
              width: `${10 + (i % 4) * 6}px`,
              height: `${14 + (i % 4) * 7}px`,
              background: PETALS[i % PETALS.length].color,
              opacity: 0.5,
              animationDuration: `${12 + (i % 5) * 4}s`,
              animationDelay: `${i * 1.4}s`,
            }}
          />
        ))}
      </div>

      {/* Шапка */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-8 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-25 rounded-[3rem] bg-cover bg-center mx-4"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <p className="font-display text-3xl md:text-4xl text-[#C98A6B] rotate-[-2deg]">
          добро пожаловать в
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-600 text-[#5B4636] leading-tight mt-2 mb-5">
          Путешествие в страну{' '}
          <span className="italic text-[#D97A8E]">желаний</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-[#7A6A57]">
          <span className="px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-[#EAD9C7] shadow-sm">
            IV четверть · 7 апреля – 31 мая
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-[#EAD9C7] shadow-sm flex items-center gap-2">
            <Icon name="BookOpen" size={16} className="text-[#D97A8E]" />
            «Цветик-семицветик» · В. Катаев
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FBD08A]/40 backdrop-blur border border-[#F0C572] shadow-sm font-500 text-[#8A6A2E]">
            ✦ Ценность: ЗДОРОВЬЕ ✦
          </span>
        </div>
      </header>

      {/* Интерактивный цветок */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Цветок из семи лепестков */}
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] animate-gentle-float">
              {PETALS.map((p, i) => {
                const angle = (360 / PETALS.length) * i;
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="absolute left-1/2 top-1/2 petal-shape transition-all duration-500 origin-bottom"
                    style={{
                      width: '70px',
                      height: '120px',
                      marginLeft: '-35px',
                      marginTop: '-120px',
                      transform: `rotate(${angle}deg) ${
                        isActive ? 'scale(1.12)' : 'scale(1)'
                      }`,
                      background: `linear-gradient(180deg, ${p.color} 0%, ${p.color}CC 100%)`,
                      boxShadow: isActive
                        ? `0 0 30px ${p.glow}, inset 0 -8px 16px rgba(255,255,255,0.5)`
                        : 'inset 0 -8px 16px rgba(255,255,255,0.35)',
                      opacity: isActive ? 1 : 0.78,
                      zIndex: isActive ? 5 : 1,
                    }}
                    aria-label={p.title}
                  />
                );
              })}
              {/* Сердцевина */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[74px] h-[74px] rounded-full flex items-center justify-center animate-shimmer z-10"
                style={{
                  background:
                    'radial-gradient(circle, #FFF3D6 0%, #FBD08A 100%)',
                  boxShadow: '0 0 24px rgba(251,208,138,0.7)',
                }}
              >
                <Icon name={petal.icon} size={30} className="text-[#B8853A]" />
              </div>
            </div>
          </div>

          {/* Карточка желания */}
          <div
            key={active}
            className="animate-petal-reveal rounded-[2rem] p-8 bg-white/80 backdrop-blur-md border shadow-xl"
            style={{
              borderColor: `${petal.color}AA`,
              boxShadow: `0 20px 50px -20px ${petal.glow}`,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: petal.color }}
              >
                <Icon name={petal.icon} size={22} className="text-white" />
              </div>
              <div>
                <p className="font-display text-2xl text-[#C98A6B] leading-none">
                  желание {active + 1} из 7
                </p>
                <h3 className="font-serif text-2xl font-600 text-[#5B4636]">
                  {petal.title}
                </h3>
              </div>
            </div>

            <p className="font-serif text-2xl md:text-3xl italic text-[#6B5746] leading-snug mb-6">
              «{petal.wish}»
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={() => go(-1)}
                className="w-11 h-11 rounded-full bg-[#F6E6D8] hover:bg-[#EAD2BE] transition-colors flex items-center justify-center text-[#8A6A52]"
                aria-label="Предыдущий лепесток"
              >
                <Icon name="ChevronLeft" size={22} />
              </button>

              <div className="flex gap-2">
                {PETALS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? '24px' : '10px',
                      height: '10px',
                      background: i === active ? p.color : '#E2D1C0',
                    }}
                    aria-label={`Лепесток ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                className="w-11 h-11 rounded-full bg-[#F6E6D8] hover:bg-[#EAD2BE] transition-colors flex items-center justify-center text-[#8A6A52]"
                aria-label="Следующий лепесток"
              >
                <Icon name="ChevronRight" size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ключевые дела + вопросы */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-5">
        {[
          {
            icon: 'CalendarHeart',
            title: 'Ключевые дела',
            text: 'Классные часы о здоровье, спортивные старты, добрые поступки и чтение сказки по главам.',
            tint: '#A8E6CF',
          },
          {
            icon: 'MessageCircleQuestion',
            title: 'Проблемный вопрос',
            text: 'Какое желание стоит загадать, чтобы оно сделало счастливым не только тебя?',
            tint: '#A5D8F3',
          },
          {
            icon: 'Sparkle',
            title: 'Рефлексия',
            text: 'В конце пути каждый расскажет, какой лепесток оказался для него самым важным.',
            tint: '#C5B0F0',
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-[1.75rem] p-6 bg-white/75 backdrop-blur border border-[#EFE0D0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${c.tint}55` }}
            >
              <Icon name={c.icon} size={24} className="text-[#5B4636]" />
            </div>
            <h4 className="font-serif text-2xl font-600 text-[#5B4636] mb-2">
              {c.title}
            </h4>
            <p className="text-[#7A6A57] leading-relaxed">{c.text}</p>
          </div>
        ))}
      </section>

      {/* Финал */}
      <footer className="relative z-10 max-w-5xl mx-auto px-6 pb-20 pt-4 text-center">
        <div
          className="rounded-[2rem] p-10 text-white relative overflow-hidden"
          style={{
            background:
              'linear-gradient(120deg, #D97A8E 0%, #E89B7E 50%, #FBD08A 100%)',
          }}
        >
          <Icon name="Flag" size={36} className="mx-auto mb-3 opacity-90" />
          <p className="font-display text-3xl md:text-4xl mb-1">
            финал путешествия
          </p>
          <p className="font-serif text-xl md:text-2xl font-500">
            31 мая — поход с классом и игра «Чемодан, мясорубка, корзина»
          </p>
        </div>
        <p className="font-display text-2xl text-[#C98A6B] mt-6 rotate-[-1deg]">
          каждое желание сбывается, если идти к нему вместе ✦
        </p>
      </footer>
    </div>
  );
};

export default Index;
