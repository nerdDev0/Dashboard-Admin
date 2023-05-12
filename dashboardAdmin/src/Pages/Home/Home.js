import React from "react";
import Features from "../../Components/features/Features";
import Chart from "../../Components/Chart/Chart";
import {xAxisData} from "../../Datas";
import WidgetSM from "../../Components/WidgetSM/WidgetSM";
import WidgetLG from "../../Components/WidgetLG/WidgetLG";
import WidgetLG2 from "../../Components/WidgetLG/WidgetLG2";
import './Home.css'
export default function Home() {
  return (
    <>
    <main className="home">
    <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKy="Sale" />
      <section className="homeWidgets">
      <WidgetSM/>
    <WidgetLG2/>
      </section>
    </main>
      
    </>
  );
}
