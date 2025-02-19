import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    error?: string,
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
    label,
    error,
    className, 
    ...props
}) => {
    return ( 
        <div className="w-full flex flex-col gap-1">
            {label && <Label>{label}</Label>}
            <Textarea className={cn("rounded-md px-3 py-2", className)} {...props} />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
     );
}
 
export default TextAreaInput;