/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#3b82f6";

export const Colors = {
  brand: {
    descriptionText: "#64748B",
    altBg: "#DBEAFE",
    200: "#f4f4f5",
    300: "#BFDBFE",
    400: "#93C5FD",
    primary: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  light: {
    text: "#0F172A",
    background: "#F8FAFC",
    tint: tintColorLight,
    icon: "#64748B",
    border: "rgba(100, 116, 139, 0.22)",
    tabIconDefault: "#64748B",
    tabIconSelected: tintColorLight,
    inputBg: "#FFFFFF",
  },
  dark: {
    text: "#E2E8F0",
    background: "#020617",
    tint: "#60A5FA",
    icon: "#94A3B8",
    border: "rgba(148, 163, 184, 0.24)",
    tabIconDefault: "#64748B",
    tabIconSelected: "#60A5FA",
    inputBg: "#0F172A",
  },
};
