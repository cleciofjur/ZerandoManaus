// Banco de dados dos pontos turísticos de Manaus (cada local tem 5 perguntas de quiz)
const manausLocations = {
  1: {
    icon: "🎭",
    name: "Teatro Amazonas",
    category: "História & Arquitetura",
    description:
      "Inaugurado em 1896 durante o Ciclo da Borracha, é o principal símbolo cultural do Amazonas e famoso por sua cúpula com as cores da bandeira do Brasil.",
    challenge:
      "Identifique as peças da cúpula do Teatro e responda qual estilo arquitetônico predominante marca sua construção!",
    quiz: [
      {
        q: "Em que ano foi inaugurado o Teatro Amazonas?",
        options: ["1896", "1869", "1910", "1922"],
        answer: 0,
        explain:
          "O Teatro foi inaugurado em 1896, no auge do Ciclo da Borracha.",
      },
      {
        q: "Qual ciclo econômico financiou a construção do Teatro Amazonas?",
        options: [
          "Ciclo da Borracha",
          "Ciclo do Ouro",
          "Ciclo do Café",
          "Ciclo da Cana-de-açúcar",
        ],
        answer: 0,
        explain:
          "A riqueza da borracha transformou Manaus e bancou construções luxuosas como o Teatro.",
      },
      {
        q: "Qual é o estilo arquitetônico mais associado ao Teatro Amazonas?",
        options: [
          "Neoclássico, com influências renascentistas",
          "Gótico",
          "Modernista",
          "Barroco colonial português",
        ],
        answer: 0,
        explain:
          "Sua arquitetura é eclética, com predominância do neoclassicismo e traços da Renascença.",
      },
      {
        q: "As peças de cerâmica esmaltada que cobrem a cúpula vieram da região da Alsácia. De qual país?",
        options: ["França", "Itália", "Portugal", "Inglaterra"],
        answer: 0,
        explain:
          "A Alsácia fica na França. As peças formam as cores verde, amarelo e azul da cúpula.",
      },
      {
        q: "Qual festival é realizado todos os anos no Teatro Amazonas?",
        options: [
          "Festival Amazonas de Ópera",
          "Rock in Rio",
          "Festival de Parintins",
          "Lollapalooza",
        ],
        answer: 0,
        explain:
          "O Festival Amazonas de Ópera acontece no Teatro e atrai artistas de vários países.",
      },
    ],
  },
  2: {
    icon: "🐟",
    name: "Mercado Municipal Adolpho Lisboa",
    category: "Gastronomia & Tradição",
    description:
      "Inspirado no antigo mercado Les Halles de Paris e às margens do Rio Negro, é o centro de sabores, ervas medicinais e artesanato de Manaus.",
    challenge:
      "Encontre os ingredientes tradicionais para preparar um autêntico Tacacá e um peixe assado na brasa!",
    quiz: [
      {
        q: "Qual mercado de Paris inspirou o Mercado Adolpho Lisboa?",
        options: [
          "Les Halles",
          "Marché Bastille",
          "La Boqueria",
          "Galeries Lafayette",
        ],
        answer: 0,
        explain: "O Mercado foi inspirado no antigo Les Halles, de Paris.",
      },
      {
        q: "Às margens de qual rio fica o Mercado Municipal?",
        options: ["Rio Negro", "Rio Solimões", "Rio Madeira", "Rio Tapajós"],
        answer: 0,
        explain: "O Mercado fica na orla do Rio Negro, no centro de Manaus.",
      },
      {
        q: "Em que ano o Mercado Adolpho Lisboa foi inaugurado?",
        options: ["1883", "1783", "1925", "1967"],
        answer: 0,
        explain: "Foi inaugurado em 1883, também no período áureo da borracha.",
      },
      {
        q: 'Qual peixe amazônico é famoso na versão assada na brasa (a "costela")?',
        options: ["Tambaqui", "Salmão", "Bacalhau", "Atum"],
        answer: 0,
        explain:
          "O tambaqui assado na brasa é um clássico da culinária amazonense.",
      },
      {
        q: "Qual erva, que deixa a boca levemente dormente, é típica do tacacá?",
        options: ["Jambu", "Hortelã", "Manjericão", "Alecrim"],
        answer: 0,
        explain:
          "O jambu é o ingrediente que causa aquela leve dormência na boca.",
      },
    ],
  },
  3: {
    icon: "🏖️",
    name: "Praia da Ponta Negra",
    category: "Lazer & Natureza",
    description:
      "Complexo turístico às margens do Rio Negro, famoso pelo seu calçadão de pedras portuguesas, pôr do sol inesquecível e eventos culturais.",
    challenge:
      "Caminhe pelo calçadão ao pôr do sol e registre a foto perfeita do horizonte sobre as águas escuras do Rio Negro.",
    quiz: [
      {
        q: "Às margens de qual rio fica a Praia da Ponta Negra?",
        options: ["Rio Negro", "Rio Solimões", "Rio Purus", "Rio Branco"],
        answer: 0,
        explain: "A Ponta Negra fica na margem esquerda do Rio Negro.",
      },
      {
        q: "A Ponta Negra é uma praia de que tipo?",
        options: ["Fluvial (de rio)", "Marítima", "De lagoa", "De manguezal"],
        answer: 0,
        explain: "É uma praia fluvial: a areia e a água são do próprio rio.",
      },
      {
        q: "Quando a faixa de areia da praia fica maior?",
        options: [
          "Na vazante, durante a seca",
          "Na cheia dos rios",
          "Só nas marés de lua cheia",
          "O tamanho é sempre o mesmo",
        ],
        answer: 0,
        explain:
          "Na seca o nível do Rio Negro baixa e a areia aparece bastante.",
      },
      {
        q: "Que tipo de pedra reveste o calçadão da Ponta Negra?",
        options: [
          "Pedras portuguesas",
          "Granito polido",
          "Basalto bruto",
          "Concreto liso",
        ],
        answer: 0,
        explain:
          "O calçadão é feito de pedras portuguesas, com desenhos em preto e branco.",
      },
      {
        q: "Em qual zona de Manaus fica a Ponta Negra?",
        options: ["Zona Oeste", "Zona Leste", "Zona Sul", "Zona Norte"],
        answer: 0,
        explain: "O bairro Ponta Negra fica na Zona Oeste da cidade.",
      },
    ],
  },
  4: {
    icon: "🌊",
    name: "Encontro das Águas",
    category: "Fenômeno Natural",
    description:
      "Fenômeno onde as águas escuras do Rio Negro e as águas barrentas do Rio Solimões correm lado a lado por quilômetros sem se misturar.",
    challenge:
      "Analise a temperatura e a densidade das águas para explicar o motivo de elas não se misturarem imediatamente.",
    quiz: [
      {
        q: "Quais rios formam o Encontro das Águas?",
        options: [
          "Negro e Solimões",
          "Madeira e Purus",
          "Tapajós e Xingu",
          "Juruá e Javari",
        ],
        answer: 0,
        explain:
          "As águas escuras do Rio Negro encontram as águas barrentas do Solimões.",
      },
      {
        q: "Qual é o nome do rio formado depois do encontro?",
        options: ["Rio Amazonas", "Rio Madeira", "Rio Branco", "Rio Tocantins"],
        answer: 0,
        explain:
          "Depois do encontro, os dois rios seguem juntos como Rio Amazonas.",
      },
      {
        q: "Por que o Rio Solimões tem águas barrentas?",
        options: [
          "Carrega muito sedimento vindo dos Andes",
          "Recebe o esgoto de Manaus",
          "Tem água salgada",
          "É um rio parado e raso",
        ],
        answer: 0,
        explain:
          "O Solimões nasce nos Andes e traz muitos sedimentos, por isso a cor de barro.",
      },
      {
        q: "Por que as águas não se misturam imediatamente?",
        options: [
          "Diferenças de temperatura, densidade e velocidade",
          "Há uma parede de pedra submersa",
          "Um rio é salgado e o outro é doce",
          "O vento separa as águas",
        ],
        answer: 0,
        explain:
          "As duas águas têm temperatura, densidade e velocidade diferentes e demoram a se misturar.",
      },
      {
        q: "Qual dos rios tem as águas mais quentes, por volta de 28 °C?",
        options: [
          "Rio Negro",
          "Rio Solimões",
          "Os dois têm a mesma temperatura",
          "Nenhum dos dois",
        ],
        answer: 0,
        explain:
          "O Rio Negro é mais quente e mais lento. O Solimões é mais frio (cerca de 22 °C) e mais rápido.",
      },
    ],
  },
  5: {
    icon: "🦋",
    name: "MUSA - Museu da Amazônia",
    category: "Ecoturismo & Ciência",
    description:
      "Localizado na Reserva Florestal Adolpho Ducke, possui uma torre de observação de 42 metros de altura acima da copa das árvores.",
    challenge:
      "Suba os 242 degraus da torre do MUSA para avistar a imensidão da floresta amazônica de cima!",
    quiz: [
      {
        q: "Em qual reserva fica o MUSA?",
        options: [
          "Reserva Florestal Adolpho Ducke",
          "Parque Nacional do Jaú",
          "Reserva Mamirauá",
          "Parque do Mindu",
        ],
        answer: 0,
        explain: "O MUSA fica dentro da Reserva Florestal Adolpho Ducke.",
      },
      {
        q: "Qual é a altura aproximada da torre de observação do MUSA?",
        options: ["42 metros", "12 metros", "100 metros", "250 metros"],
        answer: 0,
        explain:
          "A torre tem 42 metros e permite ver a floresta acima da copa das árvores.",
      },
      {
        q: "Quantos degraus tem a torre do MUSA?",
        options: ["242", "42", "120", "500"],
        answer: 0,
        explain: "São 242 degraus até o topo.",
      },
      {
        q: "Adolpho Ducke, que dá nome à reserva, foi um...",
        options: [
          "Naturalista e botânico que estudou a Amazônia",
          "Governador do Amazonas",
          "Engenheiro de pontes",
          "Cantor de ópera",
        ],
        answer: 0,
        explain:
          "Ducke foi um naturalista e botânico que dedicou a vida a estudar a Amazônia.",
      },
      {
        q: "Que tipo de floresta predomina na Reserva Ducke?",
        options: [
          "Floresta de terra firme",
          "Manguezal",
          "Floresta de araucárias",
          "Mata de cocais",
        ],
        answer: 0,
        explain:
          "A Reserva Ducke é coberta por floresta amazônica de terra firme.",
      },
    ],
  },
  6: {
    icon: "🌉",
    name: "Ponte Rio Negro",
    category: "Engenharia & Cartão Postal",
    description:
      "Com mais de 3,5 km de extensão, conecta Manaus ao município de Iranduba, sendo uma das maiores pontes estaiadas do Brasil.",
    challenge:
      "Atravesse a ponte ao anoitecer para apreciar a iluminação especial e a vista panorâmica do Rio Negro.",
    quiz: [
      {
        q: "A Ponte Rio Negro liga Manaus a qual município?",
        options: ["Iranduba", "Parintins", "Itacoatiara", "Manaquiri"],
        answer: 0,
        explain: "A ponte liga Manaus a Iranduba, do outro lado do Rio Negro.",
      },
      {
        q: "Qual é o tipo de estrutura da Ponte Rio Negro?",
        options: ["Estaiada", "Pênsil", "De arco", "Levadiça"],
        answer: 0,
        explain:
          "É uma ponte estaiada, sustentada por cabos de aço presos aos mastros.",
      },
      {
        q: "Em que ano a ponte foi inaugurada?",
        options: ["2011", "1999", "2005", "2019"],
        answer: 0,
        explain: "A ponte foi inaugurada em 2011.",
      },
      {
        q: "Qual é o nome oficial da Ponte Rio Negro?",
        options: [
          "Ponte Jornalista Phelippe Daou",
          "Ponte da Borracha",
          "Ponte Cidade de Manaus",
          "Ponte Rio Solimões",
        ],
        answer: 0,
        explain: "O nome oficial é Ponte Jornalista Phelippe Daou.",
      },
      {
        q: "Qual é a extensão aproximada da ponte?",
        options: [
          "Cerca de 3,6 km",
          "Cerca de 500 m",
          "Cerca de 800 m",
          "Cerca de 12 km",
        ],
        answer: 0,
        explain:
          "A ponte tem cerca de 3,6 km, uma das maiores estaiadas do Brasil.",
      },
    ],
  },
};

