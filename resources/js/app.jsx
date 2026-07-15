import './bootstrap';
import '../css/app.css';
import '../css/style.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import FlashToaster from './Components/Toast';

const appName = 'Bengkel AKM';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                <App {...props} />
                <FlashToaster initialPage={props.initialPage} />
            </>,
        );
    },
    progress: {
        color: '#d97706',
        includeCSS: true,
        showSpinner: true,
    },
});
