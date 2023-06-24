'use client';
import Cookies from "js-cookie"; 
export default function Navbar() {
  // const LoggedIn = Cookies.get("password") === process.env.PASSWORD
  // console.log(LoggedIn, Cookies.get("password"))
  const Links = () => {
    return <>
      <li><a href="/dash">Dash</a></li>
    <li><a href="/dash/create">Create</a></li>
    <li><a href="/dash/delete">Delete</a></li>
    </>
  }
return <div className="navbar bg-base-100">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
     <Links />
    </ul>
  </div>
  <a className="text-xl normal-case btn btn-ghost" href="/">URL shortener </a>
</div>
<div className="hidden navbar-center lg:flex">
  <ul className="px-1 menu menu-horizontal">
  <Links />
  </ul>
</div>
<div className={`navbar-end `}> 
  <a className="btn" onClick={() => window.location = "/login"}>Login In</a> 
</div>
</div>
}