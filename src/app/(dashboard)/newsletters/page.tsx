import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import AddNewsletter from "./add-newsletter/_components/add-newsletter-component";
import { auth } from '@/auth';

const prisma = new PrismaClient().$extends(withAccelerate())

export default async function page() {

  const user = await auth()



    const newsletters = await prisma.newsletter.findMany({
      where: {
        userId:user?.user?.id
      },
      cacheStrategy: { swr: 10, ttl: 5 },
    });
    console.log(newsletters);
    
  
    // if(!newsletters || newsletters.length === 0) {
    //   return "You have no newsletter, create one!"
    // }
  
  return (
    <main className="p-12">


      <div>{newsletters.length === 0 ? <p>You don't have a newsletter at the moment, create one!</p> : (
            <div>
                You got {newsletters.length} amount of newsletters.
                
            </div>
        )}</div> 



      <AddNewsletter/>



      <div>
        {newsletters.map((item) => (
          <div className="flex gap-x-4">
           title: <p>{item.title}</p> userId's:<p>{item.userId}</p> subscriber amounts: <p>{item.subscriberAmount}</p>
          </div>
        ))}
      </div>

    </main>
  )
}
