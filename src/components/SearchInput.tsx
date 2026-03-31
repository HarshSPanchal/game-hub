import { Input, InputGroup } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
    <Input placeholder="Search Games..." borderRadius="full" variant="subtle" />
  </InputGroup>
  )
}

export default SearchInput