import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'wed-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss']
})
export class TransactionFilterComponent implements OnInit {
  public currentYear: number;
  public currentMonth: number;

  public years = [];
  public months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
    'August', 'September', 'Oktober', 'November', 'Dezember'];

  @Output()
  public yearChanged = new EventEmitter<number>();

  @Output()
  public monthChanged = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.years = [currentYear, currentYear - 1, currentYear - 2];
  }

}
