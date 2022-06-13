<template>
<div class="buttonContainer">
    <a href="https://github.com/Taff3r" target="_blank" rel="noopener noreferrer">
        <button class="socialButton">
            <div class="socialButtonContent">
                <i class="bi bi-github"></i>
            </div>
        </button>
    </a>
    <a href="https://www.linkedin.com/in/simon-tenggren-b30b01143/" target="_blank" rel="noopener noreferrer">
    <button class="socialButton">
        <div class="socialButtonContent">
            <i class="bi bi-linkedin"></i>
        </div>
    </button>
    </a>
    <a href="https://www.youtube.com/channel/UC5g4gHF3g6Q6MkwMFtMXs-Q" target="_blank" rel="noopener noreferrer">
        <button class="socialButton">
            <div class="socialButtonContent">
                <i class="bi bi-youtube"></i>
            </div>
        </button>
    </a>
    <a href="https://www.instagram.com/simontenggren/" target="_blank" rel="noopener noreferrer">
    <button class="socialButton">
        <div class="socialButtonContent">
            <i class="bi bi-instagram"></i>
        </div>
    </button>
    </a>
</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "SocialButtons",
});

</script>

<style>

.socialButtonContent {
    font-size: max(3vw, 3vh);
}

.buttonContainer {
    display: flex;
    flex-direction: row;
    border-style: solid;
    justify-content: space-evenly;
    border-radius: 0.25rem;
    padding: 2%;
    border-color: var(--color-accent);
}

.socialButton {
  align-items: center;
  background-color: var(--color-icon);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-width: 18vw;
  height: min(18vw, 18vh);
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 500ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.socialButton:hover,
.socialButton:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(255, 172, 0, 0.55);
}

.socialButton:hover {
  transform: translateY(-1px);
}

.socialButton:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>