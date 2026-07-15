import InputLabel from "./InputLabel";
import InputError from "./InputError";
import TextInput from "./TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

const EditProduct = ({ props }) => {
    const { data, setData, processing, patch, errors } = useForm({
        name: props.product.name || "",
        satuan: props.product.satuan || "",
        stock: props.product.stock || "",
        description: props.product.description || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("products.update", props.product.id));
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
                            placeholder="pcs, liter"
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
                <PrimaryButton disabled={processing}>Simpan Perubahan</PrimaryButton>
            </div>
        </form>
    );
};

export default EditProduct;
