function TerminalField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  multiline = false,
  rows = 5,
  className = '',
  required = false,
  error = '',
}) {
  const commonProps = {
    name,
    value,
    onChange,
    onBlur,
    required,
    'aria-invalid': Boolean(error),
    className:
      'w-full bg-transparent text-sm text-white outline-none placeholder:text-white/28',
    placeholder: `${label.toLowerCase()}...`,
  };

  return (
    <label
      className={`flex flex-col gap-3 rounded-2xl border bg-white/[0.02] px-4 py-3.5 ${
        error ? 'border-[#ff8f8f]/40 bg-[#2a1010]/30' : 'border-white/8'
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.26em] text-accent/78">
          {label}
        </span>
        {required && <span className="text-[11px] text-white/30">*</span>}
      </div>
      {multiline ? (
        <textarea rows={rows} {...commonProps} />
      ) : (
        <input type={type} {...commonProps} />
      )}
      {error && <p className="text-xs text-[#ff8f8f]">{error}</p>}
    </label>
  );
}

export default TerminalField;
