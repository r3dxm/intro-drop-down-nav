import { useState } from 'react';
import "./Nav.module.css";

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-100 flex items-center justify-between p-8 desktop:hidden">
        <img src="/logo.svg" alt="snap logo"/>
        <button onClick={() => setOpen(true)} id="open"><img src="/icon-menu.svg" alt="open menu"/></button>
        <span id="nav" className={open ? 'flex flex-col items-start gap-10 bg-almost-white h-full w-3/5 absolute top-0 right-0 z-10 p-8' : 'flex-col items-start gap-10 bg-almost-white h-full w-3/5 absolute top-0 right-0 z-10 p-8 hidden'}>
          <button onClick={() => setOpen(false)} id="close" className={open ? "self-end" : "self-end hidden"}><img src="/icon-close-menu.svg" alt="close menu"/></button>
          <ul className="flex flex-col gap-5">
            <li className="pr-10">
              <details>
                <summary className="text-[14px] text-medium-gray font-bold">Features</summary>
                <ul className="rounded-lg p-5 w-max">
                  <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="/icon-todo.svg" alt="todo icon"/> Todo List</li>
                  <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="/icon-calendar.svg" alt="calendar icon"/> Calender</li>
                  <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="/icon-reminders.svg" alt="reminder icon"/> Reminders</li>
                  <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="/icon-planning.svg" alt="planning icon"/> Planning</li>
                </ul>
              </details>
            </li>
            <li className="pr-10">
            <details>
              <summary className="text-[14px] text-medium-gray font-bold">Company</summary>
              <ul className="rounded-lg p-5 w-max">
                <li className="text-[14px] text-medium-gray font-bold pt-2 pb-2">History</li>
                <li className="text-[14px] text-medium-gray font-bold pt-2 pb-2">Our team</li>
                <li className="text-[14px] text-medium-gray font-bold pt-2 pb-2">Blog</li>
              </ul>
            </details>
          </li>
          <li className="text-[14px] text-medium-gray font-bold pr-10 hover:cursor-pointer">Careers</li>
          <li className="text-[14px] text-medium-gray font-bold pr-10 hover:cursor-pointer">About</li>
          </ul>
          <div className="w-full self-center flex flex-col items-center gap-5">
            <button className="w-fullll text-[14px] font-bold text-medium-gray pr-5 hover:text-almost-black">Login</button>
            <button className="w-full border-[2px] border-solid border-medium-gray text-[14px] text-medium-gray font-bold rounded-2xl p-2 pl-5 pr-5 hover:border-almost-black hover:text-almost-black">Register</button>
          </div>
        </span>
      </nav>
      <div id ="overlay" className={open ? "w-full h-full absolute z-2 backdrop-brightness-50 top-0 block" : "w-full h-full absolute z-2 backdrop-brightness-50 top-0 hidden"}/>
    </>
  );
}

export default MobileNav;