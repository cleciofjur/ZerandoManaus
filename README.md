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
Se usar o Service Worker de `sw.js`, a versão v3 atualiza os arquivos do cache.
