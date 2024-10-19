import { Messages } from '@fortress-validator/types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AfterRuleArguments } from '~/rules/after';
import { BeforeRuleArguments } from '~/rules/before';
import { DateRuleArguments } from '~/rules/date';

dayjs.extend(customParseFormat);

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
};

export default en;
