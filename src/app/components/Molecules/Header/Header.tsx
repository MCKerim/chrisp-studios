import Link from "next/link";

export default function Header() {
  function renderHeaderLink(label: string, link: string) {
    return (
      <Link href={link} className="group">
        <div>
          <p
            className="text-lg text-center"
            style={{
              color: "#fcd4a2",
            }}
          >
            {label}
          </p>
          <img
            className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out"
            style={{
              width: "100px",
              height: "25px",
            }}
            src="/Logo.png"
            alt=""
          />
        </div>
      </Link>
    );
  }

  return (
    <div className="navbar sticky top-0 z-40 justify-around">
      {renderHeaderLink("HOME", "#section-home")}
      {renderHeaderLink("ABOUT", "#section-about")}
      <img
        style={{
          height: "50px",
        }}
        src="/Logo.png"
        alt=""
      />
      {renderHeaderLink("PROJECTS", "#section-projects")}
      {renderHeaderLink("CONTACT", "#section-socialMedia")}
    </div>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#section-home">Home</Link>
            </li>
            <li>
              <Link href="#section-about">About</Link>
            </li>
            <li>
              <Link href="#section-projects">Projects</Link>
            </li>
            <li>
              <Link href="#section-socialMedia">Social Media</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">ChrisP Studios</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
