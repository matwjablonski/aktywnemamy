import { FC, PropsWithChildren } from 'react';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative">{children}</div>
);

export const ClickBox: FC<PropsWithChildren<{ action(): void }>> = ({ children, action }) => (
  <div className="cursor-pointer" onClick={action}>{children}</div>
);

export const ContextMenuWrapper: FC<PropsWithChildren<{ visible: boolean }>> = ({ children, visible }) => (
  <div className={
    `
      absolute
      ${visible ? 'block' : 'hidden'}
      top-12
      bg-main
      text-white
      right-[-10px]
      min-w-[300px]
      p-6
      rounded-lg
    `
  }>{children}</div>
);

export const NameBox: FC<PropsWithChildren> = ({ children }) => (
  <div className="mb-8">{children}</div>
)
