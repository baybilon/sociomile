import z, { email } from "zod";

export const loginSchemas = z.object({
  email: z.email(),
  password: z.string(),
});

export const registerSchemas = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});
