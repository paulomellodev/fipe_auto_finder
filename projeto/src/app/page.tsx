"use client";
import { Box, Container, Typography } from "@mui/material";

import Form from "@/components/Form";
import { useDispatch } from "@/redux/store";
import { fetchAllBrandsAsync } from "@/redux/slices/fipeDataSlice/thunk";

export default function Home() {
  const dispatch = useDispatch();

  dispatch(fetchAllBrandsAsync());
  return (
    <main>
      <Container
        component="div"
        maxWidth="sm"
        sx={{ height: "100vh", paddingTop: 8 }}
      >
        <Typography
          component="h1"
          variant="h5"
          textAlign={"center"}
          fontWeight="700"
        >
          Tabela Fipe
        </Typography>
        <Typography
          component="h2"
          variant="subtitle1"
          textAlign={"center"}
          fontWeight="700"
        >
          Consulte o valor de um veículo de forma gratuira
        </Typography>
        <Box width={"65%"} bgcolor="white" p={2} m="12px auto">
          <Form />
        </Box>
      </Container>
    </main>
  );
}
