import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `'system-ui', 'Avenir', 'Helvetica', 'Arial', sans-serif`,
        },
        body: {
          value: `'system-ui', 'Avenir', 'Helvetica', 'Arial', sans-serif`,
        },
      },
      colors: {
        brand: {
          50: { value: "#EFF6FF" },
          100: { value: "#DBEAFE" },
          200: { value: "#f4f4f5" }, // This one must stay
          300: { value: "#BFDBFE" },
          400: { value: "#93C5FD" },
          500: { value: "#3B82F6" }, // main brand color
          600: { value: "#2563EB" },
          700: { value: "#1D4ED8" },
          800: { value: "#1E40AF" },
          900: { value: "#1E3A8A" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});
