import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// const API_URL = environment.API_URL;
// const API_KEY = environment.API_KEY;

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
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles: NewsArticle[] = [];

  constructor(public httpClient: HttpClient, private router: Router) {
    this.loadArticles();
  }

  loadArticles() {
    this.httpClient.get<any>(`${api1Url}/top-headlines?country=us&category=general&apiKey=${api1Key}`).subscribe(
      (response: any) => {
        console.log(response);
        this.articles = response.articles;
      },
      (error: any) => {
        console.log('Error loading articles:', error);
      }
    );
  }

  openArticle(article: NewsArticle) {
    window.open(article.url, '_blank');
  }

  ngOnInit() {
  }

}
