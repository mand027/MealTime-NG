import { Url } from 'url';

export class Receta{
    constructor(
        public nombre?: string,
        public autor?: string,
        public descripcion?: string,
        public ingredientes?: string,
        public preparacion?: string,
        public imagen?: string,
        public video?: Url
    ){}
}