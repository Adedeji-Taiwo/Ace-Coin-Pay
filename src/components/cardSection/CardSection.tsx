import { FormHeader, Form } from ".";

const CardForm = () => {
  return (
    <div className="lg:col-span-4 col-span-1 w-full flex flex-col items-start justify-start lg:gap-12 gap-10">
      <FormHeader />
      <Form />
    </div>
  );
};

export default CardForm;
