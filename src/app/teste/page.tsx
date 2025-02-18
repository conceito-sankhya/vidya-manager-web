import Input from "@/components/input/input";

const selectOptions = ["opção 1", "opção 2", "opção 3", "opção 4"];

export default function TestePage() {
  return (
    <div>
      <div className="container mx-auto space-y-4">
        <Input.Text label="Nome" />
        <Input.TextAreaInput label="Descrição" />
        <Input.SelectInput label="Tipo de negócio" selectOptions={selectOptions} />
      </div>
    </div>
  );
}
