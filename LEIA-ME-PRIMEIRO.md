# iFeed — versão Django visual final

Esta versão integra a base do projeto do Pedro com o visual completo do iFeed. O sistema usa apenas **Django, HTML, CSS e JavaScript**. Não utiliza Node, npm, React ou Vite.

O layout foi adaptado das imagens oficiais do protótipo para páginas web reais:

- páginas públicas contínuas e em largura total, sem molduras de storyboard;
- painel interno ocupando toda a janela;
- logo iFeed em PNG transparente, limpa e responsiva;
- conjunto próprio de 36 ícones PNG locais em verde, amarelo e azul;
- fotografias principais restauradas em alta resolução;
- gráfico de Impacto interativo, responsivo e alimentado pelo Django;
- identidade verde, amarela, azul e branca preservada;
- versões responsivas para computador, tablet e celular.

## Forma mais fácil no Windows

1. Extraia o ZIP.
2. Abra a pasta `IFEED-DJANGO-VISUAL-FINAL` no VS Code.
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
- O botão Google mantém a implementação Firebase iniciada no código do Pedro e cria uma sessão Django após validar o token.
- Se o Firebase não estiver habilitado, o login normal por e-mail e senha continua funcionando.

### Ativar o botão Google no Firebase

1. Abra o Console do Firebase e selecione o projeto `ifeed-supremo`.
2. Entre em **Authentication > Sign-in method**.
3. Ative o provedor **Google**.
4. Em **Settings > Authorized domains**, confirme `localhost`.
5. Mantenha `static/js/firebase-config.js` com a configuração pública do projeto.

O arquivo privado `firebase-service-account.json` é opcional no desenvolvimento local e está bloqueado pelo `.gitignore`. Nunca publique esse arquivo no GitHub.

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
- `static/js/`: interações, gráfico, ViaCEP e autenticação Google;
- `static/assets/icons/`: 36 ícones PNG locais, sem CDN;
- `static/assets/img/`: logo, selos e fotografias em alta resolução.

O ZIP não inclui ambiente virtual, cache, `node_modules` ou arquivos temporários. O banco SQLite é criado automaticamente na primeira execução.

## Comandos úteis

```powershell
python manage.py check
python manage.py test
python manage.py createsuperuser
```

O projeto possui nove testes automatizados para páginas públicas, cadastro, login, proteção da área interna, reserva, renderização das abas internas, criação de doações, gráfico de Impacto e selo Prata.

## Banco de dados

O projeto usa SQLite. O arquivo `db.sqlite3` é criado automaticamente e não precisa de servidor de banco de dados.
