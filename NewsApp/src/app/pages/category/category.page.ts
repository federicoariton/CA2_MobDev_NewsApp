import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {
  constructor(private router: Router) {}

  openCategory(category: string) {
    this.router.navigate(['/tabs/category', category]);
  }
}
