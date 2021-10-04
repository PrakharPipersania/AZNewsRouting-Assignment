import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CateroryComponent } from './caterory/caterory.component';
import { AboutComponent } from './about/about.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CategoriDetailsComponent } from './categori-details/categori-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
        path: '',
        component: MainComponent
    },
    {
        path: 'category',
        component: CateroryComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'latest-news',
        component: LatestNewsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'elements',
        component: ElementsComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog-details',
        component: BlogDetailsComponent
    },
    {
        path: 'categori-details',
        component: CategoriDetailsComponent
    },
    {
        path: '**', 
        pathMatch: 'full', 
        component: PageNotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
