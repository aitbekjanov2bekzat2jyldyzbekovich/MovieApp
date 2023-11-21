<template>
    <section v-if="this.contentStore.actors && this.contentStore.actors.length >= 5">
        <div class="headerCas">
            <h3>Cast</h3>
        </div>
        <swiper :slidesPerView="5" :spaceBetween="40" :modules="modules" class="mySwiper">
            <swiper-slide v-for="i in this.contentStore.actors" class="cards">

                <div class="imgCard">
                    <img :src="i.person.image.medium" v-if="i.person.image">
                    <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        v-else>
                </div>
                <div class="nameCard">
                    <div class="nameWrp">
                        <h5 v-if="i.person.name">{{ i.person.name }}</h5>
                        <h5 v-else>404</h5>
                        <span v-if="i.character.name">{{ i.character.name }}</span>
                    </div>

                </div>

            </swiper-slide>

        </swiper>
    </section>
    <div class="notfounsCast" v-else>
        <h3>Cast</h3>
        <div class="container">
            <span>404</span>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useContentStore } from '../stores/content';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapStores(useContentStore)
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },
    methods: {

    },
    mounted() {
        this.contentStore.getCastActor(this.$route.params.id)
    }
};
</script>

<style lang="scss" scoped>
.notfounsCast {
    h3 {
        color: #FFF;
        font-family: Lato;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .container{
        text-align: center;

        span{
            font-size: 20px;
            color: #F33F3F;
            font-family: lato;
            font-weight: 700;
        }
    }
}

section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .cards {
        display: flex;
        flex-direction: column;
        gap: 12px;
        background-color: rgba(26, 26, 26, 1);
        border-radius: 4px;

        .nameCard {
            padding: 0 12px 12px 12px;

            .nameWrp {
                display: flex;
                flex-direction: column;
                gap: 12px;
                width: 100%;
                height: 50px;
                overflow: auto;

                &::-webkit-scrollbar {
                    width: 0;
                }

                h5 {
                    font-family: Lato;
                    color: #E1E1E1;
                    font-family: Lato;
                    font-size: 16px;
                }

                span {
                    color: #E1E1E1;
                    font-family: Lato;
                    font-size: 14px;
                }
            }
        }

        .imgCard {
            width: 100%;
            height: 200px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px 4px 0px 0px;
            }
        }
    }

    .headerCas {
        h3 {
            color: #FFF;
            font-family: Lato;
            font-size: 20px;

        }
    }
}


.mySwiper {
    width: 1017px;
    cursor:grab;
    border: 1px solid #4c4949;
}
</style>
  