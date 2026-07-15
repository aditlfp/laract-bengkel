import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, customer, fix }) {
    const stats = [
        {
            label: "Total Customer",
            value: customer,
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
            color: "blue",
        },
        {
            label: "Total Perbaikan",
            value: fix,
            icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
            color: "amber",
        },
    ];

    const colorMap = {
        blue: {
            bg: "bg-amber-50",
            text: "text-amber-600",
            ring: "ring-amber-100",
            gradient: "from-amber-500/10 to-amber-500/5",
        },
        amber: {
            bg: "bg-amber-50",
            text: "text-amber-600",
            ring: "ring-amber-100",
            gradient: "from-amber-500/10 to-amber-500/5",
        },
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Dashboard</h1>
                    <p className="page-subtitle">
                        Selamat datang kembali, {auth.user.name}
                    </p>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => {
                    const c = colorMap[stat.color];
                    return (
                        <div key={stat.label} className="stat-card">
                            <div className="flex items-center gap-4">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ring-4 ${c.ring}`}>
                                    <svg
                                        className={`h-6 w-6 ${c.text}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.75}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                                    <p className="font-display text-3xl font-bold text-slate-900">{stat.value ?? 0}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick actions */}
            <div className="mt-8">
                <h2 className="mb-4 font-display text-lg font-semibold text-slate-900">Aksi Cepat</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: "Customer Baru", href: auth.user.role_id == 1 ? route("customer.create") : route("customers.create"), icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" },
                        { label: "Perbaikan Baru", href: auth.user.role_id == 1 ? route("fixing.create") : route("fixings.create"), icon: "M12 4.5v15m7.5-7.5h-15" },
                    ].map((action) => (
                        <a
                            key={action.label}
                            href={action.href}
                            className="group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-100">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                                {action.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
