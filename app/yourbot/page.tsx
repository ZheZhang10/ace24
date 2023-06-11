
import { useSession } from "next-auth/react"
import type { GetServerSidePropsContext } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

const ProtctedYourBotPage = async() => {
  const session = await getServerSession(authOptions);

//   if (typeof window === "undefined") return null

  if (session) {
    console.log(session)
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    )
  }
  {
    console.log(session)
    // return <p>Access Denied</p>

    redirect('/?callbackUrl=/signin')
  }
  
}
export default ProtctedYourBotPage


// export 'session' prop to use session with server side rendering

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props:{
//       session: await getServerSession (context.req, context.res, authOptions)
//     },
//   }
// }