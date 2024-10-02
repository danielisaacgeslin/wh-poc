'use client';

import { ChainInfo } from '@/components/ChainInfo';
import { useParams } from 'next/navigation';
import type { Chain } from '@wormhole-foundation/sdk';

export default function Page() {
  const params = useParams();

  return <ChainInfo chainName={params.id as Chain} />;
}
