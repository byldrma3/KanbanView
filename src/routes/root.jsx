import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Breadcrumb from "../components/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/features/task";
import { useDisclosure } from "../utils/useDisclosure";
import { Modal, ModalContent, ModalFooter } from "../components/modal";
import Button from "../components/form/button";
import Input from "../components/form/input";
import Spinner from "../components/spinner";
import toast, { Toaster } from "react-hot-toast";

export default function Root() {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.task);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [newTaskForm, setNewTaskForm] = React.useState({
		columnId: "",
		task: "",
	});
	const [submitLoading, setSubmitLoading] = React.useState(false);

	const handleAddNewTask = () => {
		setSubmitLoading(true);
		setTimeout(() => {
			dispatch(
				addTask({
					columnId: newTaskForm.columnId,
					content: newTaskForm.task,
				})
			);
			onClose();
			setNewTaskForm({
				columnId: "",
				task: "",
			});
			setSubmitLoading(false);
			toast.success("New task added successfully!", {
				style: {
					fontSize: "13px",
					borderRadius: "6px",
					color: "#001747",
				},
			});
		}, 1000);
	};
	return (
		<>
			<Header onOpen={onOpen} />
			<div className='flex'>
				<Sidebar />
				<main className='flex-grow'>
					<Breadcrumb />
					<Outlet />
				</main>
			</div>
			<Modal isOpen={isOpen} onClose={onClose} title='Add New Task'>
				<ModalContent>
					<div className='flex flex-col gap-3'>
						<div className='flex'>
							<select defaultValue='' id='newColumn' className='form-label lg w-full !text-xs outline-none' onChange={(e) => setNewTaskForm({ ...newTaskForm, columnId: e.target.value })}>
								<option value=''>Choose a Task column</option>
								{Object.entries(tasks).map(([columnId, column], index) => {
									return (
										<option key={index} value={columnId}>
											{column.name}
										</option>
									);
								})}
							</select>
						</div>
						<Input icon='type' id='newTask' type='text' size='lg' placeholder='Enter New Task Name' onChange={(e) => setNewTaskForm({ ...newTaskForm, task: e.target.value })} />
					</div>
				</ModalContent>
				<ModalFooter>
					<Button variant='secondary' size='lg' onClick={onClose}>
						Cancel
					</Button>
					<Button variant='primary' size='lg' onClick={handleAddNewTask} disabled={submitLoading}>
						{submitLoading && <Spinner />} Add New
					</Button>
				</ModalFooter>
			</Modal>
			<Toaster />
		</>
	);
}
