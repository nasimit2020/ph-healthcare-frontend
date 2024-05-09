import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={4} py={2}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          py={2}
        >
          <Typography color="#fff">&copy; 2024-All Rights Reserved.</Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/login"
            fontWeight={600}
            color="#fff"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#fff">Terms & Conditions.</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
