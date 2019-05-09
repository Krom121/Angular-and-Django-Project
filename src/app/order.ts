import { Engine, Wheels, Interior } from './car';



export interface Order{
    engine: Engine;
    wheels: Wheels;
    exterior_color: string;
    interior: Interior;
    autopilot: Boolean;
}