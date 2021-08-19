import { App, inject } from "@vue/runtime-core";
import { RouteLocationRaw, Router } from "vue-router";
import { BatchTool } from "../tools/BatchTool";


export class RoutersBatcher extends BatchTool<Router> {
    public readonly BatchTriggerToken = Symbol()
    static readonly __deeplimit = 3;

    static getBatcher(): RoutersBatcher {
        let w  = window as Record<string, any>
        let deep = 0
        while(w && deep < this.__deeplimit) {
            if(w.__routersBatcher) {
                return w.__routersBatcher
            }
            w = w.parent
            deep++
        }
        // no root batcher, this is a root node, mount __routerBatcher for root window
        const newRoutersBatcher = new RoutersBatcher();
        (window as Record<string, any>).__routersBatcher = newRoutersBatcher
        return newRoutersBatcher
    }

    private proxyPushHistoryFn(trigger: Router) {
        window.history.back = trigger.back
        window.history.forward = trigger.forward
        // return {
        //     ...trigger,
        //     push: function(to: RouteLocationRaw) {
        //         return trigger.push(to)
        //     },
        // }
    }


    public getTrigger(isRoot?: boolean) {
        const trigger = super.getTrigger()
        if(trigger && isRoot) {
            this.proxyPushHistoryFn(trigger)
        }

        return trigger
    }

    public install(app:App, isRoot:boolean = false) {
        const batcher = RoutersBatcher.getBatcher();
        app.provide(batcher.BatchTriggerToken, batcher.getTrigger(isRoot));
    }
}

export const useRoutersTrigger = () => {
    const batcher = RoutersBatcher.getBatcher();
    return inject<Router>(batcher.BatchTriggerToken)
}

