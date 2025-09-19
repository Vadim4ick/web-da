"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Button } from "@/shared/ui/button";
import { BurgerMenuIcon } from "@/shared/icons/BurgerMenuIcon";
import { CloseIcon } from "@/shared/icons/CloseIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { social } from "@/shared/const/const";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="border-none outline-none">
        <button
          className={
            "tablet:hidden bg-additional-grey-cold burger rounded-[12px] p-[11px]"
          }
          aria-label="Открыть меню"
        >
          {open ? (
            <CloseIcon width={18} height={18} />
          ) : (
            <BurgerMenuIcon width={18} height={18} />
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={24}
        alignOffset={0}
        className="max-mobile:h-full w-full max-w-full rounded-[20px] border-none px-[35px] py-[48px]"
      >
        <div className="max-mobile:gap-[85px] flex flex-col gap-[45px]">
          <div className="flex w-full flex-col items-center justify-center gap-[32px]">
            <p className="text-additional-grey-60 text-[18px] leading-[125%] font-medium">
              Навигация
            </p>

            <Navbar className="max-tablet:gap-4 flex flex-col" />
          </div>

          <div className="flex flex-col gap-12">
            <ul className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-[10px]">
              {social.map((item) => (
                <li key={item.id}>
                  <a
                    href={
                      item.id === "mail"
                        ? `mailto:${item.link}`
                        : item.id === "phone"
                          ? `tel:${item.link}`
                          : item.link
                    }
                    className="text-additional-grey-60 hover:text-primary-blue text-[18px] leading-[125%] font-medium transition-all"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center">
              <Button className="w-full max-w-[190px] py-[14px]">
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