const TOTAL_LEVELS = Object.keys(manausLocations).length;
const XP_PER_LEVEL = 50;
const PASS_PERCENT = 70; // % mínima de acertos para concluir a fase e liberar a próxima
const STORAGE_KEY = "zerando-manaus-save";

// Estado do jogador
const gameState = {
  currentLevel: 1,
  completedLevels: 0,
  completedList: [], // fases já concluídas (evita ganhar XP repetido na mesma fase)
  bestScores: {}, // melhor resultado de cada fase, ex.: { 1: 4, 2: 5 }
  xp: 0,
  level: 1,
};

// Estado do quiz em andamento
const quizState = {
  levelNumber: 1,
  questions: [],
  index: 0,
  correct: 0,
  answered: false,
};

/* ============ SALVAR E CARREGAR PROGRESSO ============ */
function loadGame() {
  gameState.completedList = [];
  gameState.bestScores = {};
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.completedList)) {
      gameState.completedList = [...new Set(saved.completedList.filter(
        (id) => Number.isInteger(id) && Boolean(manausLocations[id])
      ))];
    }
    if (saved && saved.bestScores && typeof saved.bestScores === "object") {
      for (const [id, score] of Object.entries(saved.bestScores)) {
        if (manausLocations[id] && Number.isInteger(score) && score >= 0 &&
            score <= manausLocations[id].quiz.length) gameState.bestScores[id] = score;
      }
    }
  } catch (e) { /* armazenamento indisponível: começa do zero */ }
  recalcState();
}

