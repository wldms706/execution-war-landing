interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function CTAButton({ children, href = "#", className = "" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block px-8 py-4 bg-white text-background font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
}
