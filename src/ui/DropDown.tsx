import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";

import "../global.css";

type DropDownProps = {
  value: string;
  onChange: (e: SelectChangeEvent) => void;
};

export default function DropDown({ value, onChange }: DropDownProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          sx={{
            height: "3.5rem",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            "& .MuiSelect-select": {
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              color: "var(--text-color)",
            },
            "& fieldset": {
              borderColor: "var(--text-color)",
            },
            // ✅ FIXED focus border override
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "var(--text-color)",
              },
          }}
        >
          <MenuItem value="users">Users</MenuItem>
          <MenuItem value="repos">Repositories</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
