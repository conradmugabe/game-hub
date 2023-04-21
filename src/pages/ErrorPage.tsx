import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Heading>You're lost</Heading>
        <Text>This page does not exist</Text>
      </>
    );
  }
  return <Heading>An unexpected error occurred.</Heading>;
}
