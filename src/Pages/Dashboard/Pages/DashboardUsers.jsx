import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../useContext/allContext";
import { deleteData, getData, postData } from "../../../Hooks/apiUtils";
import Spinner from "../../../SharedComponents/Spinner";
import SectionTitle from './../../../SharedComponents/SectionTitle';
import { toast } from "react-hot-toast";

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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Update user role
  const updateUserRole = async (userId) => {
    try {
      const theUserMakingAdmin = users.find(user => user._id === userId)
      console.log(theUserMakingAdmin)

      const makingAdmin = {
        name: theUserMakingAdmin?.name,
        email: theUserMakingAdmin?.email,
      };

      await postData(`admins`, makingAdmin);
      await deleteData("users", userId);
      const remainingUserAfterMakeAnAdmin = users.filter(user => user._id !== userId)
      setUsers(remainingUserAfterMakeAnAdmin)
      // setUsers(
      //   users.map((user) =>
      //     user.id === userId ? { ...user, role: newRole } : user
      //   )
      // );
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
  const handleDeleteUser = async(userId) => {
    try {
      await deleteData("users", userId);
      const remainingUser = users.filter(user => user._id !== userId)
      setUsers(remainingUser)
      toast.success("Deleted the user");
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } min-h-screen flex-1 w-full `}
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
              <div className="flex items-center justify-between font-semibold text-xl">
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
                    {users?.map((user, index) => (
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
                          {user?.name}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          {user?.email}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          <button
                            className="px-2 py-1 rounded-md mr-2 bg-primary text-white  hover:bg-green-600 duration-500"
                            onClick={() => updateUserRole(user._id)}
                          >
                            Make Admin
                          </button>
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          <button
                            className=" px-2 py-1 rounded-md m-2 bg-yellow-500 text-white hover:bg-yellow-600 duration-500"
                            onClick={() => handleEditUser(user?._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-2 py-1 rounded-md text-white bg-danger hover:bg-red-600 duration-500"
                            onClick={() => handleDeleteUser(user?._id)}
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