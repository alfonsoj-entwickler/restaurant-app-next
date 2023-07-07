import { PrismaClient } from "@prisma/client"

async function getCategories() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();

  return categories;
}

export default async function Home() {
  const categories = getCategories();
  console.log(categories);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS</h1>
    </main>
  )
}
