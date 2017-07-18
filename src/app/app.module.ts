import { ArticleListComponent } from './backend/article/article-list/article-list.component';
import { ArticleComponent } from './backend/article/article.component';
import { ContentCardComponent } from './client/content/content-card/content-card.component';
import { ContentComponent } from './client/content/content.component';
import { RailsComponent } from './client/rails/rails.component';
import { AngularComponent } from './client/angular/angular.component';
import { AndroidComponent } from './client/android/android.component';
import { EditArticleComponent } from './backend/article/edit-article/edit-article.component';
import { NewArticleComponent } from './backend/article/new-article/new-article.component';
import { routes } from './../app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendComponent } from './backend/backend.component';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { BackendHeaderComponent } from './backend/backend-header/backend-header.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    ClientComponent,
    ClientHeaderComponent,
    NewArticleComponent,
    EditArticleComponent,
    LoginComponent,
    BackendHeaderComponent,
    AndroidComponent,
    RailsComponent,
    AngularComponent,
    ContentComponent,
    ClientFooterComponent,
    ContentCardComponent,
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
