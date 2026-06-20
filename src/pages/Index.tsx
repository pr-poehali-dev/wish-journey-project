import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FLOWER_IMG =
  'https://cdn.poehali.dev/projects/6cc2ebe8-a376-4757-b8bb-4c615959cef1/bucket/7f0f6d19-e7cd-40b1-b9bc-1ffe33292b91.jpg';

const PETALS = [
  { color: '#FF5B5B', label: 'Лепесток 1', title: '7 апреля — День Здоровья', desc: 'Фестиваль здоровья «Гармония духа и тела». Интерактивные площадки, мастер-классы, ритуал выпускания голубей.' },
  { color: '#FF9933', label: 'Лепесток 2', title: '14 апреля — День воздушного шара', desc: 'Поднимаем настроение, запускаем мечты высоко! Связь между свободой и здоровым образом жизни.' },
  { color: '#FFD700', label: 'Лепесток 3', title: '22 апреля — День Матери-Земли', desc: 'Экологические акции и забота о природе как часть ЗОЖ. Связь здоровья человека и планеты.' },
  { color: '#4CAF50', label: 'Лепесток 4', title: '28 апреля — День скорой помощи', desc: 'Фестиваль агитбригад «Молодость выбирает здоровье». Каждый класс показывает свою агитбригаду.' },
  { color: '#2196F3', label: 'Лепесток 5', title: '9 мая — День Победы', desc: 'Победа над собой и вредными привычками — тоже Победа. Уроки мужества и стойкости духа.' },
  { color: '#9C27B0', label: 'Лепесток 6', title: '25 мая — День химика', desc: 'Битва Титанов: «Витамин vs Никотин». Публичная защита научных проектов классами на форуме «Родные Любимые».' },
  { color: '#E91E8C', label: 'Лепесток 7', title: '31 мая — Всемирный день без табака', desc: 'Однодневный поход с классом. Рефлексия в формате игры «Чемодан, мясорубка, корзина».' },
];

const CALENDAR = [
  { date: '7 апреля', event: 'День Здоровья, Благовещенье', icon: 'Heart' },
  { date: '14 апреля', event: 'Международный день воздушного шара', icon: 'Wind' },
  { date: '22 апреля', event: 'Международный день Матери-Земли', icon: 'Leaf' },
  { date: '28 апреля', event: 'День работников скорой медицинской помощи', icon: 'Stethoscope' },
  { date: '7 мая', event: 'День радио', icon: 'Radio' },
  { date: '9 мая', event: 'День Победы', icon: 'Star' },
  { date: '25 мая', event: 'День химика', icon: 'FlaskConical' },
  { date: '31 мая', event: 'Всемирный день без табака', icon: 'Ban' },
];

