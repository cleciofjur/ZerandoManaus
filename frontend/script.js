// Banco de dados dos pontos turísticos de Manaus
const manausLocations = {
  1: {
    icon: "🎭",
    name: "Teatro Amazonas",
    category: "História & Arquitetura",
    description: "Inaugurado em 1896 durante o Ciclo da Borracha, é o principal símbolo cultural do Amazonas e famoso por sua cúpula com as cores da bandeira do Brasil.",
    challenge: "Identifique as peças da cúpula do Teatro e responda qual estilo arquitetônico predominante marca sua construção!"
  },
  2: {
    icon: "🐟",
    name: "Mercado Municipal Adolpho Lisboa",
    category: "Gastronomia & Tradição",
    description: "Inspirado no antigo mercado Les Halles de Paris e às margens do Rio Negro, é o centro de sabores, ervas medicinais e artesanato de Manaus.",
    challenge: "Encontre os ingredientes tradicionais para preparar um autêntico Tacacá e um peixe assado na brasa!"
  },
  3: {
    icon: "🏖️",
    name: "Praia da Ponta Negra",
    category: "Lazer & Natureza",
    description: "Complexo turístico às margens do Rio Negro, famoso pelo seu calçadão de pedras portuguesas, pôr do sol inesquecível e eventos culturais.",
    challenge: "Caminhe pelo calçadão ao pôr do sol e registre a foto perfeita do horizonte sobre as águas escuras do Rio Negro."
  },
  4: {
    icon: "🌊",
    name: "Encontro das Águas",
    category: "Fenômeno Natural",
    description: "Fenômeno onde as águas escuras do Rio Negro e as águas barrentas do Rio Solimões correm lado a lado por quilômetros sem se misturar.",
    challenge: "Analise a temperatura e a densidade das águas para explicar o motivo de elas não se misturarem imediatamente."
  },
  5: {
    icon: "🦋",
    name: "MUSA - Museu da Amazônia",
    category: "Ecoturismo & Ciência",
    description: "Localizado na Reserva Florestal Adolpho Ducke, possui uma torre de observação de 42 metros de altura acima da copa das árvores.",
    challenge: "Suba os 242 degraus da torre do MUSA para avistar a imensidão da floresta amazônica de cima!"
  },
  6: {
    icon: "🌉",
    name: "Ponte Rio Negro",
    category: "Engenharia & Cartão Postal",
    description: "Com mais de 3,5 km de extensão, conecta Manaus ao município de Iranduba, sendo uma das maiores pontes estaiadas do Brasil.",
    challenge: "Atravesse a ponte ao anoitecer para apreciar a iluminação especial e a vista panorâmica do Rio Negro."
  }
};

const TOTAL_LEVELS = Object.keys(manausLocations).length;
const XP_PER_LEVEL = 50;
const STORAGE_KEY = "zerando-manaus-save";

// Estado do jogador
const gameState = {
  currentLevel: 1,
  completedLevels: 0,
  completedList: [], // fases já concluídas (evita ganhar XP repetido na mesma fase)
  xp: 0,
  level: 1
};

/* ============ SALVAR E CARREGAR PROGRESSO ============ */
function loadGame() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.completedList)) {
      gameState.completedList = saved.completedList;
    }
  } catch (e) { /* sem acesso ao armazenamento: começa do zero */ }
  recalcState();
}

function saveGame() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ completedList: gameState.completedList }));
  } catch (e) { /* ignora */ }
}

function recalcState() {
  gameState.completedLevels = gameState.completedList.length;
  gameState.xp = gameState.completedLevels * XP_PER_LEVEL;
  gameState.level = Math.floor(gameState.xp / 100) + 1;
}

/* ============ NAVEGAÇÃO ============ */
function navigateTo(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }
}

/* ============ FASE ============ */
function openLevel(levelNumber) {
  gameState.currentLevel = levelNumber;
  const location = manausLocations[levelNumber];

  if (location) {
    document.getElementById('level-title').innerText = `Fase ${levelNumber}`;
    document.getElementById('level-emoji').innerText = location.icon;
    document.getElementById('location-category').innerText = location.category;
    document.getElementById('location-name').innerText = location.name;
    document.getElementById('location-description').innerText = location.description;
    document.getElementById('location-challenge').innerText = location.challenge;
  }

  updateCompleteButton();
  navigateTo('screen-level');
}

function updateCompleteButton() {
  const btn = document.getElementById('btn-complete');
  const done = gameState.completedList.includes(gameState.currentLevel);
  btn.innerText = done ? '⭐ Desafio concluído!' : `Concluir Desafio (+${XP_PER_LEVEL} XP)`;
  btn.classList.toggle('is-done', done);
  btn.disabled = done;
}

// Concluir desafio e atualizar pontuação
function completeLevel() {
  if (gameState.completedList.includes(gameState.currentLevel)) return;

  gameState.completedList.push(gameState.currentLevel);
  recalcState();
  saveGame();

  updateProfileUI();
  updateMapUI();
  updateCompleteButton();

  const allDone = gameState.completedLevels === TOTAL_LEVELS;
  showToast(allDone ? '🏆 Parabéns!<br>Você zerou Manaus!' : `⭐ +${XP_PER_LEVEL} XP!`);
  launchConfetti();

  // Volta ao mapa depois da comemoração
  setTimeout(() => navigateTo('screen-map'), 1800);
}

/* ============ INTERFACE: MAPA ============ */
function updateMapUI() {
  document.querySelectorAll('.node-btn').forEach((btn, i) => {
    btn.classList.toggle('done', gameState.completedList.includes(i + 1));
  });

  document.getElementById('map-progress-text').innerText = `${gameState.completedLevels} / ${TOTAL_LEVELS} locais`;
  document.getElementById('map-progress-fill').style.width = `${(gameState.completedLevels / TOTAL_LEVELS) * 100}%`;
  document.getElementById('map-xp').innerText = `${gameState.xp} XP`;
}

/* ============ INTERFACE: PERFIL ============ */
function updateProfileUI() {
  document.getElementById('completed-levels').innerText = `${gameState.completedLevels} / ${TOTAL_LEVELS}`;
  document.getElementById('player-xp').innerText = `${gameState.xp} XP`;
  document.getElementById('player-level').innerText = gameState.level;

  const statusElement = document.getElementById('player-status');
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
  if (!confirm('Tem certeza que quer apagar seu progresso e começar de novo?')) return;
  gameState.completedList = [];
  recalcState();
  saveGame();
  updateProfileUI();
  updateMapUI();
}

/* ============ FEEDBACK VISUAL ============ */
function showToast(html) {
  const toast = document.getElementById('toast');
  toast.innerHTML = html;
  toast.classList.remove('show');
  void toast.offsetWidth; // reinicia a animação
  toast.classList.add('show');
}

function launchConfetti() {
  const box = document.getElementById('confetti');
  const pieces = ['🌿', '🦜', '🌺', '⭐', '🍃', '🐬'];
  box.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span');
    s.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    s.style.left = `${Math.random() * 100}%`;
    s.style.animationDelay = `${Math.random() * 0.5}s`;
    s.style.animationDuration = `${1.6 + Math.random()}s`;
    box.appendChild(s);
  }
  setTimeout(() => { box.innerHTML = ''; }, 3000);
}

/* ============ INICIALIZAÇÃO ============ */
loadGame();
updateProfileUI();
updateMapUI();