import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import CopyrightComponent from "@/Components/CopyrightComponent";
import { useState } from "react";

export default function Authenticated({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="app-shell">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="content-area">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />

                {header && (
                    <div className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
                        {header}
                    </div>
                )}

                <main className="main-content">{children}</main>

                <CopyrightComponent />
            </div>
        </div>
    );
}
