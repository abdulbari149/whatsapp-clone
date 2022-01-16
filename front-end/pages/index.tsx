import React, { useState } from "react";
import { App, Grid, Main, Aside } from "../styles/main";
import { io } from "socket.io-client";
import { Header } from "../components";
import * as MDI from "mdi-material-ui"
// const client = io("http://localhost:5000");



export default function Home({ icons }) {
  // const [newPerson, setNewPerson] = useState(null);
  // const [name, setName] = React.useState(null);
  // const submitHandler = (e) => {
  //   client.emit("connection-initialized", { name });
  //   client.on("new-connection", (data) => {
  //     setNewPerson(data.name);
  //     console.log("New Person Joined the chat");
  //   });
  // };
  return (
    <Grid>
      <App>
          <Aside>
             <Header user={{ avatar: "/images/avatar.jpg", type: "me"}} icons={["Chat", "MoreVert"]} />
          </Aside>
          <Main>
            <Header user={{
              name: "User1",
              avatar: "/images/avatar.jpg",
              type: "sender"
            }}
             />
          </Main>
      </App>
    </Grid>
  );
}

export const getStaticProps = async () => {
  
  return {
    props: {
    }
  }
}