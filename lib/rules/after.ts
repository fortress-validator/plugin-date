import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import validateDate from './date';

dayjs.extend(customParseFormat);

export interface AfterRuleArguments extends RuleArguments {
  date: string;
  format: string;
  displayFormat?: string;
  strict?: boolean;
}

const after: Rule<AfterRuleArguments> = ({ date, format, strict = true }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!validateDate({ format, strict })(date)) throw new Error('Invalid date');
  if (!validateDate({ format, strict })(input)) return false;
  return dayjs(String(input)).isAfter(date);
};

export default after;
