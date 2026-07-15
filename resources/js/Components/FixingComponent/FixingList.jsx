import { Link, useForm, usePage } from "@inertiajs/react";
import BtnEditMini from "../BtnEditMini";
import BtnDeleteMini from "../BtnDeleteMini";
import StatusBtn from "../StatusBtn";
import { useState } from "react";
import BtnInvoices from "../BtnInvoices";
import Modal from "@/Components/Modal";
import SecondaryButton from "../SecondaryButton";
import DangerButton from "../DangerButton";

const panelMap = {
    "panel 1.png": "Body Samping Kiri",
    "panel 2.png": "Body Atas",
    "panel 3.png": "Body Samping Kanan",
    "panel 4.png": "Body Bamper Depan",
    "panel 5.png": "Body Bamper Belakang",
};

function FixingList({ datas, statuses }) {
    const { auth } = usePage().props;
    const [confirmingFixDeletion, setConfirmingFixDeletion] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const { processing, delete: destroy } = useForm({});

    const confirmDelete = (id) => {
        setDeleteId(id);
        setConfirmingFixDeletion(true);
    };

    const closeModal = () => {
        setConfirmingFixDeletion(false);
        setDeleteId(null);
    };

    const rows = datas?.data || datas || [];

    if (!rows.length) {
        return (
            <div className="px-6 py-12 text-center">
                <p className="text-sm font-medium text-slate-500">Data perbaikan masih kosong</p>
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
                        <th>No. Plat</th>
                        <th>Kendaraan</th>
                        <th>Warna</th>
                        <th>Kode Warna</th>
                        <th>Kerusakan</th>
                        <th>Panel</th>
                        <th>Tgl Masuk</th>
                        <th>Tgl Terakhir</th>
                        <th>Lama</th>
                        <th>Status</th>
                        <th>INV</th>
                        {auth.user.role_id == 1 && <th>Aksi</th>}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={row.id}>
                            <td className="font-medium text-slate-500">{i + 1}</td>
                            <td className="font-medium">{row.customer?.owner || "—"}</td>
                            <td>
                                <span className="badge-soft bg-slate-100 text-slate-700">
                                    {row.customer?.no_plate || "—"}
                                </span>
                            </td>
                            <td className="text-xs">
                                {row.customer?.nama_kendaraan || "—"} | {row.customer?.model || "—"} | {row.customer?.tahun || "—"}
                            </td>
                            <td>{row.customer?.nama_warna || "—"}</td>
                            <td>{row.customer?.code_warna || "—"}</td>
                            <td className="max-w-[160px]">
                                {row.jenis_kerusakan?.length ? (
                                    row.jenis_kerusakan.map((k, idx) => (
                                        <div className="dashed text-xs" key={idx}>{k}</div>
                                    ))
                                ) : (
                                    <span className="text-slate-400">—</span>
                                )}
                            </td>
                            <td className="max-w-[140px]">
                                {row.nama_panel?.length ? (
                                    row.nama_panel.map((panel, idx) => (
                                        <div className="dashed text-xs" key={idx}>
                                            {panelMap[panel] || panel}
                                        </div>
                                    ))
                                ) : (
                                    <span className="text-slate-400">—</span>
                                )}
                            </td>
                            <td className="text-xs">{row.customer?.service_date || "—"}</td>
                            <td className="text-xs">{row.customer?.last_service_date || row.customer?.service_date || "—"}</td>
                            <td>{row.lama_pengerjaan || "—"}</td>
                            <td>
                                {row.status_id === 1 ? (
                                    <span className="badge-soft bg-amber-50 text-amber-700">Proses</span>
                                ) : (
                                    <span className="badge-soft bg-emerald-50 text-emerald-700">Selesai</span>
                                )}
                            </td>
                            <td>
                                <a
                                    href={"/create-invoices/" + row.id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-lg bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-100"
                                >
                                    Invoice
                                </a>
                            </td>
                            {auth.user.role_id == 1 && (
                                <td>
                                    <div className="flex items-center gap-1.5">
                                        <Link href={"fixing/" + row.id + "/edit"} method="get" as="button">
                                            <BtnEditMini />
                                        </Link>
                                        {row.status_id == 1 && (
                                            <Link
                                                href={"update-status/" + row.id}
                                                method="PATCH"
                                                as="button"
                                                data={{ id: row.id }}
                                            >
                                                <StatusBtn />
                                            </Link>
                                        )}
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

            <Modal show={confirmingFixDeletion} onClose={closeModal} maxWidth="md">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Hapus Data Perbaikan?</h3>
                    <p className="text-sm text-slate-600">
                        Data perbaikan yang dihapus tidak dapat dikembalikan.
                    </p>
                    <div className="flex justify-end gap-2">
                        <SecondaryButton onClick={closeModal}>Batal</SecondaryButton>
                        <DangerButton
                            disabled={processing}
                            onClick={() => {
                                destroy(route("fixing.destroy", deleteId), {
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

export default FixingList;
