// write an interface for the props

interface ViewProps {
  title: string;
}
const View = ({ title }: ViewProps): JSX.Element => (
  <div>
    <h1>{title}</h1>
  </div>
);

export default function NotFound(): JSX.Element {
  const hookProps = {
    title: '404 Page Not Found',
  };

  return (
    <div>
      <View {...hookProps} />
    </div>
  );
}
