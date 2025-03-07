import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import dayjs from '~/core/dayjs';
import validateDate from './date';

export interface AfterRuleArguments extends RuleArguments {
  date: string;
  format: string;
  displayFormat?: string;
  strict?: boolean;
}

const afterRule: Rule<AfterRuleArguments> = ({ date, format, strict = true }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!validateDate({ format, strict })(date)) throw new Error('Invalid date');
  if (!validateDate({ format, strict })(input)) return false;
  return dayjs(String(input)).isAfter(date);
};

export default afterRule;
