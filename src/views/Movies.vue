<template>
    <layout>
        <section>
            <div class="headMovie">
                <h2>All live actions</h2>
            </div>
            <ContentView/>
        </section>
    </layout>
</template>
<script>
import { mapStores } from 'pinia';
import { useContentStore } from '../stores/content';
import ContentView from '../components/contentView.vue'
export default {
    computed: {
        ...mapStores(useContentStore)
    },
    components: {
        ContentView
    },
    mounted() {
        this.contentStore.getData('movie')
    }
}
</script>
<style lang="scss" scoped>
.headMovie{
    margin: 50px 0 35px 0;

    h2 {
        color: #E1E1E1;
        font-family: Lato;
        font-size: 32px;
        font-weight: 400;
       
    }
}
</style>