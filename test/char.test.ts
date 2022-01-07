import * as cursed from '../mod.ts';
import { Screen } from '../mod.ts';
import { assertEquals } from '../vendor/std.ts';

Deno.test('addChar', () => {
  const screen = new Screen();
  screen.clear();
  cursed.addChar('a');
  screen.refresh();
  const char = cursed.charAt(0, 0);
  cursed.end();
  assertEquals(char, 'a');
});

Deno.test('addCharCode', () => {
  const screen = new Screen();
  screen.clear();
  cursed.addCharCode('b'.charCodeAt(0));
  screen.refresh();
  const char = cursed.charAt(0, 0);
  cursed.end();
  assertEquals(char, 'b');
});
