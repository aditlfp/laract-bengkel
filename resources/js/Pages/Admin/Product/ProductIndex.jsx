import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductList from "@/Components/ProductList";
import Paginator from "@/Components/Paginator/Paginator";
import { Head, Link, usePage } from "@inertiajs/react";

const ProductIndex = (props) => {
    return (
        <AuthenticatedLayout user={props.auth?.user}>
            <Head title="Produk" />

            <div className="page-header">
                <div>
                    <h1 className="page-title">Daftar Produk</h1>
                    <p className="page-subtitle">Kelola stok sparepart dan produk bengkel</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Link href={route("products.create")} className="btn-primary-modern">
                        + Tambah Produk
                    </Link>
                </div>
            </div>

            <div className="card-panel">
                <div className="overflow-x-auto">
                    <ProductList datas={props.product} />
                </div>

                <div className="flex justify-center border-t border-slate-100 p-4">
                    <Paginator meta={props.product.meta} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProductIndex;
