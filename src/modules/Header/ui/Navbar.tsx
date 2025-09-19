import { navbar } from "@/shared/const/const";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav>
      <ul
        className={cn(
          "max-tablet:gap-6 flex items-center gap-[48px]",
          className,
        )}
      >
        {navbar.map((item) => (
          <li key={item.name}>
            <Link
              className="font-raleway text-primary-black max-tablet:font-montserrat max-tablet:text-[28px] max-tablet:leading-[125%] cursor-pointer font-semibold"
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
