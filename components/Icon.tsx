export default function Icon({
  name,
  className = "",
  ...rest
}: { name: string; className?: string } & Record<`data-${string}`, unknown>) {
  return (
    <span aria-hidden="true" {...rest} className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
