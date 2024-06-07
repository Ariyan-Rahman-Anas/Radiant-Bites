import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../useContext/allContext";
import Spinner from "../../../SharedComponents/Spinner";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import { deleteData, getData, postData } from "../../../Hooks/apiUtils";
import { toast } from "react-hot-toast";

const DashboardAdmins = () => {
  const { darkMode } = useContext(ThemeContext);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getting admins
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("admins");
        setAdmins(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //handling user role
  const updateUserRole = async (userId) => {
    try {
      const makingTheAdminAsUser = admins.find((user) => user._id === userId);
      const makingUser = {
        name: makingTheAdminAsUser?.name,
        email: makingTheAdminAsUser?.email,
        adminImage: makingTheAdminAsUser?.userImage,
      };
      await postData(`users`, makingUser);
      await deleteData("admins", userId);
      const remainingAdminsAfterMakeAnUser = admins.filter(
        (user) => user._id !== userId
      );
      setAdmins(remainingAdminsAfterMakeAnUser);
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  // Handle delete admin
  const handleDeleteAdmin = async (userId) => {
    try {
      await deleteData("admins", userId);
      const remainingAdmin = admins.filter((admin) => admin._id !== userId);
      setAdmins(remainingAdmin);
      toast.success("Deleted the admin");
    } catch (error) {
      setError(error.message);
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
              heading={"Admins of Radiant Bites"}
              subHeading={"Manage all Admins"}
            ></SectionTitle>

            <div
              className={`${
                darkMode ? "bg-gray-700" : ""
              } m-6 p-4 shadow-md rounded-md  `}
            >
              <div className="flex items-center justify-between font-semibold text-xl">
                <h1>Total Admins: {admins?.length}</h1>
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
                    {admins?.map((admin, index) => (
                      <tr
                        key={admin._id}
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
                          {admin?.name}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          {admin?.email}
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          <button
                            className="px-2 py-1 rounded-md mr-2 bg-primary text-white  hover:bg-green-600 duration-500"
                            onClick={() => updateUserRole(admin._id)}
                          >
                            Make User
                          </button>
                        </td>
                        <td
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          <button
                            className=" px-2 py-1 rounded-md m-2 bg-yellow-500 text-white hover:bg-yellow-600 duration-500"
                            //   onClick={() => handleEditUser(user?._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-2 py-1 rounded-md text-white bg-danger hover:bg-red-600 duration-500"
                            onClick={() => handleDeleteAdmin(admin?._id)}
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
export default DashboardAdmins;