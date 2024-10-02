'use client';

import { styles } from './styles';
import { ChainList } from '../ChainList';

export const Chains = () => {
  return (
    <div css={styles.container}>
      <ChainList />
    </div>
  );
};
