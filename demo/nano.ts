import * as cursed from '../mod.ts';
const { color, normal } = cursed;

enum Key {
  ctrlD = 4,
  ctrlX = 24,
  backspace = 127,
  left = 260,
  right = 261,
  resize = 410,
}

const screen = new cursed.Screen();
cursed.noEcho();
screen.keypad(true);
let input = '';
let index = 0;
while(true) {
  color.reverse();
  const width = screen.getWidth();
  screen.addString('  cursed nano 0.0.1'.padEnd(width, ' '));
  screen.addString('^X', { y: screen.getHeight() - 1 })
  normal();
  screen.addString('Exit', { y: screen.getHeight() - 1, x: 3 })
  screen.addString(input, { y: 2 });
  screen.moveCursor(index, 2);
  screen.refresh();
  const code = screen.readInputCharCode();
  switch(code) {
    case Key.ctrlD:
    case Key.ctrlX:
      cursed.end();
      Deno.exit(0);
    case Key.backspace:
      index = Math.max(0, index - 1);
      input = input.slice(0, index) + input.slice(index + 1, input.length);
      break;
    case Key.left:
      index = Math.max(0, index - 1);
      break;
    case Key.right:
      index = Math.min(input.length, index + 1);
      break;
    case Key.resize:
      break;
    default:
      input += String.fromCharCode(code);
      index = Math.min(width, index + 1);
  }
  screen.clear();
}
