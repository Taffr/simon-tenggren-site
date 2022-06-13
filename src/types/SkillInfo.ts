export type SkillType = "Programming" | "Framework or Library" | "Development Tool" | "OS" | "Other";
export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface SkillInfo {
    id: number;
    name: string,
    type: SkillType,
    level: SkillLevel,
};
