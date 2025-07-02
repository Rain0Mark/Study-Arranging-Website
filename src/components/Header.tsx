import { Tabs, Tab, Box, Button, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

import React, { useState } from 'react';

type Props = {
  editing: string;
  setEditing: (newValue: string) => void;
  setShowing: (newValue: string) => void;
  setChosenGrids: (grids: number[]) => void;
};

function Header({ editing, setEditing, setShowing, setChosenGrids }: Props) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setChosenGrids([]);
    setEditing('none');
    switch (newValue) {
      case 0:
        setShowing('table');
        break;
      case 1:
        setShowing('list');
        break;
      case 2:
        setShowing('todo');
        break;
    }
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2, color: 'white' }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{ sx: { backgroundColor: 'white' } }}
        textColor="inherit"
      >
        <Tab label="Table" sx={{ flex: 1, color: 'white' }} />
        <Tab label="List" sx={{ flex: 1, color: 'white' }} />
        <Tab label="Todo" sx={{ flex: 1, color: 'white' }} />
      </Tabs>

      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Button
          variant={editing === 'todo' ? 'outlined' : 'contained'}
          color="primary"
          onClick={() => {
            setEditing(editing === 'todo' ? 'none' : 'todo');
            setShowing('todo');
            setChosenGrids([]);
          }}
          startIcon={
            editing === 'todo' ? <CancelIcon /> : <AddCircleOutlineIcon />
          }
        >
          {editing === 'todo' ? 'Cancel' : 'Add Todo'}
        </Button>

        <Button
          variant={editing === 'course' ? 'outlined' : 'contained'}
          color="secondary"
          onClick={() => {
            setEditing(editing === 'course' ? 'none' : 'course');
            setShowing('table');
            setChosenGrids([]);
          }}
          startIcon={
            editing === 'course' ? <CancelIcon /> : <AddCircleOutlineIcon />
          }
        >
          {editing === 'course' ? 'Cancel' : 'Add Course'}
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;