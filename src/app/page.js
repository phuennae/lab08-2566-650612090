import { Header } from "../../component/Header";
import { TaskInput } from "../../component/taskinputaskInput";
import { Task } from "../../component/task";
import { Footer } from "../../component/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullname="Phuenpa Champasri" studentId="650612090" />
    </div>
  );
}