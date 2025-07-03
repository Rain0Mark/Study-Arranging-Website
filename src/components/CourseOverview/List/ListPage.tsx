import { useNavigate } from 'react-router';
import { CardContent, Typography, Box, Paper, Stack } from '@mui/material';
import { useCallback } from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';

type Course = {
  name: string;
  location: string;
  lecturer: string;
  color: string;
  inGrids: number[];
  id: string;
};

type Props = {
  courseList: Course[];
  setCourseList: React.Dispatch<React.SetStateAction<Course[]>>;
};

function ListPage({ courseList, setCourseList }: Props) {
  const navigate = useNavigate();

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const newList = [...courseList];
      const [movedItem] = newList.splice(result.source.index, 1);
      newList.splice(result.destination.index, 0, movedItem);
      setCourseList(newList);
    },
    [courseList, setCourseList]
  );

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="courseList">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {courseList.map((course, index) => (
                  <Draggable
                    key={course.id}
                    draggableId={course.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Paper
                          elevation={3}
                          sx={{
                            cursor: 'pointer',
                            backgroundColor: course.color || 'transparent',
                            border: '2px solid rgb(105, 105, 105)',
                            color: '#fff',
                            mb: 1,
                            '&:hover': {
                              opacity: 0.9,
                            },
                          }}
                          onClick={() =>
                            course.id && navigate(`/course/${course.id}`)
                          }
                        >
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {course.name}
                            </Typography>
                            <Typography variant="body2">
                              {course.location}
                            </Typography>
                            <Typography variant="body2">
                              {course.lecturer}
                            </Typography>
                          </CardContent>
                        </Paper>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Stack>
    </Box>
  );
}

export default ListPage;
