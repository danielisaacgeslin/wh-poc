'use client';

import Link from 'next/link';
import { Chain, chains } from '@wormhole-foundation/sdk';
import { styles } from './styles';

export interface ChainListProps {
  activeChain?: Chain;
}

export const ChainList = ({ activeChain }: ChainListProps) => {
  return (
    <ul css={styles.container}>
      {chains.map(chain => (
        <Link id={chain} css={chain === activeChain && styles.active} key={chain} href={`/chains/${chain}`}>
          {chain}
        </Link>
      ))}
    </ul>
  );
};
