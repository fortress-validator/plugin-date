import { Rule, Rules } from '@fortress-validator/types';
import after from './after';
import before from './before';
import date from './date';

const rules: Rules = {
  after: after as Rule,
  before: before as Rule,
  date,
};

export default rules;
