import { Article } from './../backend/article/article';
import { Observable } from 'rxjs/Rx';
import { AppServicesService } from 'app/services/app-services.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class EditorArticleResolverService implements Resolve<any> {
  constructor(private _service: AppServicesService, private _router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
    const id = route.paramMap.get('id');
    return this._service.getBy('/api/v1/articles', id).map(article => {
      if (article) {
        return article;
      } else { // id not found
        this._router.navigate(['/backend']);
        return null;
      }
    });
  }
}