function saveGame() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completedList: gameState.completedList,
        bestScores: gameState.bestScores,
      }),
    );
  } catch (e) {
    /* ignora */
  }
}

function recalcState() {
  gameState.completedLevels = gameState.completedList.length;
  gameState.xp = gameState.completedLevels * XP_PER_LEVEL;
  gameState.level = Math.floor(gameState.xp / 100) + 1;
}

/* ============ LIBERAÇÃO DE FASES ============ */
// A fase 1 sempre está liberada. As demais só abrem depois de passar na fase anterior.
function isUnlocked(levelNumber) {
  return (
    levelNumber === 1 ||
    gameState.completedList.includes(levelNumber - 1) ||
    gameState.completedList.includes(levelNumber)
  );
}

function minCorrect(total) {
  return Math.ceil((total * PASS_PERCENT) / 100); // 5 perguntas => 4 acertos
}

/* ============ NAVEGAÇÃO ============ */
function navigateTo(screenId) {
  const target = document.getElementById(screenId);
  if (target) {
    document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
    target.classList.add("active");
    return;
  }
  const pages = {
    "screen-menu": "index.html", "screen-how-to-play": "como-jogar.html",
    "screen-map": "mapa.html", "screen-profile": "perfil.html",
    "screen-level": `fase.html?fase=${gameState.currentLevel}`
  };
  if (pages[screenId]) window.location.href = `./${pages[screenId]}`;
}