const KEY_EVENTS = [
  {
    date: '7 апреля',
    color: '#FF5B5B',
    light: '#FFF0F0',
    icon: 'Sparkles',
    title: 'Фестиваль здоровья «Гармония духа и тела»',
    tag: 'Ключевое дело №1',
    stations: [
      { name: 'Истоки здоровья', desc: 'Викторина о правильном питании, режиме дня, физической активности. Диалог о влиянии стресса на организм.' },
      { name: 'Голубь благой вести', desc: 'Мастер-класс по изготовлению бумажных голубей. Традиции Благовещения — выпускание птиц на волю.' },
      { name: 'Движение — жизнь!', desc: 'Спортивные конкурсы, мастер-класс по оздоровительной гимнастике. Команды «Яблоко» и «Голубь».' },
      { name: 'Хлеб да соль', desc: 'Дегустация полезных продуктов. Традиционная выпечка. Рассказ о пользе орехов, сухофруктов, мёда.' },
    ],
    finale: 'Ритуал «Выпускание голубей» + общий флешмоб + раздача памяток с рецептами полезного чая.',
  },
  {
    date: '28 апреля',
    color: '#4CAF50',
    light: '#F0FFF4',
    icon: 'Users',
    title: 'Фестиваль агитбригад «Молодость выбирает здоровье»',
    tag: 'Ключевое дело №2',
    stations: [
      { name: 'Подготовка', desc: 'Каждый класс разрабатывает сценарий и готовит костюмы для своей агитбригады.' },
      { name: 'Выступления', desc: 'Агитбригада должна быть динамичной, эмоциональной и поучительной. Задействован весь класс.' },
      { name: 'Главная цель', desc: 'Показать ценность здоровья через творческое выступление. Все жанры приветствуются.' },
    ],
    finale: 'Победитель получает бесплатную экскурсию в этнокомплекс «Брянское Подворье» с. Белогорщь.',
  },
  {
    date: '25 мая',
    color: '#9C27B0',
    light: '#FDF0FF',
    icon: 'FlaskConical',
    title: 'Защита проектов «Битва Титанов: Витамин vs Никотин»',
    tag: 'Ключевое дело №3',
    stations: [
      { name: 'Команда «Витамин»', desc: '«Химия здоровья», «Влияние спорта на мозг», «Правильное питание — энергия будущего», «Психология зависимости: как сказать нет».' },
      { name: 'Команда «Никотин»', desc: '«Мифы о кальяне/вейпах», «История табака», «Маркетинговые уловки табачных компаний», «Портрет зависимого».' },
      { name: 'Реквизит', desc: 'Плакаты, презентации, модели (например, модель лёгких), видеоролики, костюмы.' },
    ],
    finale: 'Защита проходит на школьном форуме «Родные Любимые» с родителями. Проекты показывают неделю через медиа-центр.',
  },
];

const QUESTIONS = [
  {
    q: 'Встречались ли тебе люди, которые добровольно «отнимали у себя» здоровье, поддаваясь сиюминутным желаниям? Как ты думаешь, почему они это делали?',
    icon: 'HelpCircle',
  },
  {
    q: 'В какой момент вредная привычка превращается из личного дела человека в проблему его близких?',
    icon: 'Users',
  },
  {
    q: 'Что сложнее: получить «подарок здоровья» заново после того, как им злоупотребил, или беречь то, что дано от природы?',
    icon: 'Scale',
  },
];

type Section = 'passport' | 'flower' | 'calendar' | 'events' | 'questions' | 'reflection';

const NAV: { id: Section; label: string; icon: string }[] = [
  { id: 'passport', label: 'Паспорт', icon: 'FileText' },
  { id: 'flower', label: 'Цветик', icon: 'Flower2' },
  { id: 'calendar', label: 'Календарь', icon: 'Calendar' },
  { id: 'events', label: 'Ключевые дела', icon: 'Star' },
  { id: 'questions', label: 'Вопросы', icon: 'MessageCircle' },
  { id: 'reflection', label: 'Рефлексия', icon: 'Backpack' },
];

