import { initTRPC } from "@trpc/server";

const fos = [
  { id: 1, title: "FO 1", description: "Description of FO1" },
  { id: 2, title: "FO 2", description: "Description of FO2" },
  { id: 3, title: "FO 3", description: "Description of FO3" },
  { id: 4, title: "FO 4", description: "Description of FO4" },
  { id: 5, title: "FO 5", description: "Description of FO5" },
];



const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getFos: trpc.procedure.query(() => {
    return { fos };
  }),
});


export type TrpcRouter = typeof trpcRouter;