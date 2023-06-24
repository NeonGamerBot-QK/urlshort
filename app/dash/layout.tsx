import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers'

import { redirect } from 'next/navigation';
 function loggedIn(cookies: ReadonlyRequestCookies): Boolean {
    const isLoggedIn = process.env.PASSWORD === cookies.get('password')?.value;
/* This code block is checking if the user is not logged in and if there is a cookie named "password".
If both conditions are true, it deletes the "password" cookie. This is likely done for security
reasons to prevent unauthorized access to the website or application. */
  if(!isLoggedIn && cookies.get("password")) {
// fetch('/api/cookie', { method: "DELETE"})
// we fix this another day-
  }
  console.debug("logged in?", process.env.PASSWORD, cookies.get("password")?.value, isLoggedIn)
    return isLoggedIn;
  }
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    let isLoggedIn = loggedIn(cookies())
    console.log("is LOgged in ", isLoggedIn)
    if(!isLoggedIn) {
      console.log("NOT LOGGED IN :0")
 
    redirect('/login')
    }
    return children;
  }
  