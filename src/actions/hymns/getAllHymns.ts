import { prisma } from "@/lib/prisma";

const getAllHymns = async () => {
  const hymns = await prisma.hymn.findMany();

  return hymns;
};

export default getAllHymns;
