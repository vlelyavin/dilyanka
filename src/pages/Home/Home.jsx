import { About } from "../../feature/Home/About";
import { Banner } from "../../feature/Home/Banner";
import { WhyUs } from "../../feature/Home/WhyUs";
import { List } from "../../components/List";
import { Stages } from "../../feature/Home/Stages";

export const Home = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <About />
      <Stages />
      <List />
    </>
  );
};
