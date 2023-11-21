
<template>
    <layout>
        <headerInputUser />
        <div class="headhome" v-if="this.contentStore.userValue === ''">
            <h2>Random shows</h2>
        </div>
        <ContentView v-if="this.contentStore.userValue === ''" />
        <SearchContent v-else />
    </layout>
</template>
<script>
import ContentView from '../components/contentView.vue';
import headerInputUser from '../components/headerInputUser.vue';
import SearchContent from '../components/searchContent.vue';
import { mapStores } from 'pinia';
import { useContentStore } from '../stores/content';
export default {
    components: {
        headerInputUser,
        SearchContent,
        ContentView

    },
    computed: {
        ...mapStores(useContentStore)
    }
}
</script>

<style lang="scss" scoped>
.headhome {
    margin-bottom: 35px;

    h2 {
        color: #E1E1E1;
        font-family: Lato;
        font-size: 32px;
        font-weight: 400;
       
    }
}
</style>

