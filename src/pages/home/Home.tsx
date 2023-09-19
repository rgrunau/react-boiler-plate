interface ViewProps {
  title: string;
}

const View = ({ title }: ViewProps): JSX.Element => (
  <div>
    <h1>{title}</h1>
  </div>
);

export default function Home(): JSX.Element {
  const hookProps = {
    title: 'Home Page!',
  };
  return (
    <div>
      <View {...hookProps} />
    </div>
  );
}
