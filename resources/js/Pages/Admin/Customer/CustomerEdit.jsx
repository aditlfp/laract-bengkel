import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EditCustomer from "@/Components/EditCustomer";
import { Head, usePage } from "@inertiajs/react";

const CustomerEdit = (props) => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Edit Customer" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Edit Data Customer</h1>
                    <p className="page-subtitle">Perbarui informasi customer</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <EditCustomer props={props} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CustomerEdit;
