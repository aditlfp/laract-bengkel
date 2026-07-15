import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({ email: "" });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Lupa Password" />

            <p className="mb-4 text-sm text-slate-600">
                Lupa password? Masukkan email Anda dan kami akan mengirimkan link reset password.
            </p>

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-1.5" />
                </div>

                <PrimaryButton className="w-full justify-center" disabled={processing}>
                    Kirim Link Reset Password
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}
