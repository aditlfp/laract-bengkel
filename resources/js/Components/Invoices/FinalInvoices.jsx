import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const FinalInvoices = ({ props }) => {
    const { auth } = usePage().props;

    const price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        value: "1",
    }).format(props.fix.estimasi_harga);

    useEffect(() => {
        window.print();
    }, []);
    return (
        <>
            <div className="bg-white border rounded-lg shadow-lg px-6 py-4 mx-5 mt-8">
                <h1 className="font-bold text-2xl mb-3 text-center text-amber-600">
                    YAMAHA - AKM AUTO PARTS | INVOICES
                </h1>
                <hr className="mb-2" />
                <div className="bg-amber-100/50 mx-2 px-5 py-5 rounded-xl">
                    <div className="flex justify-between mb-6">
                        <div>
                            <h1 className="text-lg font-bold">Invoice</h1>
                            <span className="text-sm font-bold">
                                Pembuat Invoices : {props.auth.user.name}
                            </span>
                        </div>
                        <div className="text-gray-700 text-sm">
                            <div>
                                <span>Date: {props.dateNow}</span>
                            </div>
                            <div>
                                <span>
                                    Invoice : #INV{props.inv}
                                    {props.fix.id}
                                </span>
                            </div>
                            <div className="mt-1">
                                <span>
                                    Status :{" "}
                                    {props.fix.status_id == 1 ? (
                                        <span className="text-sky-500 font-bold">
                                            Proses
                                        </span>
                                    ) : (
                                        <span className="text-green-500 font-bold">
                                            Selesai
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                        <table className="my-5">
                            <tbody>
                                <tr className="text-sm font-bold">
                                    <td>Nama Pemilik</td>
                                    <td> : {props.fix.customer.owner}</td>
                                </tr>
                                <tr className="text-sm font-bold">
                                    <td>Alamat</td>
                                    <td> : {props.fix.customer.alamat}</td>
                                </tr>
                                <tr className="text-sm font-bold">
                                    <td>No Hp</td>
                                    <td>
                                        {" "}
                                        : {props.fix.customer.mobile_phone}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-xs text-gray-700 mx-auto rounded-md">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="text-gray-700">
                                        Tanggal Masuk
                                    </th>
                                    <th className="text-gray-700">No.Plat</th>
                                    <th className="text-gray-700">
                                        Jenis Kendaraan
                                    </th>
                                    <th className="text-gray-700">Warna</th>
                                    <th className="text-gray-700">
                                        Keterangan
                                    </th>
                                    <th className="text-gray-700">
                                        Jenis Kerusakan
                                    </th>
                                    <th className="text-gray-700">Panel</th>
                                    <th className="text-gray-700">
                                        Lama Pengerjaan
                                    </th>
                                    <th className="text-gray-700">
                                        Estimasi Harga
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-200/50">
                                    <td>{props.fix.customer.service_date}</td>
                                    <td>{props.fix.customer.no_plate}</td>
                                    <td>
                                        {props.fix.customer.nama_kendaraan} |
                                        {props.fix.customer.model} |
                                        {props.fix.customer.tahun}
                                    </td>
                                    <td>
                                        {props.fix.customer.nama_warna} |
                                        {props.fix.customer.code_warna}
                                    </td>

                                    <td>
                                        {props.fix.customer.keterangan_warna}
                                    </td>
                                    <td>
                                        {props.fix.jenis_kerusakan
                                            ? props.fix.jenis_kerusakan.map(
                                                  (rusak, i) => {
                                                      return (
                                                          <span key={i}>
                                                              {rusak},{" "}
                                                          </span>
                                                      );
                                                  }
                                              )
                                            : "Kerusakan Kosong"}
                                    </td>
                                    <td>
                                        {props.fix.nama_panel
                                            ? props.fix.nama_panel.map(
                                                  (panel, index) => {
                                                      if (
                                                          panel == "panel 1.png"
                                                      ) {
                                                          return (
                                                              <div
                                                                  className="dashed"
                                                                  key={index}
                                                              >
                                                                  Body Samping
                                                                  Kiri
                                                              </div>
                                                          );
                                                      }
                                                      if (
                                                          panel == "panel 2.png"
                                                      ) {
                                                          return (
                                                              <div
                                                                  className="dashed"
                                                                  key={index}
                                                              >
                                                                  Body Atas
                                                              </div>
                                                          );
                                                      }
                                                      if (
                                                          panel == "panel 3.png"
                                                      ) {
                                                          return (
                                                              <div
                                                                  className="dashed"
                                                                  key={index}
                                                              >
                                                                  Body Samping
                                                                  Kanan
                                                              </div>
                                                          );
                                                      }
                                                      if (
                                                          panel == "panel 4.png"
                                                      ) {
                                                          return (
                                                              <div
                                                                  className="dashed"
                                                                  key={index}
                                                              >
                                                                  Body Bamper
                                                                  Depan
                                                              </div>
                                                          );
                                                      }
                                                      if (
                                                          panel == "panel 5.png"
                                                      ) {
                                                          return (
                                                              <div
                                                                  className="dashed"
                                                                  key={index}
                                                              >
                                                                  Body Bamper
                                                                  Belakang
                                                              </div>
                                                          );
                                                      }
                                                  }
                                              )
                                            : "Kerusakan Kosong"}
                                    </td>
                                    <td>{props.fix.lama_pengerjaan}</td>
                                    <td>{price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between">
                            <div className="mt-5">
                                <span className="text-sm font-bold">
                                    Panel :
                                </span>
                                <div className="flex -ml-2">
                                    {props.fix.nama_panel?.map((option) => (
                                        <img
                                            src={`${props.ziggy.url}/image/panel/${option}`}
                                            alt={option.name}
                                            width="120px"
                                            className="mx-2 -px-1"
                                        />
                                    ))}
                                </div>
                                <div className="mt-1">
                                    <span className="text-sm italic underline">
                                        Catatan :{" "}
                                        <span>
                                            {props.fix.catatan_customer}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-x-5 justify-between">
                                <div className="pl-16 flex flex-col justify-center mt-5 gap-y-10">
                                    <span>Ponorogo, {props.dateNow}</span>
                                    <span className="text-center">
                                        TTD, {props.auth.user.name}
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center gap-y-10 mt-5">
                                    <span>Ponorogo, {props.dateNow}</span>
                                    <span className="text-center">
                                        TTD, {props.fix.customer.owner}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-5" />
            <div className="bg-yellow-300/30 rounded-lg shadow-lg px-6 pt-4 pb-6 mx-5 mt-8 border mb-10">
                <h1 className="font-bold text-2xl mb-3 text-center text-amber-600">
                    YAMAHA - AKM AUTO PARTS | INVOICES
                </h1>
                <hr className="mb-2" />
                <div className="flex justify-between mb-6">
                    <h1 className="text-lg font-bold">Surat Jalan</h1>
                    <div className="text-gray-700 text-sm">
                        <div>
                            <span>Date: {props.dateNow}</span>
                        </div>
                        <div>
                            <span>
                                Invoice : #INV{props.inv}
                                {props.fix.id}
                            </span>
                        </div>
                        <div className="mt-1">
                            <span>
                                Status :{" "}
                                {props.fix.status_id == 1 ? (
                                    <span className="text-sky-500 font-bold">
                                        Proses
                                    </span>
                                ) : (
                                    <span className="text-green-500 font-bold">
                                        Selesai
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="table table-xs text-gray-700 mx-auto rounded-md mb-10">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="text-gray-700">
                                    Pemilik Kendaraan
                                </th>
                                <th className="text-gray-700">No. Hp</th>
                                <th className="text-gray-700">Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200/50">
                                <td>{props.fix.customer.owner}</td>
                                <td>{props.fix.customer.mobile_phone}</td>
                                <td>{props.fix.customer.alamat}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-xs text-gray-700 mx-auto rounded-md bg-slate-600">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="text-gray-700">Tanggal Masuk</th>
                                <th className="text-gray-700">No.Plat</th>
                                <th className="text-gray-700">
                                    Jenis Kendaraan
                                </th>
                                <th className="text-gray-700">Warna</th>
                                <th className="text-gray-700">Kode Warna</th>
                                <th className="text-gray-700">Keterangan</th>
                                <th className="text-gray-700">
                                    Jenis Kerusakan
                                </th>
                                <th className="text-gray-700">Panel</th>
                                <th className="text-gray-700">
                                    Lama Pengerjaan
                                </th>
                                <th className="text-gray-700">
                                    Estimasi Harga
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200/50">
                                <td>{props.fix.customer.service_date}</td>
                                <td>{props.fix.customer.no_plate}</td>
                                <td>
                                    {props.fix.customer.nama_kendaraan} |{" "}
                                    {props.fix.customer.model} |{" "}
                                    {props.fix.customer.tahun}
                                </td>
                                <td>{props.fix.customer.nama_warna}</td>
                                <td>{props.fix.customer.code_warna}</td>
                                <td>{props.fix.customer.keterangan_warna}</td>
                                <td>
                                    {props.fix.jenis_kerusakan
                                        ? props.fix.jenis_kerusakan.map(
                                              (rusak, i) => {
                                                  return (
                                                      <span key={i}>
                                                          {rusak},{" "}
                                                      </span>
                                                  );
                                              }
                                          )
                                        : "Kerusakan Kosong"}
                                </td>
                                <td>
                                    {props.fix.nama_panel
                                        ? props.fix.nama_panel.map(
                                              (panel, index) => {
                                                  if (panel == "panel 1.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Samping Kiri
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 2.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Atas
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 3.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Samping Kanan
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 4.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Bamper Depan
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 5.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Bamper
                                                              Belakang
                                                          </div>
                                                      );
                                                  }
                                              }
                                          )
                                        : "Kerusakan Kosong"}
                                </td>
                                <td>{props.fix.lama_pengerjaan}</td>
                                <td>{price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-between">
                        <div className="mt-5">
                            <span className="text-sm font-bold">Panel :</span>
                            <div className="flex -ml-2">
                                {props.fix.nama_panel?.map((option) => (
                                    <img
                                        src={`${props.ziggy.url}/image/panel/${option}`}
                                        alt={option.name}
                                        width="120px"
                                        className="mx-2 -px-1"
                                    />
                                ))}
                            </div>
                            <div className="mt-1">
                                <span className="text-sm italic underline">
                                    Catatan :{" "}
                                    <span>{props.fix.catatan_customer}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinalInvoices;
