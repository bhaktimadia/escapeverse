import { NavItem } from "./Header.types";

export const navConfig: NavItem[] = [
    {
        title: "Rooms",
        link: "/rooms",
        type: "dropdown",
        childList: [
            { title: "Lost in Space", slug: "lost-in-space" },
            { title: "The Lost Realm: Eldora", slug: "the-lost-realm-eldora" },
            { title: "Earthquake: Final Tremor", slug: "earthquake-final-tremor" },
            { title: "Eclipse Express", slug: "eclipse-express" },
            { title: "The Fear Extraction Lab", slug: "the-fear-extraction-lab" },
        ],
    },
    {
        title: "Events & Corporates",
        link: "/events-corporate",
        type: "link",
    },
    {
        title: "Blogs",
        link: "/blogs",
        type: "link",
    },
    {
        title: "Contact Us",
        link: "/contact-us",
        type: "link",
    },
];