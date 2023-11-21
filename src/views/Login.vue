<template>
    <layout>
        <article class="headerLoginBox">
            <h2>
                Hello! <br> Please log in or create an account to use the features of this app
            </h2>
        </article>
        <div class="formBox">
            <div class="inputsWrp">
                <div class="inputs">
                    <label for="">Email *</label>
                    <input type="email" autocomplete="off" v-model="FormData.email">
                </div>
                <div class="inputs">
                    <label for="">Password *</label>
                    <input type="password" autocomplete="off" v-model="FormData.password" class="paswordLogin"
                        ref="logInput">
                    <span @click="changeType">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
                            :class="{ activyey: statusAye }">
                            <path
                                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="buttonWrp">
                <button @click="logout" :class="{ activButton: this.FormData.email.length && FormData.password.length }">
                    <authLoader v-if="statusLoader" />
                    <span v-else>Log in</span>

                </button>
                <router-link to="/registred">create an account</router-link>
            </div>
        </div>

    </layout>
</template>

<script>
import authLoader from '../components/authLoader.vue'
export default {
    data: () => ({
        FormData: {
            email: '',
            password: '',
            returnSecureToken: true
        },
        authApi: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSlIOyiNuwx6XUHdH1PkG5rAOxUp9KrEc',
        statusAye: false,
        statusLoader: false
    }),
    components: {
        authLoader
    },
    methods: {
        async logout() {
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
            if (this.$refs.logInput.type === 'password') {
                this.$refs.logInput.type = 'text'
                this.statusAye = true
            } else {
                this.$refs.logInput.type = 'password'
                this.statusAye = false
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.activyey {
    fill: #F33F3F !important;
}

.headerLoginBox {
    margin: 30px 0 103px 0;
    max-width: 450px;

    h2 {
        color: #E1E1E1;
        font-family: Lato;
        font-size: 32px;
        font-weight: 300;
    }
}

.formBox {
    margin: 0 auto;
    max-width: 351px;
    display: flex;
    flex-direction: column;
    gap: 52px;

    .inputsWrp {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;

            .paswordLogin {
                padding-right: 37px;
            }

            span {
                position: absolute;
                right: 10px;
                bottom: 11px;
                cursor: pointer;
                z-index: 1;

                svg {
                    fill: #E1E1E1;
                }
            }

            label {
                color: #E1E1E1;
                font-family: Lato;
                font-size: 20px;
                font-weight: 700;
            }

            input {
                height: 45px;
                background: transparent;
                border-radius: 4px;
                border: 1px solid #E1E1E1;
                outline: none;
                padding: 0 15px;
                color: #E1E1E1;
                font-family: Roboto;
                font-size: 16px;
                transition: all 400ms linear;

                &:focus {
                    border: 1px solid #F33F3F;
                }
            }
        }
    }

    .buttonWrp {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        button {
            width: 247px;
            height: 41px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            background: #F33F3F;
            border: none;
            cursor: no-drop;
            color: #141414;
            font-family: Lato;
            font-size: 18px;
            font-weight: 700;
            transition: all 400ms linear;
        }

        .activButton:hover {
            background: transparent;
            border: 3px solid #F33F3F;
            color: #E1E1E1;
            transform: scale(1.1);
            cursor: pointer;
        }

        a {
            color: #F33F3F;
            font-family: Lato;
            font-size: 18px;
            font-weight: 700;
        }
    }
}
</style>
