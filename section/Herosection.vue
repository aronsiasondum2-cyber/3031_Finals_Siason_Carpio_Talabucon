<template>
    
        <section id = "hero" class="hero">
            
            <div class="container">
                <div class = "img">
                    <img src=@/assets/image/CSS.png alt="CSS LOGO">
                </div>
                <div class = "text">
                    <p>the CCS core practices that build bridges between gaps</p>
                    <h1>REMEMBER CONNECT ENGAGE BUILD SHARE</h1>
                    <h2>different PEOPLE, ONE goal</h2>
                     <div class = "btn">
                    <a class="hero-cta" href="#program">YOUR future begins here</a>
                </div>
                </div>

            </div>
        </section>
    
</template>


<style scoped>
.hero {
    min-height: 430px;
    scroll-margin-top: 72px;
}

.container {
    display: flex;
    min-height: 430px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 64px 8%;
    background: #f4f7f4;
}

.img img {
    display: block;
    width: 170px;
    height: auto;
}

.text {
    max-width: 640px;
    color: #183b2a;
}

.text p {
    margin: 0 0 14px;
    color: #52705d;
    font-size: 16px;
}

.text h1 {
    margin: 0;
    font-size: clamp(30px, 4vw, 48px);
    line-height: 1.15;
}

.text h2 {
    margin: 14px 0 0;
    color: #607568;
    font-size: 20px;
    font-weight: 500;
}

.btn {
    margin-top: 24px;
}

.hero-cta {
    display: inline-block;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    background: #e9a820;
    color: #183b2a;
    font: inherit;
    font-weight: 600;
    text-decoration: none;
}

@media (max-width: 640px) {
    .container {
        min-height: 0;
        flex-direction: column;
        gap: 24px;
        padding: 52px 7%;
        text-align: center;
    }

    .img img {
        width: 120px;
    }
}
</style>
