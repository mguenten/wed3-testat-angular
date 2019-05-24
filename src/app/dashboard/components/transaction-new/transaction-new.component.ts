import {Component, OnInit} from '@angular/core';
import {NavigationService} from '@app/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth.service';
import {TransactionsService} from '../../../shared/resources/transactions.service';
import {AccountDetail} from '../../../shared/models/AccountDetail';
import {Account} from '../../../auth/models/account';

@Component({
  selector: 'wed-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.scss']
})
export class TransactionNewComponent implements OnInit {
  public accountDetail: AccountDetail = new AccountDetail();
  public targetAccountDetail: AccountDetail = new AccountDetail();

  public from: string;
  public sendTo: number;
  public amount: number;

  constructor(private transactionService: TransactionsService) {
    this.getAccountDetails();
  }

  public doTransaction(newTransactionForm: NgForm) {
    if (newTransactionForm && newTransactionForm.valid) {
      this.transactionService.transfer(this.sendTo, this.amount).subscribe((response) => {
        this.sendTo = null;
        this.amount = null;
        this.targetAccountDetail = null;
        this.getAccountDetails();
        this.transactionService.transactionTriggered.emit();
      });
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

  onTargetAccountChange(accountNr: number) {
    if (accountNr > 0) {
      this.transactionService.getAccount(accountNr).subscribe((response) => {
        this.targetAccountDetail = response;
      }, (error => {
        this.targetAccountDetail = null;
      }));
    }
  }

  ngOnInit(): void {
  }

}
