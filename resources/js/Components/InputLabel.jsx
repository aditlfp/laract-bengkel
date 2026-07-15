export default function InputLabel({
    value,
    className = "",
    children,
    required = false,
    ...props
}) {
    const isRequired = required || className.includes("required");

    return (
        <label
            {...props}
            className={`form-label ${className.replace(/\brequired\b/, "").trim()}`}
        >
            {value ? value : children}
            {isRequired && <span className="ml-0.5 text-red-500">*</span>}
        </label>
    );
}
