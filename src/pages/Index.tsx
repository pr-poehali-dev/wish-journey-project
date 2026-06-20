import { useState } from 'react';

const FLOWER_IMG =
  'https://cdn.poehali.dev/projects/6cc2ebe8-a376-4757-b8bb-4c615959cef1/bucket/7f0f6d19-e7cd-40b1-b9bc-1ffe33292b91.jpg';

const PETAL_COLORS = ['#FF5B5B','#FF9933','#FFD700','#4CAF50','#2196F3','#9C27B0','#E91E8C'];

const CALENDAR = [
  { date: '7 апр', event: 'День Здоровья, Благовещенье', color: '#FF5B5B' },
  { date: '14 апр', event: 'День воздушного шара', color: '#FF9933' },
  { date: '22 апр', event: 'День Матери-Земли', color: '#FFD700' },
  { date: '28 апр', event: 'День скорой помощи', color: '#4CAF50' },
  { date: '7 мая', event: 'День радио', color: '#2196F3' },
  { date: '9 мая', event: 'День Победы', color: '#9C27B0' },
  { date: '25 мая', event: 'День химика', color: '#E91E8C' },
  { date: '31 мая', event: 'Всемирный день без табака', color: '#FF5B5B' },
];

const EVENTS = [
  { date: '7 апреля', color: '#FF5B5B', emoji: '🌿', title: 'Фестиваль здоровья', subtitle: '«Гармония духа и тела»' },
  { date: '28 апреля', color: '#4CAF50', emoji: '🎤', title: 'Фестиваль агитбригад', subtitle: '«Молодость выбирает здоровье»' },
  { date: '25 мая', color: '#9C27B0', emoji: '⚗️', title: 'Защита проектов', subtitle: '«Витамин vs Никотин»' },
];

const QUESTIONS = [
  'Встречались ли тебе люди, которые добровольно «отнимали у себя» здоровье? Почему они это делали?',
  'В какой момент вредная привычка превращается из личного дела в проблему близких?',
  'Что сложнее: вернуть здоровье после злоупотребления или беречь то, что дано от природы?',
];

type Tab = 'poster' | 'events' | 'questions';

