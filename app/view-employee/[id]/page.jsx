'use client'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Profile from "@components/Profile";
import { QRCode } from "react-qr-code"

const UserProfile = ({ params }) => {

  const [qrCodeValue, setQrCodeValue] = useState("");

  const [userPosts, setUserPosts] = useState([]);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const fetchPosts = async () => {

      const response = await fetch(`/api/employee/${params?.id}/emp-profile`);
      const data = await response.json();
      console.log(data);
      setUserPosts(data);
      setQrCodeValue(data._id);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  const handleProfileClick = () => {
    router.push(`${pathName}/status`);
  };

  return (
    <div>
      <img
        src={userPosts.employee_photo}
        alt='user_image'
        width={120}
        height={120}
        className='rounded-full object-contain '
      />
      <button
        type='button'
        onClick={handleProfileClick}
        className='black_btn m-6 '
      >
        Status
      </button>
      <div className="px-4 sm:px-0">
        <h3 className="head_text font-semibold leading-7 text-gray-900">{userPosts.employee_name}</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.employee_name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Designation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.designation}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Personal phone</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.mobile_num}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.full_addr}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Residential phone</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.res_no}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Police Station</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.police}</dd>
          </div>
          <label>
            <span className='font-satoshi  font-semibold text-base text-gray-900'>
              ID Card
            </span>
            <img
              src={userPosts.id_card}
              alt='user_image'
              width={450}
              height={450}
              className='m-6'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold  text-base text-gray-900'>
              Aadhar Card
            </span>
            <img
              src={userPosts.aadhar}
              alt='user_image'
              width={450}
              height={450}
              className='m-6'
            />
          </label>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Name,Address And Phone Number Of Contractor</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.contactractor_addr}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Address Of House Owner</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.addr_house_owner}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Bank Details</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.bank_account}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Other Details</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userPosts.other_details}</dd>
          </div>
        </dl>
      </div>
      <div >
        <div className='card font-satoshi font-semibold text-gray-900'></div>
        {qrCodeValue != "" && (
          <QRCode value={qrCodeValue} className='containerColumn' />

        )}

      </div>
    </div>
  );
};
export default UserProfile;