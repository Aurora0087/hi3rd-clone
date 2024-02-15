"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"


function LangDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="border-0 cursor-pointer">
                <Globe className=" text-slate-50/90"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 pb-3">
                <DropdownMenuSeparator />
                <DropdownMenuItem className="">Eng</DropdownMenuItem>
                <DropdownMenuItem className="">Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LangDropDown