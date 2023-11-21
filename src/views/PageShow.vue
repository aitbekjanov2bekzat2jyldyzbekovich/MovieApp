<template>
    <layout>
        <div class="wrraperShow" v-if="show">
            <section class="introShow">
                <div class="imgBox">
                    <img v-if="show.image" :src="show.image.medium">
                    <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        v-else>
                </div>
                <div class="introInformationWrapper">
                    <div class="nameShow">
                        <h2 v-if="show.name">{{ show.name }}
                            <span>({{ show.premiered }})</span>
                        </h2>
                        <h2 v-else>404</h2>
                        <div class="supTitle">
                            <span v-if="show.genres" v-for="i in show.genres">{{ i }},</span>
                            <span v-else>404</span>
                            <span>*</span>
                            <span v-if="show.runtime">{{ show.runtime }}min</span>
                            <span v-else>404</span>
                        </div>
                    </div>
                    <div class="sumaryWrapp">
                        <h4>Overview</h4>
                        <div class="summary">
                            <p v-html="show.summary" v-if="show.summary"></p>
                            <p v-else>404</p>
                        </div>

                    </div>
                    <div class="episodesConteiner">
                        <div class="score">
                            <h4>Score</h4>
                            <span v-if="show.weight">{{ show.weight }}</span>
                            <span v-else>404</span>
                        </div>
                    </div>
                </div>
            </section>
            <CastActor />
            <seasons />
        </div>
    </layout>
</template>
<script>
import CastActor from '../components/CastActor.vue'
import seasons from '../components/seasons.vue'
export default {
    data: () => ({
        show: null
    }),
    methods: {
        async getShow() {
            const response = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}`)
            this.show = await response.json()
        }
    },
    components: {
        CastActor,
        seasons

    },
    mounted() {
        this.getShow()
    }
}
</script>

<style lang="scss" scoped>
.wrraperShow {
    margin: 60px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 45px;

    .introShow {
        display: flex;
        gap: 45px;

        .imgBox {
            width: 300px;
            height: 444px;
            flex-shrink: 0;
            border-radius: 6px;

            img {
                width: 100%;
                object-fit: cover;
                height: 100%;
                border-radius: 6px;
            }
        }

        .introInformationWrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .nameShow {
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2 {
                    color: #E1E1E1;
                    font-family: Lato;
                    font-size: 36px;
                }

                .supTitle {
                    display: flex;
                    gap: 10px;

                    span {
                        color: #FFF;
                        font-family: Lato;
                    }
                }
            }

            .sumaryWrapp {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 580px;
                height: 100px;
                border: 1px solid #4c4949;

                overflow: auto;

                &::-webkit-scrollbar {
                    width: 0;
                }

                h4 {
                    color: #FFF;
                    font-family: Lato;
                    font-size: 20px;
                }

                .summary {
                    p {
                        color: #E1E1E1;
                        font-family: Lato;
                    }
                }
            }

            .episodesConteiner {
                display: flex;
                gap: 90px;
                align-items: center;

            

                .score {
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    align-items: center;
                    border-radius: 8px;
                    border: 1px solid #A41B1B;
                    background: rgba(217, 217, 217, 0.10);

                    h4 {
                        color: #E1E1E1;
                        font-family: Lato;
                        font-size: 20px;
                    }

                    span {
                        color: #F33F3F;
                        font-family: Lato;
                        font-size: 36px;
                        font-weight: 700;

                    }
                }
            }

        }



    }
}
</style>
