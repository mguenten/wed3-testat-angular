import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SharedModule} from '@app/shared';

import {AuthModule} from '../auth/auth.module';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {TransactionsComponent} from './components/transaction-list/transactions.component';
import {TransactionListComponent} from './components/transaction-list/transaction-list.component';
import {TransactionFilterComponent} from './components/transaction-list/transaction-filter.component';
import {TransactionNewComponent} from './components/transaction-new/transaction-new.component';
import {TransactionSiteComponent} from './components/transaction-site/transaction-site.component';


const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module
];
const INTERNAL_DECLARATIONS = [
    DashboardComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionFilterComponent,
    TransactionNewComponent,
    TransactionSiteComponent,
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules)
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule, FormsModule,
    AuthModule, DashboardRoutingModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  exports: EXPORTS,
  providers: [
    // DI Providers (hierarchical)
    // (Services, Tokens, Factories, ...) used from/within this Module
    //  * Registers these Classes for the current Module; importing Modules will create new instances (for importing level and below)
  ]
})
export class DashboardModule {
  // Do not add forRoot(), static references to this module from the Root/App Module will prevent lazy loading!
}
