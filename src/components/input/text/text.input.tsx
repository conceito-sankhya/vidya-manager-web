import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && <Label>{label}</Label>}
      <Input className={cn("rounded-md px-3 py-2", className)} {...props} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
