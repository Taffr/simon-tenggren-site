<template>
    <div class="dropdown">
        <div class="button" @click="toggle">
            {{buttonText}} 
            &nbsp;
            <template v-if="enabled">
                <i class="bi bi-caret-up-fill"></i>
            </template>
            <template v-else>
                <i class="bi bi-caret-down-fill"></i>
            </template>
        </div>
        <template v-if="enabled">
            <slot/>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent} from "vue"

export default defineComponent({
    name: 'DropDownButton',
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        showDefault: {
            type: Boolean,
            required: false,
        }
    },
    data() {
        return ( {
            enabled: this.showDefault,
        });
    },
    methods : {
        toggle() {
            this.enabled = !this.enabled;
        }
    } 
});
</script>

<style scoped>
.button {
  margin-bottom:1vw;
  margin-left: 2vw;
  margin-right: 2vw;
  align-items: center;
  background-color: var(--color-icon);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: monospace;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3vw;
  min-width: 30vw;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.button:hover,
.button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: var(--color-text);
  transform: translateY(0);
}
.dropdown {
    min-width: 90%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: .25rem;
}
</style>