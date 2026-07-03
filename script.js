const spiritTypes = {
  moyu: {
    name: "摸鱼灵根｜效率偷懒仙",
    persona: "能交给 AI 的，绝不自己硬扛。",
    profile:
      "你是 AI 工具的天然用户，最擅长发现“这事是不是可以不用我干”。你的开发者直觉不是炫技，而是把重复劳动变短、变轻、变自动。",
    direction: "办公自动化、AI 工作流、个人效率工具、批量内容处理。",
    share:
      "我的 AI 灵根是「摸鱼灵根」。不是我懒，是我尊重自动化。能让 AI 干的活，为什么要亲自动手？",
    color: "#6cf2d2",
  },
  zaowu: {
    name: "造物灵根｜灵感手作人",
    persona: "脑子里刚冒出点子，手上已经开始做 Demo。",
    profile:
      "你适合把 AI 能力变成真实可用的小工具、小应用、小作品。你不满足于“听起来很强”，更想让别人马上点开、马上用上。",
    direction: "AI 应用开发、低代码产品、创意工具、互动 H5。",
    share:
      "我的 AI 灵根是「造物灵根」。想法刚出现，Demo 已经在路上了。AI 对我来说不是玩具，是创作加速器。",
    color: "#ffd36d",
  },
  chaijie: {
    name: "拆解灵根｜流程军师",
    persona: "别人看到一团乱麻，你看到步骤 1、2、3、4。",
    profile:
      "你很适合设计 AI 怎么一步步完成复杂任务。你能把模糊目标拆成清楚流程，让 AI 不只是聊天，而是真的按计划办事。",
    direction: "Agent、工作流编排、业务流程自动化、任务路由设计。",
    share:
      "我的 AI 灵根是「拆解灵根」。再复杂的任务，到我手里都能拆成 1、2、3、4。AI 负责执行，我负责指挥。",
    color: "#82b4ff",
  },
  jianzhen: {
    name: "鉴真灵根｜AI 较真师",
    persona: "AI 说得再像真的，你也会问一句：“证据呢？”",
    profile:
      "你擅长发现 AI 的幻觉、漏洞和不稳定输出。你是团队里的可靠性守门人，负责让答案不只是顺耳，还要站得住。",
    direction: "AI 评测、数据标注、质量控制、可信 AI。",
    share:
      "我的 AI 灵根是「鉴真灵根」。AI 说得很自信？没关系，我会查证。我的人生信条：先别急着信。",
    color: "#f6a6ff",
  },
  liancode: {
    name: "炼码灵根｜代码炼丹师",
    persona: "报错不是坏消息，是副本入口。",
    profile:
      "你对代码、模型、接口、报错都有天然耐心。你愿意钻进去，把 AI 的想法接到真实系统里，让功能真的跑起来。",
    direction: "AI 工程开发、模型调用、插件开发、技术集成。",
    share:
      "我的 AI 灵根是「炼码灵根」。报错不可怕，可怕的是没有报错。只要还能跑，我就还能炼。",
    color: "#ff8b8b",
  },
  zhaohuan: {
    name: "召唤灵根｜提示词法师",
    persona: "同一个 AI，别人问出废话，你问出答案。",
    profile:
      "你擅长把模糊需求变成 AI 听得懂、做得好的指令。你知道怎么给背景、定角色、控语气，也知道怎么把结果召唤得更稳定。",
    direction: "Prompt 设计、AI 内容生产、知识库问答、写作工作流。",
    share:
      "我的 AI 灵根是「召唤灵根」。同一个 AI，别人召唤废话，我召唤生产力。会问，真的很重要。",
    color: "#c9ff76",
  },
  gongqing: {
    name: "共情灵根｜人机翻译官",
    persona: "你不只关心 AI 能不能做，还关心人愿不愿意用。",
    profile:
      "你适合站在人和 AI 之间，把能力翻译成好懂、好用、舒服的体验。你能让复杂技术不吓人，让用户愿意继续探索。",
    direction: "AI 产品设计、用户体验、运营策划、教育培训。",
    share:
      "我的 AI 灵根是「共情灵根」。我负责让 AI 不只是强，还要好懂、好用、有点人味。",
    color: "#ffb1d9",
  },
  kaihuang: {
    name: "开荒灵根｜新工具猎人",
    persona: "新 AI 工具刚上线，你已经注册完开始试了。",
    profile:
      "你对新模型、新插件、新玩法很敏锐，是团队里的 AI 雷达。你能快速判断什么值得试、什么只是热闹。",
    direction: "AI 工具测评、创新应用探索、技术选型、内容分享。",
    share:
      "我的 AI 灵根是「开荒灵根」。新工具刚上线，我已经测完优缺点了。别问，问就是又注册了一个。",
    color: "#7de7ff",
  },
};

