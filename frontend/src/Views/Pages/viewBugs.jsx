import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBugs } from "../../Controllers/Reducers/bugSlice";
import BugCard from "../Components/Bug Card/bugCard";

export default () => {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false,
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchBugs());
  }, [bugs.length < 1]);

  function BugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name,
    });
  }
  return (
    <div className="page-container">
      {bugs.map((bug, key) => {
        <BugCard key={key} bug={bug} clicked={BugClicked} />;
      })}
      {DISPLAY_BUG.isDisplayed && (
        <bugView
          clicked={BugClicked}
          bug={bugs.filter((bug) => {
            return bug.name == DISPLAY_BUG.name;
          })}
        />
      )}
    </div>
  );
};
