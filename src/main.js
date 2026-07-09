import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="page-shell">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="#" aria-label="MAP Lab home">
        <span class="brand-mark">M</span>
        <span>MAP Lab</span>
      </a>
      <div class="nav-actions">
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Frontend starter</p>
        <h1>Build clear, useful interfaces faster.</h1>
        <p class="intro">
          A simple responsive page initialized with Vite, ready for your next
          experiment, lab project, or product idea.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#features">Explore</a>
          <a class="button secondary" href="#contact">Get started</a>
        </div>
      </div>

      <div class="status-panel" aria-label="Project status">
        <div>
          <span class="label">Setup</span>
          <strong>Ready</strong>
        </div>
        <div>
          <span class="label">Stack</span>
          <strong>Vite + CSS</strong>
        </div>
        <div>
          <span class="label">Layout</span>
          <strong>Responsive</strong>
        </div>
      </div>
    </section>

    <section class="features" id="features" aria-label="Page features">
      <article>
        <span class="feature-icon">01</span>
        <h2>Clean Structure</h2>
        <p>Small files, readable markup, and a layout that is easy to extend.</p>
      </article>
      <article>
        <span class="feature-icon">02</span>
        <h2>Polished Styling</h2>
        <p>Modern spacing, accessible contrast, and mobile-friendly behavior.</p>
      </article>
      <article>
        <span class="feature-icon">03</span>
        <h2>Fast Workflow</h2>
        <p>Run a local dev server, edit files, and see changes instantly.</p>
      </article>
    </section>

    <section class="contact-band" id="contact">
      <div>
        <p class="eyebrow">Next step</p>
        <h2>Start shaping this into your real app.</h2>
      </div>
      <a class="button primary" href="mailto:hello@example.com">Contact</a>
    </section>
  </main>
`;