/* ============ FASE ============ */
function openLevel(levelNumber) {
  if (!Number.isInteger(levelNumber) || !manausLocations[levelNumber]) return;
  if (!isUnlocked(levelNumber)) {
    const prev = manausLocations[levelNumber - 1];
    showToast(
      `🔒 Fase bloqueada!<br>Acerte ${PASS_PERCENT}% do quiz de<br>${prev ? prev.name : "fase anterior"}`,
    );
    const node = document.querySelectorAll(".node-btn")[levelNumber - 1];
    if (node) {
      node.classList.remove("shake");
      void node.offsetWidth;
      node.classList.add("shake");
      setTimeout(() => node.classList.remove("shake"), 450);
    }
    return;
  }

  gameState.currentLevel = levelNumber;
  if (document.getElementById("screen-level") &&
      Number(new URLSearchParams(window.location.search).get("fase") || 1) !== levelNumber) {
    window.location.href = `./fase.html?fase=${levelNumber}`;
    return;
  }
  navigateTo("screen-level");
  renderLevel();
}

function renderLevel() {
  if (!document.getElementById("screen-level")) return;
  const location = manausLocations[gameState.currentLevel];
  document.getElementById("level-title").innerText = `Fase ${gameState.currentLevel}`;
  document.getElementById("level-emoji").innerText = location.icon;
  document.getElementById("location-category").innerText = location.category;
  document.getElementById("location-name").innerText = location.name;
  document.getElementById("location-description").innerText = location.description;
  document.getElementById("location-challenge").innerText = location.challenge;
  updateQuizButton();
}

