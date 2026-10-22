<template>
  <header class="dmia-hero">
    <div class="hero-content">
      <p class="hero-label">CREATIVITY MEETS TECHNOLOGY</p>

      <h1>
        Bachelor of Science in
        <span>Digital Media and Interactive Arts</span>
      </h1>

      <section>
        <h2>Program Overview</h2>
        <p>
          The Bachelor of Science in Digital Media and Interactive Arts
          (BSDMIA) program focuses on creativity, digital design,
          multimedia production, and interactive technologies.
          Students explore graphic design, animation, digital
          storytelling, video production, and interactive media.
        </p>
      </section>

      <div class="topics">
        <span>Graphic Design</span>
        <span>Animation</span>
        <span>Digital Media</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dmia-hero {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: 24px;
  padding: 40px 24px;
  box-sizing: border-box;
  background: #1e293b;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-label {
  margin: 0 0 16px;
  color: #7dd3fc;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

h1 {
  max-width: 900px;
  margin: 0 0 28px;
  color: white;
  font-size: 2.8rem;
  line-height: 1.2;
}

h1 span {
  color: #38bdf8;
}

section {
  padding-top: 24px;
  border-top: 1px solid #475569;
}

h2 {
  margin: 0 0 12px;
  color: #38bdf8;
}

p {
  color: #e2e8f0;
  line-height: 1.7;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.topics span {
  padding: 8px 14px;
  border: 1px solid #38bdf8;
  border-radius: 20px;
  color: white;
  font-size: 12px;
}

@media (max-width: 600px) {
  .dmia-hero {
    padding: 30px 18px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
