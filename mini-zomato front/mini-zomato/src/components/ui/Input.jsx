export function Input({ className, ...props }) {
    return (
      <input
        className={`border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
        {...props}
      />
    );
  }
  