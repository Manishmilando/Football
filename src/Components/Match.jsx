import React, { useState } from 'react';

const tableConfigs = {
  MatchScheduleBoys: {
    headers: ['Match', 'Team A', 'Vs', 'Team B', 'Date Of Match', 'Time of Match', 'Venue'],
    data: [
      ["1", "Odisha", "VS", "West Bengal", "06/05/2025", "7:00 AM", "Yamuna Bhagat Complex"],
      ["2", "Meghalaya", "VS", "Chandigarh", "06/05/2025", "7:00 AM", "IOCL Barauni"],
      ["3", "Bihar", "VS", "Mizoram", "06/05/2025", "4:00 PM", "Yamuna Bhagat Complex"],
      ["4", "Delhi", "VS", "Jharkhand", "06/05/2025", "4:00 PM", "IOCL Barauni"],
      ["5", "West Bengal", "VS", "Chandigarh", "08/05/2025", "4:00 PM", "Yamuna Bhagat Complex"],
      ["6", "Odisha", "VS", "Meghalaya", "08/05/2025", "4:00 PM", "IOCL Barauni"],
      ["7", "Mizoram", "VS", "Delhi", "08/05/2023", "7:00 AM", "Yamuna Bhagat Complex"],
      ["8", "Jharkhand", "VS", "Bihar", "08/05/2023", "7:00 AM", "IOCL Barauni"],
      ["9", "West Bengal", "vs", "Meghalaya", "10/05/2025", "7:00 AM", "Yamuna Bhagat Complex"],
      ["10", "Chandigarh", "vs", "Odisha", "10/05/2025", "7:00 AM", "IOCL Barauni"],
      ["11", "Bihar", "VS", "Delhi", "10/05/2025", "4:00 PM", "Yamuna Bhagat Complex"],
      ["12", "Mizoram", "VS", "Jharkhand", "10/05/2025", "4:00 PM", "IOCL Barauni"]
    ]
  },
  MatchScheduleGirls: {
    headers: ['Match', 'Team A', 'Vs', 'Team B', 'Date Of Match', 'Time of Match', 'Venue'],
    data: [
      ["1", "Jharkhand", "VS", "Rajasthan", "05/05/2025", "7:00 AM", "Yamuna Bhagat Complex"],
      ["2", "Tamil Nadu", "VS", "Bihar", "05/05/2025", "7:00 AM", "IOCL Barauni"],
      ["3", "Bihar", "VS", "Mizoram", "06/05/2025", "4:00 PM", "Yamuna Bhagat Complex"],
      ["4", "Delhi", "VS", "Jharkhand", "06/05/2025", "4:00 PM", "IOCL Barauni"],
      ["5", "Rajasthan", "VS", "Tamil Nadu", "07/05/2025", "4:00 PM", "Yamuna Bhagat Complex"],
      ["6", "Bihar", "VS", "Jharkhand", "07/05/2025", "4:00 PM", "IOCL Barauni"],
      ["7", "Mizoram", "VS", "Delhi", "08/05/2023", "7:00 AM", "Yamuna Bhagat Complex"],
      ["8", "Jharkhand", "VS", "Bihar", "08/05/2023", "7:00 AM", "IOCL Barauni"],
      ["9", "Jharkhand", "VS", "Tamil Nadu", "09/05/2025", "7:00 AM", "Yamuna Bhagat Complex"],
      ["10", "Rajasthan", "VS", "Bihar", "09/05/2025", "7:00 AM", "IOCL Barauni"],
      ["11", "Bihar", "VS", "Delhi", "10/05/2025", "4:00 PM", "Yamuna Bhagat Complex"],
      ["12", "Mizoram", "VS", "Jharkhand", "10/05/2025", "4:00 PM", "IOCL Barauni"]
    ]
  },
  PlaceDetails: {
    headers: [
      'Place Name',
      'Type(Control Room/ Tourist Spot/ Facility Spot/Drinking Water/ Stadium)',
      'Latitude',
      'Longitude',
      'Phone (if any)',
      'Contact Person'
    ],
    data: [
      ["Yuvraj Hotel, Zeromile, Barauni, Begusarai", "Hotel", 25.44716, 86.02613, "-", "-"],
      ["Sarojani Garden, Sushil Nagar, Begusarai", "Hotel", 25.43117, 86.09119, "-", "-"],
      ["Hotal Devi Darbar, Zeromile, Begusarai", "Hotel", 25.44337, 86.02709, "-", "-"],
      ["Tahiti Resort Pvt. Ltd., Singhaul, Begusarai", "Hotel", 25.42654, 86.0087, "-", "-"],
      ["Tathasthu Hotel & Banquet, Sudha Dairy, Barauni, Begusarai", "Hotel", 25.4671, 86.0026, "-", "-"],
      ["KDM Palace, Har-Har Mahadev Chowk, Begusarai", "Hotel", 25.42066, 86.11903, "-", "-"],
      ["Samrat Hotel, Zeromile, Begusarai", "Hotel", 25.44557, 86.02732, "-", "-"],
      ["IOCL Stadium Refinery, Begusarai", "Stadium", 25.41804, 86.10659, "-", "-"],
      ["Yamuna Bhagat Stadium, Teghra", "Stadium", 25.47121, 85.96212, "-", "-"],
      ["Kanwar Lake Bird Sanctuary", "Tourist Spot", 25.62416, 86.14468, "-", "-"],
      ["Jaymangala Garh Temple", "Tourist Spot", 25.59235, 86.1613, "-", "-"],
      ["Simariya Dham", "Tourist Spot", 25.37884, 86.00514, "-", "-"],
      ["Naulakha Mandir", "Tourist Spot", 25.40944, 86.14995, "-", "-"],
      ["Begusarai Museum", "Tourist Spot", 25.42561, 86.13863, "-", "-"],
      ["Aayurwedik College", "Tourist Spot", 25.42692, 86.1366, "-", "-"],
      ["Viplavi Library", "Tourist Spot", 25.37628, 86.18749, "-", "-"],
      ["Refinery Township Park", "Tourist Spot", 25.41896, 86.1152, "-", "-"],
      ["Namak Styagrah Asthal", "Tourist Spot", 25.66817, 86.1777, "-", "-"]
    ]
  },
  ListOfTeams: {
    headers: ['Team Name'],
    data: []
  },
  Squad: {
    headers: ['Team Name', 'Player Name'],
    data: [['NA', 'NA']]
  }
};


const Match = () => {
  const [activeTable, setActiveTable] = useState('PlaceDetails');
  const { headers, data } = tableConfigs[activeTable];

  return (
    <div className="p-1 lg:p-6 bg-transparent max-h-[94vh]">
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(tableConfigs).map((table) => (
          <button
            key={table}
            onClick={() => setActiveTable(table)}
            className={` lg:text-sm text-xs lg:px-4 py-2 rounded font-medium px-2 ${
              activeTable === table
                ? 'bg-zinc-700 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {table}
          </button>
        ))}
      </div>

      <div className="bg-black/10 w-full max-w-6xl rounded-lg shadow-lg overflow-auto p-6 mx-auto sm:max-h-[70vh] max-h-[450px]">
        <h2 className="text-xl font-semibold mb-4">{activeTable}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-50 text-gray-700">
              <tr>
                {headers.map((head, idx) => (
                  <th key={idx} className="px-6 py-3 border-b text-left text-sm font-semibold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {headers.map((_, cellIdx) => (
                    <td key={cellIdx} className="px-6 py-3 border-b text-sm text-gray-700">
                      {row[cellIdx]}
                    </td>
                  ))}
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={headers.length} className="px-6 py-4 text-center text-gray-500">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Match;
