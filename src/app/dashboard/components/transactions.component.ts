import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../shared/models/transaction';
import {TransactionsService} from '../../shared/resources/transactions.service';

@Component({
  selector: 'wed-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions: Transaction[] = [];

  @Input() includeDate: boolean;

  public forYear: number = null;
  public forMonth: number = null;

  constructor(private transactionsResource: TransactionsService) {
  }

  ngOnInit() {
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
      this.transactionsResource.getTransactions(fromDate, toDate, Number.MAX_SAFE_INTEGER)
        .subscribe(ts => this.transactions = ts);
    } else {
      this.transactionsResource.getTransactions('', '', Number.MAX_SAFE_INTEGER)
        .subscribe(ts => this.transactions = ts);
    }
  }

}
