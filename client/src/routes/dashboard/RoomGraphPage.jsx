import Graf from "../../components/room/Graf.jsx";
import EmberNotifyContext from '../../providerContext/DashboardContext';
import {useContext} from "react";
export default function RoomGraphPage() {
    const {
        fetchRoomFunction,
        fetchRoomTemperatureHistoryFunction,
        setOpenDeleteRoom,
        setOpenEditRoom,
        showNotification,
        setShowNotification
    } = useContext(EmberNotifyContext);
    return (
        <Graf/>
    )
}