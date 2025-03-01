import { Container, Form } from "./styles";

interface SearchBarProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCityChange: (e: string) => void;
  city: string;
}

const SearchBar = ({ onSubmit, onCityChange, city }: SearchBarProps) => {
  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e)}>
        <label>
          <input
            type="text"
            placeholder="Digite uma cidade"
            onChange={(e) => onCityChange(e.target.value)}
            value={city}
          />
        </label>
      </Form>
    </Container>
  );
};

export default SearchBar;
