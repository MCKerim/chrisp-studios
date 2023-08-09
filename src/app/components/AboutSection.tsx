export default function AboutSection() {
  return (
    <div className="hero my-20" id="section-about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/Spiderman.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">About me</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae eter
            a id nisi.
          </p>
          <button className="btn btn-primary font-bold rounded hover:-translate-y-1 hover:shadow-md">Get in touch</button>
        </div>
      </div>
    </div>
  );
}
