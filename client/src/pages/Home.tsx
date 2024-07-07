import Lamp from "../components/Lamp";
import TodoCard from "../components/todoCard";

const Home = () => {
  return (
    <div className="">
      <Lamp />
      <div className="flex">
        <TodoCard />
      </div>
    </div>
  );
};

export default Home;
