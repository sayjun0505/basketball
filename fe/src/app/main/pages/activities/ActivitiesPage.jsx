import FusePageSimple from "@fuse/core/FusePageSimple";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import * as React from "react";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import exampleActivitiesData from "./exampleActivitiesData";
import ActivityTimelineItem from "./ActivityTimelineItem";
import Categories from "./Categories";
import { Popover } from "@mui/material";
import Button from "@mui/material/Button";
import Metrics from "./Metrics";
/**
 * The activities page.
 */
function ActivitiesPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const open = Boolean(anchorEl);
  const [newSkill, setNewSkill] = React.useState(null);
  const [skills, setSkills] = React.useState([]);
  const id = open ? "simple-popover" : undefined;
  const addskill = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const createSkill = () => {
    setSkills([...skills, newSkill]);
    handleClose();
    setNewSkill("");
  };
  const handleInputChange = (event) => {
    setNewSkill(event.target.value);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <FusePageSimple
      content={
        <div className="flex gap-12 flex-auto flex-row justify-start px-24 py-40 sm:px-64 sm:pb-80 sm:pt-72">
          <div className="w-200">
            <Categories onCategorySelect={handleCategorySelect} />
          </div>
          <div className="w-4/5 flex flex-col justify-center">
            <div className="bg-white p-12 rounded-lg flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4 ">
                  <div>{selectedCategory || "No category selected"}</div>
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="edit"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                  </svg>
                </div>
                <div>{skills.length} Skills/24 Metrics</div>
              </div>
              <div
                className="p-12 hover:cursor-pointer"
                aria-describedby={id}
                variant="contained"
                onClick={addskill}
              >
                Add Skill
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <div className="flex flex-col w-320 p-4">
                  <div className="flex flex-row justify-between">
                    <Typography sx={{ p: 2, fontWeight: "bold" }}>
                      Add Skill
                    </Typography>
                    <button
                      type="button"
                      aria-label="Close"
                      class="ant-modal-close"
                    >
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

                  <input
                    type="text"
                    className="border-2 border-gray-200 mx-12 rounded-lg h-32 p-12"
                    value={newSkill}
                    onChange={handleInputChange}
                  />
                  <Typography sx={{ p: 2 }}>
                    Skills can be general or specific, depending on how many
                    ways you wish to break down measuring the skill overall.
                  </Typography>
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
                      onClick={createSkill}
                      //   disabled={_.isEmpty(dirtyFields) || !isValid}
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </Popover>
            </div>
            <div className="p-64">
              {skills.length !== 0 && (
                <div className="">
                  <div className="flex flex-col gap-12">
                    {skills.map((item) => (
                      <Metrics items={item} key={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
      scroll={isMobile ? "normal" : "page"}
    />
  );
}

export default ActivitiesPage;