const questions = [
  {
    title: "老板突然说：“我们能不能用AI提效？”你的第一反应是？",
    options: [
      { text: "我先看看最近有什么AI工具能直接用。", type: "kaihuang" },
      { text: "我梳理下业务流程，看看从哪一步下手。", type: "chaijie" },
      { text: "我能不能先做个能用的Demo？", type: "zaowu" },
      { text: "这事可以让 AI 帮我分担多少活？", type: "moyu" },
    ],
  },
  {
    title: "AI 给了你一段看起来很有道理的回答，你会？",
    options: [
      { text: "先问它：依据是什么？有没有来源？", type: "jianzhen" },
      { text: "改一下提问方式，让它说得更像人话。", type: "zhaohuan" },
      { text: "想想普通用户看到会不会一脸懵。", type: "gongqing" },
      { text: "直接拿去试试，跑不起来再说。", type: "liancode" },
    ],
  },
  {
    title: "你最喜欢哪种 AI 使用场景？",
    options: [
      { text: "一句话生成周报、总结、邮件，人生轻松一点。", type: "moyu" },
      { text: "做一个小网页、小工具、小机器人，马上能展示。", type: "zaowu" },
      { text: "让 AI 自动查资料、整理、输出，最好全程不用我管。", type: "chaijie" },
      { text: "测 5 个工具，最后写一篇“谁最值得用”。", type: "kaihuang" },
    ],
  },
  {
    title: "朋友说“AI 不好用”，你最可能怎么回应？",
    options: [
      { text: "你这个问法不行，我帮你改一下。", type: "zhaohuan" },
      { text: "你想让它帮你解决什么问题？先说人话需求。", type: "gongqing" },
      { text: "是不是模型选错了？我换个工具试试。", type: "kaihuang" },
      { text: "它哪里不好用？我们列几个 case 测一下。", type: "jianzhen" },
    ],
  },
  {
    title: "当你参加一个 AI 活动，你最想负责哪块？",
    options: [
      { text: "做玩法和页面，让用户愿意点、愿意分享。", type: "zaowu" },
      { text: "设计测试题和结果逻辑，保证测出来不离谱。", type: "jianzhen" },
      { text: "接接口、调代码、把功能真的跑起来。", type: "liancode" },
      { text: "写提示词，让 AI 输出更稳定、更有味道。", type: "zhaohuan" },
    ],
  },
  {
    title: "如果你有一下午时间研究 AI，你更可能做什么？",
    options: [
      { text: "做一个能分享给朋友的小 Demo。", type: "zaowu" },
      { text: "阅读技术博客或论文，复现一个方法。", type: "liancode" },
      { text: "搭一个自动处理文件、网页或数据的工作流。", type: "moyu" },
      { text: "设计一批测试 case，对比不同模型表现。", type: "jianzhen" },
    ],
  },
  {
    title: "AI 写出来的东西“不太像人写的”，你会？",
    options: [
      { text: "加语气、加场景、加例子，让它更自然。", type: "zhaohuan" },
      { text: "从用户视角改一遍，让别人看得懂。", type: "gongqing" },
      { text: "看看是不是提示词太抽象，重新组织输入。", type: "chaijie" },
      { text: "做几个版本对比，选最稳定的那个。", type: "jianzhen" },
    ],
  },
  {
    title: "如果送你一个 AI 超能力，你最想要？",
    options: [
      { text: "一眼看出哪个 AI 工具值得用。", type: "kaihuang" },
      { text: "随手把想法变成产品原型。", type: "zaowu" },
      { text: "让 AI 自动替我处理重复工作。", type: "moyu" },
      { text: "看懂报错、接好接口、把系统跑通。", type: "liancode" },
    ],
  },
];

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const copyButton = document.querySelector("#copy-button");
const shareImageButton = document.querySelector("#share-image-button");
const closeShareButton = document.querySelector("#close-share-button");
const questionCount = document.querySelector("#question-count");
const questionKicker = document.querySelector("#question-kicker");
const questionTitle = document.querySelector("#question-title");
const optionList = document.querySelector("#option-list");
const progressFill = document.querySelector("#progress-fill");
const resultTitle = document.querySelector("#result-title");
const resultPersona = document.querySelector("#result-persona");
const resultDirection = document.querySelector("#result-direction");
const resultOrb = document.querySelector("#result-orb");
const toast = document.querySelector("#toast");
const shareModal = document.querySelector("#share-modal");
const sharePosterTitle = document.querySelector("#share-poster-title");
const sharePosterPersona = document.querySelector("#share-poster-persona");
const sharePosterDirection = document.querySelector("#share-poster-direction");
const manualCopyText = document.querySelector("#manual-copy-text");
const posterQr = document.querySelector("#poster-qr");

let currentQuestion = 0;
let answers = [];
let lockNext = false;
let currentShareText = "";

const showScreen = (screenName) => {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.classList.toggle("is-active", name === screenName);
  });
};

