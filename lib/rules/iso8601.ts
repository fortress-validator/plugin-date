import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import validateDate from './date';

const iso8601: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  input = String(input).replace(/(\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?)([+-]\d{2}:\d{2})?$/, '$1');
  const formats = [
    'YYYY-MM-DDTHH:mm:ss', // 2001-01-01T12:00:00
    'YYYY-MM-DDTHH:mm:ss[Z]', // 2001-01-01T12:00:00Z
    'YYYY-MM-DDTHH:mm:ss.SSS', // 2001-01-01T12:00:00.000
    'YYYY-MM-DDTHH:mm:ss.SSS[Z]', // 2001-01-01T12:00:00.000Z
  ];
  return formats.some(format => validateDate({ format })(input));
};

export default iso8601;
