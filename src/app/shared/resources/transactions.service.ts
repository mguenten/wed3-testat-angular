import {Injectable} from '@angular/core';
import {ResourceBase} from '@app/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Transaction} from '../models/transaction';
import {Credential} from '../../auth/models/credential';
import {AccountDetail} from '../models/AccountDetail';
import {SecurityTokenStore} from '../../auth/services/credential-management/security-token-store';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService extends ResourceBase {
  constructor(private tokenStore: SecurityTokenStore, http: HttpClient) {
    super(http);
  }

  public getTransactions(
    fromDate: string = '',
    toDate: string = '',
    count: number = 3,
    skip: number = 0
  ): Observable<Transaction[]> {
    return this.get(`/accounts/transactions?fromDate=${fromDate}&toDate=${toDate}&count=${count}&skip=${skip}`)
      .pipe(
        map((result: any) => {
          if (result) {
            return (result.result as Array<any>).map(value => Transaction.fromDto(value));
          }
          return [];
        }),
        catchError((error: any) => of<Transaction[]>(null))
      );
  }

  /*public getAccountDetails(model: AccountDetail): Observable<AccountDetail> {
    return this.post('/accounts', model)
      .pipe(
        map((result: any) => {
          if (result) {
            return AccountDetail.fromDto(result);
          }
          return null;
        })
      );
  }*/

  public getAccountDetails(token: string =
                             this.tokenStore.storedValue ? this.tokenStore.storedValue.token : ''): Observable<AccountDetail> {
    return this.get(`/accounts?token=${token}`)
      .pipe(map((result: any) => {
        if (result) {
          return AccountDetail.fromDto(result);
        }
        return null;
      }));
  }
}
