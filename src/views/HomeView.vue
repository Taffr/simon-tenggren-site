<template>
    <div class="main">
        <SocialButtons/>
    </div>
</template>
<script lang="ts">
import SocialButtons from "@/components/SocialButtons.vue"
import { defineComponent } from "vue";
export default defineComponent({
    name: 'HomeView',
    components : {
        SocialButtons
    }
});
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin: 5%;
    margin-top: 2%;
}
</style>