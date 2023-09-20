import webChatImage from "@/shared/assets/img/webchat.png";
import compilerImage from "@/shared/assets/img/compiler.png";
import chatBotImage from "@/shared/assets/img/chatbot.png";
import policyImage from "@/shared/assets/img/policy.png";
import thisPortfolioImage from "@/shared/assets/img/thisPortfolio.png";

import { StaticImageData } from "next/image";

export interface INodesData {
    name: string;
    imgSrc: StaticImageData;
    desc: string;
    extendedDesc: string;
    link: string;
    stack: string;
    extendedStack: string;
    coordinates: { x: number; y: number };
}

type TDefaultNodesData = Omit<INodesData, "coordinates">;

const getNodesDataWithCalculatedCoordinates = (nodesData: TDefaultNodesData[]): INodesData[] => {
    const nodesDataLen = nodesData.length;
    const baseStep = 400;

    let reversedIndex = 0;

    return nodesData.map((node, index) => {
        const increasedIndex = index + 1;

        if (nodesDataLen > 3) {
            if (increasedIndex <= Math.round(nodesDataLen / 2)) {
                return { ...node, coordinates: { x: baseStep * increasedIndex, y: 0 } };
            } else {
                return {
                    ...node,
                    coordinates: { x: baseStep * ++reversedIndex, y: baseStep + baseStep / 2 }
                };
            }
        }

        return { ...node, coordinates: { x: baseStep * increasedIndex, y: 0 } };
    });
};
export const getNodesData: (t: any) => INodesData[] = (t) =>
    getNodesDataWithCalculatedCoordinates([
        {
            name: t("nameWC"),
            imgSrc: webChatImage,
            desc: t("descWC"),
            extendedDesc: t("extendedDescWC"),
            link: "https://github.com/orgs/INApp-team/repositories",
            stack: t("stackWC"),
            extendedStack:
                "React / Typescript / Zustand / Tailwind / PeerJs / SocketIO / NodeJs / Express / MongoDB / Docker / Docker-compose / Nginx / Terraform / Kubernetes"
        },
        {
            name: t("nameBC"),
            imgSrc: chatBotImage,
            desc: t("descBC"),
            extendedDesc: t("extendedDescBC"),
            link: "https://github.com/aver77/hashbon-task",
            stack: t("stackBC"),
            extendedStack: "React / Typescript / SCSS / Fetch ReadableStream"
        },
        {
            name: t("nameCompiler"),
            imgSrc: compilerImage,
            desc: t("descCompiler"),
            extendedDesc: t("extendedDescCompiler"),
            link: "https://github.com/aver77/Web-compiler",
            stack: t("stackCompiler"),
            extendedStack:
                "React / JavaScript / Material UI / CSS in JS / i18n / NodeJs / Express / Child processes"
        },
        {
            name: t("namePolicy"),
            imgSrc: policyImage,
            desc: t("descPolicy"),
            extendedDesc: t("extendedDescPolicy"),
            link: "https://github.com/aver77/p-24-dubai",
            stack: t("stackPolicy"),
            extendedStack: "React / Typescript / Zustand / Ant Design / SCSS Modules / i18n"
        },
        {
            name: t("namePortfolio"),
            imgSrc: thisPortfolioImage,
            desc: t("descPortfolio"),
            extendedDesc: t("extendedDescPortfolio"),
            link: "https://github.com/aver77/next-portfolio",
            stack: t("stackPortfolio"),
            extendedStack:
                "NextJs 13v / Typescript / SCSS Modules / i18n / Framer-motion / React-flow"
        }
    ]);
