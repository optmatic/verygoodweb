import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-gradient-to-l from-emerald-200 via-blue-400 via-30% to-blue-600',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-gradient-to-l from-emerald-200 to-blue-600',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}

export function GradientFooterBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={clsx(
          'absolute inset-0 transform-gpu',
          'bg-gradient-to-bl from-emerald-200/20 to-blue-600/20',
          'blur-3xl'
        )}
      />
    </div>
  )
}
