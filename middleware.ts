import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // `_img` são as versões de imagem geradas no build (scripts/gerar-imagens.mjs),
  // que substituem o `_next/image`. Sem a exceção, quem está logado seria
  // redirecionado para /dashboard ao pedir uma foto, e a imagem quebraria.
    matcher: ['/((?!api|_next/static|_next/image|_img|.*\\.png$).*)'],
};