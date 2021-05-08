import moment from 'moment';

export const formatData = (data: string): string => {
  return moment(data).format('DD/MM/YYYY h:mm');
};
