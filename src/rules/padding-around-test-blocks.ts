import { get_filename } from '../utils/msc';
import { PaddingType, StatementType, createPaddingRule } from '../utils/padding';

export const RULE_NAME = get_filename(import.meta.url)

export const config = [
  {
    paddingType: PaddingType.Always,
    prevStatementType: StatementType.Any,
    nextStatementType: [
      StatementType.TestToken,
      StatementType.ItToken,
      StatementType.FitToken,
      StatementType.XitToken,
      StatementType.XtestToken,
    ],
  },
  {
    paddingType: PaddingType.Always,
    prevStatementType: [
      StatementType.TestToken,
      StatementType.ItToken,
      StatementType.FitToken,
      StatementType.XitToken,
      StatementType.XtestToken,
    ],
    nextStatementType: StatementType.Any,
  },
];

export default createPaddingRule(
  RULE_NAME,
  'Enforce padding around afterAll blocks',
  config,
);
