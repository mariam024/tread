/** Atomic button. variant: "solid" | "ghost" */
export default function Button({ variant = "solid", children, ...rest }) {
  return (
    <button className={`btn btn--${variant}`} {...rest}>
      {children}
    </button>
  );
}
