import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";
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
      <Head>
        <title>Melchior's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
    </AppLayout>
  );
}
