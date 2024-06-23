import getUser from '@/app/_actions/onUser';
import { auth } from '@/auth';
import { signOut } from '@/auth/helper';
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';


export default async function page() {

  const session = await auth()


  console.log(session?.user);
  
  return (
    <main className=''>
      {/* <SignOut/> */}
      {session?.user?.email}
      {!session ? <SignIn/> : <SignOut/>}
    </main>
  );
}