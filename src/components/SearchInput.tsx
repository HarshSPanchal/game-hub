import { Input, InputGroup } from "@chakra-ui/react"
import { useRef } from "react"
import { LuSearch } from "react-icons/lu"
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);


  return (
  <form onSubmit={(event) => {
    event.preventDefault();
    if (ref.current) setSearchText(ref.current.value)
  }}>
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input ref={ref} placeholder="Search Games..." borderRadius="full" variant="subtle" />
    </InputGroup>
  </form>
  )
}

export default SearchInput