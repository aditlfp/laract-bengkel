import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EditProduct from "@/Components/EditProduct";
import { Head, usePage } from "@inertiajs/react";

function ProductEdit(props) {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Edit Produk" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Edit Produk</h1>
                    <p className="page-subtitle">Perbarui data produk atau sparepart</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <EditProduct props={props} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ProductEdit;