function updateQuizButton() {
  if (!document.getElementById("screen-level")) return;
  const level = gameState.currentLevel;
  const loc = manausLocations[level];
  const total = loc.quiz.length;
  const btn = document.getElementById("btn-quiz-start");
  const hint = document.getElementById("quiz-hint");
  const done = gameState.completedList.includes(level);
  const best = gameState.bestScores[level];

  btn.innerText = done
    ? "🔁 Refazer Quiz"
    : `🎯 Fazer Quiz (+${XP_PER_LEVEL} XP)`;
  btn.classList.toggle("is-done", done);

  let text = `Responda ${total} perguntas e acerte pelo menos ${minCorrect(total)} para concluir.`;
  if (typeof best === "number") text += ` Melhor resultado: ${best}/${total}.`;
  if (done && typeof best === "number") text = `⭐ Fase concluída! Melhor resultado: ${best}/${total}.`;
  hint.innerText = text;
}

/* ============ QUIZ ============ */
function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  if (!document.getElementById("screen-quiz") || !isUnlocked(gameState.currentLevel)) return;
  const level = gameState.currentLevel;
  const loc = manausLocations[level];

  quizState.levelNumber = level;
  quizState.index = 0;
  quizState.correct = 0;
  quizState.answered = false;
  // Embaralha a ordem das perguntas e das alternativas a cada tentativa
  quizState.questions = shuffle(loc.quiz).map((item) => ({
    text: item.q,
    explain: item.explain,
    options: shuffle(
      item.options.map((label, i) => ({ label, isCorrect: i === item.answer })),
    ),
  }));

  document.getElementById("quiz-title").innerText = `Quiz • Fase ${level}`;
  document.getElementById("quiz-question-view").classList.remove("is-hidden");
  document.getElementById("quiz-result-view").classList.add("is-hidden");
  renderQuestion();
  navigateTo("screen-quiz");
}

function renderQuestion() {
  const total = quizState.questions.length;
  const current = quizState.questions[quizState.index];
  quizState.answered = false;

  document.getElementById("quiz-counter").innerText =
    `Pergunta ${quizState.index + 1} / ${total}`;
  document.getElementById("quiz-score").innerText = `✅ ${quizState.correct}`;
  document.getElementById("quiz-progress-fill").style.width =
    `${(quizState.index / total) * 100}%`;
  document.getElementById("quiz-question").innerText = current.text;

  const box = document.getElementById("quiz-options");
  box.innerHTML = "";
  current.options.forEach((opt, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "quiz-option";
    b.textContent = opt.label;
    b.onclick = () => answerQuestion(i);
    box.appendChild(b);
  });

  const fb = document.getElementById("quiz-feedback");
  fb.className = "quiz-feedback is-hidden";
  fb.textContent = "";
  document.getElementById("btn-next").classList.add("is-hidden");
  document.querySelector("#screen-quiz .content").scrollTop = 0;
}

