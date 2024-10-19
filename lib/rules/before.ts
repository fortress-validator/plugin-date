import { RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import validateDate from './date';

dayjs.extend(customParseFormat);

export interface BeforeRuleArguments extends RuleArguments {
  date: string;
  format?: string;
  displayFormat?: string;
  strict?: boolean;
}

const before = ({ date, format, strict }: BeforeRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!validateDate({ format, strict })(date)) throw new Error('Invalid date');
  if (!validateDate({ format, strict })(input)) return false;
  return dayjs(String(input)).isBefore(date);
};

export default before;
