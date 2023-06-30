import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { CreateOrder } from "~~/components/home/CreateOrder";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Match !</span>
          </h1>
          <p className="text-center text-lg">An order book fully decentralised created for the fantom hacakthon</p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <CreateOrder></CreateOrder>
        </div>
      </div>
    </>
  );
};

export default Home;
