type Props = {
  path: string
  children: React.ReactNode
  className?: string
}

export default function Window({ path, children, className = "" }: Props) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        background: "var(--dark)",
        border: "1.5px solid var(--dark3)",
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          background: "var(--dark2)",
          borderBottom: "1px solid var(--dark3)",
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "var(--pink)" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "var(--faint)" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "var(--faint)" }}
        />
        <span
          className="ml-2 text-[10px] tracking-widest"
          style={{ color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}
        >
          {path}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}