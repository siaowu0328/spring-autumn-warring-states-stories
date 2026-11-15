/* 每筆典故皆含原典連結；新增內容請先閱讀 AGENTS.md。 */
window.HISTORY_DATA = {
  periods: [
    { id: 'sa-early', era: 'spring-autumn', label: '春秋前期', years: '前 770—前 650 年', intro: '周王室東遷後，諸侯逐漸崛起，齊桓公與管仲的故事見證早期霸業。' },
    { id: 'sa-middle', era: 'spring-autumn', label: '春秋中期', years: '前 649—前 550 年', intro: '晉、楚等大國競逐中原，盟約、外交與戰爭交織。' },
    { id: 'sa-late', era: 'spring-autumn', label: '春秋晚期', years: '前 549—前 476 年', intro: '吳、越在東南崛起，兩國爭霸改寫春秋末年的局勢。' },
    { id: 'ws-early', era: 'warring-states', label: '戰國前期', years: '前 475—前 350 年', intro: '諸國變法、軍事競爭加劇，齊、魏、趙之間的攻防展現新的戰略。' },
    { id: 'ws-middle', era: 'warring-states', label: '戰國中期', years: '前 349—前 280 年', intro: '強國角力與外交談判並行，諸侯使者在危局中尋找周旋空間。' },
    { id: 'ws-late', era: 'warring-states', label: '戰國晚期', years: '前 279—前 221 年', intro: '秦的力量日益強大，長平之戰等重大衝突加速列國局勢轉變。' }
  ],
  stories: [
    {
      id: 'guan-bao-friendship', title: '管鮑之交', period: 'sa-early', years: '約前 7 世紀前期',
      states: ['齊'], people: ['管仲', '鮑叔牙', '齊桓公'], themes: ['知人', '友誼', '人才'],
      summary: '鮑叔牙理解並舉薦管仲，讓兩人的交情成為知人善任的典故。',
      background: ['春秋前期，齊國公子小白與公子糾爭奪君位；鮑叔牙和管仲原分別輔佐不同的公子。'],
      narrative: ['《史記》記載，管仲早年與鮑叔牙交往，曾在經商與仕途遭遇困難，鮑叔牙仍理解他的處境。', '公子小白即位為齊桓公後，公子糾失敗，管仲被囚；鮑叔牙向桓公舉薦管仲，管仲因而得以施展才能。'],
      influence: ['《史記》將管仲輔政與齊桓公稱霸相連；後人以「管鮑之交」形容深厚而互相理解的友誼。', '這是司馬遷的敘事，史事成敗涉及多種因素，不宜全歸因於單一人物。'],
      connections: [
        { id: 'wo-xin-chang-dan', relation: '主題對照：兩篇都涉及君主如何運用身邊的人才與長期謀劃，並無直接因果。' },
        { id: 'paper-strategy', relation: '主題對照：一篇講舉薦人才，另一篇提醒任用與實際能力之間的複雜性。' }
      ],
      sources: [
        { title: '教育部《成語典》：管鮑之交', url: 'https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=10690&la=0&webMd=2', note: '說明管、鮑之交及其成語含義。' },
        { title: '《史記集解》卷六十二・管晏列傳', url: 'https://ctext.org/wiki.pl?chapter=809489&if=gb', note: '記載管鮑交往、舉薦管仲及其輔政。此頁為影印辨識文字，閱讀時宜留意字形。' }
      ]
    },
    {
      id: 'retreat-three-she', title: '退避三舍', period: 'sa-middle', years: '前 632 年',
      states: ['晉', '楚'], people: ['晉文公重耳', '楚成王'], themes: ['承諾', '戰略', '晉楚爭霸'],
      summary: '重耳流亡時曾向楚君承諾退讓，日後晉楚交戰，晉軍退避三舍。',
      background: ['晉公子重耳流亡期間受到楚成王款待；《左傳》記載重耳表示，若兩國將來交戰，願先退避三舍。'],
      narrative: ['重耳後來回國即位，是為晉文公。晉、楚在城濮之戰前對峙時，晉軍依照先前的承諾後退。', '雙方最終在城濮交戰，晉軍取勝；「舍」為古代行軍距離單位，三舍常解釋為九十里。'],
      influence: ['城濮之戰後，晉文公的諸侯地位提高，晉楚之爭仍持續。', '後人用「退避三舍」比喻主動退讓或避免衝突；戰爭結果不能只用退兵一個決定解釋。'],
      connections: [
        { id: 'surround-wei', relation: '主題對照：兩篇都可觀察如何調整行動方向與戰場態勢，並非相同戰役。' },
        { id: 'wo-xin-chang-dan', relation: '時代對照：前者反映中原晉楚爭霸，後者轉向春秋晚期的吳越競逐。' }
      ],
      sources: [
        { title: '教育部《成語典》：退避三舍', url: 'https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=104&la=0&webMd=2', note: '附《左傳》僖公二十三年典源與釋義。' },
        { title: '《左傳》僖公二十三年', url: 'https://ctext.org/chun-qiu-zuo-zhuan/xi-gong-er-shi-san-nian/zh', note: '重耳流亡到楚及退避承諾。' },
        { title: '《左傳》僖公二十八年', url: 'https://ctext.org/chun-qiu-zuo-zhuan/xi-gong-er-shi-ba-nian/zh', note: '城濮之戰的記載。' }
      ]
    },
    {
      id: 'wo-xin-chang-dan', title: '臥薪嘗膽', period: 'sa-late', years: '前 494—前 473 年間',
      states: ['吳', '越'], people: ['越王勾踐', '吳王夫差', '范蠡'], themes: ['吳越爭霸', '復國', '長期謀劃'],
      summary: '越王勾踐戰敗後艱苦自勵，吳越長年爭鬥最終以越滅吳告終。',
      background: ['春秋晚期，吳越相爭。勾踐遭吳軍擊敗，被困會稽，後向吳求和。'],
      narrative: ['《史記》記載勾踐回國後自苦，將膽懸置身旁，飲食時也嘗膽，以提醒自己不忘會稽之恥。', '經過多年內政經營與軍事角力，越國趁吳國國力受損多次進攻；前 473 年吳國滅亡。'],
      influence: ['後世以「臥薪嘗膽」形容刻苦自勵、等待時機；這是後來凝練的成語。', '這裡的《史記》原文有勾踐「嘗膽」，並未以同一段明說他「臥薪」；不宜把後世成語細節都當作當時確定事實。'],
      connections: [
        { id: 'retreat-three-she', relation: '時代對照：由晉楚爭霸轉看春秋晚期的吳越競逐。' },
        { id: 'guan-bao-friendship', relation: '主題對照：兩篇都涉及君主與輔佐者；不代表兩事有直接因果。' }
      ],
      sources: [
        { title: '教育部《成語典》：臥薪嘗膽', url: 'https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=198&la=0&webMd=2', note: '附《史記》嘗膽原文；成語典的典故說明包含後世對臥薪的敘述。' },
        { title: '《史記正義》卷四十一・越王勾踐世家', url: 'https://ctext.org/wiki.pl?chapter=180115&if=gb', note: '載會稽敗戰、嘗膽以及吳越之爭。' }
      ]
    },
    {
      id: 'surround-wei', title: '圍魏救趙', period: 'ws-early', years: '約前 354—前 353 年',
      states: ['齊', '魏', '趙'], people: ['孫臏', '田忌', '龐涓'], themes: ['戰略', '齊魏競爭', '桂陵之戰'],
      summary: '魏國攻趙，齊軍轉攻魏國要地，迫使魏軍回救，並在桂陵交戰。',
      background: ['戰國時期諸侯軍事競爭加劇，魏國進攻趙國，趙向齊國求援。'],
      narrative: ['《史記》記載，齊將田忌原想直接赴趙，孫臏建議避開魏軍主力，向魏國要地大梁的方向進軍。', '魏軍離開趙地回救，齊、魏在桂陵交戰，齊軍擊敗魏軍。事件年代在不同研究中可能略有出入。'],
      influence: ['「圍魏救趙」後來成為以攻擊對方要害，間接解除危機的戰略說法。', '同一人物孫臏後來也出現在齊魏馬陵之戰的記載中，但兩場戰役應分開理解。'],
      connections: [
        { id: 'retreat-three-she', relation: '主題對照：皆有透過改變軍隊行動方向來影響戰局的敘事。' },
        { id: 'return-jade', relation: '歷史脈絡：兩篇都涉及趙國，分別呈現戰國中前期軍事與後來秦趙外交的不同處境。' }
      ],
      sources: [
        { title: '教育部《成語典》：圍魏救趙', url: 'https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=17170&la=0&webMd=2', note: '說明齊、魏、趙關係，並指向《史記》出處。' },
        { title: '《史記》孫子吳起列傳・桂陵之戰', url: 'https://ctext.org/text.pl?if=gb&node=7424&show=parallel', note: '記載孫臏建議與桂陵之戰。' }
      ]
    },
    {
      id: 'return-jade', title: '完璧歸趙', period: 'ws-middle', years: '約前 283—前 279 年（年代有不同推算）',
      states: ['秦', '趙'], people: ['藺相如', '趙惠文王', '秦昭王'], themes: ['外交', '秦趙關係', '和氏璧'],
      summary: '秦王提出以城池交換和氏璧，藺相如出使秦國，最終使寶璧歸趙。',
      background: ['《史記》記載，趙國得到和氏璧後，秦王提出用十五座城池交換。趙國擔心受騙，也憂慮拒絕會引來秦國攻擊。', '確切年代有不同推算；此處為方便整理依常見的約前 283 年說暫歸戰國中期，其他推算範圍可能跨到下一時期。'],
      narrative: ['趙國派藺相如攜璧赴秦。相如察覺秦王沒有真誠交城的跡象，設法取回和氏璧，並安排人秘密將璧送回趙國。', '相如留在秦廷應對，最後獲釋歸趙；《史記》記載秦沒有交城，趙也沒有交出和氏璧。'],
      influence: ['藺相如回國後受到任用；他與廉頗之間的衝突與和解，是同一列傳中後續的「負荊請罪」故事。', '典故常用來比喻把借來或受託保管的物品完整歸還。故事細節依《史記》敘事，並非當事人的逐字紀錄。'],
      connections: [
        { id: 'paper-strategy', relation: '共同脈絡：兩篇同載《廉頗藺相如列傳》，都呈現秦趙關係；長平之戰發生於其後。' },
        { id: 'surround-wei', relation: '歷史脈絡：兩篇皆有趙國，但一篇是齊魏趙軍事攻防，一篇是秦趙外交。' }
      ],
      sources: [
        { title: '教育部《成語典》：完璧歸趙', url: 'https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=-341&la=0&webMd=2', note: '收錄《史記》原文及典故說明。' },
        { title: '澳門教育及青年發展局教學資料', url: 'https://mirror1.dsedj.gov.mo/tplan/2019/plan/P118.pdf', note: '教材將所述史事放在前 283 至前 279 年；範圍跨本網站的分期界線。' },
        { title: '《史記》廉頗藺相如列傳', url: 'https://ctext.org/shiji/lian-po-lin-xiang-ru-lie-zhuan/zh', note: '記載完璧歸趙及其後秦趙衝突。' }
      ]
    },
    {
      id: 'paper-strategy', title: '紙上談兵', period: 'ws-late', years: '前 260 年',
      states: ['秦', '趙'], people: ['趙括', '廉頗', '白起'], themes: ['長平之戰', '用人', '軍事'],
      summary: '趙括在長平接替廉頗後，趙軍遭秦軍分割包圍，最終戰敗。',
      background: ['秦趙為上黨與周邊地區爭奪，長平一帶形成長期對峙。趙將廉頗採取堅守策略，後來趙王改派趙括。'],
      narrative: ['《史記》說趙括熟讀兵書，卻不知因應變化；趙括之母曾向趙王表達擔憂。', '趙括接任後，秦將白起以佯退、切斷糧道等方式分割趙軍。趙括突圍時陣亡，趙軍在飢困後投降。'],
      influence: ['長平之敗使趙國遭受嚴重損失，秦趙實力對比受到影響；之後秦仍與趙等國持續征戰。', '「紙上談兵」常用來提醒不能只談理論而忽略情勢與實務；真實戰敗原因還涉及補給、決策和秦軍部署，不能簡化為一人不會打仗。'],
      connections: [
        { id: 'return-jade', relation: '共同脈絡：兩篇同見《廉頗藺相如列傳》；從外交周旋接續觀察其後秦趙戰爭。' },
        { id: 'guan-bao-friendship', relation: '主題對照：對照舉薦人才與選將決策；兩件事相隔數百年，沒有直接因果。' }
      ],
      sources: [
        { title: '教育部《成語典》：紙上談兵', url: 'https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=-50&la=0&webMd=2', note: '附《史記》長平之戰原文與成語說明。' },
        { title: '《史記》廉頗藺相如列傳', url: 'https://ctext.org/shiji/lian-po-lin-xiang-ru-lie-zhuan/zh', note: '記載趙括、廉頗及長平之戰。' },
        { title: '《史記》白起王翦列傳', url: 'https://ctext.org/shiji/bai-qi-wang-jian-lie-zhuan/zh', note: '補充秦軍與長平戰局。' }
      ]
    }
  ]
};
