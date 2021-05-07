import { Router } from "vue-router";
import { RouterEvents } from "./action";
import { RouterReducerAction } from "./action";





export const routerReducerFactory = (router: Router) => {
    return function reducer(action: RouterReducerAction) {
        const {type, payload, _isAction} = action
        if(!_isAction) return;
        switch(type) {
            case RouterEvents.ROUTE_CHANGE:
                const {to, isMobile} = payload;
                const currentPath = router?.currentRoute?.value?.path
                if(to && currentPath !== to) {
                    if(isMobile) {
                        router.replace(to)
                    }else{
                        router.push(to)
                    }
                }
                return;
            default:
                return;
        }
    }
}