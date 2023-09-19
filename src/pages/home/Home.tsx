import { css } from '@emotion/react';
import { useStore } from '../../store/store';
import Counter from '../../components/counter/Counter';

const styles = {
  container: css({
    width: '100%',
    margin: '0 auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: `radial-gradient(circle, #ff00ff, #00ffff, #ffff00, #ff0000, #00ff00, #0000ff)`,
    backgroundSize: '1000% 1000%',
  }),
  title: css({
    fontSize: '2rem',
    textAlign: 'center',
  }),
  countContainer: css({
    fontSize: '1.5rem',
    margin: '1rem 0',
  }),
};

interface ViewProps {
  title: string;
  count: number;
}
const View = ({ title, count }: ViewProps): JSX.Element => (
  <div css={styles.container}>
    <div css={styles.title}>
      <h1>{title}</h1>
    </div>
    <div css={styles.countContainer}>The count is: {count}</div>
    <Counter />
  </div>
);

export default function Home(): JSX.Element {
  const { count } = useStore();
  const hookProps = {
    title: 'Just Another Stupid Counter React App',
    count,
  };
  return <View {...hookProps} />;
}
