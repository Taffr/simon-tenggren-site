<template>
    <div class="grid">
        <div class="skillItem" v-for="skill of skills" :key="skill.id">
            <div class="itemContent"> 
                <div class="icon">
                    <i :class="skillTypeToIcon(skill.type)"> </i>
                </div>
                <h3 class="title">
                    {{skill.name}}
                </h3>
                <div class="skillLevel">
                    <h3 v-for="i in 5" :key="i">
                        <p v-if="i === skill.level" class="decoratedSkillLevel">
                            {{i}}
                        </p>
                        <p v-else class="nonDecoratedSkillLevel">
                            {{i}}
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { SkillInfo, SkillType } from "@/types/SkillInfo";
import { defineComponent } from "vue";
import type { PropType } from 'vue';

export default defineComponent({
    name: 'SkillList',
    props: {
        skills: {
            type: Array as PropType<SkillInfo[]>,
            required: true
        }
    },
    methods: {
        skillTypeToIcon(type: SkillType) {
            switch (type)   {
                case "Programming":
                    return "bi bi-code";
                case "Framework or Library":
                    return "bi bi-collection";
                case "Development Tool":
                    return "bi bi-tools";
                case "OS":
                    return "bi bi-motherboard";
                default: // Other
                    return "bi bi-boxes";
            }
        },

    }

});
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
}
.title {
    font-size: min(min(3vh, 3vw), 12rem);
    font-family: monospace;
}
.itemContent {
    text-align: center;
}

.skillItem {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    background-color: var(--color-icon);
    border-radius: 5px;
}
.skillItem:hover {
  transform: scale(1.01);
  transform-origin: bottom;
}
.skillItem:active {
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}
.skillLevel {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2vw;
}
.icon {
    font-size: 4vw;
}
.decoratedSkillLevel {
    margin: min(min(1vh, 1vw), 8rem);
    font-size: min(min(2vh, 2vw), 8rem);
    font-weight: bold;
    text-decoration: underline;
    color: var(--color-accent);
    font-family: monospace;
}

.nonDecoratedSkillLevel {
    margin: min(min(1vh, 1vw), 8rem);
    font-size: min(min(2vh, 2vw), 8rem);
    color: rgba(0, 0, 0, 0.25) ;
    font-family: monospace;
}
</style>