import { GAP } from '@/constants';
import { css } from 'styled-components';

export const styles = {
  container: css``,
  list: css`
    display: flex;
    flex-direction: column;
    gap: ${GAP.S};
  `,
  link: css`
    text-decoration: underline;
    font-weight: 600;
  `
};
