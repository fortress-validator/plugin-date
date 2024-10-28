import { Messages } from '@fortress-validator/types';
import dayjs from 'dayjs';
import { AfterRuleArguments } from '~/rules/after';
import { BeforeRuleArguments } from '~/rules/before';
import { DateRuleArguments } from '~/rules/date';

const zhTW: Messages = {
  after: (_, args) => {
    const { date, format, displayFormat } = args as AfterRuleArguments;
    return `此欄位必須是${dayjs(date, format, true).format(displayFormat || format)}之後的日期`;
  },
  before: (_, args) => {
    const { date, format, displayFormat } = args as BeforeRuleArguments;
    return `此欄位必須是${dayjs(date, format, true).format(displayFormat || format)}之前的日期`;
  },
  date: (_, args) => {
    const { format } = args as DateRuleArguments;
    return `此欄位必須符合${format}格式`;
  },
  iso8601: () => '此欄位必須是有效的 ISO 8601 日期',
};

export default zhTW;
