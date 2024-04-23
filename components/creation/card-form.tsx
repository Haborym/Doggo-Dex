"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createCardSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useState } from "react";

interface CardFormProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  race: string;
  setRace: Dispatch<SetStateAction<string>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  imageSrc: any;
  setImageSrc: any;
  setExportCard: Dispatch<SetStateAction<boolean>>;
}

export const CardForm = ({
  name,
  setName,
  race,
  setRace,
  age,
  setAge,
  imageSrc,
  setImageSrc,
  setExportCard,
}: CardFormProps) => {
  const form = useForm<z.infer<typeof createCardSchema>>({
    resolver: zodResolver(createCardSchema),
    defaultValues: {
      // age: 0,
      // fullname: "Sir Paul Hauchond de la Lagune de Montdesir",
      // name: "Polochon",
      // race: "Golden Retriever",
    },
  });

  const onSubmit = (values: z.infer<typeof createCardSchema>) => {
    console.warn("card creation");
  };

  const [isExportActive, setIsexportActive] = useState(false);

  return (
    <Card className="shadow-sm md:mr-3">
      <CardHeader>
        <CardTitle>Paramètres de la carte</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="basis-3/4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-flow-row space-y-4 text-left"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom usuel</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue="Polochon"
                        {...field}
                        disabled={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={name}
                        {...field}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="race"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Race</FormLabel>
                    <FormControl>
                      {/* <Input placeholder="Golden Retriever" {...field} /> */}
                      <Select value={race} onValueChange={(e) => setRace(e)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Race" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Golden Retriever">
                            Golden Retriever
                          </SelectItem>
                          <SelectItem value="French Bulldog">
                            French Bulldog
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        {...field}
                        value={age}
                        onChange={(e) => {
                          setAge("" + e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Si moins d&apos;un an mettre 0
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageSrc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files) {
                            console.log(e.target.files[0]);

                            setImageSrc(URL.createObjectURL(e.target.files[0]));
                          }
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Ajoutez l&apos;image de votre chien
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant={"success"} disabled={true}>
                Publier la carte
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-center">
        <Button
          onClick={(e) => {
            setExportCard(true);
            setIsexportActive(false);
          }}
          disabled={isExportActive}
        >
          Exporter la carte
        </Button>
      </CardFooter>
    </Card>
  );
};
