import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Create from "@/Components/CreateExitsCustomer";
import { Head, usePage } from "@inertiajs/react";

const CreateExistCustomer = (customer) => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Customer Yang Sudah Ada" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Customer Yang Sudah Ada</h1>
                    <p className="page-subtitle">Daftarkan kendaraan baru untuk customer lama</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <Create datas={customer} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateExistCustomer;
