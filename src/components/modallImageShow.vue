<template>
    <div class="modalImgWrapper" @click="this.contentStore.modalImageStatus =false" v-if="this.contentStore.modalImageStatus">
        <div class="imgWrp">
            <img v-if="this.contentStore.modalImgContent" :src="this.contentStore.modalImgContent" >
            <img v-else src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png">
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import {useContentStore} from '../stores/content'
export default {
    computed: {
        ...mapStores(useContentStore)
    }
}
</script>
<style lang="scss" scoped>
.modalImgWrapper{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.923);
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgWrp{
    width: 350px;
    height: 500px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
       

    }
}
</style>