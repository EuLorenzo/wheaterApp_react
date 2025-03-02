import { useState } from "react";
import { Container, Form } from "./styles";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCityChange: (e: string) => void;
  city: string;
}

const SearchBar = ({ onSubmit, onCityChange, city }: SearchBarProps) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e)}>
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
          />
        </label>
      </Form>
    </Container>
  );
};

export default SearchBar;
