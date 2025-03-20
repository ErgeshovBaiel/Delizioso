import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Food from "../../components/food/Food";
import Table from "../../components/table/Table";
import Open from "../../components/open/Open";
import Popular from "../../components/popular/Popular";
import { supabase } from "../../supabase";
import Chef from "../../components/chef/Chef";
import Customers from "../../components/customers/Customers";
import Category from "../../components/category/Category";

const HomePage = () => {
  const [povar, setPovar] = useState([]);
  const [worker, setWorker] = useState([]);

  const getPovar = async () => {
    const { data } = await supabase.from("chef").select("*");
    console.log(data);
    setPovar(data || []);
  };

  const getWorker = async () => {
    const { data } = await supabase.from("worker").select("*");
    console.log(data);
    setWorker(data || []);
  };

  useEffect(() => {
    getPovar();
    getWorker();
  }, []);

  if (povar.length === 0 || worker.length === 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Hero />
      <Food />
      <Category />
      <Table />
      <Chef />
      <Customers />
      <Open />
      <img src="" alt="" />
    </div>
  );
};

export default HomePage;
