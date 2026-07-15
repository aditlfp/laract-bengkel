import { Link, usePage } from "@inertiajs/react";

const navItems = (roleId) => [
    {
        label: "Dashboard",
        route: "dashboard",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
    },
    {
        label: "Customer",
        route: roleId == 1 ? "customer.index" : "customers.index",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
        label: "Perbaikan",
        route: roleId == 1 ? "fixing.index" : "fixings.index",
        icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    },
    ...(roleId == 1
        ? [
              {
                  label: "Produk",
                  route: "products.index",
                  icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                  label: "Laporan",
                  route: "laporan.index",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
          ]
        : []),
];

function Icon({ d, className = "sidebar-icon" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    );
}

export default function Sidebar({ open, onClose }) {
    const { auth } = usePage().props;
    const roleId = auth?.user?.role_id;
    const items = navItems(roleId);

    const isActive = (name) => {
        try {
            return route().current(name) || route().current(name.replace(".index", ".*"));
        } catch {
            return false;
        }
    };

    return (
        <>
            {/* Mobile overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={`sidebar ${open ? "translate-x-0" : "sidebar-closed"}`}>
                {/* Brand */}
                <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-slate-900">Bengkel AKM</p>
                        <p className="truncate text-[11px] text-slate-400">Workshop System</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-auto rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                    <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Menu
                    </p>
                    {items.map((item) => {
                        const active = isActive(item.route);
                        return (
                            <Link
                                key={item.route}
                                href={route(item.route)}
                                onClick={onClose}
                                className={`sidebar-link ${active ? "sidebar-link-active" : ""}`}
                            >
                                <Icon d={item.icon} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User footer in sidebar */}
                <div className="border-t border-slate-100 p-3">
                    <div className="flex items-center gap-3 rounded-lg px-2 py-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                            {auth?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-slate-800">
                                {auth?.user?.name}
                            </p>
                            <p className="truncate text-xs text-slate-400">
                                {roleId == 1 ? "Administrator" : "Staff"}
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
