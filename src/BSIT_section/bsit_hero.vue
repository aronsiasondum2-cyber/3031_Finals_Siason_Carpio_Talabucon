<template>
  <header class="bsit-hero">
    <h1>Bachelor of Science in Information Technology</h1>
    <section>
      <h2>Program Overview</h2>
      <p>
        The Bachelor of Science in Information Technology (BSIT) program focuses
        on using technology to solve problems and support the needs of people and
        organizations. Students explore areas such as software development,
        databases, computer networks, and information systems.
      </p>
    </section>
  </header>
</template>

<style scoped>
.bsit-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: 24px;
  padding: 32px clamp(24px, 8vw, 100px);
  background: #13092a;
  border-top: 1px solid #9d4edd;
  border-bottom: 1px solid #9d4edd;
  box-shadow: 0 4px 20px rgb(217 70 239 / 12%);
}

h1 {
  width: 100%;
  max-width: 1200px;
  margin: 0 0 28px;
  color: #d946ef;
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 0 0 10px rgb(217 70 239 / 40%);
}

section {
  width: 100%;
  max-width: 1200px;
  padding-top: 24px;
  border-top: 1px solid rgb(157 78 221 / 55%);
}

h2 {
  margin: 0 0 12px;
  color: #d946ef;
}

p {
  margin: 0;
  color: #e2e8f0;
  line-height: 1.6;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  .bsit-hero {
    padding: 24px 14px;
  }

  section {
    padding-top: 18px;
  }
}
</style>