export type BaseDirection = 
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'


export const isBaseDirection = (direction: string) => {
    const allowedDirection = [
        'top',
        'left',
        'right',
        'bottom',
    ]

    return allowedDirection.includes(direction)
}