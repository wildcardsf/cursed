import * as cursed from '../mod.ts';

const screen = new cursed.Screen();
screen.clear();
screen.addString('hello.');
screen.addString('press any key to continue..', { y: 3 });
screen.refresh();
cursed.readInputChar();
cursed.end();
