import type { FC, ComponentPropsWithoutRef } from 'react';

export const Button: FC<ComponentPropsWithoutRef<'button'>> = () => (
  <button type='button' onClick={() => alert('boop')}>
    Boop
  </button>
);
