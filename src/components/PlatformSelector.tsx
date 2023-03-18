import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

function PlatformSelector() {
  const { data: platforms, isLoading, error } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Skeleton height="40px" borderRadius={8} width={24} />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
