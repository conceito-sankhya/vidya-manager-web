import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface SwitchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const SwitchInput: React.FC<SwitchInputProps> = ({
    label,
    className
}) => {
    return ( 
        <div className="w-full flex flex-col gap-1">
            <Label>{label}</Label>
            <Switch className={cn("data-[state=checked]:bg-[#005EFF]", className)} />
        </div>
     );
}
 
export default SwitchInput;