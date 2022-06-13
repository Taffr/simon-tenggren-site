<template>
    <div>   
        <div class="list">
            <div v-for="e of employmentInfo" class="employmentItem" :key="e.id">
                <h3 class="title">
                    {{e.employer}}  &nbsp;|&nbsp;&nbsp;{{e.role}} 
                </h3>
                <p class="duration">
                    {{e.from}} - {{e.to}}
                </p>
                <p class="about">
                    {{e.about}}
                </p>
                <div class="skillList">
                    <b class="skillItem" v-for="skill of e.skills" :key="skill">
                        {{skill}} 
                    </b>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type EmploymentInfo from '@/types/EmploymentInfo';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'EmploymentList',
    props: {
        employmentInfo : {
            type: Array as PropType<EmploymentInfo[]>,
            required: true,
        }
    }

})
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
.employmentItem {
    padding: 2%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    flex-direction: column;
    background-color: var(--color-icon) !important;
    margin: 2%;
    border-radius: 5px;
}
.employmentItem:hover {
  transform: scale(1.01);
  transform-origin: bottom;
}
.employmentItem:active {
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}
.title {
    font-family: monospace;
    text-align: center;
    font-weight: bold;
    
}
.skillItem {
    padding: 2%;
    font-weight: bold;
    font-family: monospace;
    text-decoration: underline solid 2px ;
    text-decoration-color: var(--color-accent);
}
.skillList {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.about {
    text-align: center;
}
.duration {
    text-align: center;
    font-style: italic;
}
</style>
