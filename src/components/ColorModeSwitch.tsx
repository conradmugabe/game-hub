import { Switch, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      size="lg"
      colorScheme="blue"
    />
  );
}

export default ColorModeSwitch;
