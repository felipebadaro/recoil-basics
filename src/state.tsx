import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const modifierState = atom({
  key: "modifierState",
  default: 1,
});

export const counterDoubleModifier = selector({
  key: "counterDoubleModifier",
  get: ({ get }) => {
    const counter = get(counterState);
    const modifier = get(modifierState);
    return counter * modifier;
  },
});
