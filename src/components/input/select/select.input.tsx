import { Label } from "@/components/ui/label";
import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string,
    error?: string,
    selectOptions: string[]
}

const SelectInput: React.FC<SelectInputProps> = ({
    label, 
    error, 
    selectOptions,
    className
}) => {
    return ( 
        <div className="w-full flex flex-col gap-1">
            {label && <Label>{label}</Label>}
            <Select>
                <SelectTrigger className={cn("rounded-md text-sm w-full", className)}>
                    <SelectValue placeholder="Escolha" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            selectOptions.map((option) => (
                                <SelectItem  key={option} value={option.toLowerCase()}>{option}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
     );
}
 
export default SelectInput;