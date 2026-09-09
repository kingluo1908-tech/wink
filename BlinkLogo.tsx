type BlinkLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-28 w-28"
};

export function BlinkLogo({ size = "md", className = "" }: BlinkLogoProps) {
  return (
    <img
      src="/assets/brand/blink-logo.png"
      alt="BLINK Logo"
      className={`${sizeClass[size]} rounded-[26%] object-cover shadow-[0_0_52px_rgba(109,99,255,0.22)] ${className}`}
    />
  );
}
