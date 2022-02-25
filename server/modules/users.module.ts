import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'server/entities/user.entity';
import { SessionsController } from '../controllers/sessions.controller';
import { UsersController } from 'server/controllers/users.controller';
import { UsersService } from '../providers/services/users.service';
import { RefreshTokensService } from '../providers/services/refresh_tokens.service';
import { RefreshToken } from 'server/entities/refresh_token.entity';
import { JwtService } from 'server/providers/services/jwt.service';
import { RefreshTokensController } from 'server/controllers/refresh_tokens.controller';
import { Role } from 'server/entities/role.entity';
import { RolesService } from 'server/providers/services/roles.service';
import { UserRole } from 'server/entities/user_role.entity';
import { Question4Controller } from 'server/controllers/midterm/question4.controller';
import { Question5Controller } from 'server/controllers/midterm/question5.controller';
import { Todo } from 'server/entities/todo.entity';
import { TodosService } from 'server/providers/services/todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, RefreshToken, Role, UserRole, Todo])],
  controllers: [SessionsController, UsersController, RefreshTokensController, Question4Controller, Question5Controller],
  providers: [UsersService, RolesService, RefreshTokensService, JwtService, TodosService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
