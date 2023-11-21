<template>
    <section>
        <div class="head">
            <h3>Seasons</h3>
        </div>
        <div class="cardWrapp" v-if="this.contentStore.sesonsShow && this.contentStore.sesonsShow.length > 1">
            <div class="card" v-for="i in this.contentStore.sesonsShow">
                <div class="imgCard">
                    <img :src="i.image.medium" v-if="i.image">
                    <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        v-else>
                </div>
            </div>
        </div>
        <div class="notfounsCast" v-else>
        <div class="container">
            <span>404</span>
        </div>
    </div>
    </section>
</template>

<script>
import { mapStores } from "pinia"
import { useContentStore } from "../stores/content";
export default {
    computed: {
        ...mapStores(useContentStore)
    },
    mounted() {
        this.contentStore.getSesonsShow(this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped>

.notfounsCast {
 
    .container{
        padding-left: 500px;

        span{
            font-size: 20px;
            color: #F33F3F;
            font-family: lato;
            font-weight: 700;
        }
    }
}
section {
    .head {
        margin-bottom: 20px;

        h3 {
            color: #FFF;
            font-family: Lato;
            font-size: 20px;
        }
    }
}


.cardWrapp {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;


    .card {
      cursor: none;
        border-radius: 4px;
        background: #1F1F1F;


        .imgCard {
            width: 150px;
            height: 225px;
            border-radius: 4px 4px 0px 0px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px 4px 0px 0px;
                transition: all 400ms linear;

             
            }
        }

    

     
    }
}
</style>