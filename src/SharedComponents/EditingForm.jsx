import { useState } from "react";

const EditingForm = ({displayValue ,openValue}) => {
    
    // const [openForm, setOpenForm] = useState(ope);

    return (
      <div className={`${openValue === "true" ? "h-[50vh] w-[50vw] bg-primary " : "h "}`}>{displayValue}</div>
    );
};
export default EditingForm;