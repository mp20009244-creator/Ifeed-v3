# Integração do código do Pedro

O ZIP recebido foi usado como ponto de partida do projeto. A estrutura Django, o app `doacoes`, a ideia do endpoint de doações e a configuração pública do Firebase foram preservados e reorganizados.

## Correções realizadas

1. O Firebase não bloqueia mais a inicialização do Django quando o arquivo privado não existe.
2. O login Google agora troca o token Firebase por uma sessão autenticada do Django.
3. Foi adicionado login normal por e-mail e senha como alternativa sempre disponível.
4. Foi criado o cadastro completo de doador ou recebedor.
5. As informações deixaram de depender do `localStorage` e passaram a usar modelos Django e SQLite.
6. Doações, reservas, coletas, impacto, reconhecimento e perfil foram conectados ao banco.
7. Formulários possuem CSRF, validação no servidor, restrição de proprietário e mensagens de resultado.
8. O carregamento de fotos usa `FileField`, sem exigir Pillow.
9. O front-end antigo concentrado em um único JavaScript foi separado em templates, CSS e scripts de responsabilidade clara.
10. Node, Vite e React foram removidos da execução.

## Arquivos diretamente relacionados

- `doacoes/firebase_admin_setup.py`: validação segura e opcional do Firebase.
- `doacoes/views.py`: sessão Django, login, cadastro e regras da plataforma.
- `doacoes/models.py`: dados persistentes.
- `static/js/firebase-config.js`: configuração pública original do Firebase.
- `static/js/auth-django.js`: integração Google/Firebase com Django.
- `templates/auth/`: formulários funcionais de entrada e cadastro.
