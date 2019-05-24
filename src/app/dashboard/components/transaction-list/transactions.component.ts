import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction';
import {TransactionsService} from '../../../shared/resources/transactions.service';
import {Subscription} from 'rxjs';
import {TransactionListComponent} from './transaction-list.component';

@Component({
  selector: 'wed-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  private transactionSubcription: Subscription;

  public transactions: Transaction[] = [];

  @Input() includeDate: boolean;
  @Input() numberOfRows: number;

  public forYear: number = null;
  public forMonth: number = null;

  constructor(private transactionsResource: TransactionsService) {
  }

  ngOnInit() {
    this.transactionSubcription = this.transactionsResource.transactionTriggered.subscribe(() => {
      this.update();
    });
    this.update();
  }

  showYear(year: number) {
    this.forYear = Number(year);
    this.update();
  }

  showMonth(month: number) {
    this.forMonth = Number(month);
    this.update();
  }

  private update() {
    if (this.includeDate && this.forYear != null && this.forMonth != null) {
      const fromDate = new Date(this.forYear, this.forMonth).toISOString();
      // The month will wrap around (13 is January)
      const toDate = new Date(this.forYear, this.forMonth + 1).toISOString();
      this.transactionsResource.getTransactions(fromDate, toDate, this.numberOfRows)
        .subscribe(ts => this.transactions = ts);
    } else {
      this.transactionsResource.getTransactions('', '', this.numberOfRows)
        .subscribe(ts => this.transactions = ts);
    }
  }

  ngOnDestroy(): void {
  }

}
