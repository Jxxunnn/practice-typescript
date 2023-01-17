export = {}
type Age<T> = T;
let a :Age<string>

type Name<T> = T extends string ? string : unknown;
let b :Name<string>

type FirstItem<T> = T extends any[]? T[0] : any;

type Person<T> = T extends infer R ? R : unknown;
type aaaa = Person<string[]>

type 타입추출<T> = T extends (infer R)[] ? R : unknown 
type bbb= 타입추출<string[]>
type 타입추출2<T> = T extends ( () => infer R) ? R : unknown
type ccc = 타입추출< () => void >

type b = ReturnType<() => void>