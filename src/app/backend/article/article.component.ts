import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'app/services/app-services.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles = [];

  constructor(private _service: AppServicesService) { }

  ngOnInit() {
    this._service.get('/api/v1/articles')
    .subscribe(res => {
        console.log(res.json());
        this.articles = res.json();
    });
  }

}
