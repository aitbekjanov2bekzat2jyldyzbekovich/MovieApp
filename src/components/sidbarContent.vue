<template>
    <div class="content_sidbar">
        <article class="header_sidebar">
            <h1>Watchlists</h1>
        </article>
        <article class="navigation_sidebar">
            <router-link to="/" :class="{ choosedRout: this.$route.name === 'home' }">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <span>Home</span>
            </router-link>
            <router-link to="/movies" :class="{ choosedRout: this.$route.name === 'movies' }">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path
                        d="M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192V128z" />
                </svg>
                <span>Live actions</span>
            </router-link>
            <router-link to="/cartoons" :class="{ choosedRout: this.$route.name === 'cartoons' }">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <path
                        d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z" />
                </svg>
                <span>Cartoons</span>
            </router-link>
            <router-link to="/list-of-favorites" :class="{ choosedRout: this.$route.name === 'favorite' }">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <span>Favorite</span>
            </router-link>
            <button v-if="token" @click="deleteAcc">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
            </button>
            <router-link to="/login" class="login_button"
                :class="{ choosedRout: this.$route.name === 'login' || this.$route.name === 'registred' }" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path
                        d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
                <span>Login</span>
            </router-link>
        </article>
    </div>
</template>

<script>
export default {
    data: () => ({
        token: localStorage.token
    }),
    methods: {
       deleteAcc() {
       if (localStorage.token) {
            localStorage.removeItem('token')
            this.$router.push('/login')
       }
    }
}}
</script>



<style lang="scss" scoped>
.choosedRout {
    background: rgba(31, 31, 31, 1) !important;
}

.content_sidbar {
    padding: 25px 43px 25px 30px;
    display: flex;
    gap: 150px;
    left: 0;
    background-color: #000;
    flex-direction: column;
    position: fixed;
    height: 100vh;

    .header_sidebar {
        h1 {
            color: #F33F3F;
            font-family: Archivo;
            font-size: 40px;
            font-weight: 800;
        }
    }

    .navigation_sidebar {
        display: flex;
        flex-direction: column;
        gap: 20px;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 41px;
            border-radius: 6px;
            cursor: pointer;
            background-color: #F33F3F;
            border: none;
            border: 1px solid #F33F3F;
            transition: all 400ms linear;

            &:hover{
                background: transparent;
                svg{
                    fill: #F33F3F;
                }
            }

            svg{
                width: 20px;
                height: 20px;
                fill: #E1E1E1;
            }
        }

        a {
            display: flex;
            text-decoration: none;
            align-items: center;
            gap: 15px;
            height: 41px;
            width: 100%;
            padding-left: 15px;
            transition: all 400ms linear;
            border-radius: 6px;

            &:hover {
                background-color: rgba(31, 31, 31, 1);
            }

            span {
                font-size: 16px;
                color: #E1E1E1;
                font-family: Lato;
            }

            svg {
                width: 23.8px;
                height: 21px;
                fill: #E1E1E1;

            }
        }

        .login_button {
            background-color: #F33F3F;
            display: flex;
            justify-content: center;

            &:hover {
                span {
                    color: #E1E1E1;
                }

                svg {
                    fill: #E1E1E1;
                }
            }

            span {
                color: #141414;
                font-weight: 700;
            }

            svg {
                fill: #141414;
            }
        }
    }

    .profil_conteiner {
        .profil {
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            align-items: center;
            border-radius: 4px;
            border: 1px solid #E1E1E1;

            .inf_profil_wrapp {
                display: flex;
                align-items: center;
                gap: 16px;

                .logo_profil {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid #1F1F1F;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }

                .nikname_profil {
                    h5 {
                        color: #E1E1E1;
                        font-family: Roboto;
                        font-size: 12px;
                        font-weight: 400;

                    }
                }
            }

            button {
                display: flex;
                background: transparent;
                border: none;
                align-items: center;
                width: 14px;
                justify-content: space-between;
                height: 5px;
                cursor: pointer;


                span {

                    border: 2px solid #E1E1E1;
                }
            }
        }
    }
}</style>