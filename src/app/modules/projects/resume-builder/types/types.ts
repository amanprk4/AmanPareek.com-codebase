export interface CustomHeaderLink {
    name: string;
    isActive: boolean
    cursorPointer?:boolean;
    routeLink?: string;
}

export interface ProjectDetails {
    name: string;
    path: string;
    icon: string;
    description: string;
    underDevelopment?: boolean;
}

export interface TemplateDetails {
    name: string;
    displayName: string;
    icon: string;
}