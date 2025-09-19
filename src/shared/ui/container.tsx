import { cn } from '../lib/utils'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('max-mobile:px-2 mx-auto w-full max-w-[1368px] px-3', className)}>
      {children}
    </div>
  )
}

export { Container }
