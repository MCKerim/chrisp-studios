import { socialLinks } from "../../../Data/SocialLinks";

export default function SocialMediaSection() {
  return (
    <div className="hero my-20" id="section-about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            Follow Our <span style={{ color: "#fcd4a2" }}>Journey!</span>{" "}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            eter
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {socialLinks.map((socialLink) => (
              <a key={socialLink.title} href={socialLink.link} target="_blank" className="hover:scale-125 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#fcd4a2"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d={socialLink.svg}></path>
                    </g>
                  </g>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
