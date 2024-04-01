import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { ProductComponent } from './app/products/components/product.component';

                      //ProductComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
