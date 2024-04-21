import type {Meta, StoryObj} from '@storybook/react';
import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions'
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {fn} from "@storybook/test";
import {v1} from "uuid";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        changeTaskStatus: fn(),
        changeTaskTitle: fn(),
        removeTask: fn(),
        task: {id: v1(), isDone: true, title:" 'JS"},
        todolistId: v1()
    }
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const TaskIsDoneStory: Story = {}
export const TaskIsNotDoneStory: Story = {
    args: {
        task: {id: v1(), isDone: false, title:" 'HTML"}
    }
}
