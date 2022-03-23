const symbols = <Record<string, Deno.ForeignFunction>> {
  "addch": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "addchnstr": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "addchstr": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "addnstr": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "addstr": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "attroff": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "attron": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "attrset": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "attr_get": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "attr_off": {
    "parameters": [
      "u32",
      "pointer"
    ],
    "result": "i32"
  },
  "attr_on": {
    "parameters": [
      "u32",
      "pointer"
    ],
    "result": "i32"
  },
  "attr_set": {
    "parameters": [
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "baudrate": {
    "parameters": [],
    "result": "i32"
  },
  "beep": {
    "parameters": [],
    "result": "i32"
  },
  "bkgd": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "bkgdset": {
    "parameters": [
      "u32"
    ],
    "result": "void"
  },
  "border": {
    "parameters": [
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "i32"
  },
  "box": {
    "parameters": [
      "pointer",
      "u32",
      "u32"
    ],
    "result": "i32"
  },
  "can_change_color": {
    "parameters": [],
    "result": "i8"
  },
  "cbreak": {
    "parameters": [],
    "result": "i32"
  },
  "chgat": {
    "parameters": [
      "i32",
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "clear": {
    "parameters": [],
    "result": "i32"
  },
  "clearok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "clrtobot": {
    "parameters": [],
    "result": "i32"
  },
  "clrtoeol": {
    "parameters": [],
    "result": "i32"
  },
  "color_content": {
    "parameters": [
      "i16",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "color_set": {
    "parameters": [
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "copywin": {
    "parameters": [
      "pointer",
      "pointer",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "curs_set": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "def_prog_mode": {
    "parameters": [],
    "result": "i32"
  },
  "def_shell_mode": {
    "parameters": [],
    "result": "i32"
  },
  "delay_output": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "delch": {
    "parameters": [],
    "result": "i32"
  },
  "delscreen": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "delwin": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "deleteln": {
    "parameters": [],
    "result": "i32"
  },
  "derwin": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "pointer"
  },
  "doupdate": {
    "parameters": [],
    "result": "i32"
  },
  "dupwin": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "echo": {
    "parameters": [],
    "result": "i32"
  },
  "echochar": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "erase": {
    "parameters": [],
    "result": "i32"
  },
  "endwin": {
    "parameters": [],
    "result": "i32"
  },
  "erasechar": {
    "parameters": [],
    "result": "u8"
  },
  "filter": {
    "parameters": [],
    "result": "void"
  },
  "flash": {
    "parameters": [],
    "result": "i32"
  },
  "flushinp": {
    "parameters": [],
    "result": "i32"
  },
  "getbkgd": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "getch": {
    "parameters": [],
    "result": "i32"
  },
  "getnstr": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "getstr": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getwin": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "halfdelay": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "has_colors": {
    "parameters": [],
    "result": "i8"
  },
  "has_ic": {
    "parameters": [],
    "result": "i8"
  },
  "has_il": {
    "parameters": [],
    "result": "i8"
  },
  "hline": {
    "parameters": [
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "idcok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "void"
  },
  "idlok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "immedok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "void"
  },
  "inch": {
    "parameters": [],
    "result": "u32"
  },
  "inchnstr": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "inchstr": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "initscr": {
    "parameters": [],
    "result": "pointer"
  },
  "init_color": {
    "parameters": [
      "i16",
      "i16",
      "i16",
      "i16"
    ],
    "result": "i32"
  },
  "init_pair": {
    "parameters": [
      "i16",
      "i16",
      "i16"
    ],
    "result": "i32"
  },
  "innstr": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "insch": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "insdelln": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "insertln": {
    "parameters": [],
    "result": "i32"
  },
  "insnstr": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "insstr": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "instr": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "intrflush": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "isendwin": {
    "parameters": [],
    "result": "i8"
  },
  "is_linetouched": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i8"
  },
  "is_wintouched": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "keyname": {
    "parameters": [
      "i32"
    ],
    "result": "pointer"
  },
  "keypad": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "killchar": {
    "parameters": [],
    "result": "u8"
  },
  "leaveok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "longname": {
    "parameters": [],
    "result": "pointer"
  },
  "meta": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "move": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvaddch": {
    "parameters": [
      "i32",
      "i32",
      "u32"
    ],
    "result": "i32"
  },
  "mvaddchnstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvaddchstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvaddnstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvaddstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvchgat": {
    "parameters": [
      "i32",
      "i32",
      "i32",
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "mvcur": {
    "parameters": [
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvdelch": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvderwin": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvgetch": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvgetnstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvgetstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvhline": {
    "parameters": [
      "i32",
      "i32",
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "mvinch": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "u32"
  },
  "mvinchnstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvinchstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvinnstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvinsch": {
    "parameters": [
      "i32",
      "i32",
      "u32"
    ],
    "result": "i32"
  },
  "mvinsnstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvinsstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvinstr": {
    "parameters": [
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvvline": {
    "parameters": [
      "i32",
      "i32",
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "mvwaddch": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "u32"
    ],
    "result": "i32"
  },
  "mvwaddchnstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvwaddchstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwaddnstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvwaddstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwchgat": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32",
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwdelch": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvwgetch": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvwgetnstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvwgetstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwhline": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "mvwin": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "mvwinch": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "u32"
  },
  "mvwinchnstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvwinchstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwinnstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvwinsch": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "u32"
    ],
    "result": "i32"
  },
  "mvwinsnstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "mvwinsstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwinstr": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "mvwvline": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "napms": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "newpad": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "pointer"
  },
  "newterm": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "newwin": {
    "parameters": [
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "pointer"
  },
  "nl": {
    "parameters": [],
    "result": "i32"
  },
  "nocbreak": {
    "parameters": [],
    "result": "i32"
  },
  "nodelay": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "noecho": {
    "parameters": [],
    "result": "i32"
  },
  "nonl": {
    "parameters": [],
    "result": "i32"
  },
  "noqiflush": {
    "parameters": [],
    "result": "void"
  },
  "noraw": {
    "parameters": [],
    "result": "i32"
  },
  "notimeout": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "overlay": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "overwrite": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "pair_content": {
    "parameters": [
      "i16",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "PAIR_NUMBER": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "pechochar": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i32"
  },
  "pnoutrefresh": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "prefresh": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "putwin": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "qiflush": {
    "parameters": [],
    "result": "void"
  },
  "raw": {
    "parameters": [],
    "result": "i32"
  },
  "redrawwin": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "refresh": {
    "parameters": [],
    "result": "i32"
  },
  "resetty": {
    "parameters": [],
    "result": "i32"
  },
  "reset_prog_mode": {
    "parameters": [],
    "result": "i32"
  },
  "reset_shell_mode": {
    "parameters": [],
    "result": "i32"
  },
  "ripoffline": {
    "parameters": [
      "i32",
      "pointer"
    ],
    "result": "i32"
  },
  "savetty": {
    "parameters": [],
    "result": "i32"
  },
  "scr_dump": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "scr_init": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "scrl": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "scroll": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "scrollok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "scr_restore": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "scr_set": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "setscrreg": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "set_term": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "slk_attroff": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "slk_attron": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "slk_attrset": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "slk_attr": {
    "parameters": [],
    "result": "u32"
  },
  "slk_attr_set": {
    "parameters": [
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "slk_clear": {
    "parameters": [],
    "result": "i32"
  },
  "slk_color": {
    "parameters": [
      "i16"
    ],
    "result": "i32"
  },
  "slk_init": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "slk_label": {
    "parameters": [
      "i32"
    ],
    "result": "pointer"
  },
  "slk_noutrefresh": {
    "parameters": [],
    "result": "i32"
  },
  "slk_refresh": {
    "parameters": [],
    "result": "i32"
  },
  "slk_restore": {
    "parameters": [],
    "result": "i32"
  },
  "slk_set": {
    "parameters": [
      "i32",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "slk_touch": {
    "parameters": [],
    "result": "i32"
  },
  "standout": {
    "parameters": [],
    "result": "i32"
  },
  "standend": {
    "parameters": [],
    "result": "i32"
  },
  "start_color": {
    "parameters": [],
    "result": "i32"
  },
  "subpad": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "pointer"
  },
  "subwin": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "result": "pointer"
  },
  "syncok": {
    "parameters": [
      "pointer",
      "i8"
    ],
    "result": "i32"
  },
  "termattrs": {
    "parameters": [],
    "result": "u32"
  },
  "termname": {
    "parameters": [],
    "result": "pointer"
  },
  "timeout": {
    "parameters": [
      "i32"
    ],
    "result": "void"
  },
  "touchline": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "touchwin": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "typeahead": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "ungetch": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "untouchwin": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "use_env": {
    "parameters": [
      "i8"
    ],
    "result": "void"
  },
  "vidattr": {
    "parameters": [
      "u32"
    ],
    "result": "i32"
  },
  "vidputs": {
    "parameters": [
      "u32",
      "pointer"
    ],
    "result": "i32"
  },
  "vline": {
    "parameters": [
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "vwprintw": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "vw_printw": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "vwscanw": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "vw_scanw": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "waddch": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i32"
  },
  "waddchnstr": {
    "parameters": [
      "pointer",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "waddchstr": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "waddnstr": {
    "parameters": [
      "pointer",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "waddstr": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "wattron": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "wattroff": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "wattrset": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "wattr_get": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "wattr_on": {
    "parameters": [
      "pointer",
      "u32",
      "pointer"
    ],
    "result": "i32"
  },
  "wattr_off": {
    "parameters": [
      "pointer",
      "u32",
      "pointer"
    ],
    "result": "i32"
  },
  "wattr_set": {
    "parameters": [
      "pointer",
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "wbkgd": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i32"
  },
  "wbkgdset": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wborder": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "i32"
  },
  "wchgat": {
    "parameters": [
      "pointer",
      "i32",
      "u32",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "wclear": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wclrtobot": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wclrtoeol": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wcolor_set": {
    "parameters": [
      "pointer",
      "i16",
      "pointer"
    ],
    "result": "i32"
  },
  "wcursyncup": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wdelch": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wdeleteln": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wechochar": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i32"
  },
  "werase": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wgetch": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wgetnstr": {
    "parameters": [
      "pointer",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "wgetstr": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "whline": {
    "parameters": [
      "pointer",
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "winch": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "winchnstr": {
    "parameters": [
      "pointer",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "winchstr": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "winnstr": {
    "parameters": [
      "pointer",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "winsch": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i32"
  },
  "winsdelln": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "winsertln": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "winsnstr": {
    "parameters": [
      "pointer",
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "winsstr": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "winstr": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "wmove": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "wnoutrefresh": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wredrawln": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "wrefresh": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wscrl": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "wsetscrreg": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "wstandout": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wstandend": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "wsyncdown": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wsyncup": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wtimeout": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "void"
  },
  "wtouchln": {
    "parameters": [
      "pointer",
      "i32",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "wvline": {
    "parameters": [
      "pointer",
      "u32",
      "i32"
    ],
    "result": "i32"
  },
  "tigetflag": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "tigetnum": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "tigetstr": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "putp": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "tparm": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "getattrs": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getcurx": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getcury": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getbegx": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getbegy": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getmaxx": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getmaxy": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getparx": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "getpary": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "is_term_resized": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i8"
  },
  "keybound": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "pointer"
  },
  "curses_version": {
    "parameters": [],
    "result": "pointer"
  },
  "assume_default_colors": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "define_key": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "key_defined": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "keyok": {
    "parameters": [
      "i32",
      "i8"
    ],
    "result": "i32"
  },
  "resize_term": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "resizeterm": {
    "parameters": [
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "set_escdelay": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "set_tabsize": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "use_default_colors": {
    "parameters": [],
    "result": "i32"
  },
  "use_extended_names": {
    "parameters": [
      "i8"
    ],
    "result": "i32"
  },
  "use_legacy_coding": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "use_screen": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "use_window": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "wresize": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i32"
  },
  "nofilter": {
    "parameters": [],
    "result": "void"
  },
  "wgetparent": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "is_cleared": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_idcok": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_idlok": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_immedok": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_keypad": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_leaveok": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_nodelay": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_notimeout": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_scrollok": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "is_syncok": {
    "parameters": [
      "pointer"
    ],
    "result": "i8"
  },
  "wgetscrreg": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "i32"
  },
  "getmouse": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "ungetmouse": {
    "parameters": [
      "pointer"
    ],
    "result": "i32"
  },
  "mousemask": {
    "parameters": [
      "i64",
      "pointer"
    ],
    "result": "i64"
  },
  "wenclose": {
    "parameters": [
      "pointer",
      "i32",
      "i32"
    ],
    "result": "i8"
  },
  "mouseinterval": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "wmouse_trafo": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "i8"
    ],
    "result": "i8"
  },
  "mouse_trafo": {
    "parameters": [
      "pointer",
      "pointer",
      "i8"
    ],
    "result": "i8"
  },
  "mcprint": {
    "parameters": [
      "pointer",
      "i32"
    ],
    "result": "i32"
  },
  "has_key": {
    "parameters": [
      "i32"
    ],
    "result": "i32"
  },
  "_nc_visbuf": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  }
}
export default symbols;
