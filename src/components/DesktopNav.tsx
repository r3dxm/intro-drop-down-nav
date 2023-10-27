import "./Nav.module.css";

function DesktopNav() {
  return (
    <nav className="w-screen hidden items-center justify-between px-8 py-5 desktop:flex">
      <ul className="flex justify-between">
        <li className="pr-20"><img src="logo.svg" alt="snap logo" /></li>
        <li className="pr-10 hover:cursor-pointer">
          <details>
            <summary className="text-[14px] text-medium-gray font-bold hover:text-almost-black">Features</summary>
            <ul className="shadow-2xl rounded-lg p-5 absolute ml-[-50px]">
              <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="icon-todo.svg" alt="todo icon"/> Todo List</li>
              <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="icon-calendar.svg" alt="calendar icon"/> Calender</li>
              <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="icon-reminders.svg" alt="reminder icon"/> Reminders</li>
              <li className="flex items-center text-[14px] text-medium-gray font-bold pt-2 pb-2"><img className="w-8 h-5 pr-3" src="icon-planning.svg" alt="planning icon"/> Planning</li>
            </ul>
          </details>
        </li>
        <li className="pr-10 hover:cursor-pointer">
          <details>
            <summary className="text-[14px] text-medium-gray font-bold hover:text-almost-black">Company</summary>
            <ul className="shadow-2xl rounded-lg p-5 absolute">
              <li className="text-[14px] text-medium-gray font-bold pt-2 pb-2">History</li>
              <li className="text-[14px] text-medium-gray font-bold pt-2 pb-2">Our team</li>
              <li className="text-[14px] text-medium-gray font-bold pt-2 pb-2">Blog</li>
            </ul>
          </details>
        </li>
        <li className="text-[14px] text-medium-gray font-bold pr-10 hover:cursor-pointer">Careers</li>
        <li className="text-[14px] text-medium-gray font-bold pr-10 hover:cursor-pointer">About</li>
      </ul>
      <div>
        <button className="text-[14px] font-bold text-medium-gray pr-5 hover:text-almost-black">Login</button>
        <button className="border-[2px] border-solid border-medium-gray text-[14px] text-medium-gray font-bold rounded-2xl p-2 pl-5 pr-5 hover:border-almost-black hover:text-almost-black">Register</button>
      </div>
    </nav>
  );
}

export default DesktopNav;