import { router, protectedProcedure } from "../trpc";

export const profileRouter = router({
  getProfile: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        name: ctx.session?.user.name,
      },
    });
  }),
});
