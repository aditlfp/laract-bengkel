import { FormatRupiah } from "@arismun/format-rupiah";
import { useForm } from "@inertiajs/react";

function ReportRow({ data, index, done }) {
    return (
        <tr>
            <td className="font-medium text-slate-400">{index}</td>
            <td className="font-medium text-slate-900">{data.customer?.owner}</td>
            <td>{data.customer?.nama_kendaraan}</td>
            <td>
                <span className="badge-soft bg-slate-100 text-slate-700">
                    {data.customer?.no_plate}
                </span>
            </td>
            <td>{data.customer?.model}</td>
            <td>{data.customer?.tahun}</td>
            <td className="max-w-[180px] truncate">
                {data.jenis_kerusakan?.join?.(", ") || data.jenis_kerusakan}
            </td>
            <td>{data.lama_pengerjaan}</td>
            <td className="font-medium">
                <FormatRupiah value={data.estimasi_harga} />
            </td>
            <td>
                <span
                    className={`badge-soft ${
                        done
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10"
                            : "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/10"
                    }`}
                >
                    {data.status?.name}
                </span>
            </td>
        </tr>
    );
}

function EmptyRow() {
    return (
        <tr>
            <td colSpan="10" className="!py-12 text-center">
                <div className="empty-state !py-4">
                    <p className="text-sm font-medium text-slate-400">Tidak ada data</p>
                </div>
            </td>
        </tr>
    );
}

function ReportTable({ title, subtitle, items, done, headerExtra }) {
    return (
        <div className="card-panel">
            <div className="card-header">
                <div>
                    <h2 className="font-display text-base font-semibold text-slate-900">{title}</h2>
                    <p className="text-sm text-slate-500">{subtitle}</p>
                </div>
                {headerExtra}
            </div>
            <div className="overflow-x-auto">
                <table className="table-modern">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama Pemilik</th>
                            <th>Kendaraan</th>
                            <th>No. Plat</th>
                            <th>Model</th>
                            <th>Tahun</th>
                            <th>Jenis Kerusakan</th>
                            <th>Lama</th>
                            <th>Estimasi</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length ? (
                            items.map((data, i) => (
                                <ReportRow key={data.id || i} data={data} index={i + 1} done={done} />
                            ))
                        ) : (
                            <EmptyRow />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ReportComponentIndex({ fix }) {
    const { data, setData } = useForm({ month: "" });

    const submit = (e) => {
        e.preventDefault();
        const formatedDate = data.month + "-01";
        window.open("report-month/" + formatedDate, "_blank");
    };

    const items = fix?.fix || [];
    const done = items.filter((d) => d.status_id == 2);
    const pending = items.filter((d) => d.status_id == 1);

    return (
        <div className="space-y-6">
            <ReportTable
                title="Perbaikan Selesai"
                subtitle={`${done.length} data`}
                items={done}
                done
                headerExtra={
                    <form onSubmit={submit} className="flex flex-wrap gap-2">
                        <input
                            type="month"
                            className="search-input !pl-3.5 max-w-[180px]"
                            onChange={(e) => setData("month", e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-warning-modern">
                            Download PDF
                        </button>
                    </form>
                }
            />

            <ReportTable
                title="Perbaikan Belum Selesai"
                subtitle={`${pending.length} data`}
                items={pending}
                done={false}
            />
        </div>
    );
}

export default ReportComponentIndex;
