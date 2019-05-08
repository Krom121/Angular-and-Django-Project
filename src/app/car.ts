
export interface Engine{
    id: number;
    name: string;
    image: string;
    price: number;
}

export interface Wheels {
    id: number;
    name: string;
    image: string;
    price: number,
}

export interface Model{
    base_price: number;
    engines: Array<Engine>;
    wheels: Array<Wheels>;
}