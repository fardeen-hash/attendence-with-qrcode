"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import EmployeeForm from "@components/EmployeeForm";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ name: "", staff_code: "",designation: "",
  mobile_no: "", res_no: "",mobile_no: "",full_addr: "",police: "",addr_card: "",
  contactractor_addr:"",addr_house_owner:"",bank_account:"",other_details:"",
});

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/employee/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          employee_name: post.name,
          mobile_num: post.mobile_no,
          aadhar: post.addr_card,
          id_card:post.id_card,
          designation: post.designation,
          res_no: post.res_no,
          full_addr: post.full_addr,
          police: post.police,
          contactractor_addr: post.contactractor_addr,
          addr_house_owner: post.addr_house_owner,
          bank_account: post.bank_account,
          other_details: post.other_details,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EmployeeForm
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;