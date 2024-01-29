"use client";

import { ModulesRouter } from "@/app/lib/modules_router";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Image,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();
  useShallowEffect(() => {
    setTimeout(() => router.push(ModulesRouter.login), 2000);
  }, []);
  return (
    <>
      <Stack justify="center" h={"100vh"} align="center" gap={0}>
        <Box>
          <Paper>
            <Image src={"/aset/logo.jpg"} alt="" />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
