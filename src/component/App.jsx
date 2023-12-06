import React from "react";
import Question from "./question";
import data from "./data";
const App = () => {
  return (
    <main className="w-screen min-h-screen bg-green-300 flex items-center justify-center ">
      <section className=" bg-white max-w-[950px] grid text-center my-6 mx-6 p-8 rounded-lg">
        <h2 className=" capitalize text-[3rem] ">Question</h2>
        {data.map((item) => {
          return <Question key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};
export default App;
