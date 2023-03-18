import { Box, SkeletonText } from "@chakra-ui/react";

function SkeletonGenreListItem() {
  return (
    <Box paddingY="1.5">
      <SkeletonText noOfLines={1} skeletonHeight={8} />
    </Box>
  );
}

export default SkeletonGenreListItem;
