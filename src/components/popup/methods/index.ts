import { BaseDirection } from "@/utils/validate/direction"

let movingElm: HTMLElement | null = null
let startCoordinates = {
    x: 0,
    y: 0
}

type EmitType = (event: string, ...args: any[]) => void
export const _touchstart = (e: TouchEvent, direction: BaseDirection, emit: EmitType) => {
    movingElm = getContainer(e.target as HTMLElement)
    const {clientX, clientY} = e.touches[0]
    startCoordinates.x = clientX
    startCoordinates.y = clientY
}
export const _touchmove = (e: TouchEvent, direction: string, emit: EmitType) => {
    if(!movingElm) return
    const { clientX, clientY } = e.touches[0]
    switch(direction) {
        case 'bottom':
            movingElm.style.transition = 'transform .1s'
            if(clientY - startCoordinates.y > 0){
                movingElm.style.transform = `translateY(${clientY - startCoordinates.y}px)`
            }
            break
        case 'top':
            movingElm.style.transition = 'transform .1s'
            if(startCoordinates.y - clientY > 0){
                movingElm.style.transform = `translateY(${clientY - startCoordinates.y}px)`
            }
            break
        case 'left':
            movingElm.style.transition = 'transform .1s'
            if(startCoordinates.x - clientX > 0){
                movingElm.style.transform = `translateX(${clientX - startCoordinates.x}px)`
            }
            break
        case 'right':
            movingElm.style.transition = 'transform .1s'
            if(clientX - startCoordinates.x > 0){
                movingElm.style.transform = `translateX(${clientX - startCoordinates.x}px)`
            }
            break
        default:
            return;
    }
}
export const _touchend = (e: TouchEvent, direction: string, emit: EmitType) => {
    if(!movingElm) return;
    const {offsetHeight = 0, offsetWidth = 0} = movingElm
    const {clientX, clientY} = e.changedTouches[0]
    const movedOffsetY = Math.abs(clientY - startCoordinates.y)
    const movedOffsetX = Math.abs(clientX - startCoordinates.x)
    movingElm.style.transform = ``
    movingElm.style.transition = ''
    switch(direction) {
        case 'bottom':
            if(offsetHeight / 2 < movedOffsetY) {
                emit('update:show', false)
            }
            break;
        case 'top':
            if(offsetHeight / 2 < movedOffsetY) {
                emit('update:show', false)
            }
            break;
        case 'left':
            if(offsetWidth / 2 < movedOffsetX) {
                emit('update:show', false)
            }
            break;
        case 'right':
            if(offsetWidth / 2 < movedOffsetX) {
                emit('update:show', false)
            }
            break;
        default:
            break;
    }
    clearGlobal()
}

function getContainer(el: HTMLElement | null) {
    const _deeplimit = 11;
    let current = el
    let _deep = 0
    while(el && _deep < _deeplimit) {
        if(el.classList.contains('cr-popup__container')) {
            return el
        }
        el = el.parentElement
        _deep++
    }
    return null
}

function clearGlobal() {
    movingElm = null
    startCoordinates.x = 0
    startCoordinates.y = 0
}