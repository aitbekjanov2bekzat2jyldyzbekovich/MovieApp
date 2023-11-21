<template>
    <div class="cardWrapp">
        <div class="card" v-for="i in this.contentStore.dataView ">
            <div class="imgCard">
                <img :src="i.image.medium" v-if="i.image">
                <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" v-else>
            </div>
            <div class="betweenInf">
                <button @click="this.contentStore.addFavorite(i)">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </svg>
                </button>
                <div class="rating">
                    <span v-if="i.rating.average">{{ i.rating.average }}</span>
                    <span v-else>404</span>
                </div>
            </div>
            <div class="cardName">
                <router-link :to='`/${i.name}/${i.id}`'>
                    <h5 v-if="i.name">{{ i.name }} <br> {{ i.premiered }}</h5>
                    <h5 v-else>404</h5>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useContentStore } from '../stores/content';
export default {
    computed: {
        ...mapStores(useContentStore)
    },
    mounted() {
        this.contentStore.getData('home')
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.cardWrapp {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    margin-bottom: 50px;

    .card {
        display: flex;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
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

                &:hover {
                    transform: scale(1.2);

                }
            }
        }

        .betweenInf {
            display: flex;
            gap: 4px;
            justify-content: end;
            padding-right: 5px;
            align-items: center;

            button {
                width: 20.93px;
                height: 19px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                border: none;
                cursor: pointer;
                border-radius: 50% 50%;
                transition: all 400ms linear;

                svg {
                    fill: #E1E1E1;
                }

                &:active {
                    svg {
                        fill: #F33F3F;
                    }

                    border: 1px solid #F33F3F;
                }
            }

            .rating {
                span {
                    color: #E1E1E1;
                    font-family: Lato;
                }
            }
        }

        .cardName {
            width: 130px;
            height: 76px;
            margin: 0 auto;
            margin-bottom: 10px;
            overflow: auto;


            &:hover {
                a {
                    text-decoration: underline;
                    color: #E1E1E1;
                }


            }

            &::-webkit-scrollbar {
                width: 0;
            }

            h5 {
                color: #E1E1E1;
                font-family: Lato;
                font-size: 16px;
                font-weight: 400;

            }
        }
    }
}
</style>