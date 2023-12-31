import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {
  constructor(private router: Router) {}

  // Method to open a specific category
  openCategory(category: string) {
    // Navigate to the category page with the specified category parameter
    this.router.navigate(['/tabs/category', category]);
  }
}
