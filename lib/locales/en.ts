import { Messages } from '@fortress-validator/types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AfterRuleArguments } from '~/rules/after';
import { BeforeRuleArguments } from '~/rules/before';

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
  date: field => `The ${field} field must be a valid date.`,
};

export default en;
