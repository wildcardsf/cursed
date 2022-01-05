import * as cursed from '../mod.ts';
import { Screen } from '../mod.ts';

import { assertEquals } from 'https://deno.land/std@0.119.0/testing/asserts.ts';

Deno.test('init screen', async () => {
  const screen = new Screen();
  screen.refresh();
  const char = cursed.charAt(0, 0);
  cursed.endwin();
  assertEquals(String.fromCharCode(char), ' ');
});

Deno.test('add string', () => {
  const screen = new Screen();
  screen.addString('xbcd')
  screen.refresh();
  const char = cursed.charAt(0, 0);
  cursed.endwin();
  assertEquals(String.fromCharCode(char), 'x');
});

Deno.test('clear screen', () => {
  const screen = new Screen();
  screen.addString('abcd');
  screen.clear();
  screen.refresh();
  const char = cursed.charAt(0, 3);
  cursed.endwin();
  assertEquals(String.fromCharCode(char), ' ');
});
