import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function SkeletonGameCard() {
  return (
    <Card width="60" borderRadius={10} overflow="hidden">
      <Skeleton height="40" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default SkeletonGameCard;
