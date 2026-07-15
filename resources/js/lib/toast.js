/** Tiny toast bus — no react-toastify, no React component type issues. */
const listeners = new Set();
let seq = 0;

function emit(toast) {
    listeners.forEach((fn) => fn(toast));
}

export function toast(message, type = "error") {
    const id = ++seq;
    emit({ id, message: String(message || ""), type });
    return id;
}

toast.success = (m) => toast(m, "success");
toast.error = (m) => toast(m, "error");
toast.warning = (m) => toast(m, "warning");
toast.info = (m) => toast(m, "info");

export function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}
