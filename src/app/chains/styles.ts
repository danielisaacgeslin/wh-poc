import { GAP } from '@/constants';
import { css } from 'styled-components';

export const styles = {
  container: css`
    padding: ${GAP.M};
    display: flex;
    gap: ${GAP.L};
    height: 100%;
  `,
  info: css`
    flex: 1;
  `
};
