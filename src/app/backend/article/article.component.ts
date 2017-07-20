import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'app/services/app-services.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles = [];
  loading = true;
  constructor(private _service: AppServicesService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._service.get('/api/v1/articles')
    .subscribe(res => {
        this.loading = false;
        this.articles = res.json();
    });
  }

  onEdit(article) {
     this._router.navigate(['edit-article', article.id], { relativeTo: this.route });
  }
}
