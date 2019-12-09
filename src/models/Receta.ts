export class Receta{
    constructor(
        public nombre?: string,
        public type?: string,
        public autor?: string,
        public descripcion?: string,
        public ingredientes?: string,
        public preparacion?: string,
        public imagen?: string,
        public video?: string,
        public remindAtAddress?: string,
        public remindAtGeo?: string,
        public id?: number
    ){}
}