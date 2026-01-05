import { type User } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

const syncClerkUser = async (user: User) => {
  const { id: clerkId, firstName, lastName } = user;
  const name = `${firstName} ${lastName}`;

  const email = user.primaryEmailAddress?.emailAddress ?? null;

  return prisma.user.upsert({
    where: { clerkId },
    update: { name, email },
    create: { clerkId, name, email },
  });
};

export default syncClerkUser;
