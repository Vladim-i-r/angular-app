import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
//import { ProductComponent } from './app/products/components/product.component';
import { appConfig } from './app/app.config';

                                            // ProductComponent
const bootstrap = () => bootstrapApplication(AppComponent, appConfig)
export default bootstrap