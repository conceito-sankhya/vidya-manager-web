import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export function Search({ open, setOpen }: any) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpen(false); // Fecha o diálogo após a navegação
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Faça uma busca..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
        <CommandGroup heading="Sugestões">
          <CommandItem onSelect={() => handleNavigation("/home")}>
            Página Inicial
          </CommandItem>
          <CommandItem onSelect={() => handleNavigation("/settings")}>
            Configurações
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigation("/produtos-licenciados")}
          >
            Produtos Licenciados
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigation("/estatisticas-de-uso")}
          >
            Estatísticas de Uso
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
