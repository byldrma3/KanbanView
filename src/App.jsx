import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import ChartIcon from "./components/icons/chart";
import BoxIcon from "./components/icons/box";
import CheckIcon from "./components/icons/check";
import { updateTask } from "./redux/features/task";

const onDragEnd = (result, columns, setColumns) => {
	if (!result.destination) return;
	const { source, destination } = result;
	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems,
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems,
			},
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems,
			},
		});
	}
};

const onDragStart = (result) => {
	const draggedItem = document.querySelector(`[data-rbd-draggable-id='${result.draggableId}']`);
	draggedItem.style.opacity = "0.5";
};

function App() {
	const dispatch = useDispatch();
	const task = useSelector((state) => state.task);
	const [columns, setColumns] = React.useState([]);

	React.useEffect(() => {
		setColumns(task);
		return () => {
			setColumns([]);
		};
	}, [task]);

	React.useEffect(() => {
		dispatch(updateTask(columns));
	}, [columns, dispatch]);

	return (
		<>
			<div className='grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				<DragDropContext onDragStart={(result) => onDragStart(result)} onDragEnd={(result) => onDragEnd(result, columns, setColumns, dispatch)}>
					{Object.entries(columns).map(([columnId, column], index) => {
						return (
							<div className='context-column' key={columnId}>
								<div className='flex items-center justify-between border-b border-line pb-4'>
									<div className='flex items-center gap-2'>
										{index === 0 && <span className='backlog-icon' />}
										{index === 1 && <span className='todo-icon' />}
										{index === 2 && <span className='inprogress-icon' />}
										{index === 3 && <span className='test-icon' />}
										<h2 className='text-base font-medium tracking-wide text-[#001747]'>{column.name}</h2>
									</div>
									<span className='grid h-6 w-6 place-items-center rounded-[4px] bg-brand/10 text-[13px] text-brand'>{column.items.length}</span>
								</div>
								<div className='w-full py-4'>
									<Droppable droppableId={columnId} key={columnId}>
										{(provided, snapshot) => {
											return (
												<div
													{...provided.droppableProps}
													ref={provided.innerRef}
													className='min-h-[500px] w-full rounded-[4px]'
													style={{
														outline: snapshot.isDraggingOver ? "2px solid rgba(45, 112, 253, .07)" : "none",
													}}>
													{column.items.map((item, i) => {
														return (
															<Draggable key={item.id} draggableId={item.id} index={i}>
																{(provided, snapshot) => {
																	return (
																		<div
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}
																			className='draggable-item'
																			style={{
																				outline: snapshot.isDragging ? "2px solid rgba(45, 112, 253, .07)" : "none",
																				userSelect: "none",
																				borderColor: "rgba(0, 23, 71, 0.05)",
																				...provided.draggableProps.style,
																			}}>
																			<h3 className='text-[13px] font-medium text-[#405175]'>{item.content}</h3>
																			<div className='flex items-center justify-between'>
																				<div className='flex items-center gap-1'>
																					{index === 0 && i == 0 ? (
																						<span className='grid h-4 w-4 place-items-center rounded-[4px] bg-[#FE6B38]'>
																							<BoxIcon size={10} color='white' />
																						</span>
																					) : (
																						<span className='grid h-4 w-4 place-items-center rounded-[4px] bg-[#FFD166]'>
																							<CheckIcon size={10} color='white' />
																						</span>
																					)}
																					<p className='text-[13px] font-light text-[#8C97AC]'>TSK-01</p>
																				</div>
																				<div className='flex items-center gap-3'>
																					{index === 3 ? <ChartIcon size={16} num='1' color='#00D8A7' /> : index === 2 ? <ChartIcon size={16} num='2' color='#FFD166' /> : <ChartIcon size={16} num='3' />}
																					<div className='grid h-6 w-6 place-items-center rounded-[4px] border border-[#001747]/10 text-[13px] text-[#001747]'>8</div>
																					<img src={`https://source.unsplash.com/random/24x24/?model/${item.id}`} alt='hero' className='h-6 w-6 rounded-full object-cover' />
																				</div>
																			</div>
																		</div>
																	);
																}}
															</Draggable>
														);
													})}
													{provided.placeholder}
												</div>
											);
										}}
									</Droppable>
								</div>
							</div>
						);
					})}
				</DragDropContext>
			</div>
		</>
	);
}

export default App;
