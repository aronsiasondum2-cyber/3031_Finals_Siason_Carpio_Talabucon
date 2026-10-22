<script setup>
import CSHero from '../BSCS_section/cs_hero.vue'
</script>

<template>
  <main class="bscs-page">
    <CSHero />

    <section>
      <h2>What You Will Learn</h2>
      <p>
        The BSCS program builds strong foundations in programming, algorithms,
        software engineering, data structures, systems design, and computing theory.
        Students also develop problem-solving, analytical thinking, and teamwork
        skills needed to design and build modern digital solutions.
      </p>
    </section>

    <section>
      <h2>Career Opportunities</h2>
      <p>Graduates may pursue roles such as:</p>
      <ul>
        <li>Software Developer</li>
        <li>Web or Mobile Application Developer</li>
        <li>Systems Analyst</li>
        <li>Database Administrator</li>
        <li>Cybersecurity Analyst</li>
        <li>QA Engineer</li>
        <li>Data Analyst</li>
      </ul>
      <p>
        Career paths may vary depending on specialization, internship experience,
        and the skills students build throughout the program.
      </p>
    </section>

    <section>
      <h2>Why Choose This Program</h2>
      <p>
        BSCS is a future-focused program for students who are curious about how
        technology works and want to create software, systems, and innovative digital
        tools. It combines theory with hands-on learning so students can tackle real
        technology challenges with confidence.
      </p>
    </section>

    <section>
      <h2>Who Should Enroll</h2>
      <p>
        This program is ideal for students who enjoy logic, coding, mathematics,
        and problem-solving. It suits learners who are interested in software
        development, emerging technology, and building practical solutions for
        modern industries.
      </p>
    </section>

    <section>
      <h2>Program Highlights</h2>
      <div class="info-grid">
        <article class="info-card">
          <h3>Core Computing</h3>
          <p>
            Study programming, data structures, algorithms, operating systems,
            computer architecture, and software design.
          </p>
        </article>
        <article class="info-card">
          <h3>Real-World Projects</h3>
          <p>
            Work on hands-on projects that help you build practical solutions,
            improve coding skills, and prepare for professional work.
          </p>
        </article>
        <article class="info-card">
          <h3>Innovation & Research</h3>
          <p>
            Explore emerging trends such as artificial intelligence, data science,
            cybersecurity, and computing technologies.
          </p>
        </article>
        <article class="info-card">
          <h3>Career Readiness</h3>
          <p>
            Gain the technical foundation and confidence needed to pursue careers
            in software engineering, IT, and digital innovation.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bscs-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 24px 64px;
  background: #08131d;
}

section {
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  padding: 24px;
  box-sizing: border-box;
  background: #0f2436;
  border: 1px solid #38bdf8;
  border-left: 5px solid #38bdf8;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.12);
}

h2 {
  margin: 0 0 12px;
  color: #7dd3fc;
}

p {
  margin: 0 0 12px;
  line-height: 1.7;
  color: #dbeafe;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  padding-left: 24px;
  line-height: 1.8;
  color: #dbeafe;
}

li {
  margin-bottom: 5px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.info-card {
  padding: 18px;
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 8px;
  background: #132c3c;
}

.info-card h3 {
  margin: 0 0 10px;
  color: #a5f3fc;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0;
  color: #dbeafe;
}

@media (max-width: 700px) {
  .bscs-page {
    padding: 24px 14px 40px;
  }

  section {
    padding: 18px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
