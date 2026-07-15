export default function CopyrightComponent() {
    return (
        <footer className="mt-auto border-t border-slate-200 bg-white">
            <div className="flex h-12 items-center justify-center px-4 sm:px-6 lg:px-8">
                <p className="text-xs text-slate-400">
                    © {new Date().getFullYear()} Bengkel AKM · by{" "}
                    <a
                        href="https://github.com/aditlfp"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-amber-600 hover:text-amber-700"
                    >
                        Aditlfp
                    </a>
                    {" "}& SP One
                </p>
            </div>
        </footer>
    );
}
