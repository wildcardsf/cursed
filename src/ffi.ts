import s from './symbols.ts';
let lib: Deno.DynamicLibrary<typeof s>;

switch(Deno.build.os) {
  case 'linux':
    lib = Deno.dlopen('libncursesw.so.6', s);
    break;
  case 'darwin':
    lib = Deno.dlopen('libncurses.dylib', s);
    break;
  default:
    throw 'This OS is not supported yet.'
}

export const symbols = lib.symbols;
