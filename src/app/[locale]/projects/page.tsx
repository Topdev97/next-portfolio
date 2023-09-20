import { Metadata } from "next";
import ProjectsModule from "@/modules/projects";

export const metadata: Metadata = {
    title: "NA PROJECTS",
    description: "Projects layout of Frontend engineer CV"
};
export default function Projects() {
    return <ProjectsModule />;
}
