
import React, { useContext, useEffect, useState, Fragment } from "react";
import TodoApi from "../api/TodoApi";
import { userContext } from "../utils/userContext";
import ToDoListShare from "./TodoListShare";
import {
  EmailShareButton,
  FacebookShareButton,
  TumblrShareButton,

  TumblrIcon,
  EmailIcon,
  FacebookIcon,
} from "react-share";

function Share() {
const user = useContext(userContext);

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const [reload, setReload] = useState(false);


  useEffect(() => {
    TodoApi.get(`/todo/shareTodos/${user.email}`)
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          setTodos(res.data.todos);
          setReload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

      return (

        <div style={{ margin: 16 }}>     
              <ToDoListShare
                todos={todos}
              />
            <br></br>
          <h1>Share your List !!!</h1>
          <TumblrShareButton
            url='http://www.shoppinglists.online/signin'
            title='This is the shopping list'
            className="Demo__some-network__share-button"
          >
            <TumblrIcon size={50} /> <br></br>
          </TumblrShareButton>

          <FacebookShareButton
            url='http://www.shoppinglists.online/signin'
            title='This is the shopping list'
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={50} /> <br></br>
          </FacebookShareButton>

          <EmailShareButton
            url='http://www.shoppinglists.online/signin'
            title='This is the shopping list'
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={50} /> <br></br>
          </EmailShareButton>
        </div>
        
      );
    }
  

export default Share;
