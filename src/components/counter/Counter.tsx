import { css } from '@emotion/react';
import { useStore } from '../../store/store';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '1rem 0.5rem',
    margin: '1rem 0',
  }),
  button: css({
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    background: 'blue',
    color: 'white',
    cursor: 'pointer',
  }),
};

export default function Counter(): JSX.Element {
  const { increment, decrement, reset } = useStore();

  return (
    <div css={styles.container}>
      <button css={styles.button} onClick={increment}>
        Increase the count by one
      </button>
      <button css={styles.button} onClick={decrement}>
        Decrease the count by one
      </button>
      <button css={styles.button} onClick={reset}>
        Reset the counter
      </button>
    </div>
  );
}
