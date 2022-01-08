import * as cursed from '../mod.ts';
const { color, normal, Color } = cursed;

const screen = new cursed.Screen();
screen.clear();
let y = 0;
for (const key of Object.keys(Color)) {
  const name = Color[Number(key)];
  if (typeof name === 'string') {
    if (name === 'default') {
      normal();
    } else {
      // @ts-ignore
      color[name]();
    }
    screen.addString(name, { y });
    y += 1;
  }
}

y += 2;
normal();
screen.addString('press any key to continue..', { y })
screen.refresh();
cursed.readInputChar();
cursed.end();
