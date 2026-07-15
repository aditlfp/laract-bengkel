import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ReportComponentIndex from "@/Components/ReportComponent/ReportComponentIndex";
import { Head, usePage } from "@inertiajs/react";

const LaporanIndex = (fix) => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout user={auth?.user}>
            <Head title="Laporan" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Laporan</h1>
                    <p className="page-subtitle">Data perbaikan selesai dan belum selesai</p>
                </div>
            </div>

            <ReportComponentIndex fix={fix} />
        </AuthenticatedLayout>
    );
};

export default LaporanIndex;
