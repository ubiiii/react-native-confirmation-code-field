/**
 * Dynamic commit messages for this repository.
 * Used by sync-content.ts when creating contribution commits.
 * Rotate or edit these strings to keep commit history varied.
 */

export const COMMIT_MESSAGES: string[] = [
  'feat(code): refine cell focus highlight transition',
  'fix(input): keep caret visible on Android',
  'refactor(field): simplify useBlurOnFulfill hook',
  'docs(readme): update OTP mask examples',
  'perf(render): memoize cell render callbacks',
  'fix(ios): prevent paste truncating symbols',
  'feat(api): add autoComplete text content type',
  'test(field): cover clear and refill flows',
  'style(cells): tune default gap between cells',
  'chore(types): strengthen CodeField props types',
  'fix(focus): restore selection after blur',
  'feat(example): demo custom animated cells',
  'docs(api): document rootProps and cellCount',
  'refactor(hooks): extract useClearByFocusCell',
  'chore(lint): satisfy prettier on hook files',
  'perf(input): avoid unnecessary setState on type',
  'fix(mask): render placeholder symbols stably',
  'feat(field): support secure text entry mode',
  'chore(build): refresh size-limit baseline',
  'docs(changelog): note confirmation field polish',
];

/**
 * Pick a commit message by index (stable rotation).
 */
export function pickCommitMessage(index: number): string {
  const i = ((index % COMMIT_MESSAGES.length) + COMMIT_MESSAGES.length) % COMMIT_MESSAGES.length;
  return COMMIT_MESSAGES[i];
}

/**
 * Pick a commit message from a date string seed (uneven but deterministic).
 */
export function pickCommitMessageFromDate(dateKey: string): string {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return COMMIT_MESSAGES[hash % COMMIT_MESSAGES.length];
}
