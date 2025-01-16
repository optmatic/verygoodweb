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
        'bg-white',
        'bg-gradient-to-r from-green-400/70 via-blue-400/70 via-40% to-blue-600/70',
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
          'bg-white',
          'bg-gradient-to-r from-green-400/40 to-blue-600/40',
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
          'bg-white',
          'bg-gradient-to-br from-green-400/10 to-blue-600/10',
          'blur-3xl'
        )}
      />
    </div>
  )
}
