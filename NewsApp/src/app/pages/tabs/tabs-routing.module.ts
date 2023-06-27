import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'category',
          children: [
            {
              path: '',
              loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../category-details/category-details.module').then( m => m.CategoryDetailsPageModule)
            }
          ]
        },
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
            }
          ]
        },
        {
          path: 'weather',
          children: [
            {
              path: '',
              loadChildren: () => import('../weather/weather.module').then( m => m.WeatherPageModule)
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/category',
      pathMatch: 'full'
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
