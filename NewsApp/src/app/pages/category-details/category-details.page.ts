import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  categoryId: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id')
	}


}