function answerQuestion(optionIndex) {
  const currentQuestion = quizState.questions[quizState.index];
  if (quizState.answered || !currentQuestion || !currentQuestion.options[optionIndex]) return;
  quizState.answered = true;

  const total = quizState.questions.length;
  const current = quizState.questions[quizState.index];
  const chosen = current.options[optionIndex];
  const buttons = document.querySelectorAll("#quiz-options .quiz-option");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (current.options[i].isCorrect) b.classList.add("correct");
    else if (i === optionIndex) b.classList.add("wrong");
    else b.classList.add("dim");
  });

  if (chosen.isCorrect) quizState.correct++;
  document.getElementById("quiz-score").innerText = `✅ ${quizState.correct}`;

  const fb = document.getElementById("quiz-feedback");
  fb.className = `quiz-feedback ${chosen.isCorrect ? "ok" : "bad"}`;
  fb.textContent = `${chosen.isCorrect ? "🎉 Acertou!" : "❌ Não foi dessa vez."} ${current.explain}`;

  const next = document.getElementById("btn-next");
  const isLast = quizState.index === total - 1;
  next.innerText = isLast ? "Ver resultado 🏁" : "Próxima →";
  next.classList.remove("is-hidden");
  next.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  if (!quizState.answered) return;
  quizState.answered = false;
  quizState.index++;
  if (quizState.index < quizState.questions.length) renderQuestion();
  else finishQuiz();
}

function exitQuiz() {
  navigateTo("screen-level");
}

// Mostra o resultado, dá o XP (só na 1ª vez) e libera a próxima fase se acertou o suficiente
function finishQuiz() {
  const level = quizState.levelNumber;
  const total = quizState.questions.length;
  const correct = quizState.correct;
  const percent = Math.round((correct / total) * 100);
  const passed = correct >= minCorrect(total);
  const firstTime = passed && !gameState.completedList.includes(level);

  // Guarda o melhor resultado
  if (
    typeof gameState.bestScores[level] !== "number" ||
    correct > gameState.bestScores[level]
  ) {
    gameState.bestScores[level] = correct;
  }

  if (firstTime) {
    gameState.completedList.push(level);
    recalcState();
  }
  saveGame();
  updateProfileUI();
  updateMapUI();
  updateQuizButton();

  document.getElementById("quiz-progress-fill").style.width = "100%";
  document.getElementById("quiz-question-view").classList.add("is-hidden");
  document.getElementById("quiz-result-view").classList.remove("is-hidden");

  const hasNext = level < TOTAL_LEVELS;
  const allDone = gameState.completedLevels === TOTAL_LEVELS;

  document.getElementById("result-emoji").innerText = passed
    ? correct === total
      ? "🏆"
      : "🎉"
    : "😅";
  document.getElementById("result-title").innerText = passed
    ? "Fase concluída!"
    : "Quase lá!";
  document.getElementById("result-score").innerText =
    `${correct} de ${total} • ${percent}%`;

  const msg = document.getElementById("result-msg");
  const primary = document.getElementById("btn-result-primary");
  const secondary = document.getElementById("btn-result-secondary");

  if (passed) {
    if (firstTime) {
      msg.innerText = allDone
        ? `+${XP_PER_LEVEL} XP! Você zerou Manaus! 🌴`
        : `+${XP_PER_LEVEL} XP! ${hasNext ? `A Fase ${level + 1} foi liberada! 🔓` : ""}`;
    } else {
      msg.innerText =
        "Mandou bem de novo! Você já tinha concluído esta fase, então não ganha XP repetido.";
    }
    if (hasNext) {
      primary.innerText = `Ir para a Fase ${level + 1} →`;
      primary.onclick = () => openLevel(level + 1);
    } else {
      primary.innerText = "👤 Ver meu perfil";
      primary.onclick = () => navigateTo("screen-profile");
    }
    secondary.innerText = "🗺️ Voltar ao mapa";
    secondary.onclick = () => navigateTo("screen-map");

    showToast(
      firstTime
        ? allDone
          ? "🏆 Parabéns!<br>Você zerou Manaus!"
          : `⭐ +${XP_PER_LEVEL} XP!`
        : "⭐ Muito bem!",
    );
    launchConfetti();
  } else {
    msg.innerText = `Você precisa acertar pelo menos ${minCorrect(total)} de ${total} (${PASS_PERCENT}%) para liberar a próxima fase. Releia sobre o local e tente de novo!`;
    primary.innerText = "🔁 Tentar de novo";
    primary.onclick = startQuiz;
    secondary.innerText = "📖 Reler sobre o local";
    secondary.onclick = () => navigateTo("screen-level");
  }
}

