type LinkTuple<Text,Url> = [Text, Url];

export default interface ProjectInfo {
    id: number,
    title: string,
    description: string,
    links: LinkTuple<string, string>[],
};