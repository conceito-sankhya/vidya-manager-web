import Input from "@/components/input/input";

const selectOptions = [
  {
    value: "opção 1",
    selectOptionLabel: "Opção 1",
  },
  {
    value: "opção 2",
    selectOptionLabel: "Opção 2",
  },
  {
    value: "opção 3",
    selectOptionLabel: "Opção 3",
  },
  {
    value: "opção 4",
    selectOptionLabel: "Opção 4",
  }
];
const radioItemOptions = ["opção 1", "opção 2"];
const autocompleteOptions = [
  {
    value: "opção 1",
    autocompleteOptionLabel: "Opção 1",
  },
  {
    value: "opção 2",
    autocompleteOptionLabel: "Opção 2",
  },
  {
    value: "opção 3",
    autocompleteOptionLabel: "Opção 3",
  },
  {
    value: "opção 4",
    autocompleteOptionLabel: "Opção 4",
  }
];

export default function TestePage() {
  return (
    <div>
      <div className="container mx-auto space-y-4">
        <Input.Text label="Nome" />
        <Input.TextAreaInput label="Descrição" />
        <Input.SelectInput label="Tipo de negócio" selectOptions={selectOptions} />
        <Input.RadioInput labelItems={radioItemOptions} />
        <Input.SwitchInput label="Utiliza nome fantasia pessoa fisica" />
        <Input.AutocompleteInput autocompleteOptions={autocompleteOptions} label="Permitir anexar arquivo no cadastro de clientes?" />
      </div>
    </div>
  );
}
