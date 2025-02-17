"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  const form = useForm();
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 bg-red-500">
        <Image
          src="/image.png"
          alt="Logo"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          className="object-cover w-full h-full"
          quality={100}
          width={0}
          height={0}
        />{" "}
      </div>
      <div className="flex  flex-col items-center justify-start p-12">
        <Tabs defaultValue="account">
          <TabsList className="flex flex-row w-full justify-center rounded-none border-none bg-transparent p-0">
            <TabsTrigger
              className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:font-semibold"
              value="account"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:font-semibold"
              value="password"
            >
              Cadastrar
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="flex flex-col items-center justify-center pt-12 gap-8">
              <h1 className="text-2xl font-bold text-[#1C1B1F] uppercase">
                Empresa X 2.0
              </h1>
              <Avatar className="w-32 h-32">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center gap-4 pt-12 w-[500px] ">
                <h2 className="text-xl font-normal text-black">
                  Vamos iniciar seu login
                </h2>
                <Form {...form}>
                  <FormItem className="w-full">
                    <FormLabel>Email do usuário</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu email" />
                    </FormControl>
                    <FormDescription>
                      Digite seu email cadastrado{" "}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </Form>
                <div className="flex flex-row items-center justify-end w-full">
                  <Button
                    variant="outline"
                    className="rounded-2xl border-black"
                  >
                    Prosseguir
                  </Button>
                </div>
                <div className="flex flex-col gap-8 mt-8 w-full">
                  <div className="flex flex-row items-center justify-between w-full gap-4">
                    <div className="flex flex-1 h-[1px] w-full bg-[#E3E1E0]" />
                    <p className="text-md">OU</p>
                    <div className="flex flex-1 h-[1px] w-full bg-[#E3E1E0]" />
                  </div>

                  <div className="flex w-full border-2 p-4 py-2 border-[#E3E1E0] items-center justify-between rounded-2xl">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start justify-center ">
                        <h2 className="text-[16px] font-semibold text-black">
                          Acessar como
                        </h2>
                        <p className="text-sm font-medium text-[#79747E]">
                          Faça login com sua conta Google
                        </p>
                      </div>
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png?20230822192911" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex w-full border-2 px-2 py-4 bg-black items-center justify-center rounded-2xl">
                    <p className="font-semibold text-lg text-white">
                      Acessar com o Facebook{" "}
                    </p>
                  </div>
                  <div className="flex flex-row items-center text-[#79747E] justify-center mt-28 w-full gap-4">
                    <p className="text-md">VidyaCode</p>
                    <p className="text-md">|</p>
                    <p className="text-md">Ajuda</p>
                    <p className="text-md">|</p>
                    <p className="text-md">Versão:2.0</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="flex flex-col items-center justify-center pt-12 gap-8">
              <h1 className="text-2xl font-bold text-[#1C1B1F] uppercase">
                Cadastro
              </h1>
              <div className="flex justify-center pt-4">
                <div className="grid grid-cols-2 gap-4 w-[600px]">
                  <Form {...form}>
                    <FormItem className="w-full">
                      <FormLabel>Organização</FormLabel>
                      <FormControl>
                        <Input placeholder="José Pessoa Filho LTDA" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>Tipo de atividade</FormLabel>
                      <FormControl>
                        <Input placeholder="Distribuidora" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="José" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input placeholder="Pessoa" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="col-span-2">
                      <FormLabel>Email (Email usado para login)</FormLabel>
                      <FormControl>
                        <Input placeholder="josepessoa@email.com.br" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>DDD</FormLabel>
                      <FormControl>
                        <Input placeholder="011" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="1234-6789" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Digite sua senha" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-full">
                      <FormLabel>Repetir senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Repita sua senha" />
                      </FormControl>
                    </FormItem>
                  </Form>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end w-full">
                <Button variant="default" className="rounded-lg">
                  Cadastrar
                </Button>
              </div>
              <div className="flex flex-col gap-8 mt-8 w-full">
                <div className="flex flex-row items-center justify-between w-full gap-4">
                  <div className="flex flex-1 h-[1px] w-full bg-[#E3E1E0]" />
                  <p className="text-md">OU</p>
                  <div className="flex flex-1 h-[1px] w-full bg-[#E3E1E0]" />
                </div>

                <div className="flex w-full border-2 p-4 py-2 border-[#E3E1E0] items-center justify-between rounded-2xl">
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start justify-center ">
                      <h2 className="text-[16px] font-semibold text-black">
                        Acessar como
                      </h2>
                      <p className="text-sm font-medium text-[#79747E]">
                        Faça login com sua conta Google
                      </p>
                    </div>
                  </div>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png?20230822192911" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex w-full border-2 px-2 py-4 bg-black items-center justify-center rounded-2xl">
                  <p className="font-semibold text-lg text-white">
                    Acessar com o Facebook{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center text-[#79747E] justify-center mt-28 w-full gap-4">
                  <p className="text-md">VidyaCode</p>
                  <p className="text-md">|</p>
                  <p className="text-md">Ajuda</p>
                  <p className="text-md">|</p>
                  <p className="text-md">Versão:2.0</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
