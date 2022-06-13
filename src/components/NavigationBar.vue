<template>
<nav class="navBar">
    <div class="titleWrapper">
        <div class="titleText">
            simontenggren
        </div>
    </div>
    <div class="routerButtons">
        <div v-for="route of routes" :key="route.name">
            <RouterButton :name="route.name" :to="route.path" :icon="icons[route.path]"/>
        </div>
    </div>
</nav>
</template>

<script lang="ts">
import RouterButton from "./RouterButton.vue";
import router from '../router/index.js';
import { defineComponent } from "vue";
export default defineComponent({
    name: 'NavigationBar',
    components: {
        RouterButton
    },
    data() {
        return({
            routes: router.getRoutes(),
            icons: {
                "/"      : "bi bi-house",
                "/about" : "bi bi-info-square",
                "/repos" : "bi bi-code",
                "/cv"    : "bi bi-file-earmark-person",
            } as Record<string, string>
        });
    }
});
</script>
<style>

.navBar {
    position: fixed;
    z-index: 1020;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(0, 0, 0, 0.02) 0 2px 5px 0;
    top: 0;
    width: 100%;
    display: flex;
    background: var(--color-background);
    justify-content: space-around;
    flex-direction: row;
}
.routerButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
.titleText {
    color: var(--color-accent);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;
    font-size: 2.7vw;
    font-weight: bold;
}
.titleWrapper {
    display: flex;
    align-items: center;
    margin-top: 1vh;
    justify-content: center;
    border-width: 0 0 4rem 0;
    border-color: black;
}
</style>