<template>
    <span class="loader" />
</template>

<style lang="scss" scoped>
.loader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #f1f1f1 100%);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background:#F33F3F;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>