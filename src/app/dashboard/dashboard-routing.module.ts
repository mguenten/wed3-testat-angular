import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard.component';
import {TransactionSiteComponent} from './components/transaction-site/transaction-site.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      // TODO: Add routing path for dashboard here...
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'transactions',
        component: TransactionSiteComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
