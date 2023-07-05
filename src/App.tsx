export default function App() {
  return (
    <div className="w-full p-4 font-['Poppins'] md:p-10">
      <img
        className="relative min-h-0 min-w-0"
        src="https://via.placeholder.com/147x70?text=Logo"
      />
      <div className="mt-8">
        <div className="relative text-center font-['Poppins'] text-4xl font-semibold !leading-normal text-[#080814] md:text-5xl">
          Sign in
        </div>
        <div className="relative mb-8 text-center font-['Poppins'] text-lg leading-[30px] text-[#52525b] [text-wrap:balance]">
          Please enter your contact details to connect.
        </div>
        <div className="relative mx-auto flex max-w-[523px]  flex-col items-stretch justify-start gap-2 rounded-[20px] bg-white px-6 pb-8 pt-6 shadow-xl md:px-8 md:pb-20 md:pt-8">
          <div className="relative mb-1 self-start font-medium leading-[24px] text-[#080814]">
            Email address
          </div>
          <input
            className="relative mb-4 mr-px flex h-16 w-full flex-row items-center justify-between rounded-lg border border-solid border-[#e4e4e7] bg-white px-4 text-[#080814] md:mb-8"
            placeholder="Enter email address"
            type="text"
          />
          <div className="relative mb-1 w-20 self-start font-['Poppins'] font-medium leading-[24px] text-[#080814]">
            Password
          </div>
          <div className="relative">
            <input
              className="relative mb-4 mr-px flex h-16 w-full flex-row items-center justify-between rounded-lg border border-solid border-[#e4e4e7] bg-white px-4 text-[#080814] md:mb-8"
              placeholder="Enter password"
              type="text"
            />
            <button className="absolute right-4 top-5 ">
              <img
                className="min-h-0 w-6 min-w-0 "
                src="https://file.rendit.io/n/L9FiAGXjZfpwkb34wuyg.svg"
              />
            </button>
          </div>
          <div className="relative mb-3 gap-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-row py-2">
                <div className="relative mr-2 h-5 w-5 rounded border border-solid border-[#94a3b8]" />
                <div className="relative justify-start whitespace-nowrap font-['Poppins'] text-sm leading-[22px] text-[#080814]">
                  Accept{' '}
                  <a
                    className="contents font-['Poppins'] text-sm font-medium leading-[22px] text-[#2d5698]"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className="py-2">
                <a
                  className="relative whitespace-nowrap font-['Poppins'] text-sm leading-[22px] text-[#080814]"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          <button className="relative mb-4 mr-px flex h-16  flex-col items-center justify-center rounded-lg bg-[#2d5698] text-white">
            Sign In
          </button>
          <div className="relative ml-3 mr-4 justify-start text-center font-['Poppins'] text-sm leading-[22px] text-[#71717a]">
            {"Don't have an account? "}
            <a
              className="contents font-['Poppins'] text-sm font-semibold leading-[22px] text-[#2d5698]"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
