export type Easing =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | number[]
    | ((v: number) => number);