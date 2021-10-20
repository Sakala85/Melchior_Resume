import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "components/Header";
import About from "components/About";
import Experiences from "components/Experiences";
import NavBar from "components/NavBar";
import ReactLoading from "react-loading";
import {
  Box,
  Button,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import AppLayout from "layouts/AppLayout";
import LoadingPage from "../components/LoadingPage";

export default function Home() {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <LoadingPage />
      ) : (
        <AppLayout>
          <NavBar page={"home"} />
          <Header />
          <About />
          <Experiences />
        </AppLayout>
      )}
    </>
  );
}
