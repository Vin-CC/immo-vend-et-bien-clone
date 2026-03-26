const base = 'font-[effra,Roboto,sans-serif] font-semibold cursor-pointer rounded-none no-underline inline-block transition-colors duration-200';

const variants = {
  orange: 'bg-(--color-orange) text-white! no-underline! hover:bg-[#5D8D96] hover:text-white',
  dark: 'bg-(--color-dark) text-white! no-underline! hover:bg-[#5D8D96] hover:text-white',
  white: 'bg-white !text-(--color-orange) no-underline! border-2 border-white hover:bg-[#5D8D96] hover:!text-white hover:border-[#5D8D96]',
} as const;

const sizes = {
  default: 'text-[20px] px-7 py-3.5',
  small: 'text-[17px] px-7 py-3.5',
} as const;

interface CTAButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function CTAButton({
  variant = 'orange',
  size = 'default',
  href = '#header-form',
  className = '',
  children,
  onClick,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
