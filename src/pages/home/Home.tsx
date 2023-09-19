import { css } from '@emotion/react';
interface ViewProps {
  title: string;
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  title: css({
    fontSize: '2rem',
  }),
};
const View = ({ title }: ViewProps): JSX.Element => (
  <div css={styles.container}>
    <h1>{title}</h1>
  </div>
);

export default function Home(): JSX.Element {
  const hookProps = {
    title: 'Home Page!',
  };
  return <View {...hookProps} />;
}
