# iFeed — versão Django visual final

Esta versão integra a base do projeto do Pedro com o visual completo do iFeed. O sistema usa apenas **Django, HTML, CSS e JavaScript**. Não utiliza Node, npm, React ou Vite.

O layout foi adaptado das imagens oficiais do protótipo para páginas web reais:

- páginas públicas contínuas e em largura total, sem molduras de storyboard;
- painel interno ocupando toda a janela;
- logo iFeed em PNG transparente, limpa e responsiva;
- 40 elementos das concept arts separados individualmente em PNG transparente;
- fotografias principais restauradas em alta resolução;
- gráfico de Impacto interativo, responsivo e alimentado pelo Django;
- identidade verde, amarela, azul e branca preservada;
- versões responsivas para computador, tablet e celular.

## Forma mais fácil no Windows

1. Extraia o ZIP.
2. Abra a pasta `IFEED-DJANGO-CONCEPT-ART-FINAL` no VS Code.
3. Dê dois cliques em `INICIAR_IFEED.bat`.
4. Aguarde a instalação terminar. O navegador abrirá em `http://127.0.0.1:8000/`.

Na primeira execução, o processo pode demorar alguns minutos porque cria o ambiente virtual e instala o Django.

## Conta demonstrativa

- E-mail: `demo@ifeed.com`
- Senha: `Ifeed@2026`

Também existe a conta recebedora `ong@ifeed.com` com a mesma senha.

## Execução manual pelo terminal do VS Code

No PowerShell, dentro da pasta do projeto:

```powershell
python -m venv venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py seed_ifeed
python manage.py runserver
```

Depois, acesse `http://127.0.0.1:8000/`.

## Login e cadastro

- O cadastro com nome, e-mail e senha funciona totalmente pelo Django.
- O login aceita o e-mail cadastrado e a senha.
- As senhas são protegidas pelo sistema de autenticação do Django.
- Não há login com Google ou Firebase nesta versão — apenas e-mail e senha.

## Páginas incluídas

- Início, Como funciona, Impacto social e Quem somos.
- Entrar e Cadastro.
- Painel, Doações disponíveis e detalhes.
- Minhas coletas, Minhas doações e formulário de doação.
- Impacto, Reconhecimentos e Perfil.
- Admin Django em `/admin/`.

## Estrutura limpa

- `ifeed/`: configuração central do Django;
- `doacoes/`: banco, formulários, regras, rotas e testes;
- `templates/`: páginas HTML organizadas por contexto;
- `static/css/`: estilo visual principal e ajustes de formulários;
- `static/js/`: interações, gráfico e ViaCEP;
- `static/assets/icons/concept/`: os 40 PNGs separados das pranchas fornecidas;
- `static/assets/icons/`: ícones locais usados pelas telas internas, sem CDN;
- `static/assets/img/`: logo, selos e fotografias em alta resolução.

O ZIP não inclui ambiente virtual, cache, `node_modules` ou arquivos temporários. O banco SQLite é criado automaticamente na primeira execução.

## Comandos úteis

```powershell
python manage.py check
python manage.py test
python manage.py createsuperuser
```

O projeto possui 11 testes automatizados para páginas públicas, cadastro, login, ausência do Google/Firebase, proteção da área interna, reserva, renderização das abas internas, criação de doações, gráfico de Impacto e uso dos ícones das concept arts.

## Banco de dados

O projeto usa SQLite. O arquivo `db.sqlite3` é criado automaticamente e não precisa de servidor de banco de dados.
