import Input from "@/components/input/input";

export default function TestePage() {
  return (
    <div>
      <div className="container mx-auto space-y-4">
        <Input.Text label="Nome" />
        <Input.TextAreaInput label="Descrição" />
      </div>
    </div>
  );
}
