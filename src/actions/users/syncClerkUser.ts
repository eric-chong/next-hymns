import { type User } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

const syncClerkUser = async (user: User) => {
  const { id: clerkId, firstName, lastName } = user;
  const name = `${firstName} ${lastName}`;

  const users = await prisma.user.findMany();
  console.log("users >>>>", users);

  return prisma.user.upsert({
    where: { clerkId },
    update: { name },
    create: { clerkId, name },
  });
};

export default syncClerkUser;
