import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mobile:px-3 mx-auto w-full max-w-[1360px] px-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Container };
