import React, { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Tooltip,
    LayersControl,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});

const redIcon = new L.Icon({
    iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=home|ff0000",
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [1, -34],
});

const places = [
    { name: "Yuvraj Hotel, Zeromile", type: "Hotel", lat: 25.44716, lng: 86.02613 },
    { name: "Sarojani Garden", type: "Hotel", lat: 25.43117, lng: 86.09119 },
    { name: "Hotal Devi Darbar", type: "Hotel", lat: 25.44337, lng: 86.02709 },
    { name: "Tahiti Resort Pvt. Ltd.", type: "Hotel", lat: 25.42654, lng: 86.0087 },
    { name: "Tathasthu Hotel & Banquet", type: "Hotel", lat: 25.4671, lng: 86.0026 },
    { name: "KDM Palace", type: "Hotel", lat: 25.42066, lng: 86.11903 },
    { name: "Samrat Hotel", type: "Hotel", lat: 25.44557, lng: 86.02732 },
    { name: "IOCL Stadium Refinery", type: "Stadium", lat: 25.41804, lng: 86.10659 },
    { name: "Yamuna Bhagat Stadium", type: "Stadium", lat: 25.47121, lng: 85.96212 },
    { name: "Kanwar Lake Bird Sanctuary", type: "Tourist Spot", lat: 25.62416, lng: 86.14468 },
    { name: "Jaymangala Garh Temple", type: "Tourist Spot", lat: 25.59235, lng: 86.1613 },
    { name: "Simariya Dham", type: "Tourist Spot", lat: 25.37884, lng: 86.00514 },
    { name: "Naulakha Mandir", type: "Tourist Spot", lat: 25.40944, lng: 86.14995 },
    { name: "Begusarai Museum", type: "Tourist Spot", lat: 25.42561, lng: 86.13863 },
    { name: "Aayurwedik College", type: "Tourist Spot", lat: 25.42692, lng: 86.1366 },
    { name: "Viplavi Library", type: "Tourist Spot", lat: 25.37628, lng: 86.18749 },
    { name: "Refinery Township Park", type: "Tourist Spot", lat: 25.41896, lng: 86.1152 },
    { name: "Namak Styagrah Asthal", type: "Tourist Spot", lat: 25.66817, lng: 86.1777 },
];

const categories = ["All", "Hotel", "Stadium", "Tourist Spot"];

const FlyToLocation = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        if (lat && lng) {
            map.flyTo([lat, lng], 14, { duration: 1.5 });
        }
    }, [lat, lng]);
    return null;
};

const Map = () => {
    const [selectedType, setSelectedType] = useState("All");
    const [focusedPlace, setFocusedPlace] = useState(null);
    const [search, setSearch] = useState("");
    const [userLocation, setUserLocation] = useState(null);

    const filtered = places.filter(
        (p) =>
            (selectedType === "All" || p.type === selectedType) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }, []);

    return (
        <div className="max-h-[38rem] bg-[#1f1f2e] text-white py-6 px-3 sm:px-4 md:px-6 flex flex-col lg:flex-row gap-6 mt-0 overflow-x-hidden rounded-2xl ">
        
            <div className="lg:w-1/4 w-full max-h-[80vh] overflow-y-auto bg-[#2a2a39] rounded-xl p-4 sm:p-5 border border-gray-700 shadow-md">
                <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-[#2a2a39] z-10 py-2">📌 Places</h2>

                <input
                    type="text"
                    placeholder="🔍 Search places..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full mb-5 p-2 rounded-lg bg-gray-800 border border-gray-600 text-white"
                />

                <div className="mb-6">
                    {categories.map((type) => (
                        <button
                            key={type}
                            onClick={() => {
                                setSelectedType(type);
                                setFocusedPlace(null);
                            }}
                            className={`block w-full mb-2 px-4 py-2 rounded-lg transition font-medium  ${selectedType === type
                                ? "bg-purple-600 text-white shadow-md"
                                : "bg-gray-700 hover:bg-purple-800"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {filtered.map((place, i) => (
                        <div
                            key={i}
                            onClick={() => setFocusedPlace(place)}
                            className={`p-3 cursor-pointer rounded-lg transition-all border-l-4 ${focusedPlace?.name === place.name
                                ? "bg-purple-500 border-purple-800"
                                : "bg-[#333344] border-transparent hover:border-purple-500"
                                }`}
                        >
                            <div className="font-semibold text-base">{place.name}</div>
                            <div className="text-sm text-gray-300 mt-1">📍 {place.type}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex-grow rounded-2xl border border-gray-600 shadow-lg">
                    <MapContainer
                        center={[25.43, 86.1]}
                        zoom={11}
                        scrollWheelZoom={true}
                        className="rounded-2xl w-full h-[60vh] sm:h-[70vh] lg:h-full"
                        style={{ minHeight: "400px", width: "100%" }}
                    >
                        <LayersControl position="topright">
                            <LayersControl.BaseLayer checked name="Street View">
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Satellite View">
                                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Topographic View">
                                <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
                            </LayersControl.BaseLayer>
                        </LayersControl>

                        {filtered.map((place, i) => (
                            <Marker key={i} position={[place.lat, place.lng]} icon={customIcon}>
                                <Popup>
                                    <strong>{place.name}</strong>
                                    <br />📍 {place.type}
                                </Popup>
                                <Tooltip permanent direction="top" offset={[0, -30]}>
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className={`bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md border ${focusedPlace?.name === place.name
                                            ? "text-purple-900 border-purple-600"
                                            : "text-purple-800"
                                            }`}
                                    >
                                        {place.name}
                                    </motion.div>
                                </Tooltip>
                            </Marker>
                        ))}

                        {focusedPlace && <FlyToLocation lat={focusedPlace.lat} lng={focusedPlace.lng} />}

                        {userLocation && (
                            <Marker position={[userLocation.lat, userLocation.lng]} icon={redIcon}>
                                <Popup>📍 You are here</Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Map;