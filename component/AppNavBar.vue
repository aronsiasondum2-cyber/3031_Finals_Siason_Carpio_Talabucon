<template>
    <div class="menu">
        <div class="img-wrapper"><img src="@/assets/image/CSS.png" alt="cpu logo" /></div>
        <nav class="menu-items">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <a @click="$emit('navigate','program')">Programs</a>
            <a @click="$emit('navigate','facultystaff')">Faculty</a>
            <a @click="$emit('navigate','member')">Partners</a>
        </nav>
        
    </div>
</template>


<script setup>
defineEmits(['navigate'])
</script>


<style scoped>
.menu {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    width: 100%;
    min-height: 72px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 7%;
    background: #14532d;
}

.img-wrapper img {
    display: block;
    width: 52px;
}

.menu-items {
    display: flex;
    align-items: center;
    gap: 28px;
}

a {
    color: white;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    color: #fbbf24;
}

@media (max-width: 640px) {
    .menu {
        min-height: 64px;
        padding: 8px 5%;
    }

    .img-wrapper img {
        width: 42px;
    }

    .menu-items {
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 10px 16px;
    }

    a {
        font-size: 13px;
    }
}
</style>