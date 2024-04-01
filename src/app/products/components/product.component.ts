import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],                        // Si se requiere que este sea el root se agregan las CommonModule, RouterOutlet
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  
  products: Product[] = [];
  
  productSelected: Product =  new Product;
  
  constructor(private service: ProductService) { 
  }
  
  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      this.products = products;
    })
  }
  
  addProduct(product: Product) {

    if(product.id > 0){                             //* UPDATE
      this.service.update(product).subscribe(productUpdated => {

        this.products = this.products.map(prod => {       // LOCAL
          if (prod.id == product.id) {
            return {... productUpdated}                   // product LOCAL
          }
          return prod;
        })
      });
    } else {                                        //* CREATE

      this.service.create(product).subscribe(productNew => {      //! ESTO YA ES CON BACKEND
        this.products.push({...productNew});
      })

      // product.id = new Date().getTime();                       //! ESTO ES LOCAL 
      // this.products.push(product);                          //? Forma MUTABLE
      //this.products = [... this.products, {...product}];    //? Forma INMUTABLE EN ANGULAR DA LO MISMO EN REACT NO 
    }

    this.productSelected = new Product();         // esto es para limpiar el form despues de submit
  }

  onUpdateProduct(productRow: Product) {
    this.productSelected = {...productRow}; // se le aplica a la copia de productRow y evita que se vean cambios en tiempo real 
  }

  onRemoveProduct(id: number) {
    this.service.remove(id).subscribe(()=>{
      
      this.products = this.products.filter(prod => prod.id != id);
      
    })
  }




}

