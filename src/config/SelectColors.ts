import { StylesConfig } from "react-select";

const SelectColors: StylesConfig<any> = {
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
      state.isDisabled ? "#ebece6" : "transparent",
    border: "1px solid #ccc",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingInlineEnd: "4px",
    paddingInlineStart: "4px",
    borderRadius: "10px",
    "&:hover": { borderColor: "#ccc" },
  }),
  menu: (styles) => ({ ...styles, zIndex: 50 }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  placeholder: (styles) => ({ ...styles, color: "#ccc" }),
  singleValue: (styles) => ({
    ...styles,
    color: "#292D32",
  }),
  input: (styles) => ({
    ...styles,
    color: "#292D32",
  }),
};

export default SelectColors;
