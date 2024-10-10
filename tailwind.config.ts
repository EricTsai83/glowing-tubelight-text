import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        ...createReflectionAnimations().keyframes,
      },
      animation: {
        ...createReflectionAnimations().animations,
      },
    },
  },
  plugins: [],
};
export default config;

function createReflectionAnimations() {
  const animations = {
    reflection: "reflection 5s linear infinite",
  };

  const keyframes = {
    reflection: {
      "0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%": {
        color: "#0e3742",
        textShadow: "none",
      },
      "18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%": {
        color: "#ffffff",
        textShadow: `
          0 0 10px #03bcf4,
          0 0 20px #03bcf4,
          0 0 40px #03bcf4,
          0 0 80px #03bcf4,
          0 0 160px #03bcf4
        `,
      },
    },
  };

  return { animations, keyframes };
}
