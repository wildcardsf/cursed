import * as cursed from '../mod.ts';
import { Screen } from '../mod.ts';
import { assertEquals } from '../vendor/std.ts';

Deno.test('default string position', () => {
  const screen = new Screen();
  screen.clear();
  screen.addString('x')
  screen.refresh();
  const char = cursed.charAt(0, 0);
  cursed.end();
  assertEquals(char, 'x');
});

Deno.test('custom string x-position', () => {
  const screen = new Screen();
  screen.clear();
  screen.addString('x', { x: 1 })
  screen.refresh();
  const char = cursed.charAt(1, 0);
  cursed.end();
  assertEquals(char, 'x');
});

Deno.test('custom string y-position', () => {
  const screen = new Screen();
  screen.clear();
  screen.addString('y', { y: 1 })
  screen.refresh();
  const char = cursed.charAt(0, 1);
  cursed.end();
  assertEquals(char, 'y');
});

Deno.test('custom string length', () => {
  const screen = new Screen();
  screen.clear();
  screen.addString('hello', { length: 2 })
  screen.refresh();
  const h = cursed.charAt(0, 0);
  const e = cursed.charAt(1, 0);
  cursed.end();
  assertEquals(h, 'h');
  assertEquals(e, 'e');
});

Deno.test('custom string xy-position', () => {
  const screen = new Screen();
  screen.clear();
  screen.addString('xy', { x: 1, y: 1 })
  screen.refresh();
  const x = cursed.charAt(1, 1);
  const y = cursed.charAt(2, 1);
  cursed.end();
  assertEquals(x, 'x');
  assertEquals(y, 'y');
});
