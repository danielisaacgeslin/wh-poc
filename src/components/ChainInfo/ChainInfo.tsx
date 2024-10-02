'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Chain, ChainConfig, wormhole } from '@wormhole-foundation/sdk';
import evm from '@wormhole-foundation/sdk/evm';
import solana from '@wormhole-foundation/sdk/solana';
import aptos from '@wormhole-foundation/sdk/aptos';
import algorand from '@wormhole-foundation/sdk/algorand';
import cosmwasm from '@wormhole-foundation/sdk/cosmwasm';
import sui from '@wormhole-foundation/sdk/sui';
import { AVATAR_SIZE, getAvatarUrl, getAvatarWidthFromText } from '@/constants';
import { styles } from './styles';

export interface ChainInfoProps {
  chainName: Chain;
}

const sdk = wormhole('Mainnet', [evm, solana, aptos, algorand, cosmwasm, sui]);

export const ChainInfo = ({ chainName }: ChainInfoProps) => {
  const [chainConfig, setChainConfig] = useState<ChainConfig<any, any> | null>(null);
  const [status, setStatus] = useState<{ loading: boolean; error: Error | null }>({ loading: false, error: null });

  useEffect(() => {
    const controller = new AbortController();
    setStatus({ loading: true, error: null });
    (async () => {
      try {
        const wh = await sdk;
        const ctx = wh.getChain(chainName);
        if (!controller.signal.aborted) setChainConfig(ctx.config);
      } catch (error) {
        if (controller.signal.aborted) setStatus(p => ({ ...p, error: error as Error }));
      } finally {
        if (controller.signal.aborted) setStatus(p => ({ ...p, loading: false }));
      }
    })();

    return () => controller.abort();
  }, [chainName]);

  return (
    <div css={styles.container}>
      {!!status.loading && <div>loading...</div>}
      {!!status.error && <div>{status.error?.message}</div>}
      {!!chainConfig && !status.loading && !status.error && (
        <div>
          <ul css={styles.list}>
            <Image
              src={getAvatarUrl(chainConfig.key, getAvatarWidthFromText(chainConfig.key))}
              alt={String(chainConfig.chainId)}
              width={getAvatarWidthFromText(chainConfig.key)}
              height={AVATAR_SIZE}
            />
            {[
              ['Platform', chainConfig.platform],
              ['ID', chainConfig.chainId],
              ['Explorer URL', chainConfig.explorer?.baseUrl],
              ['RPC', chainConfig.rpc],
              ['Block time', chainConfig.blockTime],
              ['Tokens', Object.keys(chainConfig.tokenMap || {}).join(', ')]
            ]
              .filter(([, value]) => !!value)
              .map(([key, value]) => (
                <li key={key}>
                  <strong>{key}</strong>:{' '}
                  {/^https?:\/\//.test(value) ? (
                    <a href={value} target="_blank" css={styles.link}>
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
