import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-semibold text-slate-900">Informasi Profil</h2>
                <p className="mt-1 text-sm text-slate-500">
                    Update informasi profil dan alamat email Anda.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-5">
                <div>
                    <InputLabel htmlFor="name" value="Nama" />
                    <TextInput
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-1.5" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-1.5" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm text-slate-600">
                            Email belum diverifikasi.{" "}
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="text-sm font-medium text-amber-600 hover:text-amber-700"
                            >
                                Kirim ulang email verifikasi.
                            </Link>
                        </p>
                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-emerald-600">
                                Link verifikasi baru telah dikirim.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-emerald-600">Tersimpan.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
