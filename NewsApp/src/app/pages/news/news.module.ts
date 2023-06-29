import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsPageRoutingModule } from './news-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { NewsPage } from './news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    HttpClientModule, 
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
