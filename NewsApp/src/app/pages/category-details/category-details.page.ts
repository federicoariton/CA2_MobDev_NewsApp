import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api1Key = environment.api1.API_KEY;
const api1Url = environment.api1.API_URL;

interface NewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  category: string | null = null;
  articles: NewsArticle[] = [];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    // Get the category parameter from the route
    this.category = this.route.snapshot.paramMap.get('category');
    // Load articles for the specified category
    this.loadArticles();
  }

  loadArticles() {
    if (this.category) {
      // Make an HTTP request to fetch articles based on the category
      this.httpClient
        .get<any>(`${api1Url}/top-headlines?country=us&category=${this.category}&apiKey=${api1Key}`)
        .subscribe(
          (response: any) => {
            console.log(response);
            // Assign the fetched articles to the "articles" property
            this.articles = response.articles;
          },
          (error: any) => {
            console.log('Error loading articles:', error);
          }
        );
    }

    
  }

  openArticle(article: NewsArticle) {
    // Open the article URL in a new browser window or tab
    window.open(article.url, '_blank');
  }

}