const renderQuestion = () => {
  const question = questions[currentQuestion];
  const selectedType = answers[currentQuestion];

  questionCount.textContent = `${currentQuestion + 1} / ${questions.length}`;
  questionKicker.textContent = `第 ${currentQuestion + 1} 题`;
  questionTitle.textContent = question.title;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  backButton.disabled = currentQuestion === 0;
  optionList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.classList.toggle("is-selected", selectedType === option.type);
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option.text}</span>
    `;
    button.addEventListener("click", () => chooseOption(option.type, button));
    optionList.appendChild(button);
  });
};

const chooseOption = (type, button) => {
  if (lockNext) {
    return;
  }

  lockNext = true;
  answers[currentQuestion] = type;
  document.querySelectorAll(".option-button").forEach((item) => {
    item.classList.toggle("is-selected", item === button);
  });

  window.setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
      lockNext = false;
      return;
    }

    renderResult();
    showScreen("result");
    lockNext = false;
  }, 260);
};

const pickResultType = () => {
  const scores = answers.reduce((map, type) => {
    map[type] = (map[type] || 0) + 1;
    return map;
  }, {});

  const topScore = Math.max(...Object.values(scores));
  const tiedTypes = Object.keys(scores).filter((type) => scores[type] === topScore);

  if (tiedTypes.length === 1) {
    return tiedTypes[0];
  }

  const lastAnswer = answers[7];
  if (tiedTypes.includes(lastAnswer)) {
    return lastAnswer;
  }

  const activityAnswer = answers[4];
  if (tiedTypes.includes(activityAnswer)) {
    return activityAnswer;
  }

  return tiedTypes[0];
};

const renderResult = () => {
  const type = spiritTypes[pickResultType()];
  const [mainName] = type.name.split("｜");
  resultTitle.innerHTML = `
    <span class="result-kicker-line">恭喜！你测出了</span>
    <span class="result-main">${mainName}</span>
  `;
  currentShareText = type.share;
  const reportBody = type.persona;
  resultPersona.textContent = reportBody;
  resultDirection.textContent = type.direction;
  sharePosterTitle.innerHTML = `
    <span class="result-kicker-line">恭喜！你测出了</span>
    <span class="result-main">${mainName}</span>
  `;
  sharePosterPersona.textContent = reportBody;
  sharePosterDirection.textContent = type.direction;
  posterQr.src = makeQrUrl();
  resultOrb.style.setProperty("--mint", type.color);
  resultOrb.style.boxShadow = `0 0 34px ${type.color}55`;
};

const getShareBody = (share) => {
  const firstStop = share.indexOf("。");
  return firstStop >= 0 ? share.slice(firstStop + 1) : share;
};

const restart = () => {
  currentQuestion = 0;
  answers = [];
  closeSharePoster();
  renderQuestion();
  showScreen("start");
};

const copyShareText = async () => {
  const text = currentShareText;
  const copied = await copyText(text);

  if (copied) {
    showToast("已复制分享文案");
  } else {
    manualCopyText.textContent = text;
    openSharePoster(true);
    selectShareText();
    showToast("已选中文案，可长按复制");
  }
};

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    try {
      await Promise.race([
        navigator.clipboard.writeText(text),
        new Promise((_, reject) => {
          window.setTimeout(() => reject(new Error("Clipboard timeout")), 700);
        }),
      ]);
      return true;
    } catch (error) {
      // Fall through to the textarea fallback for browsers that gate clipboard access.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.opacity = "0.01";
  textarea.style.fontSize = "16px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);
  const copied = document.execCommand("copy");
  textarea.remove();

  return copied;
};

const selectShareText = () => {
  const target = manualCopyText && !manualCopyText.hidden ? manualCopyText : sharePosterPersona;

  if (!target) {
    return;
  }

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(target);
  selection.removeAllRanges();
  selection.addRange(range);
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1600);
};

const makeQrUrl = () => {
  const url = location.href.split("#")[0] || "https://www.xfyun.cn/";
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(url)}`;
};

const openSharePoster = (showCopyText = false) => {
  if (manualCopyText) {
    manualCopyText.hidden = showCopyText !== true;
  }

  shareModal.classList.add("is-visible");
  shareModal.setAttribute("aria-hidden", "false");
};

const closeSharePoster = () => {
  if (manualCopyText) {
    manualCopyText.hidden = true;
  }

  shareModal.classList.remove("is-visible");
  shareModal.setAttribute("aria-hidden", "true");
};

startButton.addEventListener("click", () => {
  currentQuestion = 0;
  answers = [];
  renderQuestion();
  showScreen("quiz");
});

backButton.addEventListener("click", () => {
  if (currentQuestion === 0 || lockNext) {
    return;
  }
  currentQuestion -= 1;
  renderQuestion();
});

restartButton.addEventListener("click", restart);
copyButton.addEventListener("click", copyShareText);
shareImageButton.addEventListener("click", () => openSharePoster());
closeShareButton.addEventListener("click", closeSharePoster);
shareModal.addEventListener("click", (event) => {
  if (event.target === shareModal) {
    closeSharePoster();
  }
});
