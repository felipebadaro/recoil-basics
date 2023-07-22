import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const counterDoubleModifier = selector({
  key: "counterDoubleModifier",
  get: ({ get }) => {
    const modifier = get(counterState);
    return modifier * 2;
  },
});
