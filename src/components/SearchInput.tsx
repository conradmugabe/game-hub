import { FormEvent, useRef } from "react";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import useGameQueryStore from "../store";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const onSearch = useGameQueryStore((state) => state.setSearchText);
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
      navigate("/");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
