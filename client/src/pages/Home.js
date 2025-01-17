import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_VIEW, QUERY_USER } from "../utils/queries";
import { ADD_VIEW } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Home.css";

function Home(props) {
  const [formState, setFormState] = useState({ viewText: "" });
  const [newView] = useMutation(ADD_VIEW);

  const handleViewForm = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await newView({
        variables: { viewText: formState.viewText },
      });
      const token = mutationResponse.data.newView.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewText = (e) => {
    const { viewText, value } = e.target;
    setFormState({
      ...formState,
      [viewText]: value,
    });
  };

  const {
    loading: loadingView,
    error: errorView,
    data: dataView,
  } = useQuery(QUERY_VIEW);
  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(QUERY_USER);

  if (loadingUser && loadingView) {
    return <p>Loading</p>;
  }

  return (
    <body>
      <div className="viewFormBox">
        <form className="viewsText" onSubmit={handleViewForm}>
          <div>
            <label htmlFor="viewText"></label>
            <input
              className="viewStyle"
              placeholder="Leave a view!"
              name="viewText"
              type="viewText"
              id="viewText"
              onChange={handleViewText}
            />
          </div>
          <button className="viewSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        {dataUser?.user?.map((user, index) => {
          return (
            <div className="singleViews" key={index}>
              <div>
                <h4 className="userHeader">-{user.userName}</h4>
              </div>
              {user.views.map((view, i) => {
                return <p key={i}>{view.viewText}</p>;
              })}
            </div>
          );
        })}
      </div>
    </body>
  );
}

export default Home;
