import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateProduct from "@/Components/CreateProduct";
import { Head, usePage } from "@inertiajs/react";

const ProductCreate = () => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Tambah Produk" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Tambah Produk Baru</h1>
                    <p className="page-subtitle">Input data produk atau sparepart</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <CreateProduct />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProductCreate;
