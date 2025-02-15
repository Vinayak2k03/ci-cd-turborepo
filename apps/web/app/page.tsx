import {client} from "@repo/db/client" ;

export default async function Home() {
  const user=await client.user.findFirst();

  return (
    <div>
      Username:
      {user?.username}
      Password:
      {user?.password}
    </div>
  );
}
