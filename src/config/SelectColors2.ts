import { StylesConfig } from "react-select";

const SelectColors2: StylesConfig<any> = {
  option: (styles, { isDisabled, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? "#f1f0f0"
        : isSelected
          ? "#ebece6"
          : undefined,
      color: isDisabled ? "#9A9CAE" : isSelected ? "#1b84ff" : "#292D32",
      "&:hover": {
        color: "#1b84ff",
        backgroundColor: "#ebece6",
      },
      cursor: isDisabled ? "not-allowed" : "pointer",
    };
  },
  control: (styles, state) => ({
    ...styles,
    cursor: "pointer",
    boxShadow: "none",
    backgroundColor:
      state.isDisabled ? "#ebece6" : "rgb(235 236 230 / 0.3)",
    border: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingInlineEnd: "10px",
    paddingInlineStart: "10px",
    borderRadius: "10px",
    fontSize: "18px",
    "&:hover": { borderColor: "transparent" },
  }),
  menu: (styles) => ({ ...styles, zIndex: 50 }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  placeholder: (styles) => ({ ...styles, color: "#AEAEAE" }),
  singleValue: (styles) => ({
    ...styles,
    color: "#292D32",
  }),
  input: (styles) => ({
    ...styles,
    color: "#292D32",
  }),
};

export default SelectColors2;
