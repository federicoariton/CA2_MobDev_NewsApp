import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule } from '@ionic/angular';

import { CategoryDetailsPageRoutingModule } from './category-details-routing.module';

import { CategoryDetailsPage } from './category-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryDetailsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [CategoryDetailsPage]
})
export class CategoryDetailsPageModule {}
