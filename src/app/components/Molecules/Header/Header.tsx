import Link from "next/link";

type sectionDetails = {
  lable: string;
  link: string;
};

export default function Header() {
  const sections: sectionDetails[] = [
    {
      lable: "HOME",
      link: "#section-home",
    },
    {
      lable: "ABOUT",
      link: "#section-about",
    },
    {
      lable: "PROJECTS",
      link: "#section-projects",
    },
    {
      lable: "CONTACT",
      link: "#section-socialMedia",
    },
  ];

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
            src="/NavbarLogo.png"
            alt=""
          />
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className="hidden md:block fixed top-0 z-40 w-full">
        <div className="navbar justify-around p-0">
          {sections.map((section, index) => (
            <>
              {renderHeaderLink(section.lable, section.link)}
              {index === 1 ? (
                <img
                  style={{
                    width: "80px",
                  }}
                  src="/NavbarLogo.png"
                  alt=""
                />
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>

      <div className="md:hidden fixed top-0 z-40 w-full">
        <div className="navbar bg-base-100">
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
                {sections.map((section) => (
                  <li key={section.link}>
                    <Link href={section.link}>{section.lable}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">ChrisP Studios</a>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </>
  );
}
