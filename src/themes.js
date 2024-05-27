const theme = require("./theme");

// Pre-defined monochrome themes.
const themes = [
  theme({
    name: "monochrome-dark-slate",
    background: "#0f172a",
    foreground: "#f1f5f9",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-light-slate",
    background: "#f1f5f9",
    foreground: "#0f172a",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-dark-gray",
    background: "#111827",
    foreground: "#f3f4f6",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-light-gray",
    background: "#f3f4f6",
    foreground: "#111827",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-dark-zinc",
    background: "#18181b",
    foreground: "#f4f4f5",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-light-zinc",
    background: "#f4f4f5",
    foreground: "#18181b",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-dark-neutral",
    background: "#171717",
    foreground: "#f5f5f5",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-light-neutral",
    background: "#f5f5f5",
    foreground: "#171717",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-dark-stone",
    background: "#1c1917",
    foreground: "#f5f5f4",
    amplifier: 2.0,
  }),
  theme({
    name: "monochrome-light-stone",
    background: "#f5f5f4",
    foreground: "#1c1917",
    amplifier: 2.0,
  }),
];

module.exports = themes;
