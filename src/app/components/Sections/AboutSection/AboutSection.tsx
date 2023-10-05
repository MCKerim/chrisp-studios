import { contactEmail } from "../../../Data/General"

export default function AboutSection() {

  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="Profile Picture" src="/ProfilePicture.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">About <span style={{ color: "#fcd4a2" }}>CrisP Studios</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae eter
            a id nisi.
          </p>
          <a className="btn btn-primary font-bold rounded hover:-translate-y-1 hover:shadow-md" href={"mailto:" + contactEmail}>Get in touch</a>
        </div>
      </div>
    </div>
  );
}
