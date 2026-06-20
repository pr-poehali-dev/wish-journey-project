export default function Index() {
  const PETAL_COLORS = ['#E53935','#FF9800','#FDD835','#43A047','#1E88E5','#8E24AA','#D81B60'];
  const PETAL_DATES = [
    { date: '7 апреля', event: 'День\nЗдоровья' },
    { date: '14 апреля', event: 'День\nвоздушного\nшара' },
    { date: '22 апреля', event: 'День\nМатери-\nЗемли' },
    { date: '28 апреля', event: 'День\nработников\nскорой' },
    { date: '7 мая\n9 мая', event: 'День\nрадио\nДень Победы' },
    { date: '25 мая', event: 'День\nхимика' },
    { date: '31 мая', event: 'Всемирный\nдень без\nтабака' },
  ];

  // Лепесток как SVG-path
  const renderFlower = () => {
    const cx = 260, cy = 260, r = 260;
    return (
      <svg width="520" height="520" viewBox="0 0 520 520" style={{ display:'block' }}>
        {/* Радужный фон */}
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0f7fa"/>
            <stop offset="100%" stopColor="#b2ebf2"/>
          </radialGradient>
          {PETAL_COLORS.map((c, i) => (
            <radialGradient key={i} id={`pg${i}`} cx="50%" cy="70%" r="60%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.6"/>
              <stop offset="100%" stopColor={c} stopOpacity="0.95"/>
            </radialGradient>
          ))}
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="rgba(0,0,0,0.25)"/>
          </filter>
        </defs>

        {/* 7 лепестков */}
        {PETAL_DATES.map((p, i) => {
          const angle = (360 / 7) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const petalW = 95, petalH = 160;
          const px = cx + Math.cos(rad) * 110;
          const py = cy + Math.sin(rad) * 110;
          const textAngle = angle + 90;

          return (
            <g key={i} transform={`translate(${cx},${cy}) rotate(${angle + 90})`}>
              <ellipse
                cx={0} cy={-(petalH / 2 + 30)}
                rx={petalW / 2} ry={petalH / 2}
                fill={`url(#pg${i})`}
                stroke="white" strokeWidth="2"
                filter="url(#shadow)"
              />
              <text
                x={0}
                y={-(petalH / 2 + 30)}
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${-(angle + 90)} 0 ${-(petalH / 2 + 30)})`}
                style={{ fontSize: i === 4 ? '9px' : '10px', fontWeight: 800, fill: 'white', fontFamily: 'Arial, sans-serif', letterSpacing: '0.3px' }}
              >
                {p.date.split('\n').map((line, li) => (
                  <tspan key={li} x={0} dy={li === 0 ? `-${(p.date.split('\n').length - 1) * 7}` : '14'}
                    style={{ fontSize: '9px', fontWeight: 700 }}>{line}</tspan>
                ))}
                {p.event.split('\n').map((line, li) => (
                  <tspan key={`e${li}`} x={0} dy={li === 0 ? '16' : '13'}
                    style={{ fontSize: i === 4 ? '8px' : '9.5px', fontWeight: 900 }}>{line}</tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Сердцевина */}
        <circle cx={cx} cy={cy} r={62} fill="#FFD600" filter="url(#shadow)" />
        <circle cx={cx} cy={cy} r={48} fill="#FFF176" />
        <text x={cx} y={cy - 8} textAnchor="middle" style={{ fontSize:'9px', fontWeight:800, fill:'#5D4037', fontFamily:'Arial' }}>Валентин</text>
        <text x={cx} y={cy + 4} textAnchor="middle" style={{ fontSize:'9px', fontWeight:800, fill:'#5D4037', fontFamily:'Arial' }}>Катаев</text>
        <text x={cx} y={cy + 17} textAnchor="middle" style={{ fontSize:'7.5px', fontWeight:700, fill:'#E65100', fontFamily:'Arial' }}>«Цветик-</text>
        <text x={cx} y={cy + 28} textAnchor="middle" style={{ fontSize:'7.5px', fontWeight:700, fill:'#E65100', fontFamily:'Arial' }}>семицветик»</text>

        {/* Стебель */}
        <path d={`M ${cx} ${cy+62} Q ${cx-30} ${cy+200} ${cx-10} ${cy+r-10}`}
          stroke="#43A047" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* Листья */}
        <ellipse cx={cx - 60} cy={cy + 190} rx={38} ry={18}
          fill="#66BB6A" transform={`rotate(-40 ${cx-60} ${cy+190})`}/>
        <ellipse cx={cx + 30} cy={cy + 230} rx={38} ry={18}
          fill="#4CAF50" transform={`rotate(30 ${cx+30} ${cy+230})`}/>
      </svg>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Golos+Text:wght@400;600;700&display=swap');
        @page { size: A3 landscape; margin: 0; }
        @media print {
          html, body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          #poster { margin: 0 !important; box-shadow: none !important; }
        }
        body { margin: 0; background: #c8e6c9; }
      `}</style>

      {/* Кнопка печати */}
      <div className="no-print" style={{ position:'fixed', top:'16px', right:'16px', zIndex:100, display:'flex', gap:'10px', flexDirection:'column', alignItems:'flex-end' }}>
        <button onClick={() => window.print()}
          style={{ padding:'12px 24px', borderRadius:'12px', border:'none', cursor:'pointer', fontFamily:'Golos Text, Arial', fontSize:'15px', fontWeight:700, color:'white', background:'linear-gradient(135deg,#9C27B0,#E91E63)', boxShadow:'0 4px 20px rgba(0,0,0,0.3)' }}>
          🖨️ Печать / PDF А3
        </button>
        <div style={{ background:'white', borderRadius:'10px', padding:'10px 14px', fontSize:'11px', color:'#555', maxWidth:'220px', boxShadow:'0 2px 10px rgba(0,0,0,0.15)', lineHeight:'1.6' }}>
          Печать → Сохранить PDF<br/>Бумага: <b>A3</b>, Ориентация: <b>Альбомная</b><br/>Поля: <b>нет</b>, ✅ Фоновая графика
        </div>
      </div>

      {/* ПОСТЕР А3 */}
      <div id="poster" style={{
        width: '420mm', minHeight: '297mm',
        margin: '20px auto',
        background: 'linear-gradient(160deg, #e3f2fd 0%, #e8f5e9 35%, #fff8e1 65%, #fce4ec 100%)',
        position: 'relative', overflow: 'hidden',
        fontFamily: 'Golos Text, Arial, sans-serif',
        boxShadow: '0 8px 60px rgba(0,0,0,0.25)',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
      }}>

        {/* Радужная полоса вверху */}
        <div style={{ height:'7px', background:'linear-gradient(90deg,#E53935,#FF9800,#FDD835,#43A047,#1E88E5,#8E24AA,#D81B60)', width:'100%' }}/>

        {/* Заголовок */}
        <div style={{ textAlign:'center', padding:'5mm 10mm 3mm', borderBottom:'3px solid rgba(255,255,255,0.6)' }}>
          <div style={{ fontSize:'14pt', fontWeight:800, color:'#1A237E', letterSpacing:'1px', textTransform:'uppercase' }}>
            МАТРИЦА 4 ЧЕТВЕРТИ 2025–2026 УЧ. ГОД · МОУ СОШ №2 Г. УНЕЧА БРЯНСКОЙ ОБЛАСТИ
          </div>
          <div style={{ fontSize:'9pt', color:'#444', marginTop:'2px' }}>
            Лабанок Е. Н. — зам. директора по ВР &nbsp;·&nbsp; Таратонова О. В. — советник директора по воспитанию
          </div>
        </div>

        {/* ОСНОВНАЯ ЗОНА */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 520px 1fr', gap:'0', flex:1, padding:'4mm 6mm 4mm' }}>

          {/* ЛЕВАЯ КОЛОНКА */}
          <div style={{ display:'flex', flexDirection:'column', gap:'5mm', paddingRight:'5mm', justifyContent:'space-between' }}>

            {/* Школа */}
            <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:'10px', padding:'4mm', border:'2px solid #90CAF9' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#1565C0', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'2mm' }}>🏫 Образовательная организация</div>
              <div style={{ fontSize:'9pt', fontWeight:700, color:'#0D47A1', lineHeight:1.4, marginBottom:'1.5mm' }}>МОУ-СОШ №2 г. Унеча Брянской области</div>
              <div style={{ fontSize:'8pt', color:'#333', lineHeight:1.5 }}>ул. Луначарского, д. 38 · Городская школа в центре</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2mm', marginTop:'2mm' }}>
                {[['Всего учеников','484','#E53935'],['Классов','20','#FF9800'],['1–4 классы','177','#FDD835'],['5–9 классы','248','#43A047'],['10–11 классы','59','#1E88E5'],['Семьи СВО','29','#8E24AA']].map(([l,n,c])=>(
                  <div key={l} style={{ background:`${c}18`, borderRadius:'5px', padding:'1.5mm 2mm', display:'flex', justifyContent:'space-between', alignItems:'center', border:`1px solid ${c}44` }}>
                    <span style={{ fontSize:'7pt', color:'#333' }}>{l}</span>
                    <span style={{ fontSize:'12pt', fontWeight:800, color:c as string, fontFamily:'Caveat, cursive' }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Проблема */}
            <div style={{ background:'rgba(255,235,238,0.95)', borderRadius:'10px', padding:'4mm', border:'2px solid #EF9A9A' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#C62828', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'2mm' }}>⚠️ Воспитательная проблема</div>
              <div style={{ fontSize:'8.5pt', color:'#333', lineHeight:1.6 }}>Повышение интереса подростков к употреблению <strong>вейпов</strong> среди учеников 5–8 классов.</div>
            </div>

            {/* Вопрос 1 */}
            <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:'10px', padding:'4mm', border:'2px solid #CE93D8' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#6A1B9A', textTransform:'uppercase', marginBottom:'2mm' }}>💬 Проблемный вопрос 1</div>
              <div style={{ fontSize:'8.5pt', color:'#333', lineHeight:1.6 }}>Встречались ли тебе люди, которые добровольно «отнимали у себя» здоровье, поддаваясь сиюминутным желаниям? Как ты думаешь, почему они это делали?</div>
            </div>

            {/* Вопрос 2 */}
            <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:'10px', padding:'4mm', border:'2px solid #CE93D8' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#6A1B9A', textTransform:'uppercase', marginBottom:'2mm' }}>💬 Проблемный вопрос 2</div>
              <div style={{ fontSize:'8.5pt', color:'#333', lineHeight:1.6 }}>Как ты считаешь, в какой момент вредная привычка превращается из личного дела человека в проблему его близких?</div>
            </div>

            {/* Цитата */}
            <div style={{ background:'rgba(255,248,225,0.95)', borderRadius:'10px', padding:'4mm 5mm', border:'2px solid #FFD54F', textAlign:'center' }}>
              <div style={{ fontSize:'9.5pt', fontStyle:'italic', color:'#4E342E', lineHeight:1.6, fontFamily:'Georgia, serif' }}>
                «Здоровье — это тот подарок,<br/>который можно подарить себе,<br/><strong>а можно и отнять у самого себя»</strong>
              </div>
              <div style={{ fontSize:'8pt', color:'#8D6E63', marginTop:'1.5mm', fontWeight:600 }}>Ф. де Ларошфуко</div>
            </div>
          </div>

          {/* ЦЕНТР — ЦВЕТОК */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
            {renderFlower()}
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div style={{ display:'flex', flexDirection:'column', gap:'5mm', paddingLeft:'5mm', justifyContent:'space-between' }}>

            {/* Сюжет */}
            <div style={{ background:'rgba(232,245,233,0.95)', borderRadius:'10px', padding:'4mm', border:'2px solid #A5D6A7' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#1B5E20', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'2mm' }}>🧩 Сюжет матрицы</div>
              <div style={{ fontSize:'8pt', color:'#1A3A1A', lineHeight:1.6 }}>
                В эту четверть ученики 5–8 классов попадают в <strong>страну здоровья</strong>. Каждому классу даётся «Цветик-семицветик» — каждый лепесток это <strong>коллективный бонус</strong> за дисциплину и ведение ЗОЖ. Ошибка одного ученика может «сжечь» лепесток для всего класса.
              </div>
            </div>

            {/* Ключевые дела */}
            <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:'10px', padding:'4mm', border:'2px solid #FFAB91' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#BF360C', textTransform:'uppercase', marginBottom:'2mm' }}>⭐ Ключевые дела</div>
              {[
                { c:'#E53935', e:'🌿', d:'7 апреля', t:'Фестиваль здоровья', s:'«Гармония духа и тела»' },
                { c:'#43A047', e:'🎤', d:'28 апреля', t:'Фестиваль агитбригад', s:'«Молодость выбирает здоровье»' },
                { c:'#8E24AA', e:'⚗️', d:'25 мая', t:'Защита проектов', s:'«Битва Титанов: Витамин vs Никотин»' },
              ].map((ev,i) => (
                <div key={i} style={{ display:'flex', gap:'2.5mm', padding:'2mm 0', borderBottom: i<2 ? '1px solid #F5E0D0':'none' }}>
                  <div style={{ background:ev.c, borderRadius:'6px', width:'14mm', flexShrink:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2mm 0' }}>
                    <div style={{ fontSize:'13pt' }}>{ev.e}</div>
                    <div style={{ fontSize:'6pt', color:'white', fontWeight:700, textAlign:'center', lineHeight:1.2 }}>{ev.d}</div>
                  </div>
                  <div>
                    <div style={{ fontSize:'8.5pt', fontWeight:700, color:ev.c }}>{ev.t}</div>
                    <div style={{ fontSize:'7.5pt', color:'#555', fontStyle:'italic' }}>{ev.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Цель */}
            <div style={{ background:'rgba(232,245,233,0.95)', borderRadius:'10px', padding:'4mm', border:'2px solid #A5D6A7' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#1B5E20', textTransform:'uppercase', marginBottom:'2mm' }}>🎯 Цель матрицы</div>
              <div style={{ fontSize:'8.5pt', color:'#1A3A1A', lineHeight:1.6 }}>Создание условий для снижения интереса подростков к употреблению вейпов среди учеников 5–8 классов.</div>
            </div>

            {/* Рефлексия */}
            <div style={{ background:'rgba(243,229,245,0.95)', borderRadius:'10px', padding:'4mm', border:'2px solid #CE93D8' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#4A148C', textTransform:'uppercase', marginBottom:'2mm' }}>🎒 Рефлексия · 31 мая — Поход с классом</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'2mm' }}>
                {[['🧳','Чемодан','Ценное\nзаберу!','#43A047'],['⚙️','Мясо-рубка','Надо\nобдумать','#FF9800'],['🗑️','Корзина','Лишнее\nпрочь','#E53935']].map(([e,n,d,c])=>(
                  <div key={n} style={{ textAlign:'center', background:`${c}15`, borderRadius:'6px', padding:'2mm', border:`1.5px solid ${c}55` }}>
                    <div style={{ fontSize:'15pt' }}>{e}</div>
                    <div style={{ fontSize:'7.5pt', fontWeight:700, color:c as string }}>{n}</div>
                    <div style={{ fontSize:'6.5pt', color:'#555', lineHeight:1.3, whiteSpace:'pre-line' }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Вопрос 3 */}
            <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:'10px', padding:'4mm', border:'2px solid #CE93D8' }}>
              <div style={{ fontSize:'7pt', fontWeight:800, color:'#6A1B9A', textTransform:'uppercase', marginBottom:'2mm' }}>💬 Проблемный вопрос 3</div>
              <div style={{ fontSize:'8.5pt', color:'#333', lineHeight:1.6 }}>Что сложнее: вернуть здоровье после того, как им злоупотребил, или беречь то, что дано от природы?</div>
            </div>
          </div>
        </div>

        {/* Радужная полоса внизу */}
        <div style={{ height:'7px', background:'linear-gradient(90deg,#D81B60,#8E24AA,#1E88E5,#43A047,#FDD835,#FF9800,#E53935)', width:'100%' }}/>
      </div>
    </>
  );
}
