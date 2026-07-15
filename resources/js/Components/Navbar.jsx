import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

const navItems = (roleId) => [
    { label: "Dashboard", route: "dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" },
    {
        label: "Customer",
        route: roleId == 1 ? "customer.index" : "customers.index",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
        label: "Perbaikan",
        route: roleId == 1 ? "fixing.index" : "fixings.index",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
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

const Icon = ({ d }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
);

const Navbar = () => {
    const { auth } = usePage().props;
    const [open, setOpen] = useState(false);
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
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
            <div className="page-shell">
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        <Link href={route("dashboard")} className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 text-sm font-bold text-white shadow-sm">
                                AKM
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-sm font-bold text-slate-900">Bengkel AKM</div>
                                <div className="text-xs text-slate-500">Auto Parts & Service</div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {items.map((item) => {
                            const active = isActive(item.route);
                            return (
                                <Link
                                    key={item.route}
                                    href={route(item.route)}
                                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                                        active
                                            ? "bg-amber-50 text-amber-700"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                                >
                                    <Icon d={item.icon} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User menu */}
                    <div className="flex items-center gap-2">
                        <Link
                            href={route("profile.edit")}
                            className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                                {auth?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                            <span className="max-w-[120px] truncate">{auth?.user?.name}</span>
                        </Link>
                        <Link
                            href={route("logout")}
                            method="POST"
                            as="button"
                            className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                        >
                            Logout
                        </Link>
                    </div>
                </div>

                {/* Mobile nav */}
                {open && (
                    <nav className="border-t border-slate-100 py-3 lg:hidden">
                        <div className="flex flex-col gap-1">
                            {items.map((item) => {
                                const active = isActive(item.route);
                                return (
                                    <Link
                                        key={item.route}
                                        href={route(item.route)}
                                        onClick={() => setOpen(false)}
                                        className={`inline-flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                            active
                                                ? "bg-amber-50 text-amber-700"
                                                : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                    >
                                        <Icon d={item.icon} />
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href={route("profile.edit")}
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 sm:hidden"
                            >
                                Profile
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
