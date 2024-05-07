import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/base";
import { Popover } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttoncontinue: {
    "&:hover": {
      color: "blue",
    },
  },
  buttoncancel: {
    "&:hover": {
      color: "red",
    },
  },
});
const Metrics = ({ items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [showSecondPopover, setShowSecondPopover] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
    // setNewCat("");
  };
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const selectType = (option) => {
    setSelectedOption(option);
  };
  const classes = useStyles();
  const handleContinue = () => {
    setShowSecondPopover(true);
    handleClose();
    // Display a new popover or perform any other necessary actions
  };
  return (
    <div
      className="w-full hover:cursor-pointer bg-white rounded-lg border-2 border-gray-200 flex flex-row justify-between"
      key={items}
    >
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="w-2/3 flex flex-row justify-between">
            <div>{items}</div>
            <div className="w-80">0 Metrics</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex text-center">
            Add evaluation metrics that will define what this skill is
            compromised of. Each metric represents a column on your old paper
            scoring form.
          </div>

          <div
            className="mt-12 border-2 border-blue-500 text-center p-8 rounded-lg"
            onClick={handleClick}
          >
            Add Metric
          </div>
        </AccordionDetails>
      </Accordion>

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
        <div className="flex flex-col w-320 p-20">
          <div className="flex flex-row justify-between">
            <Typography sx={{ p: 2, fontWeight: "bold" }}>
              Select Metric Type
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
          <div className="flex flex-col gap-8">
            <div
              className={`hover:cursor-pointer p-20 border-2 ${
                selectedOption === "Subjective"
                  ? "border-blue-400"
                  : "border-gray-400 hover:border-blue-400"
              } flex flex-row items-center rounded-lg`}
              onClick={() => selectType("Subjective")}
            >
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-bold">Subjective</div>
                <div>Measurement with a fixed scale or text choices.</div>
              </div>
              <Checkbox
                label="CircleIcon"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  selectedOption === "Subjective" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <CircleIcon />
                  )
                }
                checked={selectedOption === "Subjective"}
                onChange={() => handleOptionChange("Subjective")}
              />
            </div>
            <div
              className={`hover:cursor-pointer p-20 border-2 ${
                selectedOption === "Objective"
                  ? "border-blue-400"
                  : "border-gray-400 hover:border-blue-400"
              } flex flex-row items-center rounded-lg`}
              onClick={() => selectType("Objective")}
            >
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-bold">Objective</div>
                <div>Measurement with a quantitative score.</div>
              </div>
              <Checkbox
                label="CircleIcon"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  selectedOption === "Objective" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <CircleIcon />
                  )
                }
                checked={selectedOption === "Objective"}
                onChange={() => handleOptionChange("Objective")}
              />
            </div>
            <div
              className={`hover:cursor-pointer p-20 border-2 ${
                selectedOption === "Comment Only"
                  ? "border-blue-400"
                  : "border-gray-400 hover:border-blue-400"
              } flex flex-row items-center rounded-lg`}
              onClick={() => selectType("Comment Only")}
            >
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-bold">Comment Only</div>
                <div>A great way to get qualitative feedback.</div>
              </div>
              <Checkbox
                label="CircleIcon"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  selectedOption === "Comment Only" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <CircleIcon />
                  )
                }
                checked={selectedOption === "Comment Only"}
                onChange={() => handleOptionChange("Comment Only")}
              />
            </div>
          </div>

          <div className="mt-20 flex justify-end flex-row gap-8">
            <Button
              variant="contained"
              color="primary"
              className={classes.buttoncancel}
              style={{
                backgroundColor: "white",
                color: "#333",
                border: "1px solid #ccc",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleClose}
              //   disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttoncontinue}
              style={{
                backgroundColor: "white",
                color: "#333",
                border: "1px solid #ccc",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleContinue}
              //   disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Continue
            </Button>
          </div>
        </div>
      </Popover>
      <Popover
        id="second-popover"
        open={showSecondPopover}
        anchorEl={anchorEl} // Use the same anchorEl as the first Popover
        onClose={() => setShowSecondPopover(false)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <div className=" p-20">
          {/* Add content for the second popover */}
          <h3>Select Input Type</h3>
          <div className="flex flex-col gap-8 my-12">
            <div
              className={`hover:cursor-pointer p-20 border-2 ${
                selectedOption === "Subjective"
                  ? "border-blue-400"
                  : "border-gray-400 hover:border-blue-400"
              } flex flex-row items-center justify-between rounded-lg`}
              onClick={() => selectType("Subjective")}
            >
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-bold">Subjective Score</div>
                <div>Measurement with a fixed scale, ex. 0-5, 0-10, etc.</div>
              </div>
              <Checkbox
                label="CircleIcon"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  selectedOption === "Subjective" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <CircleIcon />
                  )
                }
                checked={selectedOption === "Subjective"}
                onChange={() => handleOptionChange("Subjective")}
              />
            </div>
            <div
              className={`hover:cursor-pointer p-20 border-2 ${
                selectedOption === "Objective"
                  ? "border-blue-400"
                  : "border-gray-400 hover:border-blue-400"
              } flex flex-row items-center rounded-lg`}
              onClick={() => selectType("Objective")}
            >
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-bold">Choice Metric</div>
                <div>
                  Score based on fixed text choices ex. Needs Improvement,
                  Average, Excellent, etc.
                </div>
              </div>
              <Checkbox
                label="CircleIcon"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  selectedOption === "Objective" ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <CircleIcon />
                  )
                }
                checked={selectedOption === "Objective"}
                onChange={() => handleOptionChange("Objective")}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <Button
              style={{
                backgroundColor: "white",
                color: "#333",
                border: "1px solid #ccc",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => setShowSecondPopover(false)}
            >
              Back
            </Button>
            <div className="flex gap-8">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#333",
                  border: "1px solid #ccc",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => setShowSecondPopover(false)}
              >
                Cancel
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#333",
                  border: "1px solid #ccc",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => setShowSecondPopover(false)}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Metrics;
