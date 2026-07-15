export default function PrimaryButton({ className = "", disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={`btn-primary-modern ${disabled ? "opacity-60" : ""} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
