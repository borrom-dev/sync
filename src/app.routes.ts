import { LoginComponent } from './app/login/login.component';
import { ClientComponent } from './app/client/client.component';
import { BackendComponent } from './app/backend/backend.component';
import { Routes } from '@angular/router';
import { AndroidComponent } from './app/client/android/android.component';
import { AngularComponent } from './app/client/angular/angular.component';
import { NewArticleComponent } from './app/backend/article/new-article/new-article.component';
import { EditArticleComponent } from './app/backend/article/edit-article/edit-article.component';
import { ArticleListComponent } from './app/backend/article/article-list/article-list.component';
import { RailsComponent } from './app/client/rails/rails.component';


export const routes: Routes = [
    {
        path: 'backend',
        component: BackendComponent,
        children: [
            {
                path: 'new-article',
                component: NewArticleComponent
            },
            {
                path: 'edit-article',
                component: EditArticleComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '',
                component: ArticleListComponent
            },
            {
                path: 'android',
                component: AndroidComponent
            },
            {
                path: 'rails',
                component: RailsComponent
            },
            {
                path: 'angular',
                component: AngularComponent
            }
        ]
    }
]
