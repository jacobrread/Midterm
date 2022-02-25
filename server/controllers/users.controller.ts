import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { Roles } from 'server/decorators/roles.decorator';
import { Skip } from 'server/decorators/skip.decorator';
import { CreateUserDto } from 'server/dto/create_user.dto';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { RefreshToken } from 'server/entities/refresh_token.entity';
import { RoleKey } from 'server/entities/role.entity';
import { User } from 'server/entities/user.entity';
import { UserRole } from 'server/entities/user_role.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { JwtService } from 'server/providers/services/jwt.service';
import { RefreshTokensService } from 'server/providers/services/refresh_tokens.service';
import { RolesService } from 'server/providers/services/roles.service';
import { UsersService } from 'server/providers/services/users.service';

@Controller()
export class UsersController {
  constructor(
    private usersService: UsersService,
    private rolesService: RolesService,
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokensService,
  ) {}
}
