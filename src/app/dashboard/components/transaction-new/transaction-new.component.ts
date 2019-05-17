import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth.service';
import {TransactionsService} from '../../../shared/resources/transactions.service';
import {AccountDetail} from '../../../shared/models/AccountDetail';

@Component({
  selector: 'wed-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.scss']
})
export class TransactionNewComponent implements OnInit {

  public accountDetail: AccountDetail = new AccountDetail();

  public from: string;
  public sendTo: string;
  public amount: number;

  constructor(private transactionService: TransactionsService) {
    this.getAccountDetails();
  }

  public doTransaction(newTransactionForm: NgForm) {
    if (newTransactionForm && newTransactionForm.valid) {
      console.log('Formvalidation works: ' + newTransactionForm.value.sendTo);
    }
    return false;
  }

  public getAccountDetails() {
    this.transactionService.getAccountDetails().subscribe((response) => {
      if (response) {
        this.accountDetail = response;
      }
    });
  }

  ngOnInit(): void {
  }

}
