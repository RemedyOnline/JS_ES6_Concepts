import FormInstance1 from "./FormInstance1";
import FormInstance2 from "./FormInstance2";
import FormInstance3 from "./FormInstance3";

const FormComponent = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl italic underline font-bold uppercase text-center py-4">
        Learning How to Handle Forms Appropriately...
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <FormInstance1 />
        <FormInstance2 />
        <FormInstance3 />
      </div>
    </div>
  );
};

export default FormComponent;
