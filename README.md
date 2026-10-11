# Attos — site (attosfit.com)

Site público do aplicativo **Attos**: página inicial, guia do app passo a passo, termos de uso, política de privacidade e instruções para excluir conta e dados. Em português, espanhol e inglês, com tema claro e escuro.

## Endereços

- Site: https://attosfit.com/
- Guia do app: https://attosfit.com/guide.html
- Política de privacidade: https://attosfit.com/privacy.html
- Termos de uso: https://attosfit.com/terms.html
- Excluir conta e dados: https://attosfit.com/legal.html#delete

Espanhol em `/es/` e inglês em `/en/`, com os mesmos nomes de arquivo.

## Como o site é montado

O site é estático e não tem dependências. Fica hospedado na Cloudflare (`wrangler.toml`); para publicar: `node build.mjs && npx wrangler@4.142.0 deploy`. As páginas `.html` são geradas por `build.mjs` a partir dos textos em `content/`.

```
node build.mjs
```

| Pasta ou arquivo | O que é |
|---|---|
| `content/pt-BR.mjs`, `es.mjs`, `en.mjs` | Textos da página inicial e do guia |
| `content/legal.*.mjs` | Termos, privacidade e exclusão de conta |
| `build.mjs` | Modelos das páginas e a lista de capítulos e passos do guia |
| `assets/site.css`, `assets/site.js` | Visual, tema, menu e ampliação das capturas |
| `assets/shots/<idioma>/<tema>/` | Capturas do app (390×844, WebP) |
| `index.html`, `guide.html`, `legal.html`, `privacy.html`, `terms.html`, `es/`, `en/` | Páginas geradas: não edite à mão |

Para mudar um texto, edite o arquivo em `content/` e rode `node build.mjs`. O português é o documento original; as traduções dos textos legais levam um aviso de que a versão em português prevalece.

O endereço da loja e os e-mails de contato ficam no objeto `SITE`, no topo de `build.mjs`.

## Capturas do app

As capturas são tiradas do próprio app (repositório `vitalix`), com dados de exemplo, em três idiomas e dois temas. O build avisa se faltar alguma captura citada no guia.
