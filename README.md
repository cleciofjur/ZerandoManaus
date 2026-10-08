# ZerandoManaus

## Executar a interface

Na pasta do projeto, execute `python3 -m http.server 8000 --directory frontend`
e abra http://localhost:8000. O backend FastAPI permanece separado em `main.py`.

## Organização das telas

- `frontend/index.html`: menu principal.
- `frontend/como-jogar.html`: instruções.
- `frontend/mapa.html`: mapa e progresso.
- `frontend/perfil.html`: perfil do jogador.
- `frontend/fase.html?fase=1`: desafio selecionado (fases de 1 a 6).
- `frontend/style.css`: estilos compartilhados por todas as páginas.
- `frontend/script.js`: lógica compartilhada e progresso no armazenamento do navegador.
- `frontend/img/fundo-manaus.jpg`: imagem de fundo original, extraída do HTML.

Todas as páginas carregam `./style.css` e `./script.js`. Os caminhos de imagens
em `url(...)` são relativos ao arquivo CSS: `./img/fundo-manaus.jpg`.
`styles.css` importa `style.css` para manter referências antigas compatíveis.

Prefira acessar pelo servidor local para compartilhar o progresso entre as telas.
O Service Worker de `sw.js` é registrado automaticamente. A versão v4 substitui
os caches antigos e permite jogar offline depois do primeiro acesso completo.

## Quiz e progresso

Cada fase tem cinco perguntas, com perguntas e alternativas embaralhadas.
São necessários quatro acertos para concluir a fase e liberar a próxima.
A primeira aprovação rende 50 XP; refazer a fase melhora o resultado salvo,
sem duplicar o XP. O progresso da interface é salvo neste navegador.

## Executar a API

Use Python 3.10 ou mais recente (o código também foi testado com Python 3.9).
Na raiz do projeto:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8001
```

Documentação dos endpoints: http://localhost:8001/docs.
A API funciona separadamente da interface: seus jogadores ficam em
`backend/jogadores.json`, enquanto a interface usa `localStorage`.
A API atual contém uma pergunta de exemplo por fase e concede 10 XP por
primeiro acerto de cada pergunta; não há sincronização entre os dois modos.
A gravação JSON suporta um processo servidor; não execute múltiplos workers
compartilhando o mesmo arquivo de jogadores.

## Verificação

Com as dependências Python instaladas e Node.js 20 ou mais recente:

```sh
python -m pytest -q
node --test tests/test_frontend.cjs
node --check frontend/script.js
node --check frontend/sw.js
```

Os testes verificam a API, a persistência atômica, as páginas e os recursos
locais, os bloqueios de fases, o quiz, o XP e a recuperação de saves inválidos.
