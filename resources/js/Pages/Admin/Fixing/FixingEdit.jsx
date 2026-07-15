import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EditFixing from "@/Components/FixingComponent/EditFixing";
import { Head, usePage } from "@inertiajs/react";

const FixingEdit = (props) => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Edit Perbaikan" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Edit Data Perbaikan</h1>
                    <p className="page-subtitle">Perbarui data kerusakan kendaraan</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <EditFixing props={props} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default FixingEdit;
