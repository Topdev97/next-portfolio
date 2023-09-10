export interface ICompany {
    jobTitle: string;
    companyName: string;
    companyLocation: string;
    companyYears: string;
    companyDescription: string;
    skills: string;
    workingProcess: string;
}
const getCompaniesData = (t: any): ICompany[] => {
    return [
        {
            jobTitle: t("jobTitleIt1"),
            companyName: t("it1"),
            companyLocation: t("locationIt1"),
            companyYears: t("yearsIt1"),
            companyDescription: t("descriptionIt1"),
            skills:
                t("skills") + ": " + "HP Service Manager, JavaScript, RAD, SOAP API, SQL, loadash",
            workingProcess: t("workingProcess") + ": " + "Jira, Cisco Jabber, Onyx"
        },
        {
            jobTitle: t("jobTitleShared"),
            companyName: t("calendaria"),
            companyLocation: t("locationCalendaria"),
            companyYears: t("yearsCalendaria"),
            companyDescription: t("descriptionCalendaria"),
            skills:
                t("skills") +
                ": " +
                "React, React-hooks, Redux-toolkit, Typescript, Jss, Ant design, Webpack",
            workingProcess: t("workingProcess") + ": " + "GitLab, Jira, Swagger"
        },
        {
            jobTitle: t("jobTitleShared"),
            companyName: t("tecom"),
            companyLocation: t("locationTecom"),
            companyYears: t("yearsTecom"),
            companyDescription: t("descriptionTecom"),
            skills:
                t("skills") +
                ": " +
                "React, React-hooks, Jss, material-UI, Intl, Redux, Reselect, Jest, playwright, lerna",
            workingProcess: t("workingProcess") + ": " + "GitLab, Jira, Microsoft teams"
        },
        {
            jobTitle: t("jobTitleShared"),
            companyName: t("julius"),
            companyLocation: t("locationJulius"),
            companyYears: t("yearsJulius"),
            companyDescription: t("descriptionJulius"),
            skills:
                t("skills") +
                ": " +
                "React, React-hooks, React Relay, graphql, Typescript, Sass, Ant design",
            workingProcess: t("workingProcess") + ": " + "GitLab, Linear, Youtrack"
        }
    ];
};

export default getCompaniesData;
