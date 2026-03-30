import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            Order by: Relevance <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
                <Menu.Item value="new-txt">Relevence</Menu.Item>
                <Menu.Item value="new-file">Date Added</Menu.Item>
                <Menu.Item value="new-win">Name</Menu.Item>
                <Menu.Item value="open-file">Release date</Menu.Item>
                <Menu.Item value="export">Popularity</Menu.Item>
                <Menu.Item value="avaerage">Average rating</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}

export default SortSelector