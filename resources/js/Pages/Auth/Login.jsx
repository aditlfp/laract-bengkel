import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";

function IconMail({ className = "h-4 w-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    );
}

function IconLock({ className = "h-4 w-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

function IconEye({ open }) {
    if (open) {
        return (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
        );
    }
    return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function IconWrench() {
    return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    );
}

export default function Login({ status, canResetPassword }) {
    const [showPass, setShowPass] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        password: "",
        remember: false,
    });

    useEffect(() => () => reset("password"), []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Login" />

            <div className="grid min-h-screen lg:grid-cols-[1fr_1.05fr]">
                <aside className="relative hidden flex-col bg-amber-700 text-white lg:flex">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative z-10 flex flex-1 flex-col p-10 xl:p-12">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-700">
                                <IconWrench />
                            </div>
                            <div>
                                <p className="font-display text-base font-bold leading-none">Bengkel AKM</p>
                                <p className="mt-1 text-xs text-amber-100">Workshop Management</p>
                            </div>
                        </div>

                        <div className="mt-14 max-w-md">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                                Sistem Bengkel
                            </p>
                            <h1 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight xl:text-[2.5rem]">
                                Dari antrian masuk sampai invoice keluar.
                            </h1>
                            <p className="mt-4 text-sm leading-relaxed text-amber-100">
                                Satu dashboard untuk customer, unit, panel kerusakan, stok sparepart, dan laporan harian.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-2">
                            {[
                                { step: "01", label: "Terima Unit" },
                                { step: "02", label: "Servis" },
                                { step: "03", label: "Invoice" },
                            ].map((s, i) => (
                                <div
                                    key={s.step}
                                    className={`rounded-xl border border-white/15 bg-white/10 px-3 py-3 ${i === 1 ? "ring-1 ring-white/30" : ""}`}
                                >
                                    <p className="font-mono text-[10px] font-semibold text-amber-200">{s.step}</p>
                                    <p className="mt-1 text-sm font-semibold">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <ul className="mt-8 space-y-3">
                            {[
                                { t: "Data customer & kendaraan", d: "Riwayat servis per unit" },
                                { t: "Panel kerusakan visual", d: "Centang panel body langsung" },
                                { t: "Stok & laporan", d: "Produk, status, export bulanan" },
                            ].map((f) => (
                                <li
                                    key={f.t}
                                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-amber-700">
                                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold leading-none">{f.t}</p>
                                        <p className="mt-1 text-xs text-amber-100">{f.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <main className="flex flex-col bg-slate-50">
                    <div className="flex flex-1 flex-col justify-center px-5 py-10 sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[420px]">
                            <div className="mb-8 flex items-center gap-2.5 lg:hidden">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700 text-white">
                                    <IconWrench />
                                </div>
                                <div>
                                    <p className="font-display text-sm font-bold text-slate-900">Bengkel AKM</p>
                                    <p className="text-xs text-slate-500">Workshop Management</p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                                <div className="mb-6 border-b border-slate-100 pb-5">
                                    <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
                                        Masuk ke akun
                                    </h2>
                                    <p className="mt-1.5 text-sm text-slate-500">
                                        Gunakan name / email & password staff bengkel.
                                    </p>
                                </div>

                                <form onSubmit={submit} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="login" className="form-label">
                                            Name / Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                                <IconMail />
                                            </span>
                                            <input
                                                id="login"
                                                type="text"
                                                value={data.login}
                                                autoFocus
                                                autoComplete="username"
                                                placeholder="Nama atau email"
                                                onChange={(e) => setData("login", e.target.value)}
                                                className="form-input !pl-10 !py-2.5"
                                            />
                                        </div>
                                        <InputError message={errors.login} />
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="form-label">
                                                Password <span className="text-red-500">*</span>
                                            </label>
                                            {canResetPassword && (
                                                <Link
                                                    href={route("password.request")}
                                                    className="text-xs font-medium text-amber-700 hover:text-amber-800"
                                                >
                                                    Lupa password?
                                                </Link>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                                <IconLock />
                                            </span>
                                            <input
                                                id="password"
                                                type={showPass ? "text" : "password"}
                                                value={data.password}
                                                autoComplete="current-password"
                                                placeholder="Masukkan password"
                                                onChange={(e) => setData("password", e.target.value)}
                                                className="form-input !px-10 !py-2.5"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPass((v) => !v)}
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                                                tabIndex={-1}
                                                aria-label={showPass ? "Sembunyikan password" : "Tampilkan password"}
                                            >
                                                <IconEye open={showPass} />
                                            </button>
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>

                                    <label className="flex items-center gap-2.5 select-none pt-0.5">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData("remember", e.target.checked)}
                                        />
                                        <span className="text-sm text-slate-600">
                                            Ingat sesi login di perangkat ini
                                        </span>
                                    </label>

                                    <PrimaryButton
                                        className="mt-1 w-full justify-center !rounded-xl !py-3 !text-sm !font-semibold"
                                        disabled={processing}
                                    >
                                        {processing ? "Memproses..." : "Masuk ke Dashboard"}
                                    </PrimaryButton>
                                </form>
                            </div>

                            <p className="mt-6 text-center text-xs text-slate-400">
                                (c) {new Date().getFullYear()} Bengkel AKM | Workshop Management System
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
