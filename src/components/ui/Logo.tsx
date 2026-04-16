import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const iconSize = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <img
        src="https://i0.wp.com/chambey.org/wp-content/uploads/2025/02/bey.png?fit=1024%2C1024&ssl=1"
        alt="Chambey Logo"
        width={iconSize[size]}
        height={iconSize[size]}
        className="object-contain"
      />
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            CHAMBEY
          </span>
          <span className="mt-1 text-[8px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            Power through collective Action
          </span>
        </div>
      )}
    </div>
  );
}
