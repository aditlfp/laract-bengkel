import { Link } from "@inertiajs/react";
import BtnEditMini from "./BtnEditMini";
import BtnDeleteMini from "./BtnDeleteMini";

const isProduct = (datas) => {
    const rows = datas?.data || [];

    if (!rows.length) {
        return (
            <div className="px-6 py-12 text-center">
                <p className="text-sm font-medium text-slate-500">Produk masih kosong</p>
            </div>
        );
    }

    return (
        <table className="table-modern">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Satuan</th>
                    <th>Stok</th>
                    <th>Deskripsi</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((product, i) => (
                    <tr key={product.id}>
                        <td className="font-medium text-slate-500">{i + 1}</td>
                        <td className="font-medium">{product.name}</td>
                        <td>{product.satuan}</td>
                        <td>
                            <span
                                className={`badge-soft ${
                                    product.stock > 0
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "bg-red-50 text-red-700"
                                }`}
                            >
                                {product.stock}
                            </span>
                        </td>
                        <td className="max-w-[220px] truncate text-slate-500">
                            {product.description || "—"}
                        </td>
                        <td>
                            <div className="flex items-center gap-1.5">
                                <Link
                                    href={"products/" + product.id + "/edit"}
                                    method="get"
                                    as="button"
                                >
                                    <BtnEditMini />
                                </Link>
                                <Link
                                    href={"products/" + product.id}
                                    method="delete"
                                    data={{ id: product.id }}
                                    as="button"
                                >
                                    <BtnDeleteMini />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const ProductList = ({ datas }) => {
    return !datas ? (
        <div className="px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-500">Produk masih kosong</p>
        </div>
    ) : (
        isProduct(datas)
    );
};

export default ProductList;
