
<template>
  <section class="cs-hero">
    <div class="hero-content">
      <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>

      <h1>
        Bachelor of Science in
        <span>Computer Science</span>
      </h1>

      <p class="hero-description">
        Explore the world of programming, artificial intelligence,
        software development, and innovative computing technologies.
        Build the skills to create solutions for tomorrow's challenges.
      </p>

      <div class="hero-highlights">
        <div class="highlight">
          <span class="highlight-number">01</span>
          <span class="highlight-title">Programming</span>
        </div>

        <div class="highlight">
          <span class="highlight-number">02</span>
          <span class="highlight-title">Innovation</span>
        </div>

        <div class="highlight">
          <span class="highlight-number">03</span>
          <span class="highlight-title">Technology</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cs-hero {
  width: 100%;
  max-width: 1200px;
  padding: 56px 32px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #0b1e33, #06111f);
  border: 1px solid #0077b6;
  border-left: 5px solid #00b4d8;
  border-radius: 12px;
  color: #e2e8f0;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.eyebrow {
  margin: 0 0 24px;
  color: #67e8f9;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
}

h1 {
  margin: 0 0 24px;
  color: #ffffff;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
  font-weight: 800;
}

h1 span {
  display: block;
  color: #00d4ff;
}

.hero-description {
  max-width: 800px;
  margin: 0 0 38px;
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
}

.hero-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 8px;
}

.highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 120px;
  padding: 20px 14px;
  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(145deg, #122b43, #0d2034);
  border: 1px solid rgba(0, 180, 216, 0.35);
  border-radius: 10px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.highlight:hover {
  transform: translateY(-4px);
  border-color: #00d4ff;
  background: #15324b;
  box-shadow: 0 8px 24px rgba(0, 180, 216, 0.12);
}

.highlight-number {
  color: #00d4ff;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 1px;
}

.highlight-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .cs-hero {
    padding: 32px 20px;
  }

  .eyebrow {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
  }

  .hero-description {
    font-size: 1rem;
    margin-bottom: 28px;
  }

  .hero-highlights {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .highlight {
    min-height: 95px;
  }
}
</style>
