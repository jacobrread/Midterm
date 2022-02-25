import { Controller, Get } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { AuthGuard } from 'server/providers/guards/auth.guard';

@Controller()
@Skip(AuthGuard)
export class TransactionsController {
  @Get('/transactions')
  public index() {
    const transactions = [
      {
        id: 1,
        amount: 101.34,
        fromUser: {
          id: 1,
          name: 'Abby Zollinger',
        },
        toUser: {
          id: 2,
          name: 'Bruce Young',
        },
      },
      {
        id: 2,
        amount: 99.88,
        fromUser: {
          id: 1,
          name: 'Abby Zollinger',
        },
        toUser: {
          id: 3,
          name: 'Charles Xavier',
        },
      },
      {
        id: 3,
        amount: 42.19,
        fromUser: {
          id: 2,
          name: 'Bruce Young',
        },
        toUser: {
          id: 1,
          name: 'Abby Zollinger',
        },
      },
    ];

    return { transactions };
  }
}
