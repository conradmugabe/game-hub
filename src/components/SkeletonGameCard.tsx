import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function SkeletonGameCard() {
  return (
    <Card>
      <Skeleton height="40" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default SkeletonGameCard;
