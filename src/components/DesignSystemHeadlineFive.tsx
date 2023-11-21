import { StyleProp, Text, TextStyle } from 'react-native';

import { styles } from './DesignSystemHeadlineFive.style';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<Pick<TextStyle, 'color' | 'textAlign'>>;
};

export const HeadlineFive = ({ children, style }: Props): JSX.Element => (
  <Text style={[styles.text, style]}>{children}</Text>
);
