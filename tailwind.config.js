// tailwind.config.js  (ESM because "type": "module")

import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./components/**/*.{vue,js,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./app.vue",
 ],
 theme: {
  extend: {
   fontFamily: {
    sans: ["Inter"],
   },
   colors: {
    primary: colors.orange,
   },
  },
 },
 plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
