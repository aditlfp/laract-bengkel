import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateComponent from "@/Components/FixingComponent/CreateComponent";
import { Head, usePage } from "@inertiajs/react";

const FixingCreate = (props) => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Tambah Perbaikan" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Tambah Data Perbaikan</h1>
                    <p className="page-subtitle">Input data kerusakan kendaraan</p>
                </div>
            </div>

            <div className="card-panel">
                <div className="card-body">
                    <CreateComponent datas={props} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default FixingCreate;