export default function Index() {
  const [tab, setTab] = useState<Tab>('poster');

  return (
    <div className="min-h-screen bg-[#f8f3ff] font-sans">

      {/* Навигация */}
      <div className="sticky top-0 z-20 flex justify-center gap-2 py-3 bg-white/80 backdrop-blur border-b border-purple-100 shadow-sm">
        {([['poster','🌸 Паспорт-постер'],['events','⭐ Ключевые дела'],['questions','💬 Вопросы']] as [Tab, string][]).map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)}
            className="px-5 py-2 rounded-full text-sm font-600 transition-all duration-200"
            style={tab === id
              ? { background: 'linear-gradient(135deg,#D97A8E,#9C27B0)', color: '#fff', boxShadow: '0 4px 14px rgba(156,39,176,0.35)' }
              : { color: '#7B5EA7', background: '#F3EEFF' }}>
            {label}
          </button>
        ))}
        <a href="javascript:window.print()"
          className="px-5 py-2 rounded-full text-sm font-600 bg-[#4CAF50] text-white hover:bg-[#43A047] transition-colors"
          style={{ boxShadow: '0 4px 14px rgba(76,175,80,0.35)' }}>
          🖨️ Печать
        </a>
      </div>

      {/* ПОСТЕР */}
      {tab === 'poster' && (
        <div id="passport-poster" className="max-w-4xl mx-auto p-6">

          {/* Шапка с фото */}
          <div className="relative rounded-3xl overflow-hidden mb-5" style={{ height: '260px' }}>
            <img src={FLOWER_IMG} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(30,0,60,0.75) 0%, rgba(80,0,40,0.65) 100%)' }} />

            {/* Цветок SVG поверх */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-90">
              <svg width="160" height="160" viewBox="0 0 160 160">
                {PETAL_COLORS.map((c, i) => {
                  const angle = (360 / 7) * i;
                  return (
                    <ellipse key={i} cx="80" cy="37" rx="18" ry="38"
                      fill={c} fillOpacity="0.92"
                      style={{ transformOrigin: '80px 80px', transform: `rotate(${angle}deg)` }} />
                  );
                })}
                <circle cx="80" cy="80" r="22" fill="#FFD700" />
                <circle cx="80" cy="80" r="14" fill="#FFF176" />
              </svg>
            </div>

            <div className="relative z-10 p-7 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-700 tracking-widest uppercase mb-2"
                  style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
                  ПАСПОРТ МАТРИЦЫ УЧЕБНОГО ПЕРИОДА · IV ЧЕТВЕРТЬ
                </div>
                <h1 className="font-display text-5xl font-700 text-white leading-tight">
                  Путешествие в страну <span style={{ color: '#FFD700' }}>желаний</span>
                </h1>
                <p className="text-white/80 mt-1 font-serif italic text-lg">«Цветик-семицветик» · В. Катаев · Ценность: ЗДОРОВЬЕ</p>
              </div>
              <div className="text-white/70 text-xs leading-relaxed">
                Лабанок Е. Н. — зам. директора по ВР &nbsp;·&nbsp; Таратонова О. В. — советник директора по воспитанию<br />
                МОУ-СОШ №2 · г. Унеча Брянской области · ул. Луначарского, д. 38 · 7 апреля – 31 мая
              </div>
            </div>
          </div>

          {/* Основная сетка */}
          <div className="grid grid-cols-3 gap-4 mb-4">

            {/* Школа */}
            <div className="col-span-2 rounded-2xl p-5 bg-white border border-purple-100 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-700 mb-3">Образовательная организация</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Полное наименование</p>
                  <p className="text-sm text-gray-700 font-500 leading-snug">МОУ-СОШ №2 г. Унеча Брянской области</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Адрес</p>
                  <p className="text-sm text-gray-700 font-500 leading-snug">Брянская обл., г. Унеча, ул. Луначарского, д. 38</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Инфраструктура</p>
                  <p className="text-sm text-gray-600 leading-snug">Стадион, актовый зал, спортзал, скалодром, баскетбольная площадка</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Партнёры</p>
                  <p className="text-sm text-gray-600 leading-snug">Кинотеатр «МИР», этнокомплекс «Брянское подворье», краеведческий музей, воскресная школа</p>
                </div>
              </div>
            </div>

            {/* Статистика */}
            <div className="rounded-2xl p-5 bg-white border border-purple-100 shadow-sm flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-700 mb-1">Контингент</p>
              {[
                { n: '484', label: 'Обучающихся', c: '#FF5B5B' },
                { n: '20', label: 'Классов', c: '#FF9933' },
                { n: '177', label: '1–4 классы', c: '#FFD700' },
                { n: '248', label: '5–9 классы', c: '#4CAF50' },
                { n: '59', label: '10–11 классы', c: '#2196F3' },
                { n: '29', label: 'Дети семей СВО', c: '#9C27B0' },
                { n: '7', label: 'Дети с ОВЗ', c: '#E91E8C' },
              ].map(s => (
                <div key={s.n} className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{s.label}</span>
                  <span className="font-display text-xl font-700" style={{ color: s.c }}>{s.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Проблема и цель */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="rounded-2xl p-5 border-2 border-red-200 bg-red-50">
              <p className="text-xs uppercase tracking-widest text-red-500 font-700 mb-2">⚠️ Воспитательная проблема</p>
              <p className="text-sm text-gray-700 leading-relaxed">Повышение уровня интереса подростков к употреблению вейпов (электронных сигарет) среди учеников 5–8 классов.</p>
            </div>
            <div className="rounded-2xl p-5 border-2 border-green-200 bg-green-50">
              <p className="text-xs uppercase tracking-widest text-green-600 font-700 mb-2">🎯 Цель матрицы</p>
              <p className="text-sm text-gray-700 leading-relaxed">Создание условий для снижения интереса подростков к употреблению вейпов среди учеников 5–8 классов.</p>
            </div>
          </div>

          {/* Сюжет */}
          <div className="rounded-2xl p-5 bg-white border border-purple-100 shadow-sm mb-4">
            <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-700 mb-2">🧩 Игровой сюжет</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ученики 5–8 классов попадают в <strong>«страну здоровья»</strong>. Каждому классу даётся «Цветик-семицветик» — каждый лепесток это коллективный бонус за хорошую дисциплину и ведение ЗОЖ. Бонусами класс воспользуется в следующем учебном году. Ошибка одного ученика может «сжечь» лепесток для всего класса. За день до ключевого дела — открытый микрофон с проблемными вопросами.
            </p>
          </div>

          {/* Ключевые дела */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {EVENTS.map((e, i) => (
              <div key={i} className="rounded-2xl p-4 text-white text-center"
                style={{ background: `linear-gradient(135deg, ${e.color}EE, ${e.color}AA)` }}>
                <div className="text-3xl mb-2">{e.emoji}</div>
                <p className="text-xs opacity-80 mb-1">{e.date}</p>
                <p className="font-700 text-sm leading-snug">{e.title}</p>
                <p className="text-xs opacity-85 mt-1">{e.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Календарь */}
          <div className="rounded-2xl p-5 bg-white border border-purple-100 shadow-sm mb-4">
            <p className="text-xs uppercase tracking-widest text-[#9C27B0] font-700 mb-3">📅 Календарь учебного периода</p>
            <div className="grid grid-cols-4 gap-2">
              {CALENDAR.map((c, i) => (
                <div key={i} className="rounded-xl p-3 text-center" style={{ background: `${c.color}18`, border: `1px solid ${c.color}44` }}>
                  <p className="font-700 text-sm" style={{ color: c.color }}>{c.date}</p>
                  <p className="text-[11px] text-gray-600 leading-snug mt-0.5">{c.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Рефлексия */}
          <div className="rounded-2xl p-5 border-2 mb-4"
            style={{ background: 'linear-gradient(135deg,#f3e8ff,#ffe8f0)', borderColor: '#D97A8E55' }}>
            <p className="text-xs uppercase tracking-widest text-[#D97A8E] font-700 mb-3">🎒 Рефлексия · 31 мая — Поход с классом</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { e: '🧳', n: 'Чемодан', d: 'Ценная информация, которую возьмёшь с собой в жизнь' },
                { e: '⚙️', n: 'Мясорубка', d: 'То, что нужно обдумать и переработать' },
                { e: '🗑️', n: 'Корзина', d: 'Что показалось ненужным или бесполезным' },
              ].map(r => (
                <div key={r.n} className="rounded-xl p-3 bg-white/70 text-center">
                  <div className="text-2xl mb-1">{r.e}</div>
                  <p className="font-700 text-sm text-gray-700">{r.n}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{r.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Цитата */}
          <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg,#fff9e6,#fff3d0)', border: '2px solid #FFD70055' }}>
            <p className="font-serif text-lg italic text-[#8B6914]">
              «Здоровье — это тот подарок, который можно подарить себе, а можно и отнять у самого себя»
            </p>
            <p className="text-sm text-[#B8963A] mt-1 font-600">— Франсуа де Ларошфуко</p>
          </div>

          {/* Подсказка по скриншоту */}
          <div className="mt-6 text-center text-xs text-gray-400 pb-4">
            Для сохранения как картинку: нажмите <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border text-gray-500 font-mono">🖨️ Печать</kbd> выше → «Сохранить как PDF» → или используйте расширение браузера «Full Page Screenshot»
          </div>
        </div>
      )}

      {/* КЛЮЧЕВЫЕ ДЕЛА */}
      {tab === 'events' && (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {[
            {
              color: '#FF5B5B', emoji: '🌿', date: '7 апреля',
              title: 'Фестиваль здоровья «Гармония духа и тела»',
              goal: 'Показать взаимосвязь духовного и физического здоровья.',
              stations: [
                { n: '📚 Истоки здоровья', d: 'Викторина о питании, режиме дня. Диалог о влиянии стресса на организм.' },
                { n: '🕊️ Голубь благой вести', d: 'Мастер-класс: бумажные голуби с добрыми пожеланиями. Традиции Благовещения.' },
                { n: '🏃 Движение — жизнь!', d: 'Спортивные конкурсы, мастер-класс по гимнастике. Команды «Яблоко» и «Голубь».' },
                { n: '🍯 Хлеб да соль', d: 'Дегустация орехов, сухофруктов, мёда. Традиционная постная выпечка.' },
              ],
              finale: 'Ритуал «Выпускание голубей» + флешмоб + раздача буклетов с рецептами полезного чая.'
            },
            {
              color: '#4CAF50', emoji: '🎤', date: '28 апреля',
              title: 'Фестиваль агитбригад «Молодость выбирает здоровье»',
              goal: 'Показать ценность здоровья через творческое выступление.',
              stations: [
                { n: '✍️ Подготовка', d: 'Каждый класс разрабатывает сценарий, готовит костюмы.' },
                { n: '🎭 Выступление', d: 'Агитбригада — динамичная, эмоциональная, поучительная. Задействован весь класс.' },
                { n: '🏆 Награждение', d: 'Победитель получает бесплатную экскурсию в этнокомплекс «Брянское Подворье».' },
              ],
              finale: 'Победитель фестиваля — бесплатная экскурсия в с. Белогорщь.'
            },
            {
              color: '#9C27B0', emoji: '⚗️', date: '25 мая',
              title: 'Защита проектов «Битва Титанов: Витамин vs Никотин»',
              goal: 'Сформировать устойчивое негативное отношение к курению.',
              stations: [
                { n: '💊 Команда «Витамин»', d: '«Химия здоровья», «Влияние спорта на мозг», «Правильное питание», «Психология зависимости».' },
                { n: '🚬 Команда «Никотин»', d: '«Мифы о вейпах», «История табака», «Маркетинг табачных компаний», «Портрет зависимого».' },
                { n: '🎨 Реквизит', d: 'Плакаты, презентации, модели лёгких, видеоролики, костюмы.' },
              ],
              finale: 'Форум «Родные Любимые» с родителями. Проекты — неделю в школьном медиа-центре.'
            },
          ].map((e, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border-2 shadow-sm" style={{ borderColor: `${e.color}44` }}>
              <div className="p-6 text-white" style={{ background: `linear-gradient(135deg,${e.color},${e.color}BB)` }}>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{e.emoji}</div>
                  <div>
                    <p className="text-sm opacity-80 mb-0.5">Ключевое дело №{i+1} · {e.date}</p>
                    <h3 className="font-serif text-2xl font-600">{e.title}</h3>
                    <p className="text-sm opacity-85 mt-1">Цель: {e.goal}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {e.stations.map((s, j) => (
                    <div key={j} className="rounded-xl p-4 border" style={{ borderColor: `${e.color}33`, background: `${e.color}08` }}>
                      <p className="font-600 text-sm text-gray-700 mb-1">{s.n}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-4 border-2" style={{ borderColor: `${e.color}55`, background: `${e.color}10` }}>
                  <p className="text-xs font-700 uppercase tracking-wide mb-1" style={{ color: e.color }}>🏁 Финал</p>
                  <p className="text-sm text-gray-700">{e.finale}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ВОПРОСЫ */}
      {tab === 'questions' && (
        <div className="max-w-3xl mx-auto p-6">
          <div className="rounded-2xl p-6 mb-6 border-2 border-yellow-300 bg-yellow-50 text-center">
            <p className="font-serif text-xl italic text-yellow-800">
              «Здоровье — это тот подарок, который можно подарить себе, а можно и отнять у самого себя»
            </p>
            <p className="text-sm text-yellow-600 mt-2 font-600">— Франсуа де Ларошфуко</p>
            <p className="text-xs text-yellow-500 mt-3">Формат ответов: открытый микрофон — за день до каждого ключевого дела</p>
          </div>
          <div className="space-y-4">
            {QUESTIONS.map((q, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white border border-purple-100 shadow-sm flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display text-2xl font-700 shrink-0"
                  style={{ background: PETAL_COLORS[i * 2] }}>{i + 1}</div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-500">{q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
