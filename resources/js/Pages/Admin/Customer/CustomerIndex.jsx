import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomerList from "@/Components/CustomerList";
import Paginator from "@/Components/Paginator/Paginator";
import { Head, Link, useForm } from "@inertiajs/react";
import _ from "lodash";

const CustomerIndex = (props) => {
    const { data, setData } = useForm({ search: "" });
    const isAdmin = props.auth?.user?.role_id == 1;
    const indexRoute = isAdmin ? "customer.index" : "customers.index";

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
            <Head title="Customer" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Daftar Customer</h1>
                    <p className="page-subtitle">Kelola data customer bengkel</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {isAdmin && (
                        <>
                            <Link href={route("customer.create")} className="btn-primary-modern">
                                + Customer Baru
                            </Link>
                            <Link href={route("exist-customer.create")} className="btn-success-modern">
                                + Customer Lama
                            </Link>
                        </>
                    )}
                    {!isAdmin && (
                        <Link href={route("customers.create")} className="btn-primary-modern">
                            + Customer Baru
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
                                placeholder="Cari customer..."
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
                    <CustomerList datas={props.customer} />
                </div>

                <div className="flex justify-center border-t border-slate-100 p-4">
                    <Paginator meta={props.customer.meta} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CustomerIndex;
