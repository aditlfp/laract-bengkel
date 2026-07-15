import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    if (!meta?.links?.length) return null;

    const prev = meta.links[0]?.url;
    const next = meta.links[meta.links.length - 1]?.url;
    const current = meta.current_page;
    const last = meta.last_page;

    return (
        <div className="flex items-center justify-center gap-1.5">
            {prev ? (
                <Link href={prev} className="btn-secondary-modern !px-3 !py-2 text-xs">
                    ‹ Prev
                </Link>
            ) : (
                <span className="btn-secondary-modern !cursor-not-allowed !px-3 !py-2 text-xs opacity-40">‹ Prev</span>
            )}
            <span className="rounded-lg bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-700">
                {current} / {last || current}
            </span>
            {next ? (
                <Link href={next} className="btn-secondary-modern !px-3 !py-2 text-xs">
                    Next ›
                </Link>
            ) : (
                <span className="btn-secondary-modern !cursor-not-allowed !px-3 !py-2 text-xs opacity-40">Next ›</span>
            )}
        </div>
    );
};

export default Paginator;
