import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Select } from "@/components/modules/Input/Input";
import cities from "@/utils/citys"; // List of provinces and cities

// Define the type for form inputs
type FormInputs = {
  username: string;
  password: string;
};

function UserSecondSignForm({
  setUserData,
  Regester,
}: {
  setUserData: React.Dispatch<React.SetStateAction<any[]>>;
  Regester: () => void;
}) {
  // Use react-hook-form for form management
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setUserData((prevData) => [...prevData, data]); // Append new data to existing user data
    Regester(); // Call registration function
  };

  // State to manage cities based on selected province
  const [citys, setCitys] = React.useState<string[]>([]);

  // Handle province selection and update city list
  const onChangeProvidence = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value; // Get selected province
    const findCity = cities.find(
      (city) => city.province === selectedProvince
    ); // Find matching province object
    setCitys(findCity?.cities || []); // Update cities or set to an empty array
  };

  return (
    <div className="w-full border rounded-xl p-3">
      {/* Form Title */}
      <p className="text-2xl text-primRed">Registration Form</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-wrap"
      >
        {/* Mobile Phone Input */}
        <Input
          label="Mobile Phone"
          id="Phone"
          type="number"
          placeholder="Enter your phone number"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.username?.message}
        />

        {/* Optional Phone Input */}
        <Input
          label="Optional Phone"
          id="zipCode"
          type="number"
          placeholder="Enter your optional phone number"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.username?.message}
        />

        {/* Province Dropdown */}
        <Select
          label="Province"
          id="state"
          options={cities.map((city) => ({
            value: city.province,
            label: city.province,
          }))} // Generate options dynamically
          register={register}
          validationRules={{
            required: "Please select a province",
          }}
          errorMessage={errors.state?.message}
          defOptions={"Select Province"}
          onChange={(e) => onChangeProvidence(e)}
        />

        {/* City Dropdown */}
        <Select
          label="City"
          id="city"
          options={citys.map((city) => ({
            value: city,
            label: city,
          }))} // Generate options dynamically based on province
          register={register}
          validationRules={{
            required: "Please select a city",
          }}
          errorMessage={errors.city?.message}
          defOptions={"Select City"}
        />

        {/* Postal Code Input */}
        <Input
          label="Postal Code"
          id="Postcod"
          type="number"
          placeholder="Enter your postal code"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.username?.message}
        />

        {/* Full Address Textarea */}
        <div className="w-full flex flex-col">
          <label className="text-lg font-semibold mb-2">Full Postal Address</label>
          <textarea
            name="address"
            id="address"
            rows={3}
            className="outline-none border-2 rounded-xl p-2"
            placeholder="Enter your full postal address"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserSecondSignForm;
