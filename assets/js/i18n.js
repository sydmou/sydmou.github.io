/* ---------------------------------------------------------------------------
   Client-side trilingual switch (EN / 中文 / DE) for the academic homepage.

   How it works:
   - English is the source of truth: it lives in the markup itself.
   - Every translatable element carries a `data-i18n="some.key"` attribute.
   - On first run the script snapshots each element's original innerHTML as the
     English version, then only replaces it when a dictionary entry exists for
     the active language. Switching back to EN therefore needs no dictionary.
   - The choice is stored in localStorage and mirrored to ?lang= so a language
     can be shared as a link.

   To translate something new: add data-i18n="key" in the markup, then add that
   key to the zh and de tables below. Values are HTML (already-rendered markup),
   so use <em>, <strong>, <a href='...'> rather than markdown syntax.
   --------------------------------------------------------------------------- */
(function () {
  "use strict";

  var LANGS = ["en", "zh", "de"];
  var DEFAULT_LANG = "en";
  var STORAGE_KEY = "sydmou-lang";
  var HTML_LANG = { en: "en", zh: "zh-CN", de: "de" };

  var DICT = {
    /* ------------------------------- 中文 ------------------------------- */
    zh: {
      "nav.home": "主页",
      "nav.home.home": "首页",
      "nav.home.educations": "教育经历",
      "nav.home.experience": "工作经历",
      "nav.home.news": "最新动态",
      "nav.home.publications": "论文发表",
      "nav.home.honors": "荣誉奖项",
      "nav.home.services": "学术服务",
      "nav.course": "课程",
      "nav.course.spd": "智能产品设计",
      "nav.course.ssd": "智能服务设计",
      "nav.home.projects": "项目",

      "side.desc": "研究领域：NLP、大语言模型、强化学习、AI 智能体、情感分析与 AI 模拟",
      "side.bio": "研究员，XU Exponential University of Applied Sciences GmbH",
      "side.location": "德国柏林",
      "side.teaching": "授课课程",
      "side.course.spd": "智能产品设计",
      "side.course.ssd": "智能服务设计",
      "side.course.sub": "课程材料与安排",

      "bio.p1": "我目前是德国 XU Exponential University of Applied Sciences 的访问研究员，并担任 X.Lab 负责人。我的研究聚焦应用人工智能、大语言模型（LLMs）、AI 智能体、机器人与企业级 AI 解决方案，致力于打通学术研究与产业创新。如有学术合作意向，欢迎通过 <a href='mailto:zhanghaousm@gmail.com'>zhanghaousm@gmail.com</a> 与我联系。",
      "bio.xu": "在 XU 我主要负责机器人创新、应用研究与教学：带领学生前往 Flexiv 上海总部与南京 IIMT ROBOT 参加实地培训（Flexiv 涵盖机器人抛光、控制与抓取，IIMT ROBOT 涵盖焊接与喷涂）；支持学校采购四足与人形机器人，与 Deep Robotics、Unitree、AgiBot 协同技术需求与采购；并将机器人融入 Industry 4.0、Smart Product Design 与 Smart Service Design 课程，通过实操学习活动与学生项目开展教学。我同时在搭建以 Deep Robotics 绝影 Lite3（Explorer 版）为底座的研究与教学平台，集成 NVIDIA Jetson Orin、RoboSense 三维激光雷达与麦克风阵，支撑自然语言交互、导航、计算机视觉与强化学习研究；并探索基于 API 与智能体 SDK 的开发，以及将强化学习模型部署到 AgiBot 灵稀 X2 Ultra 人形机器人上，支撑多语言交互、任务规划与具身智能研究，用于校园导览、高级自主导航与人机交互。",
      "bio.p2": "我在马来西亚理科大学（Universiti Sains Malaysia, USM）获得人工智能博士学位。此前在法国巴黎的 SUPINFO 国际信息学院取得计算机科学硕士与学士学位。",
      "bio.p3": "我的研究兴趣涵盖自然语言处理（NLP）、大语言模型（LLMs）、情感分析、信息抽取、可解释 AI 与可信 AI。研究主线包括基于方面的情感分析（ABSA）、方面–类别–观点–情感四元组抽取（ACOSQE）、思维链推理以及 AI 驱动的信息处理。我已在 SCI 期刊及 <em>Computer Science Review</em>、<em>Artificial Intelligence Review</em>、<em>EMNLP</em>、<em>ACL</em> 等国际顶级 AI 会议上发表 10 余篇论文。更多信息见我的 <a href='https://scholar.google.com/citations?user=crmoLvMAAAAJ'>Google Scholar</a>。",

      "sec.educations": "教育经历",
      "sec.experience": "工作经历",
      "sec.news": "最新动态",
      "sec.publications": "论文发表",
      "sec.honors": "荣誉奖项",
      "proj.1.link": "在线平台",
      "proj.1.tag": "AI 模拟 · 多智能体 · LLM 智能体",
      "proj.1.body": "EMOTOWN（情绪小镇）是一个基于小镇场景的多智能体模拟平台，用于研究情绪如何在由大语言模型驱动的 AI 智能体群体中传播。每个智能体都带有一套人格画像——MBTI 类型，加上 OCEAN 大五人格（开放性、尽责性、外向性、宜人性、神经质）特质向量——它决定了智能体表达情绪的强度，以及被他人情绪感染的敏感度。在「统一初始化」设置中，所有智能体从完全相同的情绪状态出发，因此后续的情绪分化可以完全归因于互动引发的传染与共情；「定向投放」则将某种情绪注入单个智能体，追踪它在整个小镇中的扩散路径。",
      "proj.1.bg": "这正是我 AI 模拟背景的延伸。我的核心研究是从文本中抽取细粒度情感——基于方面的情感分析（ABSA）、方面–类别–观点–情感四元组抽取（ACOSQE）与情感四元组预测。EMOTOWN 把同一个问题向上推进了一层：从「一段文本携带什么情绪」到「情绪如何在智能体之间流动，这又揭示了怎样的社会动态与机器情感智能」。平台融合了基于智能体的模拟、情感计算与大语言模型驱动的对话，一端连接我的情感分析研究，另一端连接 X.Lab 的具身智能体工作——真实空间里的机器人与服务智能体同样需要社会感知能力。",
      "sec.projects": "项目",
      "sec.services": "学术服务",

      "edu.1.date": "2021年4月 – 2026年5月",
      "edu.1.detail": "马来西亚理科大学 计算机科学学院 博士",
      "edu.2.date": "2013年10月 – 2015年9月",
      "edu.2.detail": "计算机科学工程 硕士，École Supérieure d'Informatique (SUPINFO)",
      "edu.3.date": "2009年9月 – 2013年6月",
      "edu.3.detail": "计算机科学工程 学士，École Supérieure d'Informatique (SUPINFO)",

      "exp.1.date": "2025年10月 – 至今",
      "exp.1.detail": "访问研究员，XU Exponential University of Applied Sciences GmbH，德国波茨坦",
      "exp.2.date": "2018年9月 – 至今",
      "exp.2.detail": "讲师，沧州师范学院，中国沧州",
      "exp.3.date": "2016年1月 – 2018年4月",
      "exp.3.detail": "iOS 工程师兼项目经理，iHealth（中国天津；法国巴黎；美国加州）",

      "news.1.date": "2026年6月",
      "news.1.body": "<strong>XU 主要职责：</strong>机器人创新、应用研究与教学——带领学生在工业机器人伙伴企业开展实地培训，推进学校四足与人形机器人采购，并将机器人融入 Industry 4.0 与 Smart Design 系列课程。",
      "news.2.date": "2026年5月",
      "news.2.body": "我完成了马来西亚理科大学计算机科学学院的博士学业。",
      "news.3.date": "2026年4月",
      "news.3.body": "我们的论文 <em>Tree-CoT-RT: An Explainable Multi-Path Tree-Guided Chain-of-Thought and Reinforcement Learning Framework for Aspect Sentiment Quad Prediction</em> 被 <em>Findings of ACL 2026</em> 接收。",
      "news.4.date": "2026年1月",
      "news.4.body": "我们的综述论文 <em>A Survey of Large Language Models for Legal Tasks: Progress, Prospects and Challenges</em> 发表于 <em>Computer Science Review</em>。",
      "news.5.date": "2025年12月",
      "news.5.body": "我们的论文 <em>SolEval: Benchmarking Large Language Models for Repository-level Solidity Smart Contract Generation</em> 被 <em>EMNLP 2025 Main Conference</em> 接收。",
      "news.6.date": "2025年10月",
      "news.6.body": "我开始在 XU Exponential University of Applied Sciences GmbH 担任访问研究员。",

      "honors.1": "<strong>2024.</strong> X.Lab 年度之星，XU &amp; X.lab。",

      "services.body": "担任多本 SCI/EI 期刊与顶级 AI 会议的审稿人，包括 <em>Discover Artificial Intelligence</em>、<em>Cluster Computing</em>、<em>The Journal of Supercomputing</em>、<em>Frontiers in Communication</em>、<em>IEEE/ACM Transactions on Audio, Speech, and Language Processing</em>，以及 <em>NeurIPS 2026</em> 和 <em>KDD 2027</em>。",

      "ui.skip": "跳到正文",
      "ui.visits": "本站总访问量",
      "ui.pageviews": "本页访问量",
      "ui.top": "返回顶部 ↑"
    },

    /* ------------------------------ Deutsch ----------------------------- */
    de: {
      "nav.home": "Startseite",
      "nav.home.home": "Startseite",
      "nav.home.educations": "Ausbildung",
      "nav.home.experience": "Berufserfahrung",
      "nav.home.news": "Aktuelles",
      "nav.home.publications": "Publikationen",
      "nav.home.honors": "Auszeichnungen",
      "nav.home.services": "Akademische Dienste",
      "nav.course": "Lehre",
      "nav.course.spd": "Smart Product Design",
      "nav.course.ssd": "Smart Service Design",
      "nav.home.projects": "Projekte",

      "side.desc": "Forschung: NLP, LLM, RL, KI-Agenten, Sentimentanalyse und KI-Simulation",
      "side.bio": "Forscher, XU Exponential University of Applied Sciences GmbH",
      "side.location": "Berlin, Deutschland",
      "side.teaching": "LEHRE",
      "side.course.spd": "Smart Product Design",
      "side.course.ssd": "Smart Service Design",
      "side.course.sub": "Kursmaterialien &amp; Zeitplan",

      "bio.p1": "Ich bin derzeit Visiting Researcher und Leiter des X.Lab an der XU Exponential University of Applied Sciences in Deutschland. Meine Arbeit konzentriert sich auf angewandte künstliche Intelligenz, Large Language Models (LLMs), KI-Agenten, Robotik und unternehmensweite KI-Lösungen – mit dem Anspruch, akademische Forschung und industrielle Innovation zu verbinden. Bei Interesse an einer akademischen Zusammenarbeit kontaktieren Sie mich gerne unter <a href='mailto:zhanghaousm@gmail.com'>zhanghaousm@gmail.com</a>.",
      "bio.xu": "An der XU verantworte ich Robotik-Innovation, angewandte Forschung und Lehre: Ich organisiere die praktische Ausbildung unserer Studierenden am Flexiv-Hauptsitz in Shanghai und bei IIMT ROBOT in Nanjing (Roboterschleifen, -steuerung und Greifen bei Flexiv, Schweißen und Lackieren bei IIMT ROBOT), unterstütze die Beschaffung von vierbeinigen und humanoiden Robotern durch die Hochschule und koordiniere technische Anforderungen und Einkauf mit Deep Robotics, Unitree und AgiBot, und ich integriere Robotik über praktische Lernaktivitäten und Studierendenprojekte in die Kurse Industry 4.0, Smart Product Design und Smart Service Design. Darüber hinaus baue ich eine Forschungs- und Lehrplattform rund um den Deep Robotics Jueying Lite3 (Explorer Edition) auf — mit NVIDIA Jetson Orin, RoboSense 3D-LiDAR und einem Mikrofonarray für natürlichsprachliche Interaktion, Navigation, Computer Vision und Reinforcement Learning — und erkunde die Entwicklung mit APIs und Agent-SDKs sowie den Einsatz von Reinforcement-Learning-Modellen auf dem humanoiden Roboter AgiBot Lingxi X2 Ultra für mehrsprachige Interaktion, Aufgabenplanung und Embodied-Intelligence-Forschung bei Campus-Touren, fortgeschrittener autonomer Navigation und Mensch-Roboter-Interaktion.",
      "bio.p2": "Meine Promotion in Künstlicher Intelligenz habe ich an der Universiti Sains Malaysia (USM) abgeschlossen. Zuvor erwarb ich meinen Master- und Bachelorabschluss in Informatik an der International University of SUPINFO in Paris.",
      "bio.p3": "Meine Forschungsinteressen umfassen Natural Language Processing (NLP), Large Language Models (LLMs), Sentimentanalyse, Informationsextraktion, erklärbare KI und vertrauenswürdige KI. Im Zentrum stehen Aspect-Based Sentiment Analysis (ABSA), Aspect-Category-Opinion-Sentiment Quadruple Extraction (ACOSQE), Chain-of-Thought-Reasoning und KI-gestützte Informationsverarbeitung. Ich habe über 10 Arbeiten in SCI-Zeitschriften und auf führenden internationalen KI-Konferenzen wie <em>Computer Science Review</em>, <em>Artificial Intelligence Review</em>, <em>EMNLP</em> und <em>ACL</em> veröffentlicht. Weitere Details finden Sie auf meinem <a href='https://scholar.google.com/citations?user=crmoLvMAAAAJ'>Google Scholar</a>.",

      "sec.educations": "Ausbildung",
      "sec.experience": "Berufserfahrung",
      "sec.news": "Aktuelles",
      "sec.publications": "Publikationen",
      "sec.honors": "Auszeichnungen",
      "proj.1.link": "Live-Plattform",
      "proj.1.tag": "KI-Simulation · Multi-Agent · LLM-Agenten",
      "proj.1.body": "EMOTOWN ist eine Multi-Agenten-Simulationsplattform in einer Kleinstadt-Umgebung, mit der untersucht wird, wie sich Emotionen innerhalb einer Population von LLM-gesteuerten Agenten ausbreiten. Jeder Agent besitzt ein Persönlichkeitsprofil — einen MBTI-Typ sowie einen Big-Five-(OCEAN-)Vektor aus Offenheit, Gewissenhaftigkeit, Extraversion, Verträglichkeit und Neurotizismus — das bestimmt, wie stark er Emotionen ausdrückt und wie empfänglich er für die Emotionen anderer ist. Im Setting der uniformen Initialisierung starten alle Agenten mit identischem emotionalem Zustand, sodass jede Abweichung allein auf interaktionsbedingte Ansteckung und Empathie zurückgeht; beim Directional Seeding wird eine Emotion gezielt bei einem einzelnen Agenten injiziert und ihre Ausbreitung durch die Stadt verfolgt.",
      "proj.1.bg": "Hier kommt mein Hintergrund in KI-Simulation ins Spiel. Meine Kernforschung extrahiert feingranulare Affekte aus Text — Aspect-Based Sentiment Analysis (ABSA), Aspect-Category-Opinion-Sentiment Quadruple Extraction (ACOSQE) und Aspect Sentiment Quad Prediction. EMOTOWN hebt dieselbe Frage eine Ebene höher: von „welche Emotion trägt ein Text?“ zu „wie wandern Emotionen zwischen Agenten, und was verrät das über soziale Dynamik und emotionale Intelligenz von Maschinen?“ Die Plattform verbindet agentenbasierte Simulation, Affective Computing und LLM-gesteuerten Dialog — und schlägt die Brücke von meiner Sentimentanalyse-Forschung zur Arbeit mit verkörperten Agenten im X.Lab, wo sozial wahrnehmungsfähige Agenten denselben physischen Raum mit Menschen teilen.",
      "sec.projects": "Projekte",

      "sec.services": "Akademische Dienste",

      "edu.1.date": "Apr. 2021 – Mai 2026",
      "edu.1.detail": "Promotion, School of Computer Science, Universiti Sains Malaysia",
      "edu.2.date": "Okt. 2013 – Sep. 2015",
      "edu.2.detail": "Master in Computer Science Engineering, École Supérieure d'Informatique (SUPINFO)",
      "edu.3.date": "Sep. 2009 – Juni 2013",
      "edu.3.detail": "Bachelor in Computer Science Engineering, École Supérieure d'Informatique (SUPINFO)",

      "exp.1.date": "Okt. 2025 – heute",
      "exp.1.detail": "Visiting Researcher, XU Exponential University of Applied Sciences GmbH, Potsdam, Deutschland",
      "exp.2.date": "Sep. 2018 – heute",
      "exp.2.detail": "Dozent, Cangzhou Normal University, Cangzhou, China",
      "exp.3.date": "Jan. 2016 – Apr. 2018",
      "exp.3.detail": "iOS-Ingenieur &amp; Projektmanager, iHealth (Tianjin, China; Paris, Frankreich; Kalifornien, USA)",

      "news.1.date": "Juni 2026",
      "news.1.body": "<strong>Meine Hauptaufgaben an der XU:</strong> Robotik-Innovation, angewandte Forschung und Lehre — Leitung der praktischen Ausbildung von Studierenden bei industriellen Robotikpartnern, Beschaffung vierbeiniger und humanoider Roboter für die Hochschule sowie Integration der Robotik in die Kurse Industry 4.0 und Smart Design.",
      "news.2.date": "Mai 2026",
      "news.2.body": "Ich habe meine Promotion an der School of Computer Science der Universiti Sains Malaysia abgeschlossen.",
      "news.3.date": "Apr. 2026",
      "news.3.body": "Unser Paper <em>Tree-CoT-RT: An Explainable Multi-Path Tree-Guided Chain-of-Thought and Reinforcement Learning Framework for Aspect Sentiment Quad Prediction</em> wurde von <em>Findings of ACL 2026</em> angenommen.",
      "news.4.date": "Jan. 2026",
      "news.4.body": "Unser Übersichtsartikel <em>A Survey of Large Language Models for Legal Tasks: Progress, Prospects and Challenges</em> wurde in <em>Computer Science Review</em> veröffentlicht.",
      "news.5.date": "Dez. 2025",
      "news.5.body": "Unser Paper <em>SolEval: Benchmarking Large Language Models for Repository-level Solidity Smart Contract Generation</em> wurde von der <em>EMNLP 2025 Main Conference</em> angenommen.",
      "news.6.date": "Okt. 2025",
      "news.6.body": "Ich habe meine Tätigkeit als Visiting Researcher an der XU Exponential University of Applied Sciences GmbH aufgenommen.",

      "honors.1": "<strong>2024.</strong> X.Lab Year Star, XU &amp; X.lab.",

      "services.body": "Tätig als Gutachter für mehrere SCI/EI-Zeitschriften und führende KI-Konferenzen, darunter <em>Discover Artificial Intelligence</em>, <em>Cluster Computing</em>, <em>The Journal of Supercomputing</em>, <em>Frontiers in Communication</em>, <em>IEEE/ACM Transactions on Audio, Speech, and Language Processing</em> sowie <em>NeurIPS 2026</em> und <em>KDD 2027</em>.",

      "ui.skip": "Zum Inhalt springen",
      "ui.visits": "Seitenaufrufe gesamt",
      "ui.pageviews": "Aufrufe dieser Seite",
      "ui.top": "Nach oben ↑"
    }
  };

  /* ---------------------------- runtime below ---------------------------- */

  var originals = null;

  function snapshot() {
    if (originals) return;
    originals = [];
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      originals.push({
        el: nodes[i],
        key: nodes[i].getAttribute("data-i18n"),
        html: nodes[i].innerHTML
      });
    }
  }

  function translate(lang) {
    snapshot();
    var table = DICT[lang];
    for (var i = 0; i < originals.length; i++) {
      var rec = originals[i];
      var replacement = table && Object.prototype.hasOwnProperty.call(table, rec.key)
        ? table[rec.key]
        : null;
      var html = replacement === null ? rec.html : replacement;
      if (rec.el.innerHTML !== html) rec.el.innerHTML = html;
    }
    document.documentElement.setAttribute("lang", HTML_LANG[lang] || "en");

    var buttons = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < buttons.length; j++) {
      var active = buttons[j].getAttribute("data-lang") === lang;
      buttons[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
  }

  function readLang() {
    var fromQuery = null;
    try {
      fromQuery = new URLSearchParams(window.location.search).get("lang");
    } catch (e) { /* older browsers, ignore */ }
    if (fromQuery && LANGS.indexOf(fromQuery) !== -1) return fromQuery;
    var stored = null;
    try { stored = window.localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    return DEFAULT_LANG;
  }

  function remember(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    try {
      var url = new URL(window.location.href);
      if (lang === DEFAULT_LANG) url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) { /* ignore */ }
  }

  function init() {
    translate(readLang());
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var lang = this.getAttribute("data-lang");
        if (LANGS.indexOf(lang) === -1) return;
        translate(lang);
        remember(lang);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
