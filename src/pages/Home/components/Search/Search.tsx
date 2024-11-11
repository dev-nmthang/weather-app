import { FaSearch } from "react-icons/fa";
import {
  FlexContainer,
  InputContainer,
  Input,
  SearchButton,
  SwitchButton,
} from "./style";
import { FormEvent, useEffect, useRef } from "react";
import { TemperatureUnit } from "@/constant/enum";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface SearchProps {
  temperatureUnit: TemperatureUnit;
  onSearch: (city: string) => void;
  onChangeTemperatureUnit: () => void;
}

export default function Search({
  temperatureUnit,
  onSearch,
  onChangeTemperatureUnit,
}: SearchProps) {
  const [localStorageValue, setLocalStorage] = useLocalStorage<string[]>(
    "cities",
    []
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchKey = inputRef.current?.value?.trim();
    if (searchKey) {
      onSearch(searchKey);

      const cities = [...localStorageValue].filter(
        (item) => item !== searchKey
      );
      setLocalStorage([searchKey, ...cities].slice(0, 5));
    }
  };

  const unit = temperatureUnit === TemperatureUnit.Celsius ? "F" : "C";

  return (
    <FlexContainer onSubmit={handleSearch}>
      <InputContainer>
        <Input ref={inputRef} placeholder="Enter city name" />
        <SearchButton>
          <FaSearch size={16} />
        </SearchButton>
      </InputContainer>
      <SwitchButton type="button" onClick={onChangeTemperatureUnit}>
        Switch to °{unit}
      </SwitchButton>
    </FlexContainer>
  );
}
