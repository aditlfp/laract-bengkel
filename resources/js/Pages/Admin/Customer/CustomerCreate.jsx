import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateCustomer from "@/Components/CreateCustomer";
import { Head, usePage } from "@inertiajs/react";

const CustomerCreate = () => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Tambah Customer" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Tambah Customer Baru</h1>
                    <p className="page-subtitle">Isi data customer kendaraan</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <CreateCustomer />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CustomerCreate;
