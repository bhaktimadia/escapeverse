const RoomDetailPage = async ({ params }: any) => {
    const roomId = params.roomId;
    console.log("room params", params);
    console.log("roomId",roomId);
    return <div>Room detail Page</div>;
};

export default RoomDetailPage;