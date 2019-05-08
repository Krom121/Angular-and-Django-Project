import { Engine, Wheels } from './car';



export interface Order{
    engine: Engine;
    wheels: Wheels;
    exterior_color: string;
}