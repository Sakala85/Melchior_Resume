import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "components/Header";
import About from "components/About";
import {
  Box,
  Button,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import AppLayout from "layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Header />
      <About />
    </AppLayout>
  );
}
