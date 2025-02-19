"use client"

import { Button } from "@/components/ui/button";
import { 
    Command, 
    CommandEmpty, 
    CommandGroup, 
    CommandInput, 
    CommandItem, 
    CommandList 
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface AutocompleteOptions {
    value: string;
    autocompleteOptionLabel: string;
  }

interface AutocompleteInputProps extends React.HTMLAttributes<HTMLDivElement> {
    autocompleteOptions: AutocompleteOptions[],
    label?: string
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
    autocompleteOptions,
    label,
    className
}) => {
    const [openAutocomplete, setOpenAutocomplete] = useState(false);
    const [autocompleteValue, setAutocompleteValue] = useState(autocompleteOptions[0].value);

    return ( 
        <div className="w-full">
            {label && <Label>{label}</Label>}
            <Popover open={openAutocomplete} onOpenChange={setOpenAutocomplete}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="autocomplete"
                        aria-expanded={openAutocomplete}
                        className={cn("w-full justify-between", className)}
                    >
                        {autocompleteValue
                            ? autocompleteOptions.find((option) => option.value === autocompleteValue)?.autocompleteOptionLabel
                            : autocompleteOptions[0].autocompleteOptionLabel
                        }
                        <ChevronDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" >
                    <Command>
                        <CommandInput placeholder="Digite uma opção" className="h-9" />
                        <CommandList>
                            <CommandEmpty>Opção não encontrada.</CommandEmpty>
                            <CommandGroup>
                                {autocompleteOptions.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}        
                                        onSelect={(currentAutocompleteValue) => {
                                            setAutocompleteValue(currentAutocompleteValue === autocompleteValue ? "" : currentAutocompleteValue)
                                            setOpenAutocomplete(false)
                                        }}
                                    >
                                        {option.autocompleteOptionLabel}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                autocompleteValue === option.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
     );
}
 
export default AutocompleteInput;