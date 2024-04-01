export class Product {
    id!: number;            // Se le pone el ! para indicar que luego se van a inicializar y no poner id: number = 0;
    name!: string;              // Es como un entity, de getter y setter
    description!: string;
    price!: number;
}