<template>
    <header>
        <div class="formSearch">
            <div class="inputUserWrapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.16672 14.8543C4.47905 14.8543 1.47889 11.8542 1.47889 8.16652C1.47889 4.47885 4.47905 1.4787 8.16672 1.4787C11.8542 1.4787 14.8545 4.47885 14.8545 8.16652C14.8545 11.8542 11.8542 14.8543 8.16672 14.8543ZM20.7833 19.7377L14.4368 13.391C15.6193 11.9739 16.3333 10.1526 16.3333 8.16656C16.3333 3.66331 12.6698 0 8.16677 0C3.66353 0 0 3.66331 0 8.16656C0 12.6698 3.66353 16.3333 8.16677 16.3333C10.1526 16.3333 11.9739 15.6193 13.391 14.4366L19.7379 20.7833C19.8824 20.9278 20.0715 21 20.2607 21C20.4498 21 20.6391 20.9278 20.7833 20.7833C21.0722 20.4947 21.0722 20.0264 20.7833 19.7377Z"
                        fill="#D9D9D9" fill-opacity="0.3" />
                </svg>
                <input type="text" placeholder="Search  for movies by title" v-model="this.contentStore.userValue"
                    @input="this.contentStore.search()">
            </div>
        </div>
    </header>
</template>

<script>
import { mapStores } from 'pinia';
import { useContentStore } from '../stores/content'
export default {
    computed: {
        ...mapStores(useContentStore)
    }
}
</script>


<style lang="scss" scoped>
.formSearch {
    margin: 50px 0 35px 0;
    display: flex;


    .inputUserWrapp {
        position: relative;
        width: 100%;


        input {
            height: 45px;
            width: 100%;
            border-radius: 6px;
            border: 1px solid rgba(217, 217, 217, 0.30);
            background: transparent;
            color: rgba(217, 217, 217, 0.30);
            font-family: Lato;
            padding: 0 50px;
            outline: none;
            transition: all 400ms linear;

            &:focus {
                border: 1px solid #D9D9D9;
                color: #D9D9D9;

                &::placeholder {
                    color: #D9D9D9;
                }
            }
        }

        svg {
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 0;
        }
    }


}
</style>