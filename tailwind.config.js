/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-bg": "#FFFFFF",
                "darker-bg": "#F5F6F8",
                "light-text-pr": "#E8E8ED",
                "light-text-sc": "#8084A6",
                "primary-text": "#090909",
                "secondary-text": "#929293",
                "accent-primary": "#040440",
                "accent-hover": "#2D2D69",
                "bar-primary": "#5A32EA",
                "bar-secondary": "#F2EFFF",
                "earning-primary": "#00ab4a",
                "earning-secondary": "#E0FFEF",
                "order-primary": "#9B00FF",
                "order-secondary": "#E7DBFF",
                "balance-primary": "#0051BC",
                "balance-secondary": "#cdf3ff",
                "sales-primary": "#dc1024",
                "sales-secondary": "#FFD0F0",
                "customer-base": "#F33898",
                "customer-new": "#5732e9",
                "down-accent": "#d41659",
                "up-accent": "#029925",
            },
        },
    },
    plugins: [],
};
