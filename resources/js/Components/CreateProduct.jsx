import InputLabel from "./InputLabel";
import InputError from "./InputError";
import TextInput from "./TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

function CreateProduct() {
    const { data, setData, processing, post, errors } = useForm({
        name: "",
        satuan: "",
        stock: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("products.store"));
    };

    return (
        <form onSubmit={submit} className="space-y-8">
            <div className="form-section">
                <p className="form-section-title">Data Produk</p>
                <div className="form-grid">
                    <div className="form-field">
                        <InputLabel htmlFor="name" value="Nama Produk" className="required" />
                        <TextInput
                            id="name"
                            type="text"
                            value={data.name}
                            placeholder="Nama produk"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="satuan" value="Satuan" className="required" />
                        <TextInput
                            id="satuan"
                            type="text"
                            value={data.satuan}
                            placeholder="pcs, liter, dll"
                            onChange={(e) => setData("satuan", e.target.value)}
                        />
                        <InputError message={errors.satuan} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="stock" value="Stok" />
                        <TextInput
                            id="stock"
                            type="number"
                            value={data.stock}
                            placeholder="0"
                            onChange={(e) => setData("stock", e.target.value)}
                        />
                        <InputError message={errors.stock} />
                    </div>
                    <div className="form-field">
                        <InputLabel htmlFor="description" value="Deskripsi" />
                        <TextInput
                            id="description"
                            type="text"
                            value={data.description}
                            placeholder="Keterangan produk"
                            onChange={(e) => setData("description", e.target.value)}
                        />
                        <InputError message={errors.description} />
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <Link href={route("products.index")} className="btn-secondary-modern">
                    Batal
                </Link>
                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
            </div>
        </form>
    );
}

export default CreateProduct;
