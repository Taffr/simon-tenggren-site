<template>
    <div class="main">
        <h2 class="download">
            <a download="simontenggren_cv" href="CV_Q1_2022.pdf"> 
                Download PDF Version 
            </a>
        </h2>
        <div class="contactInfo">
            <h1 class="titleText">
                Contact
            </h1>
            <ul class="contactItems">
                <li class="contactItem">
                    <i class="bi bi-envelope"/>
                    simon.tenggren@gmail.com
                </li>
                <li class="contactItem">
                    <i class="bi bi-telephone"/>
                    +46766353579
                </li>
                <li class="contactItem">
                    <i class="bi bi-box-arrow-up-right"/>
                    <a href="http://simontenggren.xyz" target="_blank" rel="noopener noreferrer" > simontenggren.xyz </a>
                </li>
                <li class="contactItem">
                    <i class="bi bi-house-door"/>
                    Lund, Skåne, Sweden
                </li>
            </ul>
        </div>
        <div class="education">
            <h1 class="titleText"> Education </h1>
            <img class="schoolIcon" src="/src/assets/icons/school-icon-big.png">
            <h1>
                Lund University  
            </h1>
            <h2>
                LTH, Faculty of Engineering
            </h2>
            <h3 class="duration">
                Fall 2016&nbsp;&nbsp;-&nbsp;&nbsp;Spring 2022
            </h3>
            <h3>
                Master of Science in Engineering, Information and Communication Engineering Technologies
            </h3>
        </div>
        <DropDownButton :showDefault="false" :buttonText="'Employment'">
            <EmploymentList :employmentInfo="employments"/>
        </DropDownButton>

        <DropDownButton :showDefault="false" :buttonText="'Skills'">
            <SkillsList :skills="skills"/>
        </DropDownButton>

        <DropDownButton :showDefault="false" :buttonText="'Projects'">
            <ProjectList :projects="projects"/>
        </DropDownButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type EmploymentInfo from "@/types/EmploymentInfo";
import type { SkillInfo } from "@/types/SkillInfo";
import type ProjectInfo from "@/types/ProjectInfo";
import EmploymentList from '@/components/cv/EmploymentList.vue';
import SkillsList from '@/components/cv/SkillsList.vue';
import EmploymentData from '@/data/employments.json';
import SkillData from '@/data/skills.json';
import ProjectData from '@/data/projects.json';
import DropDownButton from '@/components/general/DropDownButton.vue';
import ProjectList from '@/components/cv/ProjectList.vue';

export default defineComponent({
    name: 'CV View',
    components: {
        EmploymentList,
        DropDownButton,
        SkillsList,
        ProjectList,
    },
    data() {
        return ({
            employments: EmploymentData as EmploymentInfo[],
            skills : SkillData as SkillInfo[],
            projects: ProjectData as ProjectInfo[],
        });
    }
});
</script>
<style scoped>

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 2vh;
    padding-top: 1vh;
    border-radius: 0.25rem;
    align-items: center;
    border: 2px var(--color-accent) solid;
}
.download {
    margin: 1%;
}
.education {
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    padding: 1rem;
    width: 80%;
    background-color: var(--color-icon);
    border-radius: 0.25rem;
    margin: 2rem;
}
.contactInfo{
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1rem;
    width: 80%;
    background-color: var(--color-icon);
}
.contactItems {
   
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    list-style: inside;
}
.contactItem {
    display: table-row;
}
.education:hover {
  transform: scale(1.002);
  transform-origin: bottom;
}
.education:active {
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}
.schoolIcon {
    width: 7rem;
    height: auto;
}
.titleText {
    color: var(--color-text);
}
.duration {
    font-style: italic;
}
</style>