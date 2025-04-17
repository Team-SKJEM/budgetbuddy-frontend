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
          50: { value: "#d8e4ed" },
          100: { value: "#cbe1f2" },
          200: { value: "#f4f4f5" }, // This one must stay
          300: { value: "#add6f7" },
          400: { value: "#99c9f0" },
          500: { value: "#89C3F3" }, // main brand color
          600: { value: "#74b9f2" },
          700: { value: "#62b0f0" },
          800: { value: "#479ee6" },
          900: { value: "#228ce3" },
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
