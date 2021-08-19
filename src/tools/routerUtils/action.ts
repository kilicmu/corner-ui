export enum RouterEvents {
    ROUTE_CHANGE = 0,
    // ROUTE_NONE = 0 << 1,
}


export type RouterChangePayload = {
    to: string;
    isMobile: boolean;
}

export interface BaseAction {
    _isAction: boolean
}

export interface RouterReducerAction extends BaseAction {
    type: RouterEvents,
    payload: RouterChangePayload 
}

export const routeChangeActionCreator = (payload: RouterChangePayload) => ({
    type: RouterEvents.ROUTE_CHANGE,
    payload,
    _isAction: true
})
