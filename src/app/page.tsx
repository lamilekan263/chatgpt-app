import { Separator } from "@/components/ui/separator";
import Chat from "./component/Chat";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession()
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome to GPT chat</h1>
      {!session?.user?.email && <div>You need to log in to use this App</div>}

      {session?.user?.email && (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}

    </main>
  );
}
