import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href?: string;
  children: string;
  variant?: ButtonVariant;
  external?: boolean;
};

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-400 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",
  secondary:
    "border border-white/60 text-white hover:bg-white/10 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900",
};

export function Button({ href = "", children, variant = "primary", external = false }: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${styles[variant]}`;

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={baseStyles}
    >
      {children}
    </Link>
  );
}
