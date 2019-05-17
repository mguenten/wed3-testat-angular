export class AccountDetail {
  constructor(public accountNr: string = '',
              public amount: number = 0,
              public firstname: string = '',
              public lastname: string = '') {
  }

  public static fromDto(data: any): AccountDetail {
    return new AccountDetail(
      data.accountNr,
      data.amount,
      data.owner.firstname,
      data.owner.lastname
    );
  }
}
