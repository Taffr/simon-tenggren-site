import type { RepoInfo } from "@/types/RepoInfo";
import axios from "axios";
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "repos",
  state: () => ({
    gathered: false,
    repos: [] as RepoInfo[],
  }),
  getters: {
    getRepos: (state) => {
        return state.repos;
    }
  },

  actions: {
    getGitHubRepos() {
        const GITHUB_URL = 'https://api.github.com/users/Taff3r/repos';
        if (!this.gathered) {
            axios.get(GITHUB_URL).then(response => {
                this.repos = response.data.map(asRepoInfo);
                this.gathered = true;
            });
        }
    },
  },
});
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

