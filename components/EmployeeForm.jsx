import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='head_text'>{type} New Employee </span>
      </h1>
     

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Name{" "}
          </span>
          <input
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Designation{" "}
          </span>
          <input
            value={post.designation}
            onChange={(e) => setPost({ ...post, designation: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Personal Phone{" "}
          </span>
          <input
            value={post.mobile_no}
            onChange={(e) => setPost({ ...post, mobile_no: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Full Address With State And District{" "}
          </span>
          <input
            value={post.full_addr}
            onChange={(e) => setPost({ ...post, full_addr: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Residential Phone Number With Name{" "}
          </span>
          <input
            value={post.res_no}
            onChange={(e) => setPost({ ...post, res_no: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Police Station{" "}
          </span>
          <input
            value={post.police}
            onChange={(e) => setPost({ ...post, police: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Details Of ID Card{" "}
          </span>
          <input
            value={post.id_card}
            onChange={(e) => setPost({ ...post, id_card: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Details Of Aadhar{" "}
          </span>
          <input
            value={post.addr_card}
            onChange={(e) => setPost({ ...post, addr_card: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Name,Address And Phone Number Of Contractor{" "}
          </span>
          <input
            value={post.contactractor_addr}
            onChange={(e) => setPost({ ...post, contactractor_addr: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Address Of House Owner{" "}
          </span>
          <input
            value={post.addr_house_owner}
            onChange={(e) => setPost({ ...post, addr_house_owner: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Bank Account{" "}
          </span>
          <input
            value={post.bank_account}
            onChange={(e) => setPost({ ...post, bank_account: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

         
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Other Details{" "}
          </span>
          <input
            value={post.other_details}
            onChange={(e) => setPost({ ...post, other_details: e.target.value })}
            type='text'
            placeholder=''
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
