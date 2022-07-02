import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;

      let bearer, token;

      if (authHeader) {
        [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !token) {
          throw new UnauthorizedException('user is unauthorized');
        }
      } else if (req.cookies.accessToken) {
        token = req.cookies.accessToken;
      }

      const user = this.jwtService.verify(token);
      req.user = user;

      return true;
    } catch (e) {
      throw new UnauthorizedException('user is unauthorized');
    }
  }
}
