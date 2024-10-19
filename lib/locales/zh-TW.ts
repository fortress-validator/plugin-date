import { Messages } from '@fortress-validator/types';
import dayjs from 'dayjs';
import { AfterRuleArguments } from '~/rules/after';
import { BeforeRuleArguments } from '~/rules/before';

const zhTW: Messages = {
  after: (_, args) => {
    const { date, format, displayFormat } = args as AfterRuleArguments;
    return `此欄位必須是${dayjs(date, format, true).format(displayFormat || format)}之後的日期`;
  },
  before: (_, args) => {
    const { date, format, displayFormat } = args as BeforeRuleArguments;
    return `此欄位必須是${dayjs(date, format, true).format(displayFormat || format)}之前的日期`;
  },
  date: () => '此欄位必須是有效的日期',
};

export default zhTW;
