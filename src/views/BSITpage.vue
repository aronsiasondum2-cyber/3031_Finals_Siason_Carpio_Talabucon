<script setup>
import BSITHero from '../BSIT_section/bsit_hero.vue'
</script>

<template>
  <main class="about-me-page">
    <BSITHero />

    <section>
      <h2>What You Will Learn</h2>
      <p>
        The BSIT program equips students with practical and theoretical knowledge in
        software development, database systems, networking, cybersecurity,
        troubleshooting, and information management. Students also build strong
        communication, teamwork, and analytical thinking skills needed in modern
        technology-driven workplaces.
      </p>
    </section>

    <section>
      <h2>Career Opportunities</h2>
      <p>Graduates may pursue roles such as:</p>
      <ul>
        <li>Web or application developer</li>
        <li>IT support specialist</li>
        <li>Systems analyst</li>
        <li>Database or network technician</li>
        <li>Technical support associate</li>
        <li>Help desk specialist or IT operations assistant</li>
      </ul>
      <p>
        Specific job requirements vary by employer, and some positions may require
        certifications, internship experience, or continued professional training.
      </p>
    </section>

    <section>
      <h2>Why Choose This Program</h2>
      <p>
        BSIT is a versatile program that blends technical knowledge with real-world
        problem solving. It gives students a strong foundation in computing while
        helping them explore different areas of information technology, from systems
        and networks to programming and digital solutions.
      </p>
    </section>

    <section>
      <h2>Who Should Enroll</h2>
      <p>
        This program is ideal for students who are curious about technology, enjoy
        solving problems, and are eager to learn by doing. It suits learners who are
        comfortable with computers, enjoy collaboration, and are willing to keep
        updating their skills as technology evolves.
      </p>
    </section>

    <section>
      <h2>Program Highlights</h2>
      <div class="info-grid">
        <article class="info-card">
          <h3>Core Curriculum</h3>
          <p>
            Students study programming, software engineering, database design,
            networking, systems administration, and digital information systems.
          </p>
        </article>
        <article class="info-card">
          <h3>Hands-on Learning</h3>
          <p>
            The program emphasizes laboratory work, projects, and practical
            exercises that help students apply technical concepts in real scenarios.
          </p>
        </article>
        <article class="info-card">
          <h3>Internship & Practice</h3>
          <p>
            Many institutions include internship or on-the-job training opportunities
            to help students gain professional exposure before graduation.
          </p>
        </article>
        <article class="info-card">
          <h3>Student Opportunities</h3>
          <p>
            Students may also participate in technology clubs, student organizations,
            workshops, and certification preparation activities.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  min-height: 100vh;
  background: #0a051a;
}

.about-me-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 40px 24px 64px;
  background: #0a051a;
}

section {
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  padding: 24px;
  background: #13092a;
  border: 1px solid #9d4edd;
  border-left: 5px solid #d946ef;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(217, 70, 239, 0.15);
}

h2 {
  margin: 0 0 12px;
  color: #d946ef;
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
  border: 1px solid rgba(157, 78, 221, 0.5);
  border-radius: 8px;
  background: rgba(19, 9, 42, 0.8);
}

.info-card h3 {
  margin: 0 0 10px;
  color: #f5d0fe;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0;
  color: #e2e8f0;
}

@media (max-width: 700px) {
  .about-me-page {
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
