import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/weather");
         const sorted = res.data.sort(
        (a, b) => new Date(b.searchedAt) - new Date(a.searchedAt)
      );
        setHistory(sorted);
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
  }, []);
 const deleteSearch = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/weather/${id}`);
      setHistory((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting search:", err);
      alert("Failed to delete");
    }
  };
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Recent Searches</h1>

      <div className="max-w-xl mx-auto">
        {history.length === 0 ? (
          <p className="text-center text-gray-500">No search history found.</p>
        ) : (
          <ul className="space-y-4">
            {history.map((item, index) => (
              <li key={index} className="bg-blue-100 p-4 rounded shadow">
                <div className="font-semibold text-lg">{item.city}</div>
                <div className="text-sm text-gray-600">
                 {item.searchedAt ? new Date(item.searchedAt).toLocaleString() : "Time not available"}
                </div>
                  <button
                  onClick={() => deleteSearch(item._id)}
                  className="ml-4 text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default History;
