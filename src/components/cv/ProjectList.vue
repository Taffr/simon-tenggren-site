<template>
    <div class="list">
        <div class="projectItem" v-for="project of projects" :key="project.id">
            <h1 class="title"> {{project.title}} </h1>
            <div class="description"> 
                {{project.description}}
            </div>
            <div class="links">
                <div v-for="tuple of project.links" :key="tuple[0]">
                    <a class="customLinkLook" :href="tuple[1]"> {{tuple[0]}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from 'vue';
import type ProjectInfo from "@/types/ProjectInfo";

export default defineComponent({
    name: 'ProjectList',
    props: {
        projects: {
            type: Array as PropType<ProjectInfo[]>,
            required: true
        }
    },
});
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
}
.description {
    text-align: center;
    padding: 1%;
}
.links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.projectItem {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    padding: 2%;
    display: flex;
    flex-direction: column;
    background-color: var(--color-icon);
    margin: 2%;
    border-radius: 5px;
}
.projectItem:hover {
  transform: scale(1.01);
  transform-origin: bottom;
}
.projectItem:active {
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}
.title {
    font-family: monospace;
    text-align: center;
    font-weight: bold;
    
}

.about {
    text-align: center;
}
.duration {
    text-align: center;
    font-style: italic;
}
.customLinkLook {
    color: var(--color-accent);
}
</style>