import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";

const pageTitles = {
    dashboard: "Dashboard",
    "customer.index": "Customer",
    "customers.index": "Customer",
    "customer.create": "Tambah Customer",
    "customers.create": "Tambah Customer",
    "customer.edit": "Edit Customer",
    "fixing.index": "Perbaikan",
    "fixings.index": "Perbaikan",
    "fixing.create": "Tambah Perbaikan",
    "fixings.create": "Tambah Perbaikan",
    "fixing.edit": "Edit Perbaikan",
    "products.index": "Produk",
    "products.create": "Tambah Produk",
    "products.edit": "Edit Produk",
    "laporan.index": "Laporan",
    "profile.edit": "Profile",
    "exist-customer.create": "Customer Lama",
};

export default function Topbar({ onMenuClick }) {
    const { auth } = usePage().props;
    const current = (() => {
        try {
            return route().current();
        } catch {
            return "dashboard";
        }
    })();

    const title =
        pageTitles[current] ||
        Object.entries(pageTitles).find(([k]) => current?.startsWith?.(k.split(".")[0]))?.[1] ||
        "Bengkel AKM";

    return (
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md sm:px-6 lg:px-8">
            <button
                type="button"
                onClick={onMenuClick}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 lg:hidden"
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className="min-w-0 flex-1">
                <h1 className="truncate font-display text-base font-semibold text-slate-900 sm:text-lg">
                    {title}
                </h1>
            </div>

            <div className="flex items-center gap-2">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                                {auth?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </span>
                            <span className="hidden max-w-[120px] truncate sm:inline">
                                {auth?.user?.name}
                            </span>
                            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content align="right" width="48">
                        <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route("logout")} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </header>
    );
}
