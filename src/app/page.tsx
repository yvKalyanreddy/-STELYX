/*  */
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
            From professional business websites to custom web applications and software, we build digital solutions tailored to what you actually need.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#services">
              Explore our work <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="mailto:hello@stelyx.com">
              Start your project
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
            ["▦", "Business Website Development", "Fast, responsive websites crafted to establish credibility and convert."],
            ["✳", "Custom Software Development", "Tailored software engineered to streamline your unique workflows."],
            ["◇", "AI solutions", "Intelligent automation and smart tools that elevate performance."],
            ["⌁", "Web Application Development", "Robust, interactive web apps built for seamless scalability."],
            ["☁", "E-commerce Development", "High-converting online stores optimized for frictionless shopping."]
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

      <section className="stages section" id="stages">
        <div className="stages-content">
          <div className="stages-heading">
            <p className="eyebrow">TAILORED DIGITAL SOLUTIONS</p>
            <h2>Built For Businesses<br /><span>At Different Stages</span></h2>
            <p className="stages-highlight">
              Your business isn&apos;t like everyone else&apos;s. Your software shouldn&apos;t be either.
            </p>
            <p className="stages-desc">
              Whether taking your first steps or scaling operations, we design and build solutions crafted specifically for where your business stands today.
            </p>
          </div>
          <div className="notepad-container">
            <div className="ruled-notepad">
              <div className="spiral-edge" aria-hidden="true">
                {[...Array(8)].map((_, i) => (
                  <span className="punch-hole" key={i}></span>
                ))}
              </div>
              <div className="notepad-clip" aria-hidden="true">
                <span className="clip-loop-outer"></span>
                <span className="clip-loop-inner"></span>
              </div>
              <div className="notepad-tape-top" aria-hidden="true"></div>
              <ol className="ruled-list">
                {[
                  "Small Businesses",
                  "Startups",
                  "Local Businesses",
                  "Professionals",
                  "Growing Companies",
                  "Individuals & Creators"
                ].map((title, index) => (
                  <li className="ruled-item" key={title}>
                    <span className="ruled-num">0{index + 1}</span>
                    <span className="ruled-title">{title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="work-header">
          <div className="work-title-wrap">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Some Things We&apos;ve <span>Built</span></h2>
          </div>
          <Link className="all-work-btn" href="/work">
            All work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="work-clothesline-wrap">
          <div className="clothesline-rope" aria-hidden="true"></div>
          <div className="work-grid">
            {[
              {
                category: "Business Website",
                tag: "Template / Example structure",
                title: "Project Showcase — Business Website",
                description: "Replace this content with a real STELYX project. This template shows the structure a finished website case study should follow.",
                slug: "/work/business-website"
              },
              {
                category: "Custom Internal System",
                tag: "Template / Example structure",
                title: "Project Showcase — Custom Internal System",
                description: "Replace this content with a real STELYX project. This template shows the structure a finished custom software case study should follow.",
                slug: "/work/custom-internal-system"
              },
              {
                category: "Online Store",
                tag: "Template / Example structure",
                title: "Project Showcase — Online Store",
                description: "Replace this content with a real STELYX project. This template shows the structure a finished e-commerce case study should follow.",
                slug: "/work/online-store"
              }
            ].map((item, index) => (
              <div className={`work-hanger work-hanger-${index + 1}`} key={index}>
                <div className="clothespin" aria-hidden="true">
                  <span className="clothespin-wood"></span>
                  <span className="clothespin-spring"></span>
                </div>
                <article className="work-card">
                  <div className="work-card-top">
                    <span className="work-tag">{item.tag}</span>
                    <span className="work-num">0{index + 1}</span>
                  </div>
                  <div className="work-card-body">
                    <span className="work-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="work-card-foot">
                    <Link className="work-link" href={item.slug}>
                      View Case Study <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="eyebrow">GOOD WORK STARTS WITH A CONVERSATION</p>
          <h2>Have an idea? <span>Let&apos;s build it.</span></h2>
          <p>Tell us what you&apos;re trying to create, and we&apos;ll help you figure out the right way forward.</p>
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
