interface BatchToolInterface<T> {
    sign: (v: T) => T;
    cancel: (v: T) => void
}

const isDev = () => process.env.NODE_ENV === 'development'

export class BatchTool<T extends Record<string, any>> implements BatchToolInterface<T>{
    private readonly targets: T[] = []
    private trigger: T | undefined;
    sign(v: T) {
        if(!this.trigger) {
            this.createTrigger(v);
        }
        this.targets.push(v)
        return this.trigger as T
    }

    cancel(v: T) {
        const idx = this.targets.indexOf(v)
        if(idx === -1) {
            return;
        }
        this.targets.splice(idx, 1)
    }

    getTrigger(){
        return this.trigger
    }

    private createTrigger(v: T) {
        const _trigger: any = {};
        for(const key in v) {
            const type = typeof v[key]
            // proxy all function before call it
            if(type === 'function') {
                _trigger[key] = (...args: any[]) => {
                    console.log(this.targets)
                    this.targets.forEach((target, idx) => {
                        const lazyDo = () => target[key](...args)
                        if(isDev()) {
                            try{
                                lazyDo()
                            } catch(e) {
                                console.warn(`target i run fail, it's idx: ${idx}, error message:\n ${e.message}`)
                            }
                        }else{
                            lazyDo()
                        }
                    })
                } 
            }
        }
        this.trigger = _trigger;
    }
}