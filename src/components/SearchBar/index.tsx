import { useRef, useState } from "react";
import { Container, Form } from "./styles";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCityChange: (e: string) => void;
  city: string;
}

const SearchBar = ({ onSubmit, onCityChange, city }: SearchBarProps) => {
  const [onFocus, setOnFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (inputRef.current) {
      inputRef.current.blur();
    }

    onSubmit(e);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <IoSearch
            className={"react-icon"}
            size={"100px"}
            color={onFocus || city ? "rgb(255, 255, 255)" : "#A0C6DD"}
          />
          <input
            type="text"
            placeholder="Digite uma cidade"
            onChange={(e) => onCityChange(e.target.value)}
            value={city}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            ref={inputRef}
          />
        </label>
      </Form>
    </Container>
  );
};

export default SearchBar;
