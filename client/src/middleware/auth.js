import fetch from 'isomorphic-unfetch'
import Router from 'next/router'


export default async function getUser(url, ctx) {
    const cookie = ctx.req?.headers.cookie;
    const res = await fetch(url, {
    headers: {
      cookie: cookie
    }
  }
 );

 if (res.status === 401 && !ctx.req) {
   Router.replace('/')
   return {};
 }

 if(res.status === 401 && ctx.req) {
   ctx.res.writeHead(302, {
     Location: 'http://localhost:3000/'
   })
   ctx.res.end();
   return;
 }

  const user = await res.json();
  return {user: user.data, loggedIn: true}
}