import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import dayjs from '~/core/dayjs';

export interface DateRuleArguments extends RuleArguments {
  format: string;
  strict?: boolean;
}

const date: Rule<DateRuleArguments> = ({ format, strict = true }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return dayjs(String(input), format, strict).isValid();
};

export default date;
