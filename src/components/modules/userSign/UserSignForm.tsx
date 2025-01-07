import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Select } from "@/components/modules/Input/Input";
import { useRouter } from "next/router";

// Define the type for form inputs
type FormInputs = {
  username: string;
  password: string;
  email: string;
  education: string;
  job: string;
  zipCode: string;
};

function UserSignForm({
  setUserData,
  Regester,
}: {
  setUserData: React.Dispatch<React.SetStateAction<any[]>>;
  Regester: () => void;
}) {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm<FormInputs>();



  
  // Handle form submission
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
      localStorage.setItem("userData", JSON.stringify(data));
      console.log(data);
    Regester(); // Move to the next step
  };


  
  return (
    <div className="w-full border rounded-xl p-3">
      <p className="text-2xl text-primRed">فرم ثبت اطلاعات</p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-wrap"
      >
        {/* Username input */}
        <Input
          label="نام و نام خانوادگی"
          id="username"
          type="text"
          placeholder="Enter your username or email"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.username?.message}
        />

        {/* National ID input */}
        <Input
          label="کد ملی"
          id="zipCode"
          type="number"
          placeholder="Enter your national ID"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.zipCode?.message}
        />

        {/* Education dropdown */}
        <Select
          label="تحصیلات"
          id="education"
          options={[
            { value: "diplom", label: "دیپلم" },
            { value: "bachelor", label: "کارشناسی" },
            { value: "doctor", label: "دکتر" },
          ]}
          register={register}
          validationRules={{
            required: "Please select an education level",
          }}
          errorMessage={errors.education?.message}
          defOptions={"مدرک"}
        />

        {/* Job dropdown */}
        <Select
          label="شغل"
          id="job"
          options={[
            { value: "employee", label: "کارمند" },
            { value: "freelancer", label: "آزاد" },
            { value: "student", label: "دانشجو" },
          ]}
          register={register}
          validationRules={{
            required: "Please select a job",
          }}
          errorMessage={errors.job?.message}
          defOptions={"انتخاب کنید"}
        />

        {/* Email input */}
        <Input
          label="ادرس ایمیل"
          id="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.email?.message}
        />

        {/* Password input */}
        <Input
          label="کلمه عبور"
          id="password"
          type="password"
          placeholder="Enter your password"
          register={register}
          validationRules={{
            required: "This field is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
          errorMessage={errors.password?.message}
        />

        {/* Submit button */}
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

export default UserSignForm;
