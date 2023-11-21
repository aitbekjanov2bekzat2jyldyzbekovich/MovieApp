<template>
    <layout>
        <section v-if="this.contentStore.favData.length">
            <div class="headFav">
                <h3>{{ this.contentStore.favData.length }} selected shows</h3>
            </div>
            <div class="conteinerCard">
                <div class="showsHead">
                    <h4>Shows</h4>
                </div>
                <div class="cardWrapp">
                    <div class="card" v-for="i in this.contentStore.favData">
                        <div class="leftCardContent">
                            <div class="imageCard" @click="this.contentStore.openModallWindow(i.image.medium)">
                                <img :src="i.image.medium" v-if="i.image">
                                <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                                    v-else>
                            </div>
                            <div class="namesShowCard">
                                <router-link :to="`/${i.name}/${i.id}`">
                                    <p v-if="i.name">{{ i.name }} {{ i.premiered }}</p>
                                    <p v-else>404</p>
                                </router-link>

                            </div>
                        </div>


                        <button @click="this.contentStore.deleteFavorite(i.id)">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="donHaveFav" v-else>
            <router-link to="/">
                Add to favorite +
            </router-link>
        </div>
    </layout>
</template>

<script>
import CastActor from '../components/CastActor.vue';
import { mapStores } from 'pinia'
import { useContentStore } from '../stores/content';
export default {
    computed: {
        ...mapStores(useContentStore)
    },
  
    mounted() {
        this.contentStore.getFavorite()
    },
    components: {
        CastActor
    }
    
}
</script>

<style lang="scss" scoped>
.donHaveFav {
    width: 100%;
    height: 699px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: #F33F3F;
        font-size: 45px;
        font-family: lato;
        font-weight: 400;
        text-decoration: none;
        transition: all 400ms linear;

        &:hover {
            border: 2px solid #F33F3F;
            border-radius: 4px;
        }
    }
}

section {
    width: 100%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 35px;

    .headFav {
        h3 {
            color: #E1E1E1;
            font-family: Lato;
            font-size: 32px;
            font-weight: 400;
        }
    }

    .conteinerCard {
        display: flex;
        flex-direction: column;
        gap: 5px;

        h4 {
            color: #E1E1E1;
            font-family: Lato;
            font-size: 18px;
        }
    }

    .cardWrapp {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .card {
            width: 100%;
            height: 75px;
            border-radius: 4px;
            border: 1px solid #E1E1E1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 17px;

            .leftCardContent {
                display: flex;
                height: 100%;
                align-items: center;
                gap: 15px;

                .imageCard {
                    width: 50px;
                    height: 100%;
                    border-radius: 4px 0px 0px 4px;
                    cursor: pointer;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 4px 0px 0px 4px;
                    }
                }

                .namesShowCard {
                    width: 654px;
                    height: 19px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    overflow: auto;

                    &:hover{
                        a{
                            color: #E1E1E1;
                            text-decoration: underline;
                        }
                    }
                    &::-webkit-scrollbar {
                        width: 0;
                    }

                    p {
                        color: #E1E1E1;
                        font-family: Lato;
                    }
                }
            }

            button {
                padding: 11px 10px;
                background: transparent;
                border-radius: 4px;
                border: 1px solid #F33F3F;
                cursor: pointer;
                color: #E1E1E1;
                font-family: Lato;
                font-size: 16px;
                transition: all 400ms linear;

                &:hover {
                    background-color: #F33F3F;
                }

            }
        }
    }

}
</style>