<script setup>
import DMIAHero from '../DMIA_section/dmia_hero.vue'
</script>

<template>
  <main class="dmia-page">
    <DMIAHero />

    <section>
      <h2>What You Will Learn</h2>
      <p>
        The BSDMIA program teaches students creative and technical
        skills in digital media. Students learn graphic design,
        animation, photography, video editing, interactive design,
        and visual communication.

        The program helps students use technology to create
        digital content and multimedia projects.
      </p>
    </section>

    <section>
      <h2>Career Opportunities</h2>
      <p>Graduates may pursue careers such as:</p>
      <ul>
        <li>Graphic Designer</li>
        <li>Multimedia Artist</li>
        <li>Animator</li>
        <li>Video Editor</li>
        <li>Web Designer</li>
        <li>UI/UX Designer</li>
        <li>Digital Content Creator</li>
      </ul>
      <p>
        Career opportunities depend on experience,
        specialization, and technical skills.
      </p>
    </section>

    <section>
      <h2>Why Choose This Program</h2>
      <p>
        BSDMIA combines creativity and technology.
        It allows students to develop artistic skills
        while learning how to use modern digital tools.

        Students can explore different areas of multimedia
        and create projects that demonstrate their creativity.
      </p>
    </section>

    <section>
      <h2>Who Should Enroll</h2>
      <p>
        This program is suitable for students who enjoy
        drawing, designing, photography, animation,
        and creating digital content.

        It is also ideal for students interested in
        combining art with technology.
      </p>
    </section>

    <section>
      <h2>Program Highlights</h2>

      <div class="info-grid">
        <article class="info-card">
          <h3>Creative Design</h3>
          <p>
            Learn graphic design, visual communication,
            and digital illustration.
          </p>
        </article>

        <article class="info-card">
          <h3>Multimedia Production</h3>
          <p>
            Develop skills in photography, animation,
            and video editing.
          </p>
        </article>

        <article class="info-card">
          <h3>Interactive Media</h3>
          <p>
            Explore interactive design and digital
            media technologies.
          </p>
        </article>

        <article class="info-card">
          <h3>Portfolio Development</h3>
          <p>
            Create digital projects that demonstrate
            artistic and technical skills.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.dmia-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 40px 24px 64px;
  box-sizing: border-box;
  background: #0f172a;
}

section {
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  padding: 24px;
  box-sizing: border-box;
  background: #1e293b;
  border: 1px solid #38bdf8;
  border-left: 5px solid #38bdf8;
  border-radius: 8px;
}

h2 {
  margin: 0 0 12px;
  color: #38bdf8;
}

p {
  margin: 0 0 12px;
  line-height: 1.6;
  color: #e2e8f0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  padding-left: 24px;
  line-height: 1.8;
  color: #e2e8f0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.info-card {
  padding: 18px;
  border: 1px solid #38bdf8;
  border-radius: 8px;
  background: #1e293b;
}

.info-card h3 {
  margin: 0 0 10px;
  color: #7dd3fc;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0;
  color: #e2e8f0;
}

@media (max-width: 700px) {
  .dmia-page {
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
