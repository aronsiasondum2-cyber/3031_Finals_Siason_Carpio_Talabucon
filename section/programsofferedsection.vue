<template>
    <section id="program" class="program">
        <div class="container">
            <div class='leftcorner'>
                <div><img src='@/assets/image/ComSci.png'></div>
                <div>
                    <h1>Computer Science</h1>
                    <p>The Computer Science (CS) Program is designed for students who wants to study computing in depth,
                        focusing in the software, the hardware</p>
                    <div class="program-actions">
                        <router-link class="learn-more-btn" :to="{ name: 'bscs' }">Learn More</router-link>
                    </div>
                </div>
            </div>

            <div class='midleft'>
                <img src='@/assets/image/ITSO.png'>
                <div>
                    <h1> Information Technology</h1>
                    <p>The Information Technology (IT) program is designed to bridge the gap between computer science
                        and management information systems.</p>
                    <div class="program-actions">
                        <router-link class="learn-more-btn" :to="{ name: 'bsit' }">Learn More</router-link>
                    </div>
                </div>
            </div>
            <div class="midright">
                <img src='@/assets/image/ARTS.png'>
                <div>
                    <h1>Digital Media and Interactive Arts</h1>
                    <p>The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity,
                        applied arts and digital media technologies.</p>
                    <div class="program-actions">
                        <router-link class="learn-more-btn" :to="{ name: 'bsdmia' }">Learn More</router-link>
                    </div>
                </div>
            </div>
            <div class='rightcorner'>
                <img src='@/assets/image/LISSO.png'>
                <div>
                    <h1>Library Information Science</h1>
                    <p>The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that
                        prepares students in the development</p>
                    <div class="program-actions">
                        <router-link class="learn-more-btn" :to="{ name: 'blis' }">Learn More</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.program {
    scroll-margin-top: 72px;
    padding: 64px 7%;
    background: #fff;
}

.container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
}

.leftcorner,
.midleft,
.midright,
.rightcorner {
    display: flex;
    min-height: 290px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding: 28px 22px;
    border: 1px solid #e5eae5;
    border-radius: 6px;
    background: #f8faf8;
}

.container img {
    width: 90px;
    height: 90px;
    object-fit: contain;
}

.container h1 {
    margin: 18px 0 8px;
    color: #183b2a;
    font-size: 19px;
    text-align: center;
}

.container p {
    margin: 0;
    color: #59665d;
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
}

@media (max-width: 900px) {
    .container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 560px) {
    .program {
        padding: 40px 6%;
    }

    .container {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .leftcorner,
    .midleft,
    .midright,
    .rightcorner {
        min-height: 0;
    }
}

.program-actions {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.learn-more-btn {
  padding: 8px 16px;
  border: 1px solid #183b2a;
  background: transparent;
  color: #183b2a;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.learn-more-btn:hover {
  background: #183b2a;
  color: #fff;
}
</style>