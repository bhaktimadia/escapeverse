export interface NavChildItem {
    title: string;
    slug: string;
}

export interface NavItem {
    title: string;
    link?: string;
    type: "link" | "dropdown";
    childList?: NavChildItem[];
}