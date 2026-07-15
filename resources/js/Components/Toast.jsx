import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { toast, subscribe } from "@/lib/toast";

function firstMsg(val) {
    if (!val) return null;
    if (Array.isArray(val)) return val[0] || null;
    if (typeof val === "object") return Object.values(val).flat()[0] || null;
    return String(val);
}

function showFlash(page) {
    const flash = page?.props?.flash || {};
    if (flash.message) toast.success(flash.message);
    if (flash.peringatan) toast.warning(flash.peringatan);
    if (flash.trouble) toast.error(flash.trouble);
    if (page?.props?.status) toast.success(page.props.status);
}

const styles = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-800",
    error: "border-red-200 bg-red-50 text-red-800",
    warning: "border-amber-200 bg-amber-50 text-amber-900",
    info: "border-slate-200 bg-white text-slate-800",
};

const dots = {
    success: "bg-emerald-500",
    error: "bg-red-500",
    warning: "bg-amber-500",
    info: "bg-slate-400",
};

export default function FlashToaster({ initialPage }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (initialPage) showFlash(initialPage);

        const offSuccess = router.on("success", (e) => showFlash(e.detail.page));
        const offError = router.on("error", (e) => {
            const msg = firstMsg(e.detail.errors);
            if (msg) toast.error(msg);
        });

        const unsub = subscribe((t) => {
            setItems((prev) => [...prev.slice(-2), t]);
            setTimeout(() => {
                setItems((prev) => prev.filter((x) => x.id !== t.id));
            }, 3200);
        });

        return () => {
            offSuccess();
            offError();
            unsub();
        };
    }, [initialPage]);

    if (!items.length) return null;

    return (
        <div className="pointer-events-none fixed right-4 top-4 z-[9999] flex w-full max-w-sm flex-col gap-2">
            {items.map((t) => (
                <div
                    key={t.id}
                    className={`pointer-events-auto flex items-start gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg ${styles[t.type] || styles.info}`}
                    role="alert"
                >
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dots[t.type] || dots.info}`} />
                    <p className="flex-1 font-medium leading-snug">{t.message}</p>
                    <button
                        type="button"
                        className="text-current/50 hover:text-current"
                        onClick={() => setItems((prev) => prev.filter((x) => x.id !== t.id))}
                        aria-label="Tutup"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}
