export class Product {
    id!: number;            // Se le pone el ! para indicar que luego se van a inicializar y no poner id: number = 0;
    name!: string;
    description!: string;
    price!: number;
}