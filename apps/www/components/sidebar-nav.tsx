"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import axios from "axios"
import { MainNavItem, SidebarNavItem } from "types/nav"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="mb-10 mt-5 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[] | undefined
  pathname: string | null
}


export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  function capitalizeFirstAndLast(title: string): string {
    const words = title.split(' ');
    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    const firstWordCapitalized =
      firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    const lastWordCapitalized =
      lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
    words[0] = firstWordCapitalized;
    words[words.length - 1] = lastWordCapitalized;
    return words.join(' ');
  }

  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 pt-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <HoverCard>
              <HoverCardTrigger className="flex h-[30px] w-full items-center ">
                <Avatar className="mr-2 hidden h-[100px] w-[100px]">
                  <AvatarImage
                    src={`https://logo.clearbit.com/${item.title}.com`}
                  />
                  <AvatarFallback>
                    {item.title ? capitalizeFirstAndLast(item.title) : ''}
                  </AvatarFallback>
                </Avatar>
                {item.title}
              </HoverCardTrigger>
              <HoverCardContent>{item.description}</HoverCardContent>
            </HoverCard>
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                  Allhamdulilla
                </span>
              </HoverCardTrigger>
              <HoverCardContent>{item.description}</HoverCardContent>
            </HoverCard>
            {item.label && (
              <HoverCard>
                <HoverCardTrigger>
                  {/* Render your label here */}
                </HoverCardTrigger>
                {/* Render label-related content here */}
              </HoverCard>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}

