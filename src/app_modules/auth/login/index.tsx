"use client";

import { Avatar, Stack } from "@mantine/core";
import { IconLetterB } from "@tabler/icons-react";

export default function Login() {
  return (
    <>
      <Stack justify="center" align="center" h={"100vh"}>
        <Avatar
          radius={"xl"}
          style={{ borderStyle: "solid", borderWidth: "1px" }}
        >
          <IconLetterB />
        </Avatar>
      </Stack>
    </>
  );
}
