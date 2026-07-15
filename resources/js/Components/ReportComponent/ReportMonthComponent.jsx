import { FormatRupiah } from "@arismun/format-rupiah";
import { useEffect } from "react";

const ReportMonthComponent = ({ data, month }) => {
    useEffect(() => {
        window.print();
    }, []);
    return (
        <>
            <div>
                <h1 className="font-black text-2xl mb-3 text-center text-amber-600">
                    YAMAHA - AKM AUTO PARTS | REPORT
                </h1>
                <p className="text-center text-xs font-bold">Bulan : {month}</p>
            </div>
            <h2 className="mx-2 font-semibold">
                Data Perbaikan Yang Telah Selesai !
            </h2>
            <hr />
            <table className="table table-xs table-zebra">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Pemilik</th>
                        <th>Kendaraan</th>
                        <th>No.Plat</th>
                        <th>Model</th>
                        <th>Tahun Model</th>
                        <th>Jenis Kerusakan</th>
                        <th>Lama Pengerjaan</th>
                        <th>Estimasi Harga</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? (
                        data.map((items, i) => (
                            <tr key={i}>
                                {items.status_id == 2 ? (
                                    <>
                                        <td>{i + 1}</td>
                                        <td>{items.customer.owner}</td>
                                        <td>{items.customer.nama_kendaraan}</td>
                                        <td>{items.customer.no_plate}</td>
                                        <td>{items.customer.model}</td>
                                        <td>{items.customer.tahun}</td>
                                        <td>{items.jenis_kerusakan + ","}</td>
                                        <td>{items.lama_pengerjaan}</td>
                                        <td>
                                            <FormatRupiah
                                                value={items.estimasi_harga}
                                            />
                                        </td>
                                        <td className="text-green-400 font-bold">
                                            {items.status.name}
                                        </td>
                                    </>
                                ) : (
                                    ""
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={10} className="text-center">
                                ~Kosong~
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <br />
            <h2 className="mx-2 font-semibold">
                Data Perbaikan Yang Belum Selesai !
            </h2>
            <hr />
            <table className="table table-xs table-zebra">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Pemilik</th>
                        <th>Kendaraan</th>
                        <th>No.Plat</th>
                        <th>Model</th>
                        <th>Tahun Model</th>
                        <th>Jenis Kerusakan</th>
                        <th>Lama Pengerjaan</th>
                        <th>Estimasi Harga</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? (
                        data.map((items, i) => (
                            <tr key={i}>
                                {items.status_id == 1 ? (
                                    <>
                                        <td>{i}</td>
                                        <td>{items.customer.owner}</td>
                                        <td>{items.customer.nama_kendaraan}</td>
                                        <td>{items.customer.no_plate}</td>
                                        <td>{items.customer.model}</td>
                                        <td>{items.customer.tahun}</td>
                                        <td>{items.jenis_kerusakan + ","}</td>
                                        <td>{items.lama_pengerjaan}</td>
                                        <td>
                                            <FormatRupiah
                                                value={items.estimasi_harga}
                                            />
                                        </td>
                                        <td className="text-sky-400 font-bold">
                                            {items.status.name}
                                        </td>
                                    </>
                                ) : (
                                    ""
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={10} className="text-center">
                                ~Kosong~
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default ReportMonthComponent;
