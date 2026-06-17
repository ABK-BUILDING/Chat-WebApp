// auth.guard.ts (Exemple NestJS)
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token manquant ou invalide');
    }

    const idToken = authHeader.split('Bearer ')[1];

    try {
      const decodedToken = await getAuth().verifyIdToken(idToken);
      request.user = decodedToken; 
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token Firebase invalide');
    }
  }
}