/* 所有文章和時期均來自 data/stories.js；網址 hash 可直接分享。 */
(() => {
  const root = document.querySelector('#content');
  const data = window.HISTORY_DATA;
  const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arr = value => Array.isArray(value) ? value : [];
  if (!data || !Array.isArray(data.periods) || !Array.isArray(data.stories)) {
    root.innerHTML = '<div class="wrap missing"><h1>故事資料暫時無法讀取</h1><p>請確認 data/stories.js 存在且格式正確。</p></div>';
    return;
  }
  const periods = data.periods;
  const stories = data.stories;
  const eras = {
    'spring-autumn': {name:'春秋', years:'前 770 — 前 476 年', intro:'王室權威漸弱，諸侯爭霸。從結交賢才、列國攻守到吳越角逐，追尋一個個改變局勢的選擇。', index:'01', char:'春', cls:'spring'},
    'warring-states': {name:'戰國', years:'前 475 — 前 221 年', intro:'七國競逐，外交與戰爭牽動天下。從攻城布局到使節交鋒，看群雄如何在變局中謀求生存。', index:'02', char:'戰', cls:'warring'}
  };
  const href = (kind, id) => `#${kind}/${encodeURIComponent(id)}`;
  const findPeriod = id => periods.find(p => p.id === id);
  const findStory = id => stories.find(s => s.id === id);
  const byEra = id => periods.filter(p => p.era === id);
  const byPeriod = id => stories.filter(s => s.period === id);
  const crumbs = items => `<div class="crumbs" aria-label="目前位置"><a href="#home">首頁</a>${items.map((item, i) => `<span aria-hidden="true">／</span>${item.url ? `<a href="${item.url}">${esc(item.label)}</a>` : `<span aria-current="page">${esc(item.label)}</span>`}`).join('')}</div>`;
  const kicker = s => `<div class="kicker">${esc(s)}</div>`;
  // 使用原創符號插畫作為閱讀提示，並非人物或史實場景的還原。
  // 每個圖案都是概念符號，不代表歷史器物或場景的精確還原。
  const storySymbols = {
    '管鮑之交': '<path d="M24 69h39l-4 22H28zM77 69h39l-4 22H81zM34 69c-5-10 9-13 4-25M45 69c-5-10 9-13 4-25M87 69c-5-10 9-13 4-25M98 69c-5-10 9-13 4-25M58 105c10-12 20-12 30 0M19 105h102"/>',
    '退避三舍': '<path d="M37 108V28m0 4h49l-10 15 10 15H37M23 108h29M61 83H112m-16-13 16 13-16 13"/><circle cx="36" cy="24" r="4"/>',
    '臥薪嘗膽': '<path d="M25 94 95 57M33 104 104 67M25 74l79 30M30 61l77 29M20 110h100M73 26c0 9-10 15-10 25a10 10 0 0 0 20 0c0-10-10-16-10-25Z"/>',
    '圍魏救趙': '<rect x="22" y="38" width="37" height="37"/><rect x="81" y="65" width="37" height="37"/><path d="M31 38V28h20v10M90 65V55h20v10M61 47c20-16 42-10 48 4m0 0-2-11m2 11-11-2M80 91c-20 13-39 9-45-5m0 0 2 11m-2-11 11 2"/>',
    '完璧歸趙': '<circle cx="70" cy="70" r="45"/><circle cx="70" cy="70" r="16"/><path d="M28 70h-8m100 0h-8M70 28v-8m0 100v-8M38 38l6 6m52 52 6 6M102 38l-6 6M44 96l-6 6"/>',
    '紙上談兵': '<path d="M35 29h59c8 0 13 6 13 13v60H48c-8 0-13-6-13-13zM35 32c0 9 6 13 13 13h59M48 45v57M59 59h35M59 69h35M59 79h22"/><circle cx="96" cy="92" r="10"/><path d="M90 92h12m-6-6v12"/>',
    // 諸侯會盟：數面旗幟圍繞盟臺。
    '九合一匡': '<path d="M27 104h86M38 104V89h64v15M51 89V76h38v13M70 76V28M70 30h29l-7 9 7 9H70M28 75V41m0 2h24l-6 8 6 8H28M112 75V41m0 2H88l6 8-6 8h24"/><circle cx="70" cy="25" r="3"/>',
    // 老馬與歸途。
    '老馬識途': '<path d="M43 90V66l-10-10 7-18 11-5 9-15 9 13 13 5 6 16-7 13H65l-7 25M45 41l14 8 9-4M49 90v12m27-12v12M35 103h53M91 86c9 3 15 9 19 18M92 70c12 2 21 8 27 18"/><circle cx="57" cy="41" r="1.5"/>',
    // 水澤中的魚與乾裂的土地。
    '竭澤而漁': '<path d="M20 45c9-6 17 6 26 0s17 6 26 0 17 6 26 0 17 6 22 1M20 54c9-6 17 6 26 0s17 6 26 0 17 6 26 0 17 6 22 1M42 77c10-12 27-15 41-3l12-7-3 14 3 13-12-7c-14 12-31 9-41-3l-9 7V70zM56 79h1M22 110h96M45 110l6-10 6 10M76 110l6-9 7 9"/>',
    // 鼎的三足與雙耳。
    '問鼎輕重': '<path d="M42 51c-8-1-12-6-12-13 0-6 4-10 11-10h6v15M98 51c8-1 12-6 12-13 0-6-4-10-11-10h-6v15M39 49h62l-4 29c-2 12-12 19-27 19S45 90 43 78zM47 56h46M53 65h34M51 91l-5 20h12l5-14M89 91l5 20H82l-5-14M70 98v13"/>',
    // 飛鳥與被收藏的弓。
    '鳥盡弓藏': '<path d="M28 29c32 11 44 39 31 72M28 29l31 72M30 92l56-54M80 38h10v10M77 47l9-9M81 102h34M86 96v12M112 96v12M86 96h26M91 27c6-8 12-8 17 0 4-4 9-4 13 1M92 28l8 3 8-3"/>',
    // 漸減的炊灶，提示馬陵故事中的減灶誘敵。
    '因勢利導': '<path d="M23 100h94M30 91h21M59 91h21M88 91h21M32 89l3-11h12l3 11M61 89l3-11h12l3 11M90 89l3-11h12l3 11M41 71c-5-6 5-8 1-14M70 71c-5-6 5-8 1-14M99 71c-5-6 5-8 1-14M31 35h77m-12-11 12 11-12 11"/>',
    // 成束荊枝，提示負荊請罪。
    '負荊請罪': '<path d="M36 105 91 28M49 109 104 32M30 37l77 68M25 50l76 63M53 80l-10-3m18-8-1-11m10 0 11 2m-4-12 2-10M80 81l10-5m-18-5 1-10M58 98l-7 10m31-12 8 10M55 65l8 8m0-8-8 8M67 57l8 8m0-8-8 8"/>',
    // 書簡與劍：出使與自薦。
    '毛遂自薦': '<path d="M28 31h47v68H28zM34 25v80M70 25v80M40 43h23M40 53h23M40 63h18M40 73h21M102 24l8 12-8 52-8-52zM93 91h18M101 91v18M94 110h15"/><circle cx="102" cy="32" r="2"/>',
    // 兩半相合的兵符，以斷面區分左右。
    '竊符救趙': '<path d="M24 92V66l9-16 15-7 8-13 10 8v57H51l-5 10H34l-3-13zM116 92V66l-9-16-15-7-8-13-10 8v57h15l5 10h12l3-13zM66 38l4 6 4-6M66 50l4 6 4-6M66 62l4 6 4-6M66 74l4 6 4-6M38 60l8 3M102 60l-8 3M38 80h13M102 80H89"/><circle cx="46" cy="53" r="1.5"/><circle cx="94" cy="53" r="1.5"/>'
  };
  const icon = title => {
    const shape = storySymbols[title] || '<path d="M19 102 48 57l20 25 16-20 37 40M21 112h99M26 44h23M37 32v24"/><circle cx="98" cy="35" r="13"/>';
    return `<svg viewBox="0 0 140 140" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${shape}</svg>`;
  };
  const art = (story, n, extra = '') => `<div class="story-art ${extra}" aria-hidden="true"><span class="art-index">STORY / ${String(n + 1).padStart(2,'0')}</span><span class="art-sun"></span>${icon(story.title)}</div>`;
  const paragraphs = value => arr(value).map(p => `<p>${esc(p)}</p>`).join('');
  // 只接受可供讀者查核的 HTTPS 或 HTTP 來源，避免將資料中的其他協定當成連結。
  const sourceHref = url => /^https?:\/\//i.test(url || '') ? esc(url) : '';
  const renderCountryImpacts = entries => {
    const items = arr(entries).filter(x => x && x.state && x.text);
    if (!items.length) return '';
    return `<div class="country-impacts"><h3>各國後續發展</h3><dl>${items.map(x => `<div><dt>${esc(x.state)}</dt><dd>${esc(x.text)}</dd></div>`).join('')}</dl></div>`;
  };
  const renderSubsequentStories = entries => {
    const items = arr(entries).filter(x => x && x.title && x.relation && x.storyId && findStory(x.storyId));
    if (!items.length) return '';
    return `<section class="subsequent" id="subsequent"><div class="section-label">FOLLOW THE THREAD / 沿著歷史往後看</div><h2>後續典故</h2><p>從這段歷史繼續延伸；每則關聯都說明兩者如何相連。</p><div class="subsequent-list">${items.map(x => {
      const internal = x.storyId && findStory(x.storyId);
      const url = sourceHref(x.source && x.source.url);
      const title = `<a href="${href('story', internal.id)}">${esc(x.title)} ↗</a>`;
      const source = url ? `<a class="subsequent-source" href="${url}" target="_blank" rel="noopener noreferrer">查閱${esc(x.source.title || '資料來源')} ↗</a>` : '';
      return `<article class="subsequent-card"><h3>${title}</h3><p>${esc(x.relation)}</p>${source}</article>`;
    }).join('')}</div></section>`;
  };
  const card = (s, index) => `<a class="story-card" href="${href('story',s.id)}">${art(s,index)}<div class="story-body"><div class="story-meta">${esc(s.years)} · ${esc(arr(s.states).join('、'))}</div><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p><span class="card-link">閱讀典故 ↗</span></div></a>`;
  const home = () => `<section class="hero wrap"><div class="hero-grid"><div class="hero-copy">${kicker('一本給好奇者的歷史筆記')}<h1>讀一個典故，<br><em>看見一個時代。</em></h1><p>春秋的風雲，戰國的謀略。沿著時間走進故事，看見典故背後的人、選擇，以及它們彼此的關聯。</p><a class="primary" href="#eras">開始翻閱 <span>↘</span></a></div><div class="hero-art" role="img" aria-label="山水、城郭與遠處車隊構成的水墨意象"><span class="vertical-note">沿著時間讀故事</span><span class="hero-art-label">春秋 ─ 戰國　/　公元前 770 — 221</span></div></div><div class="hero-bottom"><span>從時代出發 · 在故事之間找線索</span><span>HISTORY IS CONNECTED　↗</span></div></section>
  <section id="eras" class="section wrap"><div class="section-head"><div>${kicker('THE COLLECTION / 時代索引')}<h2>先從一個時代開始</h2><p>選擇春秋或戰國，再依時間走進各個典故。</p></div><div class="section-number">兩個時代 / 一條長河</div></div><div class="era-grid">${Object.entries(eras).map(([id,e]) => `<a class="era-card ${e.cls}" href="${href('era',id)}"><div class="era-text"><span class="stamp-label">時代 ${e.index}</span><h3>${e.name}</h3><span class="era-years">${e.years}</span><p>${e.intro}</p><span class="card-link">展開時期與故事 ↗</span></div><div class="era-art" aria-hidden="true"><span>${e.char}</span></div></a>`).join('')}</div></section>
  <section class="bridge wrap" id="about"><div>${kicker('ABOUT THIS NOTE / 關於這份筆記')}<h2>故事不是孤立的。</h2></div><div><p>一個典故常是一場更長歷史的片段。這裡依<strong>時代、時期、故事</strong>逐層整理，也把相關典故串起來，讓複習不只記住名稱，更能看見前後脈絡。</p><p>時期分段是為了閱讀方便而做的整理，並非唯一的學術分期。文中的插圖為概念示意，歷史細節與不同說法請參考各篇列出的資料來源。</p></div></section>`;
  const eraPage = id => {
    const e = eras[id]; if (!e) return missing();
    const ps = byEra(id);
    return `<div class="wrap page-top">${crumbs([{label:e.name}])}<div class="page-head"><div>${kicker('ERA '+e.index+' / 時代總覽')}<h1>${e.name}</h1><p>${e.years}　｜　${e.intro}</p></div><span class="big-ordinal" aria-hidden="true">${e.char}</span></div></div><section class="wrap period-section"><div class="section-head"><div>${kicker('CHOOSE A PERIOD / 選擇時期')}<h2>沿著時間，翻開故事</h2><p>選一個時期，查看其中的代表典故。</p></div><div class="section-number">${String(ps.length).padStart(2,'0')} 個時期</div></div><div class="period-grid">${ps.map((p,i) => `<a class="period-card" href="${href('period',p.id)}"><span class="period-num">PERIOD ${String(i+1).padStart(2,'0')} / ${esc(e.name)}</span><h3>${esc(p.label)}</h3><span class="years">${esc(p.years)}</span><p>${esc(p.intro)}</p><span class="card-link">查看典故（${byPeriod(p.id).length}） ↗</span></a>`).join('')}</div><p class="notice">註：這裡的早、中、晚期為便於複習的編輯分段，不代表唯一通行的分期。</p><a class="back-link" href="#home">← 回到時代索引</a></section>`;
  };
  const periodPage = id => {
    const p = findPeriod(id); if (!p || !eras[p.era]) return missing();
    const e = eras[p.era], list = byPeriod(id);
    return `<div class="wrap page-top">${crumbs([{label:e.name,url:href('era',p.era)},{label:p.label}])}<div class="page-head"><div>${kicker('PERIOD / '+e.name)}<h1>${esc(p.label)}</h1><p>${esc(p.years)}　｜　${esc(p.intro)}</p></div><span class="big-ordinal" aria-hidden="true">${e.char}</span></div></div><section class="wrap period-section"><div class="section-head"><div>${kicker('STORY COLLECTION / 典故故事')}<h2>這個時期的故事</h2><p>從一個故事開始，再循著關聯繼續探索。</p></div><div class="section-number">${String(list.length).padStart(2,'0')} 則典故</div></div>${list.length ? `<div class="story-grid">${list.map(card).join('')}</div>` : '<p class="empty">這個時期的故事正在整理中。</p>'}<a class="back-link" href="${href('era',p.era)}">← 返回${esc(e.name)}時期</a></section>`;
  };
  const storyPage = id => {
    const s = findStory(id); if (!s) return missing();
    const p = findPeriod(s.period); if (!p || !eras[p.era]) return missing();
    const e = eras[p.era];
    const related = arr(s.connections).map(c => ({...c, story:findStory(c.id)})).filter(c => c.story);
    const countryImpacts = renderCountryImpacts(s.countryImpacts);
    const subsequentStories = renderSubsequentStories(s.subsequentStories);
    const sections = [ ['background','01 / THE CONTEXT','故事背景',s.background],['narrative','02 / THE STORY','故事經過',s.narrative],['influence','03 / WHAT FOLLOWED','後續影響',s.influence] ];
    return `<div class="wrap page-top">${crumbs([{label:e.name,url:href('era',p.era)},{label:p.label,url:href('period',p.id)},{label:s.title}])}<div class="story-hero"><div class="story-hero-content">${kicker('STORY / '+p.label+' / '+s.years)}<h1>${esc(s.title)}</h1><p>${esc(s.summary)}</p><div class="tags">${[...arr(s.states),...arr(s.people),...arr(s.themes)].map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div></div>${art(s,stories.indexOf(s))}</div><div class="reading-layout"><aside class="reading-aside" aria-label="文章目錄"><strong>ON THIS PAGE / 本篇目錄</strong><a href="#story/${encodeURIComponent(s.id)}/background">故事背景</a><a href="#story/${encodeURIComponent(s.id)}/narrative">故事經過</a><a href="#story/${encodeURIComponent(s.id)}/influence">後續影響</a>${subsequentStories ? `<a href="#story/${encodeURIComponent(s.id)}/subsequent">後續典故</a>` : ''}<a href="#story/${encodeURIComponent(s.id)}/related">典故之間</a><a href="#story/${encodeURIComponent(s.id)}/sources">資料來源</a></aside><article>${sections.map(([key,lab,title,content]) => `<section id="${key}" class="article-section"><div class="section-label">${lab}</div><h2>${title}</h2><div class="${key==='influence'?'impact':''}">${paragraphs(content)}</div>${key==='influence'?countryImpacts:''}</section>`).join('')}${subsequentStories}<section class="related" id="related"><div class="section-label">04 / CONNECT THE STORIES</div><h2>典故之間</h2><p>讀完這一篇，也可以循著這些線索繼續探索。</p><div class="related-list">${related.length ? related.map(c=>`<a class="related-card" href="${href('story',c.story.id)}"><div><strong>${esc(c.story.title)}</strong><p>${esc(c.relation)}</p></div><span class="related-arrow" aria-hidden="true">↗</span></a>`).join('') : '<p>目前尚無已收錄的相關典故。</p>'}</div></section><section class="sources" id="sources"><div class="section-label">05 / FURTHER READING</div><h2>資料來源</h2><ul>${arr(s.sources).map(x => `<li><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.title)} ↗</a>${x.note ? `：${esc(x.note)}` : ''}</li>`).join('')}</ul><p class="source-note">本文為複習整理；如原典與後世演繹不同，請以來源所載及其語境為準。插圖是概念示意。</p></section><a class="back-link" href="${href('period',p.id)}">← 返回${esc(p.label)}</a></article></div></div>`;
  };
  const missing = () => '<div class="wrap missing"><h1>找不到這一頁</h1><p>這個故事或時期可能尚未收錄。</p><a class="primary" href="#home">回到首頁 ↗</a></div>';
  function render(){
    const hash = location.hash.slice(1);
    const [kind, encoded, section] = hash.split('/');
    let id = ''; try { id = decodeURIComponent(encoded || ''); } catch { id = ''; }
    if (!hash || kind === 'home' || kind === 'about' || kind === 'eras' || kind === 'content') root.innerHTML = home();
    else if (kind === 'era') root.innerHTML = eraPage(id);
    else if (kind === 'period') root.innerHTML = periodPage(id);
    else if (kind === 'story') root.innerHTML = storyPage(id);
    else root.innerHTML = missing();
    document.title = kind === 'story' && findStory(id) ? `${findStory(id).title}｜故事裡的春秋戰國` : '故事裡的春秋戰國';
    if (kind === 'about' || kind === 'eras') document.getElementById(kind)?.scrollIntoView();
    else if (section && ['background','narrative','influence','subsequent','related','sources'].includes(section)) document.getElementById(section)?.scrollIntoView();
    else window.scrollTo(0,0);
  }
  document.querySelector('.skip').addEventListener('click', event => { event.preventDefault(); root.focus(); });
  window.addEventListener('hashchange', render);
  render();
})();
