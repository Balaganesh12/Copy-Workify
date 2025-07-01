import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function signResetToken(email: string): string {
  return jwt.sign({ email }, JWT_SECRET, {
    expiresIn: '5m',
  });
}

export function verifyResetToken(token: string): { email: string } {
  return jwt.verify(token, JWT_SECRET) as { email: string };
}
