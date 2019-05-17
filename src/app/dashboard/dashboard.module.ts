import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SharedModule} from '@app/shared';

import {AuthModule} from '../auth/auth.module';

import {DashbaordRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard.component';
import {MatCardModule} from '@angular/material';
import {TransactionsComponent} from './components/transactions.component';
import {TransactionListComponent} from './components/transaction-list.component';
import {TransactionFilterComponent} from './components/transaction-filter.component';


const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module
];
const INTERNAL_DECLARATIONS = [
    DashboardComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionFilterComponent,
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
    AuthModule, DashbaordRoutingModule, MatCardModule
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
