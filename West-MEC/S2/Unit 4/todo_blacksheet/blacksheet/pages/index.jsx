import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Segment } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [subList, setSubList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setList(res.data);
    // update()
  }, []);

  useEffect(() => {
    update();
  }, [list, page]);

  const update = () => {
    console.log(list);
    setSubList(
      list.filter((_, i) => {
        if (i >= (page - 1) * 10 && i < (page - 1) * 10 + 10) return true;
        else return false;
      })
    );
    console.log(subList);
  };

  const handleChange = (_, { activePage }) => {
    setPage(activePage);
  };

  return (
    <>
      <div class="ui grid" style={{ margin: "1rem" }}>
        {subList.map((item) => {
          function Name(item) {
            if (item == 1) {
              return "John";
            } else if (item == 2) {
              return "Billy";
            } else if (item == 3) {
              return "Chara";
            } else if (item == 4) {
              return "Izzy";
            } else if (item == 5) {
              return "Solar";
            } else if (item == 6) {
              return "Ninja";
            } else if (item == 7) {
              return "Shawn";
            } else if (item == 8) {
              return "Bob";
            } else if (item == 9) {
              return "Ralsei";
            } else if (item == 10) {
              return "Kris";
            }
          }

          return (
            <>
              <div
                class={
                  item.id % 2 == 1
                    ? "left floated eight wide column"
                    : "right floated eight wide column"
                }
              >
                <div
                  className={
                    item.completed ? "ui segment green " : "ui segment red"
                  }
                  key={item.id}
                  style={{ border: "2px solid black" }}
                >
                  <p style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>{` Title: ${item.title}`}</p>
                  <h4 style={{ textAlign: "center" }}>{` Made by: ${Name(item.userId)}`}, {`Overall Post Number: ${item.id}`}</h4>
                  <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
                    {item.completed ? "Task is Done" : "Task is Not Complete"}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Pagination
        defaultActivePage={1}
        totalPages={20}
        onPageChange={handleChange}
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginLeft: "35%",
          marginRight: "40%",
        }}
      />
    </>
  );
}
