"use client";

import { useForm } from "react-hook-form";
import { CreateProjectFormData } from "../create-project.form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectFormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <form
      className="flex flex-col items-center justify-center w-full mt-4"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="flex flex-col w-full">
        <Label htmlFor="project-name" className="text-sm font-medium">
          Название проекта
        </Label>
        <Input
          type="text"
          id="project-name"
          className={cn(
            "border rounded-md p-2 mt-1",
            errors.name
              ? "border-red-500 focus:border-red-500"
              : "border-zinc-300"
          )}
          {...register("name", {
            required: "Это поле обязательно для заполнения",
            minLength: {
              value: 3,
              message: "Название проекта должно содержать минимум 3 символа",
            },
            maxLength: {
              value: 50,
              message: "Название проекта не должно превышать 50 символов",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full mt-4">
        <Label htmlFor="description" className="text-sm font-medium">
          Описание проекта
        </Label>
        <Textarea
          id="description"
          className={cn(
            "border rounded-md p-2 mt-1",
            errors.description
              ? "border-red-500 focus:border-red-500"
              : "border-zinc-300"
          )}
          {...register("description", {
            required: "Это поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Описание проекта должно содержать минимум 10 символов",
            },
            maxLength: {
              value: 150,
              message: "Описание проекта не должно превышать 150 символов",
            },
          })}
        ></Textarea>
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>
      <Button type="submit" className="mt-4 cursor-pointer">
        Создать
      </Button>
    </form>
  );
}
