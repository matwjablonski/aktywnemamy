'use client';
import { FC, PropsWithChildren, useState } from 'react';
import { ClickBox, ContextMenuWrapper, NameBox, Wrapper } from './ui';
import ButtonLink, { ButtonVariant } from '../ButtonLink';
import { signOut } from 'next-auth/react';

export const ProfilContextMenu: FC<PropsWithChildren<{ name?: string }>> = ({ children, name }) => {
  const [ isExpanded, setIsExpanded ] = useState(false);

  return (
    <Wrapper>
      <ClickBox action={() => setIsExpanded(prev => !prev)}>
        {children}
      </ClickBox>
      <ContextMenuWrapper visible={isExpanded}>
        <NameBox>Cześć {name}</NameBox>
        <ButtonLink label="Dashboard" link="/dashboard" className="w-full text-center mb-2" variant={ButtonVariant.WHITE} />
        <button onClick={() => signOut()} />
        <ButtonLink label="Wyloguj" link="/api/auth/signout?callbackUrl=/" className="w-full text-center" variant={ButtonVariant.WHITE} asAnchor />
      </ContextMenuWrapper>
    </Wrapper>
  )
}
