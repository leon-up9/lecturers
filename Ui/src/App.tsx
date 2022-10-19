import React from "react";
import "./App.css";
import LecturerItem from "./components/Lectureritem/LecturerItem";
import LecturerList from "./components/LecturerList/LecturerList";
import { ILecturer } from "./domain/Interfaces";
import service from "./service";

function App() {
  const [data, setData] = React.useState<{ languages: []; lecturers: [] }>({
    languages: [],
    lecturers: [],
  });

  React.useEffect(() => {
    service.getData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className="App">
      <LecturerList data={data.lecturers} filterOptions={data.languages}>
        {(item: ILecturer) => (
          <LecturerItem
            img={item.image}
            title={item.name}
            key={item.id}
            email={item.email}
            className="basis-64 min-w-[16rem] xs:full-grid-item sm:col-auto"
          />
        )}
      </LecturerList>
    </div>
  );
}

export default App;
