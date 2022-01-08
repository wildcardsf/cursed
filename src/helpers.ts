export const cstring = (str: string) => new Uint8Array([...(Deno as any).core.encode(str), 0]);
export const shift = (mask: number, amount: number) => mask << (amount + 8)
export const colorPair = (num: number) => shift(num, 0);
