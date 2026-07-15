import InputLabel from "../InputLabel";
import InputError from "../InputError";
import TextInput from "../TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

export default function EditFixing({ props }) {
    const [data1, setData1] = useState({
        jenis_kerusakan1: props.fix.jenis_kerusakan || [],
    });
    const [data2, setData2] = useState({
        nama_panel1: props.fix.nama_panel || [],
    });

    const { data, setData, processing, patch, errors } = useForm({
        customer_id: props.fix.customer_id,
        jenis_kerusakan: props.fix.jenis_kerusakan || [],
        nama_panel: props.fix.nama_panel || [],
        lama_pengerjaan: props.fix.lama_pengerjaan,
        estimasi_harga: props.fix.estimasi_harga,
        catatan_customer: props.fix.catatan_customer,
        status_id: props.fix.status_id,
    });

    const handleCheckBox = (e) => {
        const { value } = e.target;
        const selected = [...data.jenis_kerusakan];
        const idx = selected.indexOf(value);
        if (idx > -1) selected.splice(idx, 1);
        else selected.push(value);
        setData1({ jenis_kerusakan1: selected });
        setData("jenis_kerusakan", selected);
    };

    const handleCheckBoxPanel = (e) => {
        const { value } = e.target;
        const selected = [...data.nama_panel];
        const idx = selected.indexOf(value);
        if (idx > -1) selected.splice(idx, 1);
        else selected.push(value);
        setData2({ nama_panel1: selected });
        setData("nama_panel", selected);
    };

    const price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(data.estimasi_harga || 0);

    const submit = (e) => {
        e.preventDefault();
        patch(route("fixing.update", props.fix.id));
    };

    return (
        <form onSubmit={submit} className="space-y-8">
            <div className="form-section">
                <p className="form-section-title">Informasi Dasar</p>
                <div className="form-grid">
                    <div className="form-field">
                        <InputLabel htmlFor="customer_id" value="Pemilik Kendaraan" className="required" />
                        <select
                            id="customer_id"
                            value={data.customer_id}
                            onChange={(e) => setData("customer_id", e.target.value)}
                            className="form-select"
                        >
                            <option value="">Pilih Pemilik</option>
                            {props.customer?.map((cus) => (
                                <option key={cus.id} value={cus.id}>
                                    {cus.owner}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.customer_id} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="status_id" value="Status" className="required" />
                        <select
                            id="status_id"
                            value={data.status_id}
                            onChange={(e) => setData("status_id", e.target.value)}
                            className="form-select"
                        >
                            <option value="">Pilih Status</option>
                            {props.status?.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.status_id} />
                    </div>
                </div>
            </div>

            <div className="form-section">
                <p className="form-section-title">Jenis Kerusakan</p>
                <div className="grid gap-2 sm:grid-cols-3">
                    {props.jenisKerusakan?.map((fix) => {
                        const checked = data1.jenis_kerusakan1.includes(fix.name);
                        return (
                            <label
                                key={fix.id}
                                className={`check-card ${checked ? "check-card-active" : ""}`}
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                                    value={fix.name}
                                    checked={checked}
                                    onChange={handleCheckBox}
                                />
                                <span className="font-medium text-slate-700">{fix.name}</span>
                            </label>
                        );
                    })}
                </div>
                <InputError message={errors.jenis_kerusakan} />
            </div>

            <div className="form-section">
                <p className="form-section-title">Detail Perbaikan</p>
                <div className="form-grid">
                    <div className="form-field">
                        <InputLabel htmlFor="lama_pengerjaan" value="Lama Pengerjaan" className="required" />
                        <TextInput
                            id="lama_pengerjaan"
                            type="text"
                            value={data.lama_pengerjaan}
                            onChange={(e) => setData("lama_pengerjaan", e.target.value)}
                        />
                        <InputError message={errors.lama_pengerjaan} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="estimasi_harga" value="Estimasi Harga" className="required" />
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-500">Rp</span>
                            <TextInput
                                id="estimasi_harga"
                                type="text"
                                value={data.estimasi_harga}
                                onChange={(e) => setData("estimasi_harga", e.target.value)}
                            />
                        </div>
                        {data.estimasi_harga && (
                            <p className="mt-1 text-xs text-slate-500">{price}</p>
                        )}
                        <InputError message={errors.estimasi_harga} />
                    </div>
                    <div className="form-field sm:col-span-2">
                        <InputLabel htmlFor="catatan_customer" value="Catatan Customer" />
                        <TextInput
                            id="catatan_customer"
                            type="text"
                            value={data.catatan_customer}
                            onChange={(e) => setData("catatan_customer", e.target.value)}
                        />
                        <InputError message={errors.catatan_customer} />
                    </div>
                </div>
            </div>

            <div className="form-section">
                <p className="form-section-title">Panel Kerusakan</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {props.panel?.map((option) => {
                        const checked = data2.nama_panel1.includes(option.name);
                        return (
                            <label
                                key={option.id}
                                className={`panel-card flex flex-col items-center p-3 ${checked ? "panel-card-active" : ""}`}
                            >
                                <img
                                    src={`${props.baseUrl}/image/panel/${option.name}`}
                                    alt={option.panel || option.name}
                                    className="mb-2 h-20 w-auto object-contain"
                                />
                                <div className="flex w-full items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                                        value={option.name}
                                        checked={checked}
                                        onChange={handleCheckBoxPanel}
                                    />
                                    <span className="text-xs font-medium text-slate-700">
                                        {option.panel || option.name}
                                    </span>
                                </div>
                            </label>
                        );
                    })}
                </div>
                <InputError message={errors.nama_panel} />
            </div>

            <div className="form-actions">
                <Link href={route("fixing.index")} className="btn-secondary-modern">
                    Batal
                </Link>
                <PrimaryButton disabled={processing}>
                    {processing && (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    )}
                    Simpan
                </PrimaryButton>
            </div>
        </form>
    );
}
