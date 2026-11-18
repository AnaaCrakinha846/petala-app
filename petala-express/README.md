# Pétala Express

App de cosméticos com entrega por geolocalização. HTML, CSS e JavaScript puros, sem build nem dependências.

## Como rodar no VS Code
1. Abra a pasta `petala-express` (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server** (o VS Code sugere ao abrir a pasta).
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

Também funciona abrindo o `index.html` direto no navegador, mas o botão "Usar minha localização" só funciona em `localhost` ou `https`, por isso o Live Server é o recomendado.

## Onde editar
- `script.js`: no topo ficam `P` (produtos), `S` (lojas, com coordenadas, preço e itens sem estoque) e `CATS` (categorias).
- `style.css`: cores e tema nas variáveis `:root`.
- Frete: função `freight` em `script.js`.

## Fotos reais
Coloque as imagens na pasta `imagens/` (nomes em `imagens/LEIA-ME.txt`, mapeados no objeto `IMG` do `script.js`). Produto sem foto continua mostrando a ilustração.
