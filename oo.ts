import * as hl from './hl.ts';
import { WINDOW, SCREEN, FILE } from './ll.ts';
import { Border, Corner, StringOptions } from './hl.ts';

class Base {
  ptr: WINDOW;
  constructor(ptr: WINDOW) {
    this.ptr = ptr;
  }
  getEvents(evl: any): number {
    return hl.window.getEvents(this.ptr, evl);
  }
  box(a2: number, z: number): number {
    return hl.window.box(this.ptr, a2, z);
  }
  clearok(flag: boolean): number {
    return hl.window.clearok(this.ptr, flag);
  }
  copyWindow(dst: WINDOW, sminrow: number, smincol: number, dminrow: number, dmincol: number, dmaxrow: number, dmaxcol: number, over: number): number {
    return hl.window.copyWindow(this.ptr, dst, sminrow, smincol, dminrow, dmincol, dmaxrow, dmaxcol, over);
  }
  deleteWindow(): number {
    return hl.window.deleteWindow(this.ptr);
  }
  derwin(num_lines: number, num_columns: number, begy: number, begx: number): WINDOW {
    return hl.window.derwin(this.ptr, num_lines, num_columns, begy, begx);
  }
  duplicateWindow(): WINDOW {
    return hl.window.duplicateWindow(this.ptr);
  }
  getBackground(): number {
    return hl.window.getBackground(this.ptr);
  }
  idcok(flag: boolean): any {
    return hl.window.idcok(this.ptr, flag);
  }
  idlok(flag: boolean): number {
    return hl.window.idlok(this.ptr, flag);
  }
  immedok(flag: boolean): any {
    return hl.window.immedok(this.ptr, flag);
  }
  intrflush(flag: boolean): number {
    return hl.window.intrflush(this.ptr, flag);
  }
  is_linetouched(line: number): boolean {
    return hl.window.is_linetouched(this.ptr, line);
  }
  is_wintouched(): boolean {
    return hl.window.is_wintouched(this.ptr);
  }
  keypad(flag: boolean): number {
    return hl.window.keypad(this.ptr, flag);
  }
  leaveok(flag: boolean): number {
    return hl.window.leaveok(this.ptr, flag);
  }
  meta(flag: boolean): number {
    return hl.window.meta(this.ptr, flag);
  }
  derwinAt(y: number, x: number): number {
    return hl.window.derwinAt(this.ptr, y, x);
  }
  addCharAt(a2: number, a3: number, z: number): number {
    return hl.window.addCharAt(this.ptr, a2, a3, z);
  }
  addCharCodesWithLengthAt(a2: number, a3: number, a4: number[], z: number): number {
    return hl.window.addCharCodesWithLengthAt(this.ptr, a2, a3, a4, z);
  }
  addCharCodesAt(a2: number, a3: number, z: number[]): number {
    return hl.window.addCharCodesAt(this.ptr, a2, a3, z);
  }
  changeAttributeAt(a2: number, a3: number, a4: number, a5: number, a6: number, z: any): number {
    return hl.window.changeAttributeAt(this.ptr, a2, a3, a4, a5, a6, z);
  }
  deleteCharAt(a2: number, z: number): number {
    return hl.window.deleteCharAt(this.ptr, a2, z);
  }
  readInputCharAt(a2: number, z: number): number {
    return hl.window.readInputCharAt(this.ptr, a2, z);
  }
  readInputStringWithLengthAt(a2: number, a3: number, a4: string, z: number): number {
    return hl.window.readInputStringWithLengthAt(this.ptr, a2, a3, a4, z);
  }
  readInputStringAt(a2: number, a3: number, z: string): number {
    return hl.window.readInputStringAt(this.ptr, a2, a3, z);
  }
  hlineAt(a2: number, a3: number, a4: number, z: number): number {
    return hl.window.hlineAt(this.ptr, a2, a3, a4, z);
  }
  inAt(by: number, bx: number): number {
    return hl.window.inAt(this.ptr, by, bx);
  }
  inchAt(a2: number, z: number): number {
    return hl.window.inchAt(this.ptr, a2, z);
  }
  getCharCodesWithLengthAt(a2: number, a3: number, a4: number[], z: number): number {
    return hl.window.getCharCodesWithLengthAt(this.ptr, a2, a3, a4, z);
  }
  getCharCodesAt(a2: number, a3: number, z: number[]): number {
    return hl.window.getCharCodesAt(this.ptr, a2, a3, z);
  }
  getStringWithLengthAt(a2: number, a3: number, a4: string, z: number): number {
    return hl.window.getStringWithLengthAt(this.ptr, a2, a3, a4, z);
  }
  insertCharAt(a2: number, a3: number, z: number): number {
    return hl.window.insertCharAt(this.ptr, a2, a3, z);
  }
  insertStringWithLengthAt(a2: number, a3: number, a4: string, z: number): number {
    return hl.window.insertStringWithLengthAt(this.ptr, a2, a3, a4, z);
  }
  insertStringAt(a2: number, a3: number, z: string): number {
    return hl.window.insertStringAt(this.ptr, a2, a3, z);
  }
  getStringAt(a2: number, a3: number, z: string): number {
    return hl.window.getStringAt(this.ptr, a2, a3, z);
  }
  vlineAt(a2: number, a3: number, a4: number, z: number): number {
    return hl.window.vlineAt(this.ptr, a2, a3, a4, z);
  }
  noDelay(flag: boolean): number {
    return hl.window.noDelay(this.ptr, flag);
  }
  noTimeout(f: boolean): number {
    return hl.window.noTimeout(this.ptr, f);
  }
  overlay(win2: WINDOW): number {
    return hl.window.overlay(this.ptr, win2);
  }
  overwrite(win2: WINDOW): number {
    return hl.window.overwrite(this.ptr, win2);
  }
  pechochar(ch: number): number {
    return hl.window.pechochar(this.ptr, ch);
  }
  pnoutrefresh(pminrow: number, pmincol: number, sminrow: number, smincol: number, smaxrow: number, smaxcol: number): number {
    return hl.window.pnoutrefresh(this.ptr, pminrow, pmincol, sminrow, smincol, smaxrow, smaxcol);
  }
  prefresh(pminrow: number, pmincol: number, sminrow: number, smincol: number, smaxrow: number, smaxcol: number): number {
    return hl.window.prefresh(this.ptr, pminrow, pmincol, sminrow, smincol, smaxrow, smaxcol);
  }
  putwin(filep: FILE): number {
    return hl.window.putwin(this.ptr, filep);
  }
  redrawwin(): number {
    return hl.window.redrawwin(this.ptr);
  }
  scroll(): number {
    return hl.window.scroll(this.ptr);
  }
  scrollok(flag: boolean): number {
    return hl.window.scrollok(this.ptr, flag);
  }
  subpad(l: number, c: number, begy: number, begx: number): WINDOW {
    return hl.window.subpad(this.ptr, l, c, begy, begx);
  }
  subwin(l: number, c: number, y: number, x: number): WINDOW {
    return hl.window.subwin(this.ptr, l, c, y, x);
  }
  syncok(bf: boolean): number {
    return hl.window.syncok(this.ptr, bf);
  }
  touchline(a2: number, z: number): number {
    return hl.window.touchline(this.ptr, a2, z);
  }
  touchwin(): number {
    return hl.window.touchwin(this.ptr);
  }
  untouchwin(): number {
    return hl.window.untouchwin(this.ptr);
  }
  vwprintw(fmt: string, argp: any): number {
    return hl.window.vwprintw(this.ptr, fmt, argp);
  }
  vw_printw(a2: string, z: any): number {
    return hl.window.vw_printw(this.ptr, a2, z);
  }
  vwscanw(fmt: string, argp: any): number {
    return hl.window.vwscanw(this.ptr, fmt, argp);
  }
  vw_scanw(a2: string, z: any): number {
    return hl.window.vw_scanw(this.ptr, a2, z);
  }
  addChar(ch: number): number {
    return hl.window.addChar(this.ptr, ch);
  }
  addCharCodesWithLength(astr: number[], n: number): number {
    return hl.window.addCharCodesWithLength(this.ptr, astr, n);
  }
  addCharCodes(z: number[]): number {
    return hl.window.addCharCodes(this.ptr, z);
  }
  addString(str: string, options?: StringOptions): number {
    return hl.window.addStringWithLengthAt(this.ptr, str, options?.x ?? 0, options?.y ?? 0, options?.length ?? str.length);
  }
  enableAttribute(z: number): number {
    return hl.window.enableAttribute(this.ptr, z);
  }
  disableAttribute(z: number): number {
    return hl.window.disableAttribute(this.ptr, z);
  }
  setAttribute(z: number): number {
    return hl.window.setAttribute(this.ptr, z);
  }
  attr_readInput(a2: number, a3: number, z: any): number {
    return hl.window.attr_readInput(this.ptr, a2, a3, z);
  }
  attr_on(at: number, opts: any): number {
    return hl.window.attr_on(this.ptr, at, opts);
  }
  attr_off(at: number, opts: any): number {
    return hl.window.attr_off(this.ptr, at, opts);
  }
  attr_set(a2: number, a3: number, z: any): number {
    return hl.window.attr_set(this.ptr, a2, a3, z);
  }
  background(ch: number): number {
    return hl.window.background(this.ptr, ch);
  }
  setBackground(ch: number): any {
    return hl.window.setBackground(this.ptr, ch);
  }
  border(border?: Border, corner?: Corner) {
    return hl.window.border(this.ptr, border, corner);
  }
  changeAttribute(n: number, attr: number, color: number, opts: any): number {
    return hl.window.changeAttribute(this.ptr, n, attr, color, opts);
  }
  clear(): number {
    return hl.window.clear(this.ptr);
  }
  clrtobot(): number {
    return hl.window.clrtobot(this.ptr);
  }
  clrtoeol(): number {
    return hl.window.clrtoeol(this.ptr);
  }
  color_set(color_pair_number: number, opts: any): number {
    return hl.window.color_set(this.ptr, color_pair_number, opts);
  }
  cursyncup(): any {
    return hl.window.cursyncup(this.ptr);
  }
  deleteChar(): number {
    return hl.window.deleteChar(this.ptr);
  }
  deleteLine(): number {
    return hl.window.deleteLine(this.ptr);
  }
  echoChar(ch: number): number {
    return hl.window.echoChar(this.ptr, ch);
  }
  erase(): number {
    return hl.window.erase(this.ptr);
  }
  readInputChar(): number {
    return hl.window.readInputChar(this.ptr);
  }
  readInputStringWithLength(str: string, maxlen: number): number {
    return hl.window.readInputStringWithLength(this.ptr, str, maxlen);
  }
  readInputString(z: string): number {
    return hl.window.readInputString(this.ptr, z);
  }
  hline(ch: number, n: number): number {
    return hl.window.hline(this.ptr, ch, n);
  }
  getChar(): number {
    return hl.window.getChar(this.ptr);
  }
  getCharCodesWithLength(str: number[], n: number): number {
    return hl.window.getCharCodesWithLength(this.ptr, str, n);
  }
  getCharCodes(z: number[]): number {
    return hl.window.getCharCodes(this.ptr, z);
  }
  getStringWithLength(str: string, n: number): number {
    return hl.window.getStringWithLength(this.ptr, str, n);
  }
  insertChar(c: number): number {
    return hl.window.insertChar(this.ptr, c);
  }
  insertDeleteLine(n: number): number {
    return hl.window.insertDeleteLine(this.ptr, n);
  }
  insertLine(): number {
    return hl.window.insertLine(this.ptr);
  }
  insertStringWithLength(s: string, n: number): number {
    return hl.window.insertStringWithLength(this.ptr, s, n);
  }
  insertString(z: string): number {
    return hl.window.insertString(this.ptr, z);
  }
  getString(z: string): number {
    return hl.window.getString(this.ptr, z);
  }
  move(y: number, x: number): number {
    return hl.window.move(this.ptr, y, x);
  }
  noutrefresh(): number {
    return hl.window.noutrefresh(this.ptr);
  }
  redrawLine(beg: number, num: number): number {
    return hl.window.redrawLine(this.ptr, beg, num);
  }
  refresh(): number {
    return hl.window.refresh(this.ptr);
  }
  scrollBy(n: number): number {
    return hl.window.scrollBy(this.ptr, n);
  }
  setScreenMargins(top: number, bottom: number): number {
    return hl.window.setScreenMargins(this.ptr, top, bottom);
  }
  standOut(): number {
    return hl.window.standOut(this.ptr);
  }
  standEnd(): number {
    return hl.window.standEnd(this.ptr);
  }
  syncDown(): any {
    return hl.window.syncDown(this.ptr);
  }
  syncUp(): any {
    return hl.window.syncUp(this.ptr);
  }
  timeout(delay: number): any {
    return hl.window.timeout(this.ptr, delay);
  }
  touchLine(y: number, n: number, changed: number): number {
    return hl.window.touchLine(this.ptr, y, n, changed);
  }
  vline(ch: number, n: number): number {
    return hl.window.vline(this.ptr, ch, n);
  }
  getAttributes(): number {
    return hl.window.getAttributes(this.ptr);
  }
  getCurx(): number {
    return hl.window.getCurx(this.ptr);
  }
  getCury(): number {
    return hl.window.getCury(this.ptr);
  }
  getBegx(): number {
    return hl.window.getBegx(this.ptr);
  }
  getBegy(): number {
    return hl.window.getBegy(this.ptr);
  }
  getMaxx(): number {
    return hl.window.getMaxx(this.ptr);
  }
  getMaxy(): number {
    return hl.window.getMaxy(this.ptr);
  }
  getParx(): number {
    return hl.window.getParx(this.ptr);
  }
  getPary(): number {
    return hl.window.getPary(this.ptr);
  }
  use_window(func: any, data: any): number {
    return hl.window.use_window(this.ptr, func, data);
  }
  resize(ToLines: number, ToCols: number): number {
    return hl.window.resize(this.ptr, ToLines, ToCols);
  }
  getParent(): WINDOW {
    return hl.window.getParent(this.ptr);
  }
  is_cleared(): boolean {
    return hl.window.is_cleared(this.ptr);
  }
  is_idcok(): boolean {
    return hl.window.is_idcok(this.ptr);
  }
  is_idlok(): boolean {
    return hl.window.is_idlok(this.ptr);
  }
  is_immedok(): boolean {
    return hl.window.is_immedok(this.ptr);
  }
  is_keypad(): boolean {
    return hl.window.is_keypad(this.ptr);
  }
  is_leaveok(): boolean {
    return hl.window.is_leaveok(this.ptr);
  }
  is_nodelay(): boolean {
    return hl.window.is_nodelay(this.ptr);
  }
  is_notimeout(): boolean {
    return hl.window.is_notimeout(this.ptr);
  }
  is_scrollok(): boolean {
    return hl.window.is_scrollok(this.ptr);
  }
  is_syncok(): boolean {
    return hl.window.is_syncok(this.ptr);
  }
  getScreenMargins(a2: number, z: number): number {
    return hl.window.getScreenMargins(this.ptr, a2, z);
  }
  enclose(y: number, x: number): boolean {
    return hl.window.enclose(this.ptr, y, x);
  }
  mouse_trafo(pY: number, pX: number, to_screen: boolean): boolean {
    return hl.window.mouse_trafo(this.ptr, pY, pX, to_screen);
  }
}

export class Window extends Base {
  constructor(x: number, y: number, lines: number, columns: number) {
    super(hl.newWindow(x, y, lines, columns));
  }
}

export class Screen extends Base {
  constructor() {
    super(hl.initScreen());
  }
}
