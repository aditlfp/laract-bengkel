function StatusBtn({ status, onClick }) {
    const isDone = status == 2;
    return (
        <button
            type="button"
            onClick={onClick}
            className={`badge-soft cursor-pointer transition ${
                isDone
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10 hover:bg-emerald-100"
                    : "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/10 hover:bg-amber-100"
            }`}
            title="Klik untuk ubah status"
        >
            {isDone ? "Selesai" : "Proses"}
        </button>
    );
}

export default StatusBtn;
