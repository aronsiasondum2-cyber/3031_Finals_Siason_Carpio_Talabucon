
<script setup>
import BLISHero from '../BLIS_section/blis_hero.vue'
</script>

<template>
  <main class="blis-page">
    <BLISHero />

    <section>
      <h2>What You Will Learn</h2>
      <p>
        The BLIS program provides students with knowledge
        and skills in organizing, retrieving, preserving,
        and managing information.

        Students explore library management, cataloging,
        classification, information technology,
        research methods, digital libraries, and
        information services.

        The program also emphasizes communication,
        ethical information use, and critical thinking.
      </p>
    </section>

    <section>
      <h2>Career Opportunities</h2>
      <p>Graduates may pursue careers such as:</p>

      <ul>
        <li>Librarian</li>
        <li>Library Assistant</li>
        <li>Information Specialist</li>
        <li>Records Management Officer</li>
        <li>Archives Assistant</li>
        <li>Digital Library Specialist</li>
        <li>Research Assistant</li>
        <li>Information Services Associate</li>
      </ul>

      <p>
        Some professional positions, including librarian
        roles, may require licensure or additional
        qualifications depending on applicable regulations.
      </p>
    </section>

    <section>
      <h2>Why Choose This Program</h2>
      <p>
        BLIS is an excellent choice for students who
        are interested in books, research, technology,
        and information management.

        The program combines traditional library
        principles with modern digital technologies,
        helping students understand how information
        can be organized and accessed efficiently.
      </p>
    </section>

    <section>
      <h2>Who Should Enroll</h2>
      <p>
        This program is suitable for students who
        enjoy reading, researching, organizing
        information, and helping others find
        reliable sources.

        It is also ideal for individuals interested
        in library services, digital information
        systems, records management, and
        knowledge preservation.
      </p>
    </section>

    <section>
      <h2>Program Highlights</h2>

      <div class="info-grid">
        <article class="info-card">
          <h3>Library Management</h3>
          <p>
            Learn the principles of operating,
            organizing, and managing library
            resources and services.
          </p>
        </article>

        <article class="info-card">
          <h3>Information Organization</h3>
          <p>
            Explore cataloging, classification,
            indexing, and information retrieval.
          </p>
        </article>

        <article class="info-card">
          <h3>Digital Libraries</h3>
          <p>
            Discover how digital tools help
            preserve, organize, and provide
            access to information resources.
          </p>
        </article>

        <article class="info-card">
          <h3>Research and Information Services</h3>
          <p>
            Develop skills in assisting researchers,
            evaluating information, and supporting
            learning communities.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blis-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 24px 64px;
  background: #071d24;
}

section {
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  padding: 24px;
  box-sizing: border-box;
  background: #10323a;
  border: 1px solid #187b74;
  border-left: 5px solid #2dd4bf;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(45, 212, 191, 0.1);
}

h2 {
  margin: 0 0 12px;
  color: #5eead4;
}

p {
  margin: 0 0 12px;
  line-height: 1.7;
  color: #d1fae5;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  padding-left: 24px;
  line-height: 1.8;
  color: #d1fae5;
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
  border: 1px solid rgba(45, 212, 191, 0.4);
  border-radius: 8px;
  background: #15424a;
  transition: transform 0.2s ease;
}

.info-card:hover {
  transform: translateY(-4px);
}

.info-card h3 {
  margin: 0 0 10px;
  color: #99f6e4;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0;
  color: #d1fae5;
}

@media (max-width: 700px) {
  .blis-page {
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
