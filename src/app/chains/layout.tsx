'use client';

import { PropsWithChildren } from 'react';
import { useParams } from 'next/navigation';
import type { Chain } from '@wormhole-foundation/sdk';
import { ChainList } from '@/components/ChainList';
import { styles } from './styles';

export default function Layout({ children }: PropsWithChildren) {
  const params = useParams();
  return (
    <div css={styles.container}>
      <ChainList activeChain={params.id as Chain} />
      <div css={styles.info}>{children}</div>
    </div>
  );
}
