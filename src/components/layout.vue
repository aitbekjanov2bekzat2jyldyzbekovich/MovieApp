<template>
    
    <div class="container">
        <aside>
            <div class="bl"></div>
            <sidebarConent />
        </aside>
        <main>
            
            <slot />
        </main>
    </div>
</template>

<script>
import sidebarConent from '../components/sidbarContent.vue'

export default {
    components: {
        sidebarConent,
    
    }
}
</script>
<style lang="scss" scoped>
.container {
    max-width: 1300px;
    display: flex;

    margin: 0 auto;

    .bl {
        width: 284px;
    }

    main {
        width: 100%;
     
    }

}
</style>