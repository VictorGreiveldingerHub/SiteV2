import { createRef } from "react"

const state = {
  sections: 4,
  pages: 3,
  zoom: 75,
  titles: [
    "React Todolist",
    "React Github API",
    "Chatroom & Websocket"
  ],
  top: createRef()
}

export default state;