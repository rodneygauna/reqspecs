import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UpdateLogModal = ({ isOpen, onClose, updates }) => {
  const modalRef = useRef();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const fetchAllUserDetails = async () => {
      const fetchUserDetails = async (userId) => {
        try {
          const response = await fetch(`/api/v1/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          return await response.json();
        } catch (error) {
          console.error("Error fetching user:", error);
          return null;
        }
      };
      const details = {};
      for (const update of updates) {
        if (!details[update.user_id]) {
          const userData = await fetchUserDetails(update.user_id);
          if (userData) {
            details[update.user_id] = userData;
          }
        }
      }
      setUserDetails(details);
    };

    if (isOpen) {
      fetchAllUserDetails();
    }
  }, [isOpen, updates]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
      style={{ zIndex: 1 }}
    >
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Update Log</h2>
        <ul>
          {updates.map((update) => (
            <li key={update._id} className="mb-2">
              <p>
                <strong>User:</strong>{" "}
                {userDetails[update.user_id]
                  ? `${userDetails[update.user_id].first_name} ${
                      userDetails[update.user_id].last_name
                    }`
                  : "Loading..."}
              </p>
              <p>
                <strong>Updated At:</strong>{" "}
                {new Date(update.updated_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

UpdateLogModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      user_id: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UpdateLogModal;
