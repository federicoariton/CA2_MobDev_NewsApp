import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// Define the API key and URL from the environment
const api1Key = environment.api1.API_KEY;
const api1Url = environment.api1.API_URL;


// Define the interface for a news article
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
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles: NewsArticle[] = [];


  // Load the articles when the component is constructed
  constructor(public httpClient: HttpClient, private router: Router) {
    this.loadArticles();
  }

  loadArticles() {
     // Make an HTTP GET request to retrieve the top headlines
    this.httpClient.get<any>(`${api1Url}/top-headlines?country=us&category=general&apiKey=${api1Key}`).subscribe(
      (response: any) => {
         // Store the retrieved articles in the component's 'articles' property
        console.log(response);
        this.articles = response.articles;
      },
      (error: any) => {
        console.log('Error loading articles:', error);
      }
    );
  }

   // Open the article URL in a new browser tab/window
  openArticle(article: NewsArticle) {
    window.open(article.url, '_blank');
  }

  ngOnInit() {
  }

}
