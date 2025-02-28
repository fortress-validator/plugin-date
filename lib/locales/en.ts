import type { Messages } from '@fortress-validator/types';
import dayjs from '~/core/dayjs';
import type { AfterRuleArguments } from '~/rules/after';
import type { BeforeRuleArguments } from '~/rules/before';
import type { DateRuleArguments } from '~/rules/date';

const en: Messages = {
  after: (field, args) => {
    const { date, format, displayFormat } = args as AfterRuleArguments;
    return `The ${field} field must be a date after ${dayjs(date, format, true).format(displayFormat || format)}.`;
  },
  before: (field, args) => {
    const { date, format, displayFormat } = args as BeforeRuleArguments;
    return `The ${field} field must be a date before ${dayjs(date, format, true).format(displayFormat || format)}.`;
  },
  date: (field, args) => {
    const { format } = args as DateRuleArguments;
    return `The ${field} field must match the ${format} format.`;
  },
  iso8601: field => `The ${field} field must be a valid ISO 8601 date.`,
};

export default en;
