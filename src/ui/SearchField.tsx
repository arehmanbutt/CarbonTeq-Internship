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
      />
    </Box>
  );
}
