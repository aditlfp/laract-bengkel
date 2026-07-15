import { Link, useForm, usePage } from "@inertiajs/react";
import BtnEditMini from "./BtnEditMini";
import BtnDeleteMini from "./BtnDeleteMini";
import Modal from "@/Components/Modal";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import DangerButton from "./DangerButton";

function CustomerList({ datas }) {
    const { auth } = usePage().props;
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const { processing, delete: destroy } = useForm({});
    const rows = datas?.data || [];

    const confirmDelete = (id) => {
        setDeleteId(id);
        setConfirmingDeletion(true);
    };

    const closeModal = () => {
        setConfirmingDeletion(false);
        setDeleteId(null);
    };

    if (!rows.length) {
        return (
            <div className="px-6 py-12 text-center">
                <p className="text-sm font-medium text-slate-500">Customer masih kosong</p>
            </div>
        );
    }

    return (
        <>
            <table className="table-modern">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pemilik</th>
                        <th>No. Plate</th>
                        <th>Nama Kendaraan</th>
                        <th>Tahun</th>
                        <th>Model</th>
                        <th>Model Tahun</th>
                        <th>Warna</th>
                        <th>Kode Warna</th>
                        <th>Keterangan</th>
                        <th>No. Hp</th>
                        <th>Alamat</th>
                        <th>Last Service</th>
                        <th>Service Date</th>
                        {auth.user.role_id == 1 && <th>Aksi</th>}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={row.id}>
                            <td className="font-medium text-slate-500">{i + 1}</td>
                            <td className="font-medium">{row.owner}</td>
                            <td>
                                <span className="badge-soft bg-slate-100 text-slate-700">
                                    {row.no_plate}
                                </span>
                            </td>
                            <td>{row.nama_kendaraan}</td>
                            <td>{row.tahun_kendaraan}</td>
                            <td>{row.model}</td>
                            <td>{row.tahun}</td>
                            <td>{row.nama_warna}</td>
                            <td>{row.code_warna}</td>
                            <td className="max-w-[140px] truncate">{row.keterangan_warna}</td>
                            <td>{row.mobile_phone}</td>
                            <td className="max-w-[160px] truncate">{row.alamat}</td>
                            <td className="text-xs">{row.last_service_date || "—"}</td>
                            <td className="text-xs">{row.service_date || "—"}</td>
                            {auth.user.role_id == 1 && (
                                <td>
                                    <div className="flex items-center gap-1.5">
                                        <Link
                                            href={"customer/" + row.id + "/edit"}
                                            method="get"
                                            as="button"
                                        >
                                            <BtnEditMini />
                                        </Link>
                                        <button type="button" onClick={() => confirmDelete(row.id)}>
                                            <BtnDeleteMini />
                                        </button>
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={confirmingDeletion} onClose={closeModal} maxWidth="md">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Hapus Customer?</h3>
                    <p className="text-sm text-slate-600">
                        Data customer yang dihapus tidak dapat dikembalikan.
                    </p>
                    <div className="flex justify-end gap-2">
                        <SecondaryButton onClick={closeModal}>Batal</SecondaryButton>
                        <DangerButton
                            disabled={processing}
                            onClick={() => {
                                destroy(route("customer.destroy", deleteId), {
                                    onSuccess: closeModal,
                                });
                            }}
                        >
                            Hapus
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default CustomerList;
