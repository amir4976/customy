import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Select } from "@/components/modules/Input/Input";
import cities from "@/utils/citys"; // Import list of cities with provinces
import getLocalData from "@/utils/getLoaclData"; // Utility function to get local data
import Swal from "sweetalert2"; // SweetAlert2 for notifications
import { useRouter } from "next/navigation"; // Next.js router for navigation

// Define the form input types
type FormInputs = {
  phone: string;
  optionalPhone: string;
  province: string;
  city: string;
  postalCode: string;
  address: string;
};

function UserSecondSignForm({
  Regester,
}: {
  setUserData: React.Dispatch<React.SetStateAction<any[]>>; // Function to set user data
  Regester: () => void; // Registration function
}) {
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  // State variables
  const [cityList, setCityList] = React.useState<string[]>([]); // City list for dropdown
  const [loading, setLoading] = React.useState(false); // Loading state
  const [error, setError] = React.useState<string | null>(null); // Error message state
  const router = useRouter(); // Next.js router instance

  // Handles province selection and updates city dropdown options
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value; // Get selected province
    const findCity = cities.find((city) => city.province === selectedProvince); // Find cities for province
    setCityList(findCity?.cities || []); // Set city list or empty array
  };

  // Handles form submission
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true); // Set loading state
    setError(null); // Clear previous errors
    console.log(data); // Debugging log

    try {
      const localData = getLocalData("userData"); // Fetch local data
      const allData = { ...localData, ...data }; // Merge form data with local data

      // Send data to server
      const response = await fetch("/api/Signup/signupUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allData),
      });

      const result = await response.json(); // Parse server response
      if (response.ok) {
        // Success notification
        Swal.fire({
          icon: "success",
          title: "Success",
          text: result.message,
        }).then(() => {
          router.push("/"); // Redirect to home
        });
      } else {
        // Throw error for failed response
        throw new Error(result.message || "Submission failed");
      }
    } catch (err: any) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="w-full border rounded-xl p-3">
      <p className="text-2xl text-primRed">Contact Information</p>

      {/* Form starts */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto flex flex-wrap">
        {/* Phone number input */}
        <Input
          label="Phone"
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          register={register}
          validationRules={{ required: "Phone is required" }}
          errorMessage={errors.phone?.message}
        />

        {/* Optional phone input */}
        <Input
          label="Optional Phone"
          id="optionalPhone"
          type="text"
          placeholder="Enter your optional phone"
          register={register}
          validationRules={{}}
          errorMessage={errors.optionalPhone?.message}
        />

        {/* Province selection */}
        <Select
          label="Province"
          id="province"
          options={cities.map((city) => ({ value: city.province, label: city.province }))}
          register={register}
          validationRules={{ required: "Province is required" }}
          errorMessage={errors.province?.message}
          defOptions="Select Province"
          onChange={handleProvinceChange} // Update cities on change
        />

        {/* City selection */}
        <Select
          label="City"
          id="city"
          options={cityList.map((city) => ({ value: city, label: city }))}
          register={register}
          validationRules={{ required: "City is required" }}
          errorMessage={errors.city?.message}
          defOptions="Select City"
        />

        {/* Postal code input */}
        <Input
          label="Postal Code"
          id="postalCode"
          type="text"
          placeholder="Enter your postal code"
          register={register}
          validationRules={{ required: "Postal code is required" }}
          errorMessage={errors.postalCode?.message}
        />

        {/* Address text area */}
        <label htmlFor="address" className="text-lg font-semibold mb-2">Full Address</label>
        <textarea
          id="address"
          {...register("address", { required: "Address is required" })}
          rows={3}
          className="outline-none border-2 rounded-xl p-2 w-full"
        ></textarea>
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Error message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default UserSecondSignForm;
