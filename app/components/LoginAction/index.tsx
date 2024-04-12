'use client';
import { FC, PropsWithChildren } from 'react';
import { signIn } from 'next-auth/react';

export const LoginAction: FC<PropsWithChildren> = ({ children }) => (
  <div onClick={() => signIn()}>{children}</div>
)
