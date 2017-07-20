import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article = {};
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.data
      .subscribe(data => {
        this.article = data.article;
      });
  }

}
