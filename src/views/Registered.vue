<template>
    <layout>
        <section class="registred">
            <article class="headRegistr">
                <h2>Hello! <br> Please log in or create an account to use the features of this app </h2>
            </article>
            <article class="formWrapper">
                <div class="inputWrp">
                    <div class="emailWrp">
                        <label for="email">Email *</label>
                        <input type="email" id="email" autocomplete="off" v-model="FormData.email">
                    </div>
                    <div class="paswordWrp">
                        <label for="password">Password *</label>
                        <input type="password" id="password" autocomplete="off" v-model="FormData.password" ref="pass">
                        <span @click="changeType">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
                                :class="{ activyey: statusYey }">
                                <path
                                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div class="buttonsiginIn">
                    <button @click="signUp"
                        :class="{ activButton: this.FormData.email.length && FormData.password.length }">
                        <authLoader v-if="statusLoader"/>
                        <span v-else> Create Profile</span>
                    </button>
                </div>
            </article>
        </section>
    </layout>
</template>

<script>
import authLoader from '../components/authLoader.vue'
export default {
    data: () => ({
        imgsrc: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg',
        FormData: {
            email: '',
            password: '',
            returnSecureToken: true
        },
        authApi: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSlIOyiNuwx6XUHdH1PkG5rAOxUp9KrEc',
        statusYey: false,
        statusLoader: false

    }),
    components: {
        authLoader
    },
    methods: {
        async signUp() {
            if (this.FormData.password.length && this.FormData.password.length) {
                this.statusLoader = true
                const response = await fetch(this.authApi, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.FormData)
                })
                const ress = await response.json()
                if (response.ok) {
                    this.statusLoader = false
                    localStorage.setItem('token', ress.idToken)
                    this.$router.push('/')
                } else {
                    this.statusLoader = false
                    this.FormData.password = ''
                    this.FormData.email = ''
                    alert(ress.error.message)
                }
            }
        },
        changeType() {
            if (this.$refs.pass.type === 'password') {
                this.$refs.pass.type = 'text'
                this.statusYey = true
            } else {
                this.$refs.pass.type = 'password'
                this.statusYey = false
            }

        }
    },


}
</script>

<style lang="scss" scoped>
.activyey {
    fill: #F33F3F !important;
}

.registred {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 63px;
    align-items: center;
    padding-top: 30px;

    .headRegistr {
        width: 100%;

        h2 {
            color: #E1E1E1;
            font-family: Lato;
            font-size: 32px;
            font-weight: 300;
            width: 450px;
        }
    }

    .formWrapper {
        width: 351px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .inputWrp {
            width: 100%;
            margin-bottom: 52px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .paswordWrp {
                position: relative;

                span {
                    position: absolute;
                    right: 10px;
                    bottom: 11px;

                    svg {
                        fill: #E1E1E1;
                        cursor: pointer;
                    }
                }

                input {
                    padding-right: 37px;
                }
            }


            div {
                display: flex;
                flex-direction: column;
                gap: 8px;

                label {
                    color: #E1E1E1;
                    font-family: Lato;
                    font-size: 20px;
                    font-weight: 700;
                    cursor: pointer;

                }

                input {
                    border-radius: 4px;
                    border: 1px solid #E1E1E1;
                    padding: 0 15px;
                    width: 100%;
                    background: transparent;
                    outline: none;
                    height: 45px;
                    color: #E1E1E1;
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: 400;
                    transition: all 400ms linear;

                    &:focus {
                        border: 1px solid #F33F3F;
                    }
                }
            }
        }

        .buttonsiginIn {
            margin-bottom: 50px;

            button {
                width: 247px;
                height: 41px;
                border-radius: 6px;
                background: #F33F3F;
                border: none;
                color: #141414;
                font-family: Lato;
                font-size: 18px;
                font-weight: 700;
                cursor: no-drop;
                transition: all 400ms linear;
            }

            .activButton:hover {
                background: transparent;
                border: 3px solid #F33F3F;
                color: #E1E1E1;
                transform: scale(1.1);
                cursor: pointer;
            }
        }
    }
}
</style>