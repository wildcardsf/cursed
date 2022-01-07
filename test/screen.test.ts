import * as cursed from '../mod.ts';
import { Screen } from '../mod.ts';
import { assertEquals } from '../vendor/std.ts';

Deno.test('clear screen', () => {
  const screen = new Screen();
  screen.clear();
  screen.addString('abcd');
  screen.clear();
  screen.refresh();
  const char = cursed.charAt(0, 3);
  cursed.end();
  assertEquals(char, ' ');
});
