import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({ password: "" });

    const confirmUserDeletion = () => setConfirmingUserDeletion(true);

    const deleteUser = (e) => {
        e.preventDefault();
        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-semibold text-slate-900">Hapus Akun</h2>
                <p className="mt-1 text-sm text-slate-500">
                    Setelah akun Anda dihapus, semua data akan dihapus secara permanen.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Hapus Akun</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal} maxWidth="md">
                <form onSubmit={deleteUser} className="space-y-5">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Yakin ingin menghapus akun?
                    </h2>
                    <p className="text-sm text-slate-600">
                        Masukkan password untuk konfirmasi penghapusan akun.
                    </p>

                    <div>
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            isFocused
                            placeholder="Password"
                        />
                        <InputError message={errors.password} className="mt-1.5" />
                    </div>

                    <div className="flex justify-end gap-2">
                        <SecondaryButton onClick={closeModal}>Batal</SecondaryButton>
                        <DangerButton disabled={processing}>Hapus Akun</DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
