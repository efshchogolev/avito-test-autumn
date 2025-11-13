import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

export const Filters = () => {
    return (
        <div>
            <div>
                <span>Фильтры</span>
                <InputLabel id="status-select-label">Статус</InputLabel>
                <Select
                    labelId="status-select-label"
                    id="status-select"
                    value={[10,20]}
                    label="Age"
                    multiple={true}
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <InputLabel id="category-select-label">Статус</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={[10,20]}
                    label="Age"
                    multiple={true}
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <Slider defaultValue={[50,100]} valueLabelDisplay="auto" />

                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>

            <div>
                <span>сортировка</span>
                <InputLabel id="date-select-label">Статус</InputLabel>
                <Select
                    labelId="date-select-label"
                    id="date-select"
                    value={[10,20]}
                    label="Age"
                    multiple={true}
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <InputLabel id="price-select-label">Статус</InputLabel>
                <Select
                    labelId="price-select-label"
                    id="price-select"
                    value={[10,20]}
                    label="Age"
                    multiple={true}
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
        </div>
    );
};
