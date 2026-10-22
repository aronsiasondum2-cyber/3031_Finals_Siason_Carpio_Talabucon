<template>
  <header class="blis-hero">
    <div class="hero-content">
      <p class="eyebrow">CONNECTING PEOPLE WITH KNOWLEDGE</p>
      <h1>Bachelor of <span>Library and Information Science</span></h1>

      <section class="overview" aria-labelledby="blis-overview-title">
        <h2 id="blis-overview-title">Program Overview</h2>
        <p>
          The Bachelor of Library and Information Science (BLIS) program prepares
          students to organize, preserve, manage, and share information in both
          physical and digital environments. Students study library services,
          information resources, research support, and modern information technologies.
        </p>
      </section>

      <div class="topics" aria-label="Program focus areas">
        <span>Information Organization</span>
        <span>Digital Libraries</span>
        <span>Research Services</span>
      </div>
    </div>
    <div class="book-pattern" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>
  </header>
</template>

<style scoped>
.blis-hero {
  position: relative;
  isolation: isolate;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: 24px;
  overflow: hidden;
  background: linear-gradient(125deg, #062c32 0%, #11545a 60%, #0e6866 100%);
  border-top: 1px solid rgba(103, 232, 249, 0.4);
  border-bottom: 1px solid rgba(103, 232, 249, 0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px clamp(24px, 7vw, 90px);
}

.eyebrow {
  margin: 0 0 14px;
  color: #a7f3d0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
}

h1 {
  max-width: 920px;
  margin: 0 0 30px;
  color: #f0fdfa;
  font-size: clamp(2rem, 4.2vw, 3.5rem);
  line-height: 1.15;
}

h1 span { color: #67e8f9; }

.overview {
  max-width: 900px;
  padding-top: 24px;
  border-top: 1px solid rgba(153, 246, 228, 0.35);
}

h2 {
  margin: 0 0 12px;
  color: #5eead4;
  font-size: 1.35rem;
}

.overview p {
  margin: 0;
  color: #e0f7f4;
  font-size: 1rem;
  line-height: 1.75;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.topics span {
  padding: 8px 14px;
  color: #e6fffb;
  background: rgba(45, 212, 191, 0.12);
  border: 1px solid rgba(94, 234, 212, 0.5);
  border-radius: 999px;
  font-size: 0.85rem;
}

.book-pattern {
  position: absolute;
  right: 3%;
  bottom: -28px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 260px;
  opacity: 0.12;
  pointer-events: none;
  transform: rotate(-12deg);
}

.book-pattern span {
  width: 40px;
  height: 180px;
  background: #a7f3d0;
  border-radius: 6px 6px 0 0;
}
.book-pattern span:nth-child(2) { height: 240px; width: 50px; }
.book-pattern span:nth-child(3) { height: 195px; width: 34px; }
.book-pattern span:nth-child(4) { height: 220px; width: 54px; }

@media (max-width: 700px) {
  .hero-content { padding: 44px 22px; }
  .eyebrow { letter-spacing: 0.12em; }
  .book-pattern { right: -70px; opacity: 0.07; }
}
</style>
