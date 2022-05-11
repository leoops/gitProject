import moment from 'moment';
import { DARK, LIGHT } from '../../styles/theme.style';
import useTheme from '../hooks/useTheme';

export const formatData = (data: string): string => {
  return moment(data).format('DD/MM/YYYY h:mm');
};

export const getCurrentTheme = () => {
  return useTheme(DARK, LIGHT);
};
