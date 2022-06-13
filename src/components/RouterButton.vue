<template>
<RouterLink :to="to">
    <button class="routerButton">
        <div class="buttonContent">
            <div class="iconDiv">
                <i :class="icon"> </i>
            </div>
            <div class="hidden">
                <h2 class="buttonText">
                    {{name}}
                </h2>
            </div>
        </div>
    </button>
</RouterLink>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, } from "vue-router";
import type { RouteRecordName } from "vue-router";
import type { PropType } from 'vue';
export default defineComponent({
    name: 'RouterButton',
    props: {
        name: {
            type: String as PropType<RouteRecordName | undefined>,
            required: true,
        },
        to:{
            type: String,
            required: true,
        },
        icon : {
            type: String, 
        }
    },
    components: {
        RouterLink,
    }
});
</script>
<style>

.routerButton {
    font-family: monospace;
    background-color: var(--color-icon);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    border-radius: 5px 5px 5px 5px;
    width: 16vw;
    height: 6vw; 
    margin: 1vw;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    cursor: pointer;
    transition: all 500ms;
}

.hidden {
    display: none;
}
.iconDiv {
    position: relative;
    font-size: min(min(5vh, 5vw), 15em);
    transition: 400ms;
}
.buttonContent {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
}
.buttonText {
    font-family: monospace;
    padding-top: 10%;
    text-align: center;
    color: var(--color-text);
}
.iconDiv:focus,
.iconDiv:hover {
  color: rgba(255, 172, 0, 0.55);
}
.buttonContent:focus,
.buttonContent:hover > .hidden {
    display:inherit;
    font-size: min(min(2vh, 2vw), 8em);
}
.buttonContent:hover > .iconDiv{
    color: rgba(255, 172, 0, 0.55);
}
</style>