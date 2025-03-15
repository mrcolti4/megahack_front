import type { Config } from "tailwindcss"

const config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",

                // Main brand colors from the design
                pink: {
                    50: "#ffeef7",
                    100: "#ffd6eb",
                    200: "#ffadd7",
                    300: "#ff85c3",
                    400: "#ff69b4", // Main pink accent color
                    500: "#ff3d9e",
                    600: "#ff1a88",
                    700: "#e60073",
                    800: "#b3005b",
                    900: "#800040",
                    950: "#4d0026",
                },
                purple: {
                    50: "#f5f3ff",
                    100: "#ede9fe",
                    200: "#ddd6fe",
                    300: "#c4b5fd",
                    400: "#a78bfa",
                    500: "#8b5cf6", // Purple from caption card
                    600: "#7c3aed",
                    700: "#6d28d9",
                    800: "#5b21b6",
                    900: "#4c1d95",
                    950: "#2e1065",
                },
                green: {
                    50: "#ecfdf5",
                    100: "#d1fae5",
                    200: "#a7f3d0",
                    300: "#6ee7b7",
                    400: "#34d399",
                    500: "#10b981", // Green from image title card
                    600: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                    950: "#022c22",
                },
                coral: {
                    50: "#fff1f0",
                    100: "#ffe4e1",
                    200: "#fecdc7",
                    300: "#fca99f",
                    400: "#f87171",
                    500: "#ef4444", // Coral/red from card
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d",
                    950: "#450a0a",
                },
                yellow: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#eab308", // Yellow from card
                    600: "#ca8a04",
                    700: "#a16207",
                    800: "#854d0e",
                    900: "#713f12",
                    950: "#422006",
                },

                // System UI colors
                primary: {
                    DEFAULT: "#ff69b4", // Pink accent as primary
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#8b5cf6", // Purple as secondary
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "#ef4444", // Coral as destructive
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#f3f4f6",
                    foreground: "#6b7280",
                },
                accent: {
                    DEFAULT: "#10b981", // Green as accent
                    foreground: "#ffffff",
                },
                popover: {
                    DEFAULT: "#ffffff",
                    foreground: "#1f2937",
                },
                card: {
                    DEFAULT: "#ffffff",
                    foreground: "#1f2937",
                },

                // Dark mode variants
                dark: {
                    background: "#1f2937",
                    foreground: "#f9fafb",
                    muted: "#374151",
                    "muted-foreground": "#9ca3af",
                    card: "#111827",
                    "card-foreground": "#f9fafb",
                },
            },
            borderRadius: {
                lg: "0.75rem",
                md: "0.5rem",
                sm: "0.25rem",
            },
            boxShadow: {
                sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            },
        },
    },
} satisfies Config

export default config

