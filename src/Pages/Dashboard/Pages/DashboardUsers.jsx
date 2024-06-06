import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../useContext/allContext";
import { getData, postData } from "../../../Hooks/apiUtils";
import Spinner from "../../../SharedComponents/Spinner";
import SectionTitle from './../../../SharedComponents/SectionTitle';

const DashboardUsers = () => {
  const { darkMode } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //getting users
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("users");
        setUsers(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Update user role
  const updateUserRole = async (userId, newRole) => {
    try {
      await postData(`users/${userId}/role`, { role: newRole });
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  // Handle edit user
  const handleEditUser = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Add your edit user logic here
  };

  // Handle delete user
  const handleDeleteUser = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    // Add your delete user logic here
  };

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } min-h-screen flex-1  `}
    >
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="px-2 py-6 ">
            <SectionTitle
              heading={"Users of Radiant Bites"}
              subHeading={"Manage all user"}
            ></SectionTitle>

            <div
              className={`${
                darkMode ? "bg-gray-700" : ""
              } m-6 p-4 shadow-md rounded-md  `}
            >
              <div className="flex items-center justify-between">
                <h1>Total Users: {users?.length}</h1>
                <h2>Radiant Bites</h2>
              </div>

              {/*user table start here */}
              <div className="overflow-x-auto mt-6 text-sm rounded-md">
                <table
                  className={`${
                    darkMode ? "border-gray-400" : "border-gray-200"
                  } border min-w-full`}
                >
                  <thead>
                    <tr>
                      <th
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } py-4 px-4 border-b`}
                      >
                        #
                      </th>
                      <th
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        }  px-4 border-b`}
                      >
                        Name
                      </th>
                      <th
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } px-4 border-b`}
                      >
                        Email
                      </th>
                      <th
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } px-4 border-b`}
                      >
                        Role
                      </th>
                      <th
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } py-2 px-4 border-b`}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr
                        key={user._id}
                        className={`${
                          index % 2 === 0
                            ? `${darkMode ? "bg-gray-500" : ""}`
                            : `${darkMode ? "bg-gray-600" : "bg-white"} `
                        }`}
                      >
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } py-5 px-4 border-b`}
                        >
                          {index + 1}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          {user.name}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          {user.email}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          {user.role !== "admin" ? (
                            <button
                              className="bg-primary text-white px-2 py-1 rounded-md mr-2"
                              onClick={() => updateUserRole(user.id, "admin")}
                            >
                              Make Admin
                            </button>
                          ) : (
                            <button
                              className="bg-primary text-white px-2 py-1 rounded-md"
                              onClick={() => updateUserRole(user.id, "user")}
                            >
                              Make User
                            </button>
                          )}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          <button
                            className="bg-yellow-500 text-white px-2 py-1 rounded-md m-2"
                            onClick={() => handleEditUser(user.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded-md"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* user's table ends here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DashboardUsers;