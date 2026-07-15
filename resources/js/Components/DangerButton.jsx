export default function DangerButton({ className = "", disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={`btn-danger-modern ${disabled ? "opacity-60" : ""} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
