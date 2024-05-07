import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import * as React from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import { lighten } from "@mui/material/styles";
import { Popover } from "@mui/material";

/**
 * The ActivityTimelineItem component.
 */
function Categories(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newCat, setNewCat] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const setCatItem = (category) => {
    setSelectedCategory(category);
    props.onCategorySelect(category);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNewCat("");
  };

  const addCategory = () => {
    setCategories([...categories, newCat]);
    handleClose();
    setNewCat("");
  };
  const handleInputChange = (event) => {
    setNewCat(event.target.value);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="w-full flex flex-col border-2 border-gray-200 rounded-xl bg-white">
      <div className="flex flex-row justify-between">
        <Typography sx={{ p: 2, fontWeight: "bold" }}>Categories</Typography>
        <div
          className="p-12 hover:cursor-pointer"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          +
        </div>
      </div>
      {categories.length != 0 && (
        <div>
          <div className=" border-b-2 border-gray-200" />
          <div className="p-16">
            {categories.map((item) => (
              <div
                key={item}
                onClick={() => setCatItem(item)}
                className={`hover:cursor-pointer ${
                  selectedCategory === item ? "font-bold" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="flex flex-col w-320 p-4">
          <div className="flex flex-row justify-between">
            <Typography sx={{ p: 2, fontWeight: "bold" }}>
              Add Category
            </Typography>
            <button type="button" aria-label="Close" class="ant-modal-close">
              <span class="ant-modal-close-x">
                <span
                  role="img"
                  aria-label="close"
                  class="anticon anticon-close ant-modal-close-icon pr-12"
                >
                  <svg
                    fill-rule="evenodd"
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="close"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
          <Typography sx={{ p: 2 }}>
            Recommended practice is to create categories based on different
            positions or player sets.
          </Typography>
          <input
            type="text"
            className="border-2 border-gray-200 mx-12 rounded-lg h-32 p-12"
            value={newCat}
            onChange={handleInputChange}
          />
          <Typography sx={{ p: 2, fontWeight: "bold" }}>
            Assign Players To Category
          </Typography>
          <Typography sx={{ p: 2 }}>
            You can assign categories to all players or players on a specific
            player list.
          </Typography>
          <div className="flex flex-row p-12 gap-4">
            <input type="checkbox" />
            <div className="">All Players</div>
          </div>
          <div className="flex justify-end flex-row gap-8">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              //   disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addCategory}
              //   disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Save
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Categories;
