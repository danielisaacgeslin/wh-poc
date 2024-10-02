import { GAP } from '@/constants';
import { css } from 'styled-components';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: ${GAP.S};
    overflow: auto;
    max-height: 100%;
  `,
  active: css`
    color: yellow;
    font-weight: 600;
  `
};
