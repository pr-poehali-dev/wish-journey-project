const FLOWER_IMG =
  'https://cdn.poehali.dev/projects/6cc2ebe8-a376-4757-b8bb-4c615959cef1/bucket/7f0f6d19-e7cd-40b1-b9bc-1ffe33292b91.jpg';

const PETAL_COLORS = ['#FF5B5B','#FF9933','#FFD700','#4CAF50','#2196F3','#9C27B0','#E91E8C'];

export default function Index() {
  return (
    <>
      {/* Кнопка печати — не попадает в PDF */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="px-6 py-3 rounded-xl text-white font-700 text-base shadow-xl hover:scale-105 transition-transform"
          style={{ background: 'linear-gradient(135deg,#9C27B0,#D97A8E)' }}
        >
          🖨️ Сохранить / Распечатать А3
        </button>
      </div>

      {/* Инструкция — не попадает в PDF */}
      <div className="print:hidden fixed top-4 left-4 z-50 bg-white rounded-xl shadow-lg p-4 text-xs text-gray-600 max-w-xs border border-purple-100">
        <p className="font-700 text-sm text-[#9C27B0] mb-1">📄 Как сохранить как PDF А3:</p>
        <ol className="space-y-1 list-decimal list-inside">
          <li>Нажмите кнопку «Сохранить»</li>
          <li>Принтер → <strong>«Сохранить как PDF»</strong></li>
          <li>Ещё настройки → Бумага → <strong>A3</strong></li>
          <li>Ориентация → <strong>Альбомная</strong></li>
          <li>Поля → <strong>Нет / Минимальные</strong></li>
          <li>✅ Включить <strong>«Фоновую графику»</strong></li>
        </ol>
      </div>

      {/* ===== А3 ПОСТЕР (420 × 297 мм) ===== */}
      <div
        id="a3-poster"
        style={{
          width: '420mm',
          minHeight: '297mm',
          margin: '80px auto 40px',
          background: 'linear-gradient(135deg, #fdf6ff 0%, #fff8f0 50%, #f0fff8 100%)',
          fontFamily: "'Golos Text', 'Arial', sans-serif",
          fontSize: '10pt',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 60px rgba(0,0,0,0.18)',
        }}
        className="print:shadow-none print:m-0"
      >
        {/* Декоративные круги фона */}
        <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(156,39,176,0.06)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-80px', left:'-40px', width:'240px', height:'240px', borderRadius:'50%', background:'rgba(76,175,80,0.07)', pointerEvents:'none' }} />

        {/* ====== ШАПКА ====== */}
        <div style={{ display:'flex', alignItems:'stretch', minHeight:'72mm', position:'relative' }}>
          {/* Левая полоса — фото */}
          <div style={{ width:'90mm', position:'relative', flexShrink:0 }}>
            <img src={FLOWER_IMG} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }} />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(20,0,40,0.55) 0%,rgba(60,0,80,0.3) 100%)' }} />
            {/* SVG цветок */}
            <div style={{ position:'absolute', bottom:'8mm', left:'50%', transform:'translateX(-50%)' }}>
              <svg width="80" height="80" viewBox="0 0 160 160">
                {PETAL_COLORS.map((c, i) => (
                  <ellipse key={i} cx="80" cy="32" rx="18" ry="42"
                    fill={c} fillOpacity="0.95"
                    style={{ transformOrigin:'80px 80px', transform:`rotate(${(360/7)*i}deg)` }} />
                ))}
                <circle cx="80" cy="80" r="22" fill="#FFD700" />
                <circle cx="80" cy="80" r="13" fill="#FFF9C4" />
              </svg>
            </div>
          </div>

          {/* Правая часть шапки */}
          <div style={{ flex:1, background:'linear-gradient(135deg,#4A0072,#880E4F)', padding:'8mm 10mm 6mm 10mm', display:'flex', flexDirection:'column', justifyContent:'space-between', color:'#fff' }}>
            <div>
              <div style={{ display:'inline-block', background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'20px', padding:'2px 12px', fontSize:'7pt', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'4mm' }}>
                ПАСПОРТ МАТРИЦЫ УЧЕБНОГО ПЕРИОДА · IV ЧЕТВЕРТЬ · 7 апреля – 31 мая
              </div>
              <div style={{ fontSize:'28pt', fontFamily:"'Caveat','cursive'", lineHeight:1.1, marginBottom:'3mm' }}>
                Путешествие в страну <span style={{ color:'#FFD700' }}>желаний</span>
              </div>
              <div style={{ fontSize:'11pt', fontStyle:'italic', opacity:0.85, marginBottom:'3mm', fontFamily:"'Cormorant','serif'" }}>
                «Цветик-семицветик» · Валентин Катаев · Ценность: <strong>ЗДОРОВЬЕ</strong> · Тема: <strong>ПОБЕДА</strong>
              </div>
            </div>
            <div style={{ fontSize:'8pt', opacity:0.75, lineHeight:1.6 }}>
              <strong>Лабанок Елена Николаевна</strong> — заместитель директора по воспитательной работе<br/>
              <strong>Таратонова Ольга Витальевна</strong> — советник директора по воспитанию и взаимодействию с детскими общественными объединениями<br/>
              МОУ-СОШ №2 · Брянская область, г. Унеча, ул. Луначарского, д. 38
            </div>
          </div>
        </div>

        {/* ====== ОСНОВНАЯ СЕТКА ====== */}
        <div style={{ display:'grid', gridTemplateColumns:'68mm 1fr 1fr', gap:'4mm', padding:'5mm 6mm 4mm' }}>

          {/* КОЛОНКА 1 — школа + контингент */}
          <div style={{ display:'flex', flexDirection:'column', gap:'3mm' }}>

            {/* Школа */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#9C27B0', fontWeight:700, marginBottom:'2mm' }}>🏫 Образовательная организация</div>
              <div style={{ fontSize:'8.5pt', fontWeight:700, color:'#3A1060', marginBottom:'1.5mm', lineHeight:1.3 }}>МОУ-СОШ №2 г. Унеча<br/>Брянской области</div>
              <div style={{ fontSize:'7.5pt', color:'#555', lineHeight:1.5 }}>ул. Луначарского, д. 38<br/>Городская школа в центре — конкурентная среда с двумя соседними школами</div>
            </div>

            {/* Контингент */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#9C27B0', fontWeight:700, marginBottom:'2mm' }}>👥 Обучающихся</div>
              {[
                ['Всего', '484', '#9C27B0'],
                ['Классов', '20', '#E91E8C'],
                ['1–4 кл.', '177', '#FF5B5B'],
                ['5–9 кл.', '248', '#FF9933'],
                ['10–11 кл.', '59', '#4CAF50'],
                ['Дети ОВЗ', '7', '#2196F3'],
                ['Семьи СВО', '29', '#FF5B5B'],
              ].map(([l,n,c]) => (
                <div key={l} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #F3EAF8', padding:'1.5mm 0' }}>
                  <span style={{ fontSize:'7.5pt', color:'#555' }}>{l}</span>
                  <span style={{ fontSize:'11pt', fontWeight:800, color: c as string, fontFamily:"'Caveat','cursive'" }}>{n}</span>
                </div>
              ))}
            </div>

            {/* Инфраструктура */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#4CAF50', fontWeight:700, marginBottom:'2mm' }}>🏟️ Инфраструктура</div>
              {['Школьный стадион','Актовый зал','Спортивный зал','Скалодром','Баскетбольная площадка'].map(s => (
                <div key={s} style={{ fontSize:'7.5pt', color:'#444', padding:'1mm 0', borderBottom:'1px solid #F0F0F0', display:'flex', alignItems:'center', gap:'4px' }}>
                  <span style={{ color:'#FFD700', fontSize:'8pt' }}>★</span> {s}
                </div>
              ))}
            </div>

            {/* Партнёры */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#2196F3', fontWeight:700, marginBottom:'2mm' }}>🤝 Партнёры</div>
              {['Кинотеатр «МИР»','Этнокомплекс «Брянское подворье»','Унечский краеведческий музей','Воскресная школа при Храме Святителя Николая'].map(s => (
                <div key={s} style={{ fontSize:'7.5pt', color:'#444', padding:'1mm 0', borderBottom:'1px solid #F0F0F0', display:'flex', alignItems:'center', gap:'4px' }}>
                  <span style={{ color:'#2196F3', fontSize:'8pt' }}>◆</span> {s}
                </div>
              ))}
            </div>
          </div>

          {/* КОЛОНКА 2 */}
          <div style={{ display:'flex', flexDirection:'column', gap:'3mm' }}>

            {/* Проблема + Цель */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3mm' }}>
              <div style={{ background:'#FFF5F5', borderRadius:'6px', padding:'4mm', border:'2px solid #FFCDD2' }}>
                <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1px', color:'#E53935', fontWeight:700, marginBottom:'1.5mm' }}>⚠️ Воспитательная проблема</div>
                <div style={{ fontSize:'7.5pt', color:'#4A0000', lineHeight:1.5 }}>Повышение интереса подростков к употреблению вейпов среди учеников 5–8 классов.</div>
              </div>
              <div style={{ background:'#F1FFF5', borderRadius:'6px', padding:'4mm', border:'2px solid #C8E6C9' }}>
                <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1px', color:'#2E7D32', fontWeight:700, marginBottom:'1.5mm' }}>🎯 Цель матрицы</div>
                <div style={{ fontSize:'7.5pt', color:'#1A3A1A', lineHeight:1.5 }}>Создание условий для снижения интереса к употреблению вейпов среди учеников 5–8 классов.</div>
              </div>
            </div>

            {/* Сюжет */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#9C27B0', fontWeight:700, marginBottom:'2mm' }}>🧩 Игровой сюжет матрицы</div>
              <div style={{ fontSize:'7.5pt', color:'#333', lineHeight:1.6 }}>
                Ученики 5–8 классов попадают в <strong>«страну здоровья»</strong>. Каждому классу даётся «Цветик-семицветик» — каждый лепесток это коллективный бонус за хорошую дисциплину и ведение ЗОЖ. Бонусами класс воспользуется в следующем учебном году. Ошибка одного ученика может «сжечь» лепесток для всего класса. За день до ключевого дела — <strong>открытый микрофон</strong> с проблемными вопросами.
              </div>
            </div>

            {/* Ключевые дела */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#E91E8C', fontWeight:700, marginBottom:'2mm' }}>⭐ Ключевые дела периода</div>
              {[
                { color:'#FF5B5B', bg:'#FFF0F0', emoji:'🌿', date:'7 апреля', title:'Фестиваль здоровья', sub:'«Гармония духа и тела»', desc:'4 интерактивных станции: Истоки здоровья, Голубь благой вести, Движение — жизнь!, Хлеб да соль. Финал: ритуал выпускания голубей + флешмоб.' },
                { color:'#4CAF50', bg:'#F0FFF4', emoji:'🎤', date:'28 апреля', title:'Фестиваль агитбригад', sub:'«Молодость выбирает здоровье»', desc:'Каждый класс — динамичная агитбригада с костюмами и сценарием. Победитель: экскурсия в этнокомплекс «Брянское Подворье».' },
                { color:'#9C27B0', bg:'#F9F0FF', emoji:'⚗️', date:'25 мая', title:'Защита проектов', sub:'«Битва Титанов: Витамин vs Никотин»', desc:'Публичная защита проектов на форуме «Родные Любимые» с родителями. Команды «Витамин» и «Никотин». Проекты неделю в медиа-центре.' },
              ].map((e,i) => (
                <div key={i} style={{ display:'flex', gap:'3mm', padding:'2.5mm 0', borderBottom: i<2 ? '1px solid #F0EAF8' : 'none' }}>
                  <div style={{ width:'18mm', flexShrink:0 }}>
                    <div style={{ background:e.bg, borderRadius:'5px', padding:'2mm', textAlign:'center', border:`1.5px solid ${e.color}44` }}>
                      <div style={{ fontSize:'14pt' }}>{e.emoji}</div>
                      <div style={{ fontSize:'6pt', fontWeight:700, color:e.color, lineHeight:1.2 }}>{e.date}</div>
                    </div>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:'8pt', fontWeight:700, color:e.color }}>{e.title}</div>
                    <div style={{ fontSize:'7pt', fontStyle:'italic', color:'#666', marginBottom:'1mm' }}>{e.sub}</div>
                    <div style={{ fontSize:'7pt', color:'#444', lineHeight:1.5 }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Проблемные вопросы */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#FF9933', fontWeight:700, marginBottom:'2mm' }}>💬 Проблемные вопросы (открытый микрофон)</div>
              <div style={{ background:'#FFFBEA', borderRadius:'5px', padding:'2.5mm', marginBottom:'2mm', borderLeft:'3px solid #FFD700' }}>
                <div style={{ fontSize:'7pt', fontStyle:'italic', color:'#8B6914' }}>«Здоровье — это тот подарок, который можно подарить себе, а можно и отнять у самого себя» — Ф. де Ларошфуко</div>
              </div>
              {[
                'Встречались ли тебе люди, которые добровольно «отнимали у себя» здоровье, поддаваясь сиюминутным желаниям? Почему они это делали?',
                'В какой момент вредная привычка превращается из личного дела в проблему близких?',
                'Что сложнее: вернуть здоровье после злоупотребления или беречь то, что дано от природы?',
              ].map((q,i) => (
                <div key={i} style={{ display:'flex', gap:'2mm', padding:'1.5mm 0', borderBottom: i<2?'1px solid #FFF0E0':undefined }}>
                  <span style={{ fontSize:'8pt', fontWeight:800, color:PETAL_COLORS[i*2], flexShrink:0, width:'5mm', textAlign:'center' }}>{i+1}</span>
                  <span style={{ fontSize:'7.5pt', color:'#444', lineHeight:1.5 }}>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* КОЛОНКА 3 */}
          <div style={{ display:'flex', flexDirection:'column', gap:'3mm' }}>

            {/* Календарь */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#2196F3', fontWeight:700, marginBottom:'2mm' }}>📅 Календарь учебного периода</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2mm' }}>
                {[
                  { d:'7 апреля', e:'День Здоровья, Благовещенье', c:'#FF5B5B' },
                  { d:'14 апреля', e:'День воздушного шара', c:'#FF9933' },
                  { d:'22 апреля', e:'День Матери-Земли', c:'#FFD700' },
                  { d:'28 апреля', e:'День скорой помощи', c:'#4CAF50' },
                  { d:'7 мая', e:'День радио', c:'#2196F3' },
                  { d:'9 мая', e:'День Победы', c:'#9C27B0' },
                  { d:'25 мая', e:'День химика', c:'#E91E8C' },
                  { d:'31 мая', e:'Всемирный день без табака', c:'#FF5B5B' },
                ].map((c,i) => (
                  <div key={i} style={{ background:`${c.c}12`, border:`1px solid ${c.c}44`, borderRadius:'5px', padding:'2mm 2.5mm' }}>
                    <div style={{ fontSize:'7.5pt', fontWeight:700, color:c.c }}>{c.d}</div>
                    <div style={{ fontSize:'7pt', color:'#444', lineHeight:1.3 }}>{c.e}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Книга */}
            <div style={{ background:'linear-gradient(135deg,#FFF8E1,#FFF3CD)', borderRadius:'6px', padding:'4mm', border:'2px solid #FFD70055' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#F57F17', fontWeight:700, marginBottom:'2mm' }}>📚 Книга учебного периода</div>
              <div style={{ fontSize:'10pt', fontWeight:700, color:'#4A3000', fontFamily:"'Cormorant','serif'", lineHeight:1.3 }}>«Цветик-семицветик»</div>
              <div style={{ fontSize:'8pt', color:'#7A5C00', marginTop:'1mm' }}>Валентин Катаев</div>
            </div>

            {/* Рефлексия */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#D97A8E', fontWeight:700, marginBottom:'2mm' }}>🎒 Рефлексия · 31 мая — Поход с классом</div>
              <div style={{ fontSize:'7.5pt', color:'#555', lineHeight:1.5, marginBottom:'2.5mm' }}>
                Все классы с классным руководителем и родителями идут в однодневный поход. Во время привала — игра «Чемодан, мясорубка, корзина».
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'2mm' }}>
                {[
                  { e:'🧳', n:'Чемодан', d:'Ценное — заберу с собой в жизнь', c:'#4CAF50' },
                  { e:'⚙️', n:'Мясорубка', d:'Нужно обдумать и переработать', c:'#FF9933' },
                  { e:'🗑️', n:'Корзина', d:'Показалось ненужным', c:'#FF5B5B' },
                ].map(r => (
                  <div key={r.n} style={{ background:`${r.c}10`, border:`1.5px solid ${r.c}44`, borderRadius:'5px', padding:'2.5mm', textAlign:'center' }}>
                    <div style={{ fontSize:'16pt', lineHeight:1 }}>{r.e}</div>
                    <div style={{ fontSize:'7.5pt', fontWeight:700, color:r.c, marginTop:'1mm' }}>{r.n}</div>
                    <div style={{ fontSize:'6.5pt', color:'#666', marginTop:'1mm', lineHeight:1.3 }}>{r.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Цитата */}
            <div style={{ background:'linear-gradient(135deg,#F3E5F5,#FCE4EC)', borderRadius:'6px', padding:'4mm 5mm', border:'2px solid #CE93D855', textAlign:'center' }}>
              <div style={{ fontSize:'9pt', fontStyle:'italic', color:'#4A148C', lineHeight:1.6, fontFamily:"'Cormorant','serif'" }}>
                «Здоровье — это тот подарок, который можно подарить себе, а можно и отнять у самого себя»
              </div>
              <div style={{ fontSize:'7.5pt', color:'#880E4F', marginTop:'1.5mm', fontWeight:600 }}>— Франсуа де Ларошфуко</div>
            </div>

            {/* Сюжет лепестков */}
            <div style={{ background:'white', borderRadius:'6px', padding:'4mm', border:'1.5px solid #EDE0FF', boxShadow:'0 1px 6px rgba(0,0,0,0.06)', flex:1 }}>
              <div style={{ fontSize:'6pt', textTransform:'uppercase', letterSpacing:'1.5px', color:'#9C27B0', fontWeight:700, marginBottom:'2mm' }}>🌸 Механика «Цветика-семицветика»</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'2mm', justifyContent:'center', marginBottom:'2mm' }}>
                {PETAL_COLORS.map((c,i) => (
                  <div key={i} style={{ width:'9mm', height:'15mm', borderRadius:'50% 50% 50% 50% / 60% 60% 40% 40%', background:c, opacity:0.85, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span style={{ color:'white', fontSize:'7pt', fontWeight:700 }}>{i+1}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:'7pt', color:'#555', lineHeight:1.6 }}>
                7 лепестков = 7 коллективных бонусов для класса.<br/>
                ✅ Сохранить лепесток: участие в коллективных делах<br/>
                ❌ Потерять лепесток: проступок одного ученика<br/>
                🎁 Бонусы используются в следующем учебном году
              </div>
            </div>

            {/* Подпись */}
            <div style={{ fontSize:'6.5pt', color:'#999', textAlign:'center', paddingTop:'1mm' }}>
              МОУ-СОШ №2 · г. Унеча · IV четверть 2024–2025 · ИИ: gigachat (max.ru)
            </div>
          </div>
        </div>
      </div>

      {/* CSS для печати */}
      <style>{`
        @page {
          size: A3 landscape;
          margin: 0;
        }
        @media print {
          html, body {
            margin: 0;
            padding: 0;
            width: 420mm;
            height: 297mm;
          }
          #a3-poster {
            width: 420mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            page-break-after: avoid;
          }
        }
      `}</style>
    </>
  );
}
