import { Rule, Rules } from '@fortress-validator/types';
import after from './after';
import before from './before';
import date from './date';
import iso8601 from './iso8601';

const rules: Rules = {
  after: after as Rule<unknown>,
  before: before as Rule<unknown>,
  date: date as Rule<unknown>,
  iso8601: iso8601 as Rule<unknown>,
};

export default rules;
