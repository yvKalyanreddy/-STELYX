
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Main navigation">

        {/* NAVBAR PAPER BACKGROUND */}
        <Image
          // CHANGE THE IMAGE PATH BELOW TO USE A DIFFERENT PAPER ASSET
          src="/collage/nav_bar/nav.png"
          
          alt=""
          fill
          priority
          className="nav-paper"
        />

        {/* NAVBAR CONTENT - SITS ABOVE THE PAPER IMAGE */}
        <div className="nav-content">
          <Link className="brand" href="/" aria-label="STELYX home">
            <span className="brand-mark">✳</span>
            <span>STELYX</span>
          </Link>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#insights">Insights</a>
          </div>

          <a className="nav-cta" href="mailto:hello@stelyx.com">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="work">
        <div className="hero-copy">
          <p className="eyebrow">A CREATIVE TECHNOLOGY STUDIO</p>
          <h1>
            Ideas into
            <br />
            <span>Intelligent</span>
            <br />
            Experiences.
          </h1>
          <p className="intro">
            We create digital products, AI solutions and web experiences that
            drive real impact.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#services">
              Explore our work <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="mailto:hello@stelyx.com">
              Book a call
            </a>
          </div>
          <p className="trust-note">✳ &nbsp; Trusted by ambitious ideas and teams.</p>
        </div>

        <div className="hero-art" aria-label="Placeholder for the paper collage artwork">
          <div className="paper-grid" />
          <div className="idea-note">
            <span>It starts with</span>
            <strong>an idea.</strong>
            <span className="idea-doodle">✳</span>
          </div>
          <div className="code-sheet">
            <span className="sheet-label">STUDIO / EXPERIMENT 001</span>
            <pre>{`function build(idea) {
  const curiosity = true;
  const craft = "intentional";

  return idea
    .thinkBigger()
    .buildWithCare()
    .makeAnImpact();
}`}</pre>
          </div>
          <div className="purple-scrap">&lt;/&gt;</div>
          <div className="hero-caption">Crafted with<br />code & creativity</div>
          <div className="hero-art-label">IDEAS → EXPERIENCES</div>
        </div>
      </section>

      <section className="journey section" id="about">
        <div className="section-heading">
          <p className="eyebrow">FROM FIRST THOUGHT TO FINISHED PRODUCT</p>
          <h2>Our Journey. <span>Your Success.</span></h2>
        </div>
        <div className="journey-grid">
          {[
            ["01", "Discover", "We dive deep to understand your idea, audience and challenges.", "☼"],
            ["02", "Define", "We research, analyse and define the right strategy and solution.", "⌕"],
            ["03", "Design", "We shape intuitive experiences that are useful and beautiful.", "▧"],
            ["04", "Develop", "We build scalable, secure and high-performance digital products.", "{ }"],
            ["05", "Deliver", "We launch, optimise and scale for measurable impact.", "↗"]
          ].map(([number, title, description, symbol]) => (
            <article className="journey-item" key={number}>
              <div className={`journey-scrap scrap-${number}`}>{symbol}</div>
              <p className="step-number">{number}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="services-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Thoughtfully made. <span>Purposefully built.</span></h2>
        </div>
        <div className="service-grid">
          {[
            ["▦", "Web Development", "Fast, responsive websites and web applications built for performance."],
            ["✳", "AI Solutions", "Intelligent systems and automation that drive smarter decisions."],
            ["◇", "Digital Products", "Scalable digital products designed for real users and impact."],
            ["☁", "Cloud & DevOps", "Reliable infrastructure and delivery workflows that scale."],
            ["⌁", "Data & Analytics", "Turning data into insights that help you grow faster."]
          ].map(([symbol, title, description]) => (
            <article className="service-card" key={title}>
              <span className="service-icon" aria-hidden="true">{symbol}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="card-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="impact section" id="insights">
        <div className="impact-copy">
          <p className="eyebrow">AIM HIGH. MAKE IT MATTER.</p>
          <h2>Numbers that<br />speak <span>impact.</span></h2>
          <p>From early-stage ideas to ambitious teams, we build digital solutions that move things forward.</p>
        </div>
        <div className="stats-paper">
          <div><strong>120+</strong><span>Projects delivered</span></div>
          <div><strong>98%</strong><span>Client satisfaction</span></div>
          <div><strong>30+</strong><span>Happy clients</span></div>
          <div><strong>15+</strong><span>Industries served</span></div>
        </div>
        <div className="impact-note">
          <span>GOOD IDEAS DESERVE</span>
          <strong>great execution.</strong>
          <p>Let&apos;s make something meaningful together.</p>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="eyebrow">GOOD WORK STARTS WITH A CONVERSATION</p>
          <h2>Have an idea?</h2>
          <p>Let&apos;s turn it into something real.</p>
        </div>
        <a className="footer-cta" href="mailto:hello@stelyx.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <Link className="brand" href="/">
            <span className="brand-mark">✳</span><span>STELYX</span>
          </Link>
          <span>© {new Date().getFullYear()} STELYX. Built with intention.</span>
        </div>
      </footer>
    </main>
  );
}
