import MapComponent from "./Map";

const LiveLocationMap = ({ data }: any) => {
  // const Location = [
  //   { lat: parseFloat(data?.driver_location?.lat), lng: parseFloat(data?.driver_location?.long), info1: data?.driver_location?.info1, info2: data?.driver_location?.info2 },
  //   { lat: parseFloat(data?.receive_location?.lat), lng: parseFloat(data?.receive_location?.long), info1: data?.receive_location?.info1, info2: data?.receive_location?.info2 },
  //   { lat: parseFloat(data?.delivery_location?.lat), lng: parseFloat(data?.delivery_location?.long), info1: data?.delivery_location?.info1, info2: data?.delivery_location?.info2 },
  // ];
  const Location = [
    { lat: parseFloat("24.7136"), lng: parseFloat("46.6753"), info1: "Zaki Mohsen", info2: "Driver" },
    { lat: parseFloat("24.7136"), lng: parseFloat("46.7753"), info1: "Ali Nasr", info2: "Company" },
  ];
  return (
    <MapComponent locations={Location}
      StylesMap={{
        height: '400px',
        width: '100%',
      }}
    />
  )
}

export default LiveLocationMap