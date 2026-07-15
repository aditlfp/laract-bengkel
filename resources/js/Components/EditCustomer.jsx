import InputLabel from "./InputLabel";
import InputError from "./InputError";
import TextInput from "./TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

function EditCustomer({ props }) {
    const { data, setData, processing, patch, errors } = useForm({
        no_plate: props.customer.no_plate || "",
        nama_kendaraan: props.customer.nama_kendaraan || "",
        tahun_kendaraan: props.customer.tahun_kendaraan || "",
        model: props.customer.model || "",
        tahun: props.customer.tahun || "",
        nama_warna: props.customer.nama_warna || "",
        code_warna: props.customer.code_warna || "",
        keterangan_warna: props.customer.keterangan_warna || "",
        last_service_date: props.customer.last_service_date || "",
        service_date: props.customer.service_date || "",
        owner: props.customer.owner || "",
        mobile_phone: props.customer.mobile_phone || "",
        alamat: props.customer.alamat || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("customer.update", props.customer.id));
    };

    return (
        <form onSubmit={submit} className="space-y-8">
            <div className="form-section">
                <p className="form-section-title">Informasi Pemilik</p>
                <div className="form-grid">
                    <div className="form-field">
                        <InputLabel htmlFor="owner" value="Nama Pemilik" className="required" />
                        <TextInput
                            id="owner"
                            type="text"
                            value={data.owner}
                            placeholder="Nama lengkap"
                            isFocused={true}
                            onChange={(e) => setData("owner", e.target.value)}
                        />
                        <InputError message={errors.owner} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="mobile_phone" value="No. Handphone" className="required" />
                        <TextInput
                            id="mobile_phone"
                            type="text"
                            value={data.mobile_phone}
                            placeholder="08123456789"
                            onChange={(e) => setData("mobile_phone", e.target.value)}
                        />
                        <InputError message={errors.mobile_phone} />
                    </div>
                    <div className="form-field sm:col-span-2">
                        <InputLabel htmlFor="alamat" value="Alamat" className="required" />
                        <TextInput
                            id="alamat"
                            type="text"
                            value={data.alamat}
                            placeholder="Alamat lengkap"
                            onChange={(e) => setData("alamat", e.target.value)}
                        />
                        <InputError message={errors.alamat} />
                    </div>
                </div>
            </div>

            <div className="form-section">
                <p className="form-section-title">Informasi Kendaraan</p>
                <div className="form-grid">
                    <div className="form-field">
                        <InputLabel htmlFor="no_plate" value="No. Plat" className="required" />
                        <TextInput
                            id="no_plate"
                            type="text"
                            value={data.no_plate}
                            placeholder="AE 1234 XX"
                            onChange={(e) => setData("no_plate", e.target.value)}
                        />
                        <InputError message={errors.no_plate} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="nama_kendaraan" value="Nama Kendaraan" className="required" />
                        <TextInput
                            id="nama_kendaraan"
                            type="text"
                            value={data.nama_kendaraan}
                            placeholder="NMAX, Avanza"
                            onChange={(e) => setData("nama_kendaraan", e.target.value)}
                        />
                        <InputError message={errors.nama_kendaraan} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="tahun_kendaraan" value="Tahun Kendaraan" className="required" />
                        <TextInput
                            id="tahun_kendaraan"
                            type="text"
                            value={data.tahun_kendaraan}
                            placeholder="2020"
                            onChange={(e) => setData("tahun_kendaraan", e.target.value)}
                        />
                        <InputError message={errors.tahun_kendaraan} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="model" value="Model" className="required" />
                        <select
                            id="model"
                            value={data.model}
                            onChange={(e) => setData("model", e.target.value)}
                            className="form-select"
                        >
                            <option value="">Pilih Model</option>
                            <option value="suv">SUV</option>
                            <option value="sedan">SEDAN</option>
                            <option value="mini bus">MINI BUS</option>
                            <option value="truk">TRUK</option>
                            <option value="jeep">JEEP</option>
                        </select>
                        <InputError message={errors.model} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="tahun" value="Model Tahun" className="required" />
                        <TextInput
                            id="tahun"
                            type="text"
                            value={data.tahun}
                            placeholder="2020"
                            onChange={(e) => setData("tahun", e.target.value)}
                        />
                        <InputError message={errors.tahun} />
                    </div>
                </div>
            </div>

            <div className="form-section">
                <p className="form-section-title">Warna Kendaraan</p>
                <div className="form-grid-3">
                    <div className="form-field">
                        <InputLabel htmlFor="nama_warna" value="Nama Warna" className="required" />
                        <TextInput
                            id="nama_warna"
                            type="text"
                            value={data.nama_warna}
                            placeholder="Merah Metalik"
                            onChange={(e) => setData("nama_warna", e.target.value)}
                        />
                        <InputError message={errors.nama_warna} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="code_warna" value="Kode Warna" className="required" />
                        <TextInput
                            id="code_warna"
                            type="text"
                            value={data.code_warna}
                            placeholder="#FF0000"
                            onChange={(e) => setData("code_warna", e.target.value)}
                        />
                        <InputError message={errors.code_warna} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="keterangan_warna" value="Keterangan" className="required" />
                        <TextInput
                            id="keterangan_warna"
                            type="text"
                            value={data.keterangan_warna}
                            placeholder="Keterangan"
                            onChange={(e) => setData("keterangan_warna", e.target.value)}
                        />
                        <InputError message={errors.keterangan_warna} />
                    </div>
                </div>
            </div>

            <div className="form-section">
                <p className="form-section-title">Tanggal Servis</p>
                <div className="form-grid">
                    <div className="form-field">
                        <InputLabel htmlFor="last_service_date" value="Servis Terakhir" />
                        <TextInput
                            id="last_service_date"
                            type="text"
                            value={data.last_service_date}
                            disabled
                            className="!bg-slate-50"
                        />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="service_date" value="Tanggal Servis" className="required" />
                        <TextInput
                            id="service_date"
                            type="date"
                            value={data.service_date}
                            onChange={(e) => setData("service_date", e.target.value)}
                        />
                        <InputError message={errors.service_date} />
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <Link href={route("customer.index")} className="btn-secondary-modern">
                    Batal
                </Link>
                <PrimaryButton disabled={processing}>
                    {processing && (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    )}
                    Simpan Perubahan
                </PrimaryButton>
            </div>
        </form>
    );
}

export default EditCustomer;
