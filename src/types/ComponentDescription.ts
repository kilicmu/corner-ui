export interface DescriptionItem<T = any> {
    name: string;
    path: string;
    component?: () => T;
    [key: string]: any;
}
export interface ComponentsDscription {
    components: string[];
    route: DescriptionItem[];
}
