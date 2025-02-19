import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelItems: string[],
}

const RadioInput: React.FC<RadioInputProps> = ({
    labelItems,
    className
}) => {
    return ( 
        <RadioGroup className="flex flex-row">
            {
                labelItems && labelItems.map((label, index) => (
                    <div key={index} className="flex gap-4">
                        <RadioGroupItem value={label} className={cn("h-[20px] w-[20px]", className)} />
                        {label && <Label className="capitalize">{label}</Label>}
                    </div>
                ))
            }
        </RadioGroup>
     );
}
 
export default RadioInput;