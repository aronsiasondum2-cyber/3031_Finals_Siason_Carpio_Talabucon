<template>
    <section class="member" id = "member">
        <div class="container">

            <div class ="txt">
                <h2>CONNECT</h2>
                <h1>Our Partners and Memberships</h1>
                <p>Driving technology for education</p>
            </div>
                <div class = "logo">
                    <img src = "@/assets/image/Oracle.png">
                    <img src = "@/assets/image/cisco.png">
                    <img src = "@/assets/image/acer.jpg">
                    <img src = "@/assets/image/huawei.jpg">
                </div>
        </div>
    </section>
</template>





<style scoped>
.member {
    scroll-margin-top: 72px;
    padding: 64px 7%;
    background: #f4f7f4;
}

.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 28px;
}

.txt {
    text-align: center;
}

.txt h2 {
    margin: 0 0 8px;
    color: #52705d;
    font-size: 14px;
    letter-spacing: 1px;
}

.txt h1 {
    margin: 0;
    color: #183b2a;
    font-size: clamp(26px, 3vw, 36px);
}

.txt p {
    margin: 10px 0 0;
    color: #59665d;
}

.logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 36px 64px;
}

.logo img {
    width: 120px;
    height: 80px;
    object-fit: contain;
}

@media (max-width: 560px) {
    .member {
        padding: 44px 6%;
    }

    .logo {
        gap: 20px;
    }

    .logo img {
        width: 96px;
        height: 64px;
    }
}
</style>