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
        <Select value={value} onChange={onChange} displayEmpty>
          <MenuItem value="users">Users</MenuItem>
          <MenuItem value="repos">Repositories</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
