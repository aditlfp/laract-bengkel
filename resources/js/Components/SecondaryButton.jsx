export default function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={`btn-secondary-modern ${disabled ? "opacity-60" : ""} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
