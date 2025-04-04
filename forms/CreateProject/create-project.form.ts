import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(1).max(16),
  description: z.string().min(1).max(150),
});

export type CreateProjectFormData = z.infer<typeof createProjectSchema>;
