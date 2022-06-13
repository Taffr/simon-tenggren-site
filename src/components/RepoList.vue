<template>
    <ul class="repoList">
        <li class="repoItem" v-for="repo of orderedRepos" :key="repo.id">
            <a class="noLinkLook" :href="repo.url" target="_blank" rel="noopener noreferrer">
                <div class="repoTitle">
                    <h2> 
                        {{repo.name}} 
                    </h2>
                </div>
                <div class="repoLanguageIcon">
                    <i :class="getIconClass(repo.language)"></i>
                </div>
                <div class="repoDescription">
                    <p>
                        {{repo.description}}
                    </p>
                </div>
                <div class="repoInfo">
                    <a :href="repo.url" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-link"></i>
                    </a>
                    <div class="repoDate">
                        <p :class="repoAge(repo.lastUpdated)"> 
                            {{repo.lastUpdated.toISOString().split('T')[0]}} 
                        </p>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">
import type { RepoInfo } from '@/types/RepoInfo';
import { computed, defineComponent } from 'vue';
import type OrderTerm from '@/types/OrderTerm';
import type { PropType } from 'vue';
export default defineComponent({
    name: "RepoList",
    props: {
        repos: {
            type: Array as PropType<RepoInfo[]>,
            required: true
        },
        order: {
            type: String as PropType<OrderTerm>,
            required: true
        }
    },
    setup(props) {
        const orderedRepos = computed(() => {
            return [... props.repos].sort((a: RepoInfo, b: RepoInfo) => {
                const aEl = a[props.order];
                const bEl = b[props.order];
                if (props.order === 'lastUpdated') {
                    return aEl > bEl ? -1 : aEl < bEl ? 1 : 0; 
                }
                
                return aEl > bEl ? 1 : aEl < bEl ? -1 : 0; 
            });
        });
        return {orderedRepos};
    },
    methods: {
        repoAge(updated: Date) : string {
            const year = 365;
            const halfYear = 182;
            const day = 1000 * 60 * 60 * 24;

            const now = Date.now();
            const diffDays = Math.ceil(now - updated.getTime()) / day;

            if (diffDays >= year) {
                return "ageOld";
            } else if (diffDays >= halfYear){
                return "ageMid";
            } else {
                return "ageRecent";
            }
        },
        getIconClass(language: string ) : string {
            if(!language) {
                return "";
            }
            const formatted = language.replace("TeX", "latex").toLowerCase().replace('++', 'plusplus');
            return "devicon-" + formatted + "-plain";
        }
    },
});

</script>
<style scoped>
.repoList {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 40vw;
}
.repoItem {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--color-icon);
    margin: 2vh;
    border-radius: 0.25rem;
}
.repoItem:hover {
  transform: scale(1.01);
  transform-origin: bottom;
}
.repoItem:active {
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}
.repoTitle {
    font-family: monospace;
    align-content: center;
    font-size: 2vw;
    text-align: center;
}
.repoLanguageIcon {
    text-align: center;
    color: var(--color-accent);
    font-size: 3.5vw;
}
.repoDescription {
    margin: 3vw;
    text-align: center;
}
.ageRecent {
    color:darkgreen;
}
.ageMid {
    color:orange;
}
.ageOld {
    color: red;
}
.repoInfo {
    display: flex;
    flex-direction: row;
    margin: 2vw;
    font-size: 1vw;
}
.noLinkLook {
    color: var(--color-text);
    text-decoration: none;
}
.repoDate {
    margin-left: auto;
}
.linkIcon {
    font-size: 20pt;
}
</style>