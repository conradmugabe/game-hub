import { Switch, useColorMode } from '@chakra-ui/react';

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />;
}

export default ColorModeSwitch;