export default function Index() {
  const [section, setSection] = useState<Section>('passport');
  const [activePetal, setActivePetal] = useState(0);
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans" style={{ background: 'linear-gradient(160deg,#fff9f4 0%,#f3eeff 50%,#e8f7ff 100%)' }}>

      {/* Парящие лепестки */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {PETALS.map((p, i) => (
          <div key={i} className="absolute petal-shape animate-float-up"
            style={{ left: `${(i * 14.3) % 100}%`, bottom: '-50px', width: `${12 + (i % 3) * 5}px`, height: `${18 + (i % 3) * 7}px`, background: p.color, opacity: 0.35, animationDuration: `${14 + i * 3}s`, animationDelay: `${i * 2}s` }} />
        ))}
      </div>

      {/* Hero — картинка с наложенным текстом */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '420px' }}>
        <img src={FLOWER_IMG} alt="Цветик-семицветик" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(10,0,30,0.72) 100%)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center text-white min-h-[420px]">
          <div className="inline-block px-4 py-1 rounded-full mb-4 text-sm font-600 tracking-widest uppercase" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
            ПАСПОРТ МАТРИЦЫ УЧЕБНОГО ПЕРИОДА
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-700 leading-tight mb-3" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Путешествие<br />
            <span style={{ color: '#FFD700' }}>в страну желаний</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl italic opacity-90 mb-5">«Цветик-семицветик» · Валентин Катаев</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['IV четверть', '7 апреля – 31 мая', '✦ Ценность: ЗДОРОВЬЕ ✦', 'Тема: ПОБЕДА'].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(6px)' }}>{tag}</span>
            ))}
          </div>
          <div className="mt-6 text-sm opacity-75 max-w-xl leading-relaxed">
            Лабанок Елена Николаевна — зам. директора по ВР<br />
            Таратонова Ольга Витальевна — советник директора по воспитанию<br />
            МОУ-СОШ №2 г. Унеча Брянской области
          </div>
        </div>
      </div>

      {/* Навигация */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-white/60 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {NAV.map(n => (
            <button key={n.id} onClick={() => setSection(n.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-500 whitespace-nowrap transition-all duration-200 shrink-0"
              style={section === n.id
                ? { background: 'linear-gradient(120deg,#D97A8E,#9C27B0)', color: '#fff', boxShadow: '0 4px 14px rgba(156,39,176,0.3)' }
                : { color: '#6B5746', background: 'transparent' }}>
              <Icon name={n.icon} size={15} />
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10 relative z-10">

        {/* ПАСПОРТ */}
        {section === 'passport' && (
          <div className="space-y-5 animate-petal-reveal">
            <h2 className="font-serif text-4xl text-[#5B4636] mb-6">Паспорт проекта</h2>

            {/* Школа */}
            <div className="rounded-2xl p-6 bg-white/80 backdrop-blur border border-white shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#EDE8FF' }}>
                  <Icon name="School" size={24} className="text-[#9C27B0]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-600 mb-1">Образовательная организация</p>
                  <p className="font-600 text-[#5B4636] text-lg leading-snug">МОУ-СОШ №2 г. Унеча Брянской области</p>
                  <p className="text-[#7A6A57] text-sm mt-1">ул. Луначарского д. 38 · Городская школа в центре, конкурентная среда с двумя соседними школами</p>
                </div>
              </div>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: '484', label: 'Обучающихся', color: '#FF5B5B', bg: '#FFF0F0', icon: 'Users' },
                { n: '20', label: 'Классов', color: '#FF9933', bg: '#FFF7EC', icon: 'BookOpen' },
                { n: '29', label: 'Детей семей СВО', color: '#4CAF50', bg: '#F0FFF4', icon: 'Shield' },
                { n: '7', label: 'Детей с ОВЗ', color: '#2196F3', bg: '#EEF7FF', icon: 'Heart' },
              ].map(s => (
                <div key={s.n} className="rounded-2xl p-5 text-center" style={{ background: s.bg, border: `1px solid ${s.color}33` }}>
                  <Icon name={s.icon} size={22} className="mx-auto mb-2" style={{ color: s.color }} />
                  <div className="font-display text-4xl font-700" style={{ color: s.color }}>{s.n}</div>
                  <div className="text-xs text-[#7A6A57] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Инфраструктура и партнёры */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-6 bg-white/80 border border-white shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#D97A8E] font-600 mb-3">Инфраструктура</p>
                {['Школьный стадион', 'Актовый зал', 'Спортивный зал', 'Скалодром', 'Баскетбольная площадка'].map(item => (
                  <div key={item} className="flex items-center gap-2 py-1.5 border-b border-[#F5EDE5] last:border-0">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] shrink-0" />
                    <span className="text-[#5B4636] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6 bg-white/80 border border-white shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#4CAF50] font-600 mb-3">Партнёры</p>
                {['Кинотеатр «МИР»', 'Этнокомплекс «Брянское подворье»', 'Унечский краеведческий музей', 'Воскресная школа при Храме во имя Святителя Николая'].map(item => (
                  <div key={item} className="flex items-center gap-2 py-1.5 border-b border-[#F5EDE5] last:border-0">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50] shrink-0" />
                    <span className="text-[#5B4636] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Воспитательная проблема */}
            <div className="rounded-2xl p-6 border-2 border-[#FF5B5B]/40" style={{ background: '#FFF5F5' }}>
              <div className="flex items-start gap-3">
                <Icon name="AlertTriangle" size={22} className="text-[#FF5B5B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FF5B5B] font-600 mb-1">Воспитательная проблема</p>
                  <p className="text-[#5B4636] font-500">Повышение уровня интереса подростков к употреблению вейпов (электронных сигарет) среди учеников 5–8 классов.</p>
                </div>
              </div>
            </div>

            {/* Цель */}
            <div className="rounded-2xl p-6 border-2 border-[#4CAF50]/40" style={{ background: '#F0FFF4' }}>
              <div className="flex items-start gap-3">
                <Icon name="Target" size={22} className="text-[#4CAF50] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#4CAF50] font-600 mb-1">Цель матрицы</p>
                  <p className="text-[#5B4636] font-500">Создание условий для снижения интереса подростков к употреблению вейпов среди учеников 5–8 классов.</p>
                </div>
              </div>
            </div>

            {/* Сюжет */}
            <div className="rounded-2xl p-6 bg-white/80 border border-white shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-600 mb-3">Игровой сюжет</p>
              <p className="text-[#5B4636] leading-relaxed">
                Ученики 5–8 классов попадают в <strong>«страну здоровья»</strong>. В начале четверти каждому классу даётся «Цветик-семицветик», в котором каждый лепесток — коллективный бонус за хорошую дисциплину и ведение ЗОЖ.
              </p>
              <p className="text-[#7A6A57] leading-relaxed mt-3 text-sm">
                Бонусами класс воспользуется в следующем учебном году. Для сохранения лепестков нужно участвовать в коллективных делах. <strong>Важно:</strong> ошибка одного ученика может «сжечь» лепесток для всего класса. За день до ключевого дела — открытый микрофон с проблемными вопросами.
              </p>
            </div>
          </div>
        )}

        {/* ЦВЕТОК */}
        {section === 'flower' && (
          <div className="animate-petal-reveal">
            <h2 className="font-serif text-4xl text-[#5B4636] mb-2">Цветик-семицветик</h2>
            <p className="text-[#7A6A57] mb-8">Нажмите на лепесток, чтобы узнать о событии</p>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Цветок */}
              <div className="flex justify-center">
                <div className="relative w-[300px] h-[300px] animate-gentle-float">
                  {PETALS.map((p, i) => {
                    const angle = (360 / PETALS.length) * i;
                    const isActive = i === activePetal;
                    return (
                      <button key={i} onClick={() => setActivePetal(i)}
                        className="absolute left-1/2 top-1/2 petal-shape transition-all duration-500 origin-bottom"
                        style={{ width: '68px', height: '118px', marginLeft: '-34px', marginTop: '-118px', transform: `rotate(${angle}deg) ${isActive ? 'scale(1.14)' : 'scale(1)'}`, background: p.color, boxShadow: isActive ? `0 0 32px ${p.color}99` : 'none', opacity: isActive ? 1 : 0.82, zIndex: isActive ? 5 : 1 }}
                        aria-label={p.label} />
                    );
                  })}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full flex items-center justify-center z-10 animate-shimmer"
                    style={{ background: 'radial-gradient(circle,#FFF9C4,#FFD700)', boxShadow: '0 0 24px rgba(255,215,0,0.6)' }}>
                    <Icon name="Flower2" size={28} className="text-[#8B6914]" />
                  </div>
                </div>
              </div>

              {/* Карточка */}
              <div key={activePetal} className="animate-petal-reveal rounded-3xl p-8 bg-white/85 backdrop-blur border shadow-xl"
                style={{ borderColor: `${PETALS[activePetal].color}66`, boxShadow: `0 20px 50px -20px ${PETALS[activePetal].color}55` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: PETALS[activePetal].color }}>
                  <span className="text-white font-display text-2xl font-700">{activePetal + 1}</span>
                </div>
                <p className="font-display text-lg mb-1" style={{ color: PETALS[activePetal].color }}>{PETALS[activePetal].label}</p>
                <h3 className="font-serif text-2xl font-600 text-[#5B4636] mb-4">{PETALS[activePetal].title}</h3>
                <p className="text-[#7A6A57] leading-relaxed">{PETALS[activePetal].desc}</p>
                <div className="flex gap-2 mt-6 flex-wrap">
                  {PETALS.map((p, i) => (
                    <button key={i} onClick={() => setActivePetal(i)}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === activePetal ? '28px' : '12px', height: '12px', background: i === activePetal ? p.color : '#E2D1C0' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* КАЛЕНДАРЬ */}
        {section === 'calendar' && (
          <div className="animate-petal-reveal">
            <h2 className="font-serif text-4xl text-[#5B4636] mb-2">Календарь периода</h2>
            <p className="text-[#7A6A57] mb-8">IV четверть · 7 апреля – 31 мая</p>
            <div className="space-y-3">
              {CALENDAR.map((c, i) => (
                <div key={i} className="flex items-center gap-5 rounded-2xl p-5 bg-white/80 border border-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${PETALS[i % PETALS.length].color}30` }}>
                    <Icon name={c.icon} size={22} style={{ color: PETALS[i % PETALS.length].color }} />
                  </div>
                  <div>
                    <p className="font-display text-xl font-600" style={{ color: PETALS[i % PETALS.length].color }}>{c.date}</p>
                    <p className="text-[#5B4636] font-500">{c.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* КЛЮЧЕВЫЕ ДЕЛА */}
        {section === 'events' && (
          <div className="animate-petal-reveal space-y-5">
            <h2 className="font-serif text-4xl text-[#5B4636] mb-2">Ключевые дела</h2>
            <p className="text-[#7A6A57] mb-6">Нажмите на событие, чтобы раскрыть подробности</p>
            {KEY_EVENTS.map((e, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border-2 transition-all duration-300"
                style={{ borderColor: openEvent === i ? e.color : 'transparent', background: openEvent === i ? e.light : 'rgba(255,255,255,0.85)' }}>
                <button className="w-full flex items-center gap-4 p-6 text-left" onClick={() => setOpenEvent(openEvent === i ? null : i)}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: e.color }}>
                    <Icon name={e.icon} size={26} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest font-600 mb-0.5" style={{ color: e.color }}>{e.tag} · {e.date}</p>
                    <h3 className="font-serif text-xl font-600 text-[#5B4636]">{e.title}</h3>
                  </div>
                  <Icon name={openEvent === i ? 'ChevronUp' : 'ChevronDown'} size={20} className="text-[#7A6A57] shrink-0" />
                </button>

                {openEvent === i && (
                  <div className="px-6 pb-6 animate-petal-reveal">
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      {e.stations.map((s, j) => (
                        <div key={j} className="rounded-xl p-4 bg-white/70 border border-white">
                          <p className="font-600 text-[#5B4636] text-sm mb-1">📍 {s.name}</p>
                          <p className="text-[#7A6A57] text-sm leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-4 border-2" style={{ borderColor: `${e.color}44`, background: `${e.color}11` }}>
                      <p className="font-600 text-sm mb-1" style={{ color: e.color }}>🏁 Финал события</p>
                      <p className="text-[#5B4636] text-sm">{e.finale}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ПРОБЛЕМНЫЕ ВОПРОСЫ */}
        {section === 'questions' && (
          <div className="animate-petal-reveal">
            <h2 className="font-serif text-4xl text-[#5B4636] mb-3">Проблемные вопросы</h2>
            <div className="rounded-2xl p-5 mb-7 border-2 border-[#FFD700]/60" style={{ background: '#FFFBEA' }}>
              <p className="font-serif text-lg italic text-[#8B6914]">
                «Здоровье — это тот подарок, который можно подарить себе, а можно и отнять у самого себя»
              </p>
              <p className="text-sm text-[#A08030] mt-2">— Франсуа де Ларошфуко</p>
            </div>
            <div className="space-y-4">
              {QUESTIONS.map((q, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white/80 border border-white shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display text-xl font-700 text-white"
                    style={{ background: PETALS[i * 2].color }}>{i + 1}</div>
                  <p className="text-[#5B4636] leading-relaxed font-500">{q.q}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl p-5 bg-white/60 border border-white text-sm text-[#7A6A57]">
              <Icon name="Mic" size={16} className="inline mr-2 text-[#D97A8E]" />
              Ответы собираются в формате <strong>«открытый микрофон»</strong> — за день до каждого ключевого дела.
            </div>
          </div>
        )}

        {/* РЕФЛЕКСИЯ */}
        {section === 'reflection' && (
          <div className="animate-petal-reveal">
            <h2 className="font-serif text-4xl text-[#5B4636] mb-2">Рефлексия</h2>
            <p className="text-[#7A6A57] mb-7">31 мая — Всемирный день без табака</p>

            <div className="rounded-2xl overflow-hidden mb-6 border-2 border-[#E91E8C]/30" style={{ background: 'linear-gradient(120deg,#D97A8E,#9C27B0)' }}>
              <div className="p-7 text-white">
                <Icon name="TreePine" size={32} className="mb-3 opacity-90" />
                <h3 className="font-serif text-3xl font-600 mb-2">Поход с классом</h3>
                <p className="opacity-90 leading-relaxed">Все классы с классным руководителем и родителями отправляются в однодневный поход. Маршрут каждый класс выбирает индивидуально.</p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-[#5B4636] mb-4">Игра «Чемодан, мясорубка, корзина»</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { icon: '🧳', name: 'Чемодан', desc: 'Самая ценная информация, которую заберёшь с собой и будешь использовать в жизни.', color: '#4CAF50', bg: '#F0FFF4' },
                { icon: '⚙️', name: 'Мясорубка', desc: 'То, что нужно ещё обдумать, переработать, обсудить с друзьями или родителями.', color: '#FF9933', bg: '#FFF7EC' },
                { icon: '🗑️', name: 'Корзина', desc: 'То, что показалось ненужным, скучным или бесполезным. Честная обратная связь.', color: '#FF5B5B', bg: '#FFF0F0' },
              ].map(c => (
                <div key={c.name} className="rounded-2xl p-6 border-2 text-center" style={{ background: c.bg, borderColor: `${c.color}40` }}>
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <h4 className="font-serif text-xl font-600 mb-2" style={{ color: c.color }}>{c.name}</h4>
                  <p className="text-[#7A6A57] text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-6 bg-white/80 border border-white shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-600 mb-3">Завершение рефлексии</p>
              <p className="text-[#5B4636] leading-relaxed">После игры желающие делятся тем, что положили в «чемодан». Ведущий благодарит всех за участие, активность и открытость. Рефлексия завершается на позитивной ноте — символическим действием единства класса.</p>
            </div>
          </div>
        )}
      </main>

      {/* Футер */}
      <footer className="relative z-10 text-center pb-12 pt-4 text-[#A08878] text-sm">
        <p className="font-display text-2xl text-[#C98A6B] mb-1">каждый лепесток — шаг к здоровью ✦</p>
        <p>МОУ-СОШ №2 · г. Унеча · IV четверть 2024–2025</p>
      </footer>
    </div>
  );
}