/* ============ INTERFACE: MAPA ============ */
function updateMapUI() {
  if (!document.getElementById("screen-map")) return;
  document.querySelectorAll(".node-btn").forEach((btn, i) => {
    const level = i + 1;
    const locked = !isUnlocked(level);
    btn.classList.toggle("done", gameState.completedList.includes(level));
    btn.classList.toggle("locked", locked);
    btn.setAttribute("aria-disabled", locked ? "true" : "false");
    const icon = btn.querySelector(".node-icon");
    if (icon) icon.textContent = locked ? "🔒" : manausLocations[level].icon;
  });

  document.getElementById("map-progress-text").innerText =
    `${gameState.completedLevels} / ${TOTAL_LEVELS} locais`;
  document.getElementById("map-progress-fill").style.width =
    `${(gameState.completedLevels / TOTAL_LEVELS) * 100}%`;
  document.getElementById("map-xp").innerText = `${gameState.xp} XP`;
}

/* ============ INTERFACE: PERFIL ============ */
function updateProfileUI() {
  if (!document.getElementById("screen-profile")) return;
  document.getElementById("completed-levels").innerText =
    `${gameState.completedLevels} / ${TOTAL_LEVELS}`;
  document.getElementById("player-xp").innerText = `${gameState.xp} XP`;
  document.getElementById("player-level").innerText = gameState.level;

  const statusElement = document.getElementById("player-status");
  if (gameState.completedLevels === 0) {
    statusElement.innerText = "Iniciante";
  } else if (gameState.completedLevels < 3) {
    statusElement.innerText = "Turista Atento";
  } else if (gameState.completedLevels < 6) {
    statusElement.innerText = "Guia Local";
  } else {
    statusElement.innerText = "Mestre Manauara 🏆";
  }
}

function resetGame() {
  if (!confirm("Tem certeza que quer apagar seu progresso e começar de novo?"))
    return;
  gameState.completedList = [];
  gameState.bestScores = {};
  recalcState();
  saveGame();
  updateProfileUI();
  updateMapUI();
}

/* ============ FEEDBACK VISUAL ============ */
function showToast(html) {
  const toast = document.getElementById("toast");
  toast.innerHTML = html;
  toast.classList.remove("show");
  void toast.offsetWidth; // reinicia a animação
  toast.classList.add("show");
}

function launchConfetti() {
  const box = document.getElementById("confetti");
  const pieces = ["🌿", "🦜", "🌺", "⭐", "🍃", "🐬"];
  box.innerHTML = "";
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    s.style.left = `${Math.random() * 100}%`;
    s.style.animationDelay = `${Math.random() * 0.5}s`;
    s.style.animationDuration = `${1.6 + Math.random()}s`;
    box.appendChild(s);
  }
  setTimeout(() => {
    box.innerHTML = "";
  }, 3000);
}

/* ============ INICIALIZAÇÃO ============ */
function initializePage() {
  loadGame();
  updateProfileUI();
  updateMapUI();
  if (document.getElementById("screen-level")) {
    const requested = Number(new URLSearchParams(window.location.search).get("fase") || 1);
    gameState.currentLevel = Number.isInteger(requested) && manausLocations[requested] ? requested : 1;
    if (!isUnlocked(gameState.currentLevel)) {
      window.location.replace("./mapa.html");
      return;
    }
    // Voltar pelo histórico reabre a fase e descarta o quiz interrompido.
    navigateTo("screen-level");
    renderLevel();
  }
}
initializePage();
window.addEventListener("pageshow", initializePage);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => { /* jogo continua sem cache offline */ });
}
