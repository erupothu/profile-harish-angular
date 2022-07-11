import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECartComponent } from './e-cart.component';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const e_cart_routes: Routes = [
  {path: '', component: ECartComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'product-details', component: ProductDetailsComponent},
]

@NgModule({
  declarations: [
    ECartComponent,
    ProductDetailsComponent,
    ProductsComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(e_cart_routes), ReactiveFormsModule, CoreMaterialModule, FormsModule, FlexLayoutModule,
    DeviceDetectorModule
  ]
})
export class ECartModule { }
