"use client"

import React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as z from "zod"

import { items } from "@/config/dev-mode"
import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { useToast } from "@/registry/default/ui"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ToastAction,
  buttonVariants,
} from "./ui"
import { update } from "@/hooks/slices/devModeSlice"

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  dev_mode: z.boolean().default(false).optional(),
  hello_tool: z.boolean(),
})

export function DevMode() {
  const dispatch = useDispatch();
  const { toast } = useToast()
  const [isDev, setIsDev] = React.useState(false)
  const [HelloTool, setHelloTool] = React.useState(false)
  const DevModeSelector = useSelector((state: any) => state.devMode.isDev)
  const HelloToolSelector = useSelector((state: any) => state.helloTool.isDev)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
      hello_tool: true,
    },
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger className="devMode fixed bottom-3 right-2 flex h-[50px] w-[50px] flex-row items-center justify-center overflow-hidden rounded-full border p-2">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "flex h-[50px] w-[50px] items-center justify-center rounded-full p-0"
          )}
        >
          <Icons.devMode className="h-2 w-2" />
        </div>
      </DialogTrigger>
      <DialogContent className="devMode-container flex h-[600px] flex-col">
        <div className="devMode-header px-3 pt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="dev_mode"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Dev Mode</FormLabel>
                          <FormDescription>
                            This is only for developers who are working on
                            components and want to develop them in a blank
                            page!!!
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            onClick={() => {
                              setIsDev(!isDev);
                              dispatch(update(isDev))
                              toast({
                                title: `Dev Mode is switch to ${DevModeSelector}`,
                                description:
                                  "You Can Now Make Your Components Without Any Disturbance",
                                action: (
                                  <ToastAction altText="Goto schedule to undo">
                                    Confirm
                                  </ToastAction>
                                ),
                              })
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hello_tool"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Hello Tool</FormLabel>
                          <FormDescription>
                            Hangouts with loved ones Seamlessly and spend
                            momemts beyond Glass
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            onClick={() => {
                              setHelloTool(!HelloTool);
                              toast({
                                title: `Hello Tool is  switch to ${HelloToolSelector}`,
                                description:
                                  "Enjoy Every Single Moments Of Your Existence",
                                action: (
                                  <ToastAction altText="Goto schedule to undo">
                                    Confirm
                                  </ToastAction>
                                ),
                              })
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="horizantalDivider"></div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="devMode-content h-[350px] w-full space-y-0 overflow-y-auto pb-3 pl-2 pr-0 pt-[10px] "
          >
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className={cn(
                              buttonVariants({
                                variant: "ghost",
                              }),
                              "flex h-[25px] flex-row items-center justify-start space-x-3 space-y-0 rounded-lg py-4 pl-2"
                            )}
                          >
                            <FormControl className="flex items-center justify-center">
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="flex items-center justify-center font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit">Add to tasks</Button> */}
            {/* <NavigationMenuDemo /> */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
