import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['"Plus Jakarta Sans"', 'Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
            {
                bengkel: {
                    primary: '#d97706',
                    'primary-content': '#ffffff',
                    secondary: '#475569',
                    accent: '#f59e0b',
                    neutral: '#334155',
                    'base-100': '#ffffff',
                    'base-200': '#f8fafc',
                    'base-300': '#e2e8f0',
                    info: '#0ea5e9',
                    success: '#10b981',
                    warning: '#f59e0b',
                    error: '#ef4444',
                },
            },
        ],
    },

    plugins: [forms, daisyui],
};
