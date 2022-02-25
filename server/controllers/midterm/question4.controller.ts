import { Controller, Get } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { AuthGuard } from 'server/providers/guards/auth.guard';

@Controller()
@Skip(AuthGuard)
export class Question4Controller {
  // inject the usersService
  constructor() {}

  //add your endpoint here!
}
