"use client";
import { selectFipeData } from "@/redux/selectors";
import { useSelector } from "@/redux/store";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Result() {
  const { veiculo } = useSelector(selectFipeData);
  const router = useRouter();

  if (!veiculo?.Marca) {
    router.push("/");
  }
  return (
    <Container
      component="div"
      maxWidth="md"
      sx={{
        paddingY: 8,
        textAlign: "center",
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        fontSize={28}
        textAlign={"center"}
        fontWeight="700"
        my={3}
      >
        Tabela Fipe: Preço {veiculo?.Marca} {veiculo?.Modelo.split("")[0]}{" "}
        {veiculo?.AnoModelo}
      </Typography>
      <Typography
        component="span"
        px={2}
        py={1}
        color={"whitesmoke"}
        variant="h5"
        textAlign={"center"}
        fontWeight="700"
        bgcolor={"#00a38c"}
        borderRadius={"50px"}
      >
        {veiculo?.Valor}
      </Typography>

      <Typography component="p" px={2} py={1} textAlign={"center"} my={2}>
        Este é o preço de compra do veículo
      </Typography>
    </Container>
  );
}
