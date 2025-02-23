'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Button
} from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { useSession, signIn, signOut } from 'next-auth/react'

function getTwoFirstTwoCapitalLetters(str?: string | null) {
    const match = (str || '').match(/[A-z]/g);
    return match ? match.slice(0, 2).join("") : "GT"
}

function UserButton() {
    const { data: session, status } = useSession()

    return (
        <div>
            {status === 'authenticated' && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src={session.user?.name ?? ""} />
                            <AvatarFallback>
                                {getTwoFirstTwoCapitalLetters(session.user?.name)}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}

            {status === 'unauthenticated' && (
                <Button onClick={() => signIn("google")}>
                    Sign In
                </Button>
            )}
        </div>
    )
}

export default UserButton