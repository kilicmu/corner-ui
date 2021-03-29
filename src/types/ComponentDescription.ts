export interface DescriptionItem {
    name: string;
    path: string;
    docPath: string;
    [key: string]: any;
}
export interface ComponentsDscription {
    routes: DescriptionItem[];
}
