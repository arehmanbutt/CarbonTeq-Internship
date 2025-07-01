import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";

type SearchFieldProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "300px" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        placeholder="Search or jump to..."
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--text-color)",
            },
            "&:hover fieldset": {
              borderColor: "var(--text-color",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--text-color)",
            },
          },
          "& .MuiInputBase-input": {
            color: "var(--text-color)",
            padding: "10px 14px",
          },
        }}
      />
    </Box>
  );
}
