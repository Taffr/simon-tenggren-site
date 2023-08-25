<template>
      <div class="main">
          <div class="sortingButtons">
            <button class="sortButton" @click="orderBy('lastUpdated')"> Order by Last Update </button>
            <button class="sortButton" @click="orderBy('language')"> Order by Language </button>
            <button class="sortButton" @click="orderBy('name')"> Order by Title </button>
          </div>
          <div class="list">
            <RepoList :repos="repositories" :order="order"/>
          </div>
      </div>
</template>
<script lang="ts">

import axios from 'axios';
import type { RepoInfo } from '@/types/RepoInfo';
import type  OrderTerm from '@/types/OrderTerm';
import { ref } from '@vue/reactivity';
import RepoList from '@/components/RepoList.vue';

const GITHUB_URL = 'https://api.github.com/users/Taffr/repos';
const asRepoInfo = (repo: any): RepoInfo => {
  return {
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    lastUpdated: new Date(repo.pushed_at),
    description: repo.description,
    language: repo.language
  };
};

export default {
  name: "RepoView",
  components: {
    RepoList
  },
  setup() {
    const repositories = ref<RepoInfo[]>([]);
    axios.get(GITHUB_URL).then(response => {
        repositories.value = response.data.map(asRepoInfo);
    });
    const order = ref<OrderTerm>('lastUpdated');
    const orderBy = ref((term : OrderTerm) : void => {
       order.value = term; 
    });

    return {repositories, order, orderBy};
  },
};
</script>

<style scoped>
.main {
  border: solid;
  border-color: var(--color-accent);
  border-radius: 5px;
  margin-left: 5%;
  margin-top: 2%;
  margin-right: 5%;
}
.sortButton {
  margin:2%;
  align-items: center;
  background-color: var(--color-icon);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: monospace;
  font-size: 1.2vw;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3vh;
  min-width: 22vw;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.sortButton:hover,
.sortButton:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.sortButton:hover {
  transform: translateY(-1px);
}

.sortButton:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: var(--color-text);
  transform: translateY(0);
}

.sortingButtons {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.list {
  display: flex;
  justify-content: center;
}
.loader,
.loader:before,
.loader:after {
  background: var(--black);
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}

.loader {
  color: var(--black);
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}

.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loader:after {
  left: 1.5em;
}

@-webkit-keyframes load1 {

  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }

  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

@keyframes load1 {

  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }

  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
