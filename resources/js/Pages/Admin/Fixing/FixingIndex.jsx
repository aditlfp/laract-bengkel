import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FixingList from "@/Components/FixingComponent/FixingList";
import Paginator from "@/Components/Paginator/Paginator";
import { Head, Link, useForm } from "@inertiajs/react";
import _ from "lodash";

const FixingIndex = (props) => {
    const { data, setData } = useForm({ search: "" });
    const isAdmin = props.auth?.user?.role_id == 1;
    const indexRoute = isAdmin ? "fixing.index" : "fixings.index";

    const debouncedSearch = _.debounce((searchQuery) => {
        const searchUrl = route(indexRoute, { search: searchQuery });
        window.location.href = searchUrl;
    }, 300);

    const handleSearchChange = (e) => {
        e.preventDefault();
        debouncedSearch(data.search);
    };

    return (
        <AuthenticatedLayout user={props.auth?.user}>
            <Head title="Perbaikan" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Daftar Perbaikan</h1>
                    <p className="page-subtitle">Kelola data perbaikan kendaraan</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {isAdmin ? (
                        <Link href={route("fixing.create")} className="btn-primary-modern">
                            + Tambah Perbaikan
                        </Link>
                    ) : (
                        <Link href={route("fixings.create")} className="btn-primary-modern">
                            + Tambah Perbaikan
                        </Link>
                    )}
                </div>
            </div>

            <div className="card-panel">
                <div className="card-header">
                    <form onSubmit={handleSearchChange} className="flex w-full max-w-sm">
                        <div className="relative w-full">
                            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Cari perbaikan..."
                                className="search-input"
                                value={data.search}
                                onChange={(e) => setData("search", e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn-primary-modern ml-2">
                            Cari
                        </button>
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <FixingList datas={props.fix} statuses={props.status} />
                </div>

                <div className="flex justify-center border-t border-slate-100 p-4">
                    <Paginator meta={props.fix.meta} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default FixingIndex;
