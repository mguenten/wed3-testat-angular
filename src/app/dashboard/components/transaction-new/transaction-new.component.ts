import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'wed-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.scss']
})
export class TransactionNewComponent implements OnInit {

  public from: string;
  public sendTo: string;
  public amount: number;

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService) {
  }

  public doTransaction(newTransactionForm: NgForm) {
    if (newTransactionForm && newTransactionForm.valid) {
      console.log('Formvalidation works: ' + newTransactionForm.value.sendTo);
    }
    return false;
  }

  ngOnInit(): void {
  }

}
