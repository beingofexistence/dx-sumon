"use client"

import { MouseEvent, useEffect, useMemo, useState } from "react"
import Image from "next/image"
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

import { buttonVariants } from "./ui"

// Image Download
interface Image {
  url: string
  title: string
}

function downloadImages(images: Image[]) {
  images.forEach((image) => {
    fetch(image.url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.style.display = "none"
        a.href = url
        a.download = image.title
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
      .catch(() =>
        console.error(
          "An error occurred while downloading the image:",
          image.url
        )
      )
  })
}

// Example usage:
const images: Image[] = [
  { url: "https://example.com/image1.jpg", title: "Image 1" },
  { url: "https://example.com/image2.jpg", title: "Image 2" },
]

function Home() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    downloadImages(images)
  }

  return (
    <>
      <button onClick={handleClick}>Download Images</button>
    </>
  )
}

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
interface Item {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}
interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  const [descriptions, setDescriptions] = useState<{ [key: string]: any }>({})
  const [emoji, setEmoji] = useState<string>("")
  const emojis = useMemo(
    () => ["😀", "😂", "😍", "🤔", "🙄", "😴", "🤢", "🤯", "🥳", "🤩"],
    []
  )

  async function generateDescription(title: any) {
    const prompt = `Generate a unique and creative description for ${title}`
    const response = await fetch(
      "https://api.edenai.run/v1/pretrained/text/generate_text",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `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`,
        },
        body: JSON.stringify({
          text: prompt,
          provider: ["openai"],
          model: ["davinci"],
          length: 100,
        }),
      }
    )
    const data = await response.json()
    return data.result[0].output
  }
  useEffect(() => {
    async function fetchDescriptions() {
      if (items) {
        const newDescriptions: { [key: string]: any } = {}
        for (const item of items) {
          if (item.title) {
            newDescriptions[item.title] = await item.title
          }
        }
        setDescriptions(newDescriptions)
        console.log("Alhamdulilla")
        console.log(descriptions["Material UI"])
      }
    }

    fetchDescriptions()
  }, [descriptions, emojis, items])

  function logoLetter(title: string): string {
    let text = title
    let firstLetter = text.charAt(0).toUpperCase()
    let lastLetter = text.charAt(text.length - 1).toUpperCase()
    let result = firstLetter + lastLetter

    return result
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
              <HoverCardTrigger className="flex h-[35px] w-full items-center ">
                <div className="items-logo-container rainbow-text mr-2 h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                  {item.logo ? (
                    <Image
                      src={`/docs/${item.title
                        .replace(/\s/g, "")
                        .toLowerCase()}.png`}
                      height={25}
                      width={25}
                      sizes="(max-width: 30px) 100vw"
                      quality={100}
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                      alt={item.title ? logoLetter(item.title) : "Dx"}
                    />
                  ) : (
                    <div className="item-logo-fallback">
                      {item.title ? logoLetter(item.title) : "Dx"}
                    </div>
                  )}
                </div>
                {/* <Avatar className="rainbow-text mr-2 h-[32.5px] w-[32.5px] border text-center text-[12.5px]">
                  <AvatarImage
                    src="metamask.png"
                  />
                  <AvatarFallback>
                    {item.title ? logoLetter(item.title) : "Dx"}
                  </AvatarFallback>
                </Avatar> */}
                {item.title}
              </HoverCardTrigger>
              <HoverCardContent className="p-8 w-auto h-auto">
                <div className="details flex item-center w-full flex-col space-y-3 ">
                  <div className="details_description flex items-center justify-center mb-1">
                    {item.description}
                  </div>
                  <div className="details_actions flex items-center justify-center flex-row w-full ">
                    {item.website_url ? (
                      <Link
                        key={index}
                        href={item.website_url}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer" : ""}
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                          }),
                          "website_url"
                        )}
                      >
                        Website
                      </Link>
                    ) : (
                      ""
                    )}

                    {item.appStore && item.playStore && item.webStore ? (
                      <div className="more_actions flex-1 flex items-center justify-center flex-row space-x-1">
                        <Link
                          key={index}
                          href={item.appStore}
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noreferrer" : ""}
                          className={cn(
                            buttonVariants({
                              variant: "link",
                            }),
                            "appStore"
                          )}
                        >
                          AppStore
                        </Link>
                        <Link
                          key={index}
                          href={item.playStore}
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noreferrer" : ""}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                            }),
                            "playStore"
                          )}
                        >
                          PlayStore
                        </Link>
                        <Link
                          key={index}
                          href={item.webStore}
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noreferrer" : ""}
                          className={cn(
                            buttonVariants({
                              variant: "destructive",
                            }),
                            "webStore"
                          )}
                        >
                          WebStore
                        </Link>
                      </div>
                    ) : (
                      <div className="more_actions_empty"></div>
                    )}
                    {item.download &&
                    item.star &&
                    item.version &&
                    item.updated ? (
                      <div className="more_actions flex-1 flex items-center justify-center flex-row space-x-1">
                        <h6 className="download">{item.download}</h6>
                        <h6 className="star">{item.star}</h6>
                        <h6 className="version">{item.version}</h6>
                        <h6 className="updated">{item.updated}</h6>
                      </div>
                    ) : (
                      <div className="more_actions_empty"></div>
                    )}

                    {item.github_repo ? (
                      <Link
                        key={index}
                        href={item.github_repo}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer" : ""}
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                          }),
                          "github_repo"
                        )}
                      >
                        Github
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </HoverCardContent>
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

              <HoverCardContent>
                {/* {descriptions[item.title] } */}
                {emoji + item.description}
              </HoverCardContent>
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
  ) : null
}
