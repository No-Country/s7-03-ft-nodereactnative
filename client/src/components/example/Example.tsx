import { Text } from 'react-native';
import { Button } from './example.styled';
export interface ExampleProps {}

const Example: React.FC<ExampleProps> = () => {
  return (
    <Button>
      <Text>Example</Text>
    </Button>
  );
};

export default Example;
