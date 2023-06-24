import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

function loggedIn(cookies: ReadonlyRequestCookies): Boolean {
  const isLoggedIn = process.env.PASSWORD === cookies.get('password')?.value;
/* This code block is checking if the user is not logged in and if there is a cookie named "password".
If both conditions are true, it deletes the "password" cookie. This is likely done for security
reasons to prevent unauthorized access to the website or application. */
if(!isLoggedIn && cookies.get("password")) {
  fetch('/api/cookie', { method: "DELETE"})
}
  return isLoggedIn;
}
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    let isLoggedIn = loggedIn(cookies())
    if(isLoggedIn) {
      console.log("LOGGED IN :0")
    redirect('/dash')
    } 
    return children;
  }
  