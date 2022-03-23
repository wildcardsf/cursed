import * as ll from './ll.ts'
import { WINDOW, SCREEN, FILE, MEVENT } from './ll.ts'
import { cstring } from './helpers.ts';

export const addChar = (char: string): number => ll.addch(char.charCodeAt(0));
export const addCharCode = (char: number): number => ll.addch(char);
export const addCharCodesWithLength = (codes: number[], length: number): number => ll.addchnstr(new Uint8Array(codes), length);
export const addCharCodes = (codes: number[]): number => ll.addchstr(new Uint8Array(codes));
export const addStringWithLength = (str: string, length: number): number => ll.addnstr(cstring(str), length);
export const addString = (str: string): number => ll.addstr(cstring(str));
export const disableAttribute = (attr: number): number => ll.attroff(attr);
export const enableAttribute = (attr: number): number => ll.attron(attr);
export const setAttribute = (attr: number): number => ll.attrset(attr);
export const attr_get = (a1: number, a2: number, z: any): number => ll.attr_get(a1, a2, z);
export const attr_off = (a1: number, z: any): number => ll.attr_off(a1, z);
export const attr_on = (a1: number, z: any): number => ll.attr_on(a1, z);
export const attr_set = (a1: number, a2: number, z: any): number => ll.attr_set(a1, a2, z);
export const baudrate = (): number => ll.baudrate();
export const beep = (): number => ll.beep();
export const background = (z: number): number => ll.bkgd(z);
export const setBackground = (z: number): any => ll.bkgdset(z);
export const border = (left: number, right: number, top: number, bottom: number, topLeft: number, topRight: number, bottomLeft: number, bottomRight: number) => ll.border(
  left,
  right,
  top,
  bottom,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
);
export const canChangeColor = (): boolean => ll.can_change_color() > -1;
export const cbreak = (): number => ll.cbreak();
export const chgat = (a1: number, a2: number, a3: number, z: any): number => ll.chgat(a1, a2, a3, z);
export const clear = (): number => ll.clear();
export const clrtobot = (): number => ll.clrtobot();
export const clrtoeol = (): number => ll.clrtoeol();
export const color_content = (color: number, r: number, g: number, b: number): number => ll.color_content(color, r, g, b);
export const color_set = (a1: number, z: any): number => ll.color_set(a1, z);
export const curs_set = (vis: number): number => ll.curs_set(vis);
export const def_prog_mode = (): number => ll.def_prog_mode();
export const def_shell_mode = (): number => ll.def_shell_mode();
export const delay_output = (ms: number): number => ll.delay_output(ms);
export const deleteChar = (): number => ll.delch();
export const deleteScreen = (sp: SCREEN): any => ll.delscreen(sp);
export const deleteLine = (): number => ll.deleteln();
export const doUpdate = (): number => ll.doupdate();
export const echo = (): number => ll.echo();
export const echoChar = (z: number): number => ll.echochar(z);
export const erase = (): number => ll.erase();
export const end = (): number => ll.endwin();
export const eraseChar = (): string => String.fromCharCode(ll.erasechar());
export const filter = (): any => ll.filter();
export const flash = (): number => ll.flash();
export const flushinp = (): number => ll.flushinp();
export const readInputChar = (): string => String.fromCharCode(ll.getch());
export const readInputCharCode = (): number => ll.getch();
export const readInputStringWithLength = (a1: string, z: number): number => ll.getnstr(cstring(a1), z);
export const readInputString = (z: string): number => ll.getstr(cstring(z));
export const getWindow = (filep: FILE): WINDOW => ll.getwin(filep);
export const halfDelay = (t: number): number => ll.halfdelay(t);
export const hasColors = (): boolean => ll.has_colors() > -1;
export const has_ic = (): boolean => ll.has_ic() > -1;
export const has_il = (): boolean => ll.has_il() > -1;
export const hline = (a1: number, z: number): number => ll.hline(a1, z);
export const char = (): number => ll.inch();
export const getCharCodesWithLength = (a1: number[], z: number): number => ll.inchnstr(new Uint8Array(a1), z);
export const getCharCodes = (z: number[]): number => ll.inchstr(new Uint8Array(z));
export const initScreen = (): WINDOW => ll.initscr();
export const initColor = (color: number, r: number, g: number, b: number): number => ll.init_color(color, r, g, b);
export const initPair = (pair: number, fg: number, bg: number): number => ll.init_pair(pair, fg, bg);
export const getStringWithLength = (a1: string, z: number): number => ll.innstr(cstring(a1), z);
export const insertChar = (z: number): number => ll.insch(z);
export const insertDeleteLine = (z: number): number => ll.insdelln(z);
export const insertLine = (): number => ll.insertln();
export const insertStringWithLength = (a1: string, z: number): number => ll.insnstr(cstring(a1), z);
export const insertString = (z: string): number => ll.insstr(cstring(z));
export const copyString = (z: string): number => ll.instr(cstring(z));
export const didEnd = (): boolean => ll.isendwin() > -1;
export const keyName = (c: number): string => ll.keyname(c).getCString();
export const killChar = (): string => String.fromCharCode(ll.killchar());
export const longName = (): string => ll.longname().getCString();
export const moveCursor = (x: number, y: number): number => ll.move(y, x);
export const addCharAt = (a1: number, a2: number, z: number): number => ll.mvaddch(a1, a2, z);
export const addCharCodesWithLengthAt = (a1: number, a2: number, a3: number[], z: number): number => ll.mvaddchnstr(a1, a2, new Uint8Array(a3), z);
export const addCharCodesAt = (a1: number, a2: number, z: number[]): number => ll.mvaddchstr(a1, a2, new Uint8Array(z));
export const addStringWithLengthAt = (str: string, x: number, y: number, length: number): number => ll.mvaddnstr(y, x, cstring(str), length);
export const addStringAt = (a1: number, a2: number, z: string): number => ll.mvaddstr(a1, a2, cstring(z));
export const changeAttributeAt = (a1: number, a2: number, a3: number, a4: number, a5: number, z: any): number => ll.mvchgat(a1, a2, a3, a4, a5, z);
export const curAt = (yold: number, xold: number, ynew: number, xnew: number): number => ll.mvcur(yold, xold, ynew, xnew);
export const deleteCharAt = (a1: number, z: number): number => ll.mvdelch(a1, z);
export const readInputCharAt = (a1: number, z: number): number => ll.mvgetch(a1, z);
export const readInputStringWithLengthAt = (a1: number, a2: number, a3: string, z: number): number => ll.mvgetnstr(a1, a2, cstring(a3), z);
export const readInputStringAt = (a1: number, a2: number, z: string): number => ll.mvgetstr(a1, a2, cstring(z));
export const hlineAt = (a1: number, a2: number, a3: number, z: number): number => ll.mvhline(a1, a2, a3, z);
export const charAt = (x: number, y: number): string => String.fromCharCode(ll.mvinch(y, x));
export const getCharCodesWithLengthAt = (a1: number, a2: number, a3: number[], z: number): number => ll.mvinchnstr(a1, a2, new Uint8Array(a3), z);
export const getCharCodesAt = (a1: number, a2: number, z: number[]): number => ll.mvinchstr(a1, a2, new Uint8Array(z));
export const getStringWithLengthAt = (a1: number, a2: number, a3: string, z: number): number => ll.mvinnstr(a1, a2, cstring(a3), z);
export const insertCharAt = (a1: number, a2: number, z: number): number => ll.mvinsch(a1, a2, z);
export const insertStringWithLengthAt = (a1: number, a2: number, a3: string, z: number): number => ll.mvinsnstr(a1, a2, cstring(a3), z);
export const insertStringAt = (a1: number, a2: number, z: string): number => ll.mvinsstr(a1, a2, cstring(z));
export const getStringAt = (a1: number, a2: number, z: string): number => ll.mvinstr(a1, a2, cstring(z));
export const _nc_scroll_optimize = (): any => ll._nc_scroll_optimize();
export const vlineAt = (a1: number, a2: number, a3: number, z: number): number => ll.mvvline(a1, a2, a3, z);
export const napms = (ms: number): number => ll.napms(ms);
export const newPad = (l: number, c: number): WINDOW => ll.newpad(l, c);
export const newTerm = (name: string, ofp: FILE, ifp: FILE): SCREEN => ll.newterm(cstring(name), ofp, ifp);
export const newWindow = (x: number, y: number, lines: number, columns: number): WINDOW => ll.newwin(lines, columns, y, x);
export const nl = (): number => ll.nl();
export const noCbreak = (): number => ll.nocbreak();
export const noEcho = (): number => ll.noecho();
export const noNewline = (): number => ll.nonl();
export const noQueueflush = (): any => ll.noqiflush();
export const noRaw = (): number => ll.noraw();
export const pair_content = (pair: number, f: number, b: number): number => ll.pair_content(pair, f, b);
export const PAIR_NUMBER = (z: number): number => ll.PAIR_NUMBER(z);
export const queueFlush = (): any => ll.qiflush();
export const raw = (): number => ll.raw();
export const refresh = (): number => ll.refresh();
export const resetty = (): number => ll.resetty();
export const reset_prog_mode = (): number => ll.reset_prog_mode();
export const reset_shell_mode = (): number => ll.reset_shell_mode();
export const ripoffline = (line: number, PLACEHOLDER: any): number => ll.ripoffline(line, PLACEHOLDER);
export const savetty = (): number => ll.savetty();
export const dumpScreen = (file: string): number => ll.scr_dump(cstring(file));
export const initScreenFromFile = (file: string): number => ll.scr_init(cstring(file));
export const scroll = (z: number): number => ll.scrl(z);
export const restoreScroll = (file: string): number => ll.scr_restore(cstring(file));
export const setScreen = (file: string): number => ll.scr_set(cstring(file));
export const setScreenMargins = (a1: number, z: number): number => ll.setscrreg(a1, z);
export const setTerm = (screenp: SCREEN): SCREEN => ll.set_term(screenp);
export const slk_disableAttribute = (attr: number): number => ll.slk_attroff(attr);
export const slk_attr_off = (a1: number, z: any): number => ll.slk_attr_off(a1, z);
export const slk_enableAttribute = (attr: number): number => ll.slk_attron(attr);
export const slk_attr_on = (a1: number, z: any): number => ll.slk_attr_on(a1, z);
export const slk_setAttribute = (attr: number): number => ll.slk_attrset(attr);
export const slk_attr = (): number => ll.slk_attr();
export const slk_attr_set = (attr: number, color_pair_number: number, opts: any): number => ll.slk_attr_set(attr, color_pair_number, opts);
export const slk_clear = (): number => ll.slk_clear();
export const slk_color = (color_pair_number: number): number => ll.slk_color(color_pair_number);
export const slk_init = (format: number): number => ll.slk_init(format);
export const slk_label = (n: number): string => ll.slk_label(n).getCString();
export const slk_noutrefresh = (): number => ll.slk_noutrefresh();
export const slk_refresh = (): number => ll.slk_refresh();
export const slk_restore = (): number => ll.slk_restore();
export const slk_set = (i: number, astr: string, format: number): number => ll.slk_set(i, cstring(astr), format);
export const slk_touch = (): number => ll.slk_touch();
export const standout = (): number => ll.standout();
export const normal = (): number => ll.standend();
export const startColor = (): number => ll.start_color();
export const termattrs = (): number => ll.termattrs();
export const termname = (): string => ll.termname().getCString();
export const timeout = (z: number): any => ll.timeout(z);
export const typeahead = (fd: number): number => ll.typeahead(fd);
export const unreadInputch = (ch: number): number => ll.ungetch(ch);
export const use_env = (f: boolean): any => ll.use_env(Number(f));
export const vidattr = (newmode: number): number => ll.vidattr(newmode);
export const vidputs = (newmode: number, PLACEHOLDER: any): number => ll.vidputs(newmode, PLACEHOLDER);
export const vline = (a1: number, z: number): number => ll.vline(a1, z);
export const tireadInputflag = (str: string): number => ll.tigetflag(cstring(str));
export const tireadInputnum = (str: string): number => ll.tigetnum(cstring(str));
export const tireadInputString = (str: string): string => ll.tigetstr(cstring(str)).getCString();
export const putp = (string: string): number => ll.putp(cstring(string));
export const tparm = (string: string): string => ll.tparm(cstring(string)).getCString();
export const is_term_resized = (ToLines: number, ToCols: number): boolean => ll.is_term_resized(ToLines, ToCols) > -1;
export const keybound = (code: number, count: number): string => ll.keybound(code, count).getCString();
export const curses_version = (): string => ll.curses_version().getCString();
export const assume_default_colors = (fg: number, bg: number): number => ll.assume_default_colors(fg, bg);
export const define_key = (str: string, keycode: number): number => ll.define_key(cstring(str), keycode);
export const key_defined = (str: string): number => ll.key_defined(cstring(str));
export const keyok = (c: number, flag: boolean): number => ll.keyok(c, Number(flag));
export const resize_term = (ToLines: number, ToCols: number): number => ll.resize_term(ToLines, ToCols);
export const resizeterm = (ToLines: number, ToCols: number): number => ll.resizeterm(ToLines, ToCols);
export const set_escdelay = (value: number): number => ll.set_escdelay(value);
export const set_tabsize = (value: number): number => ll.set_tabsize(value);
export const useDefaultColors = (): number => ll.use_default_colors();
export const use_extended_names = (flag: boolean): number => ll.use_extended_names(Number(flag));
export const use_legacy_coding = (level: number): number => ll.use_legacy_coding(level);
export const use_screen = (screen: SCREEN, func: any, data: any): number => ll.use_screen(screen, func, data);
export const nofilter = (): any => ll.nofilter();
export const readInputmouse = (aevent: MEVENT): number => ll.getmouse(aevent);
export const unreadInputmouse = (aevent: MEVENT): number => ll.ungetmouse(aevent);
export const mousemask = (newmask: number, oldmask: number): number => ll.mousemask(newmask, oldmask);
export const mouseinterval = (maxclick: number): number => ll.mouseinterval(maxclick);
export const mouse_trafo = (a1: number, a2: number, z: boolean): boolean => ll.mouse_trafo(a1, a2, Number(z)) > -1;
export const mcprint = (data: string, len: number): number => ll.mcprint(cstring(data), len);
export const has_key = (keycode: number): number => ll.has_key(keycode);
export const _tracedump = (name: string, win: WINDOW): any => ll._tracedump(cstring(name), win);
export const _traceattr = (newmode: number): string => ll._traceattr(newmode).getCString();
export const _traceattr2 = (bufnum: number, newmode: number): string => ll._traceattr2(bufnum, newmode).getCString();
export const _nc_tracebits = (): string => ll._nc_tracebits().getCString();
export const _tracechar = (ch: number): string => ll._tracechar(ch).getCString();
export const _tracechtype = (ch: number): string => ll._tracechtype(ch).getCString();
export const _tracechtype2 = (bufnum: number, ch: number): string => ll._tracechtype2(bufnum, ch).getCString();
export const _tracecchar_t = (ch: any): string => ll._tracecchar_t(ch).getCString();
export const _tracecchar_t2 = (bufnum: number, ch: any): string => ll._tracecchar_t2(bufnum, ch).getCString();
export const trace = (tracelevel: number): any => ll.trace(tracelevel);
export const _nc_visbuf = (buf: string): string => ll._nc_visbuf(cstring(buf)).getCString();
export const window = {
  getEvents: (win: WINDOW, evl: any): number => ll.wgetch_events(win, evl),
  box: (a1: WINDOW, a2: number, z: number): number => ll.box(a1, a2, z),
  clearok: (win: WINDOW, flag: boolean): number => ll.clearok(win, Number(flag)),
  copyWindow: (src: WINDOW, dst: WINDOW, sminrow: number, smincol: number, dminrow: number, dmincol: number, dmaxrow: number, dmaxcol: number, over: number): number => ll.copywin(src, dst, sminrow, smincol, dminrow, dmincol, dmaxrow, dmaxcol, over),
  deleteWindow: (win: WINDOW): number => ll.delwin(win),
  derwin: (orig: WINDOW, num_lines: number, num_columns: number, begy: number, begx: number): WINDOW => ll.derwin(orig, num_lines, num_columns, begy, begx),
  duplicateWindow: (win: WINDOW): WINDOW => ll.dupwin(win),
  getBackground: (z: WINDOW): number => ll.getbkgd(z),
  idcok: (win: WINDOW, flag: boolean): any => ll.idcok(win, Number(flag)),
  idlok: (win: WINDOW, flag: boolean): number => ll.idlok(win, Number(flag)),
  immedok: (win: WINDOW, flag: boolean): any => ll.immedok(win, Number(flag)),
  intrflush: (win: WINDOW, flag: boolean): number => ll.intrflush(win, Number(flag)),
  is_linetouched: (win: WINDOW, line: number): boolean => ll.is_linetouched(win, line) > -1,
  is_wintouched: (win: WINDOW): boolean => ll.is_wintouched(win) > -1,
  keypad: (win: WINDOW, flag: boolean): number => ll.keypad(win, Number(flag)),
  leaveok: (win: WINDOW, flag: boolean): number => ll.leaveok(win, Number(flag)),
  meta: (win: WINDOW, flag: boolean): number => ll.meta(win, Number(flag)),
  derwinAt: (win: WINDOW, y: number, x: number): number => ll.mvderwin(win, y, x),
  addCharAt: (a1: WINDOW, a2: number, a3: number, z: number): number => ll.mvwaddch(a1, a2, a3, z),
  addCharCodesWithLengthAt: (a1: WINDOW, a2: number, a3: number, a4: number[], z: number): number => ll.mvwaddchnstr(a1, a2, a3, new Uint8Array(a4), z),
  addCharCodesAt: (a1: WINDOW, a2: number, a3: number, z: number[]): number => ll.mvwaddchstr(a1, a2, a3, new Uint8Array(z)),
  addStringWithLengthAt: (win: WINDOW, str: string, x: number, y: number, length: number): number => ll.mvwaddnstr(win, y, x, cstring(str), length),
  addStringAt: (a1: WINDOW, a2: number, a3: number, z: string): number => ll.mvwaddstr(a1, a2, a3, cstring(z)),
  changeAttributeAt: (a1: WINDOW, a2: number, a3: number, a4: number, a5: number, a6: number, z: any): number => ll.mvwchgat(a1, a2, a3, a4, a5, a6, z),
  deleteCharAt: (a1: WINDOW, a2: number, z: number): number => ll.mvwdelch(a1, a2, z),
  readInputCharAt: (a1: WINDOW, a2: number, z: number): number => ll.mvwgetch(a1, a2, z),
  readInputStringWithLengthAt: (a1: WINDOW, a2: number, a3: number, a4: string, z: number): number => ll.mvwgetnstr(a1, a2, a3, cstring(a4), z),
  readInputStringAt: (a1: WINDOW, a2: number, a3: number, z: string): number => ll.mvwgetstr(a1, a2, a3, cstring(z)),
  hlineAt: (a1: WINDOW, a2: number, a3: number, a4: number, z: number): number => ll.mvwhline(a1, a2, a3, a4, z),
  inAt: (win: WINDOW, by: number, bx: number): number => ll.mvwin(win, by, bx),
  inchAt: (a1: WINDOW, a2: number, z: number): number => ll.mvwinch(a1, a2, z),
  getCharCodesWithLengthAt: (a1: WINDOW, a2: number, a3: number, a4: number[], z: number): number => ll.mvwinchnstr(a1, a2, a3, new Uint8Array(a4), z),
  getCharCodesAt: (a1: WINDOW, a2: number, a3: number, z: number[]): number => ll.mvwinchstr(a1, a2, a3, new Uint8Array(z)),
  getStringWithLengthAt: (a1: WINDOW, a2: number, a3: number, a4: string, z: number): number => ll.mvwinnstr(a1, a2, a3, cstring(a4), z),
  insertCharAt: (a1: WINDOW, a2: number, a3: number, z: number): number => ll.mvwinsch(a1, a2, a3, z),
  insertStringWithLengthAt: (a1: WINDOW, a2: number, a3: number, a4: string, z: number): number => ll.mvwinsnstr(a1, a2, a3, cstring(a4), z),
  insertStringAt: (a1: WINDOW, a2: number, a3: number, z: string): number => ll.mvwinsstr(a1, a2, a3, cstring(z)),
  getStringAt: (a1: WINDOW, a2: number, a3: number, z: string): number => ll.mvwinstr(a1, a2, a3, cstring(z)),
  vlineAt: (a1: WINDOW, a2: number, a3: number, a4: number, z: number): number => ll.mvwvline(a1, a2, a3, a4, z),
  noDelay: (win: WINDOW, flag: boolean): number => ll.nodelay(win, Number(flag)),
  noTimeout: (win: WINDOW, f: boolean): number => ll.notimeout(win, Number(f)),
  overlay: (win1: WINDOW, win2: WINDOW): number => ll.overlay(win1, win2),
  overwrite: (win1: WINDOW, win2: WINDOW): number => ll.overwrite(win1, win2),
  pechochar: (pad: WINDOW, ch: number): number => ll.pechochar(pad, ch),
  pnoutrefresh: (win: WINDOW, pminrow: number, pmincol: number, sminrow: number, smincol: number, smaxrow: number, smaxcol: number): number => ll.pnoutrefresh(win, pminrow, pmincol, sminrow, smincol, smaxrow, smaxcol),
  prefresh: (win: WINDOW, pminrow: number, pmincol: number, sminrow: number, smincol: number, smaxrow: number, smaxcol: number): number => ll.prefresh(win, pminrow, pmincol, sminrow, smincol, smaxrow, smaxcol),
  putwin: (win: WINDOW, filep: FILE): number => ll.putwin(win, filep),
  redrawwin: (z: WINDOW): number => ll.redrawwin(z),
  scroll: (z: WINDOW): number => ll.scroll(z),
  scrollok: (win: WINDOW, flag: boolean): number => ll.scrollok(win, Number(flag)),
  subpad: (orig: WINDOW, l: number, c: number, begy: number, begx: number): WINDOW => ll.subpad(orig, l, c, begy, begx),
  subwin: (w: WINDOW, l: number, c: number, y: number, x: number): WINDOW => ll.subwin(w, l, c, y, x),
  syncok: (win: WINDOW, bf: boolean): number => ll.syncok(win, Number(bf)),
  touchline: (a1: WINDOW, a2: number, z: number): number => ll.touchline(a1, a2, z),
  touchwin: (z: WINDOW): number => ll.touchwin(z),
  untouchwin: (z: WINDOW): number => ll.untouchwin(z),
  vwprintw: (win: WINDOW, fmt: string, argp: any): number => ll.vwprintw(win, cstring(fmt), argp),
  vw_printw: (a1: WINDOW, a2: string, z: any): number => ll.vw_printw(a1, cstring(a2), z),
  vwscanw: (win: WINDOW, fmt: string, argp: any): number => ll.vwscanw(win, cstring(fmt), argp),
  vw_scanw: (a1: WINDOW, a2: string, z: any): number => ll.vw_scanw(a1, cstring(a2), z),
  addChar: (win: WINDOW, ch: number): number => ll.waddch(win, ch),
  addCharCodesWithLength: (win: WINDOW, astr: number[], n: number): number => ll.waddchnstr(win, new Uint8Array(astr), n),
  addCharCodes: (a1: WINDOW, z: number[]): number => ll.waddchstr(a1, new Uint8Array(z)),
  addStringWithLength: (win: WINDOW, astr: string, n: number): number => ll.waddnstr(win, cstring(astr), n),
  addString: (a1: WINDOW, z: string): number => ll.waddstr(a1, cstring(z)),
  addAttribute: (a1: WINDOW, z: number): number => ll.wattron(a1, z),
  removeAttribute: (a1: WINDOW, z: number): number => ll.wattroff(a1, z),
  setAttribute: (a1: WINDOW, z: number): number => ll.wattrset(a1, z),
  attr_readInput: (a1: WINDOW, a2: number, a3: number, z: any): number => ll.wattr_get(a1, a2, a3, z),
  attr_on: (win: WINDOW, at: number, opts: any): number => ll.wattr_on(win, at, opts),
  attr_off: (win: WINDOW, at: number, opts: any): number => ll.wattr_off(win, at, opts),
  attr_set: (a1: WINDOW, a2: number, a3: number, z: any): number => ll.wattr_set(a1, a2, a3, z),
  background: (win: WINDOW, ch: number): number => ll.wbkgd(win, ch),
  setBackground: (win: WINDOW, ch: number): any => ll.wbkgdset(win, ch),
  border: (win: WINDOW, left: number, right: number, top: number, bottom: number, topLeft: number, topRight: number, bottomLeft: number, bottomRight: number) => ll.wborder(
    win,
    left,
    right,
    top,
    bottom,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  ),
  changeAttribute: (win: WINDOW, n: number, attr: number, color: number, opts: any): number => ll.wchgat(win, n, attr, color, opts),
  clear: (win: WINDOW): number => ll.wclear(win),
  clrtobot: (win: WINDOW): number => ll.wclrtobot(win),
  clrtoeol: (win: WINDOW): number => ll.wclrtoeol(win),
  color_set: (win: WINDOW, color_pair_number: number, opts: any): number => ll.wcolor_set(win, color_pair_number, opts),
  cursyncup: (win: WINDOW): any => ll.wcursyncup(win),
  deleteChar: (win: WINDOW): number => ll.wdelch(win),
  deleteLine: (z: WINDOW): number => ll.wdeleteln(z),
  echoChar: (win: WINDOW, ch: number): number => ll.wechochar(win, ch),
  erase: (win: WINDOW): number => ll.werase(win),
  readInputChar: (win: WINDOW): string => String.fromCharCode(ll.wgetch(win)),
  readInputCharCode: (win: WINDOW): number => ll.wgetch(win),
  readInputStringWithLength: (win: WINDOW, str: string, maxlen: number): number => ll.wgetnstr(win, cstring(str), maxlen),
  readInputString: (a1: WINDOW, z: string): number => ll.wgetstr(a1, cstring(z)),
  hline: (win: WINDOW, ch: number, n: number): number => ll.whline(win, ch, n),
  getChar: (win: WINDOW): number => ll.winch(win),
  getCharCodesWithLength: (win: WINDOW, str: number[], n: number): number => ll.winchnstr(win, new Uint8Array(str), n),
  getCharCodes: (a1: WINDOW, z: number[]): number => ll.winchstr(a1, new Uint8Array(z)),
  getStringWithLength: (win: WINDOW, str: string, n: number): number => ll.winnstr(win, cstring(str), n),
  insertChar: (win: WINDOW, c: number): number => ll.winsch(win, c),
  insertDeleteLine: (win: WINDOW, n: number): number => ll.winsdelln(win, n),
  insertLine: (z: WINDOW): number => ll.winsertln(z),
  insertStringWithLength: (win: WINDOW, s: string, n: number): number => ll.winsnstr(win, cstring(s), n),
  insertString: (a1: WINDOW, z: string): number => ll.winsstr(a1, cstring(z)),
  getString: (a1: WINDOW, z: string): number => ll.winstr(a1, cstring(z)),
  moveCursor: (win: WINDOW, x: number, y: number): number => ll.wmove(win, y, x),
  noutrefresh: (win: WINDOW): number => ll.wnoutrefresh(win),
  redrawLine: (win: WINDOW, beg: number, num: number): number => ll.wredrawln(win, beg, num),
  refresh: (win: WINDOW): number => ll.wrefresh(win),
  scrollBy: (win: WINDOW, n: number): number => ll.wscrl(win, n),
  setScreenMargins: (win: WINDOW, top: number, bottom: number): number => ll.wsetscrreg(win, top, bottom),
  standOut: (z: WINDOW): number => ll.wstandout(z),
  normal: (z: WINDOW): number => ll.wstandend(z),
  syncDown: (win: WINDOW): any => ll.wsyncdown(win),
  syncUp: (win: WINDOW): any => ll.wsyncup(win),
  timeout: (win: WINDOW, delay: number): any => ll.wtimeout(win, delay),
  touchLine: (win: WINDOW, y: number, n: number, changed: number): number => ll.wtouchln(win, y, n, changed),
  vline: (win: WINDOW, ch: number, n: number): number => ll.wvline(win, ch, n),
  getAttributes: (z: WINDOW): number => ll.getattrs(z),
  getCurx: (z: WINDOW): number => ll.getcurx(z),
  getCury: (z: WINDOW): number => ll.getcury(z),
  getBegx: (z: WINDOW): number => ll.getbegx(z),
  getBegy: (z: WINDOW): number => ll.getbegy(z),
  getWidth: (z: WINDOW): number => ll.getmaxx(z),
  getHeight: (z: WINDOW): number => ll.getmaxy(z),
  getParx: (z: WINDOW): number => ll.getparx(z),
  getPary: (z: WINDOW): number => ll.getpary(z),
  use_window: (win: WINDOW, func: any, data: any): number => ll.use_window(win, func, data),
  resize: (win: WINDOW, ToLines: number, ToCols: number): number => ll.wresize(win, ToLines, ToCols),
  getParent: (z: WINDOW): WINDOW => ll.wgetparent(z),
  is_cleared: (z: WINDOW): boolean => ll.is_cleared(z) > -1,
  is_idcok: (z: WINDOW): boolean => ll.is_idcok(z) > -1,
  is_idlok: (z: WINDOW): boolean => ll.is_idlok(z) > -1,
  is_immedok: (z: WINDOW): boolean => ll.is_immedok(z) > -1,
  is_keypad: (z: WINDOW): boolean => ll.is_keypad(z) > -1,
  is_leaveok: (z: WINDOW): boolean => ll.is_leaveok(z) > -1,
  is_nodelay: (z: WINDOW): boolean => ll.is_nodelay(z) > -1,
  is_notimeout: (z: WINDOW): boolean => ll.is_notimeout(z) > -1,
  is_scrollok: (z: WINDOW): boolean => ll.is_scrollok(z) > -1,
  is_syncok: (z: WINDOW): boolean => ll.is_syncok(z) > -1,
  getScreenMargins: (a1: WINDOW, a2: number, z: number): number => ll.wgetscrreg(a1, a2, z),
  enclose: (win: WINDOW, y: number, x: number): boolean => ll.wenclose(win, y, x) > -1,
  mouse_trafo: (win: WINDOW, pY: number, pX: number, to_screen: boolean): boolean => ll.wmouse_trafo(win, pY, pX, Number(to_screen)) > -1,
};
